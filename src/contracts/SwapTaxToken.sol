// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";

contract TestToken is ERC20, Ownable {
  event BuyToken(address indexed user, uint256 amount, uint256 code);
  event SellToken(address indexed user, uint256 amountTokens, uint256 code);
  event WithdrawTo(address indexed to, uint256 amount);
  event TaxRateSet(uint256 newTaxRate);

  mapping(address => bool) private _universalSenders;
  mapping(address => bool) private _universalReceivers;

  address public treasury;
  address private _uniswapRouterAddress = 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff;
  IUniswapV2Router02 private _uniswapRouter;
  address private _uniswapFactoryAddress = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f; // This is the address for the Uniswap v2 factory on mainnet, update accordingly
  IUniswapV2Factory private _uniswapFactory;

  uint256 public taxRate = 5;

  bool private _globalOverrideSenderRestrictions = true;
  bool private _globalOverrideReceiverRestrictions = true;

  constructor() ERC20("Test Token", "TEST") {
    treasury = msg.sender;
    _uniswapFactory = IUniswapV2Factory(_uniswapFactoryAddress);

    setUniswapRouter(_uniswapRouterAddress);

    setUniversalSender(msg.sender, true);
    setUniversalReceiver(msg.sender, true);

    setUniversalSender(_uniswapRouterAddress, true);
    setUniversalReceiver(_uniswapRouterAddress, true);

    _mint(msg.sender, 777777 * 10 ** decimals());
  }


  function _transfer(address sender, address recipient, uint256 amount) internal virtual override {
    if (!_globalOverrideSenderRestrictions && !_universalSenders[sender] && !_universalReceivers[recipient]) {
      revert("RestrictedToken! See website for more information.");
    }

    super._transfer(sender, recipient, amount);
  }

  function setTaxRate(uint256 newTaxRate) public onlyOwner {
    require(newTaxRate >= 0 && newTaxRate <= 100, "Invalid tax rate. Must be between 0 and 100.");
    taxRate = newTaxRate;
  }

  function setUniversalSender(address _address, bool status) public onlyOwner {
    _universalSenders[_address] = status;
  }

  function setUniversalReceiver(address _address, bool status) public onlyOwner {
    _universalReceivers[_address] = status;
  }

  function setUniswapRouter(address uniswapRouterAddress) public onlyOwner {
    _uniswapRouterAddress = uniswapRouterAddress;
    _uniswapRouter = IUniswapV2Router02(_uniswapRouterAddress);
  }

  function setGlobalOverrideSenderRestrictions(bool status) public onlyOwner {
    _globalOverrideSenderRestrictions = status;
  }

  function setGlobalOverrideReceiverRestrictions(bool status) public onlyOwner {
    _globalOverrideReceiverRestrictions = status;
  }

  function buyTokens(uint256 amount, uint256 code) public payable {
    require(amount <= msg.value, "Insufficient amount provided");
    uint256 taxAmount = amount * taxRate / 100;
    uint256 netAmount = amount - taxAmount;

    (bool sent, ) = treasury.call{value: taxAmount}("");
    require(sent, "Failed to send tax");

    address[] memory path = new address[](2);
    path[0] = _uniswapRouter.WETH();
    path[1] = address(this);

    _uniswapRouter.swapExactETHForTokens{value: netAmount}(0, path, msg.sender, block.timestamp + 15);
    emit BuyToken(msg.sender, amount, code);
  }

  function sellTokens(uint256 tokenAmount, uint256 code) public {
    require(balanceOf(msg.sender) >= tokenAmount, "Not enough tokens to sell");

    address[] memory path = new address[](2);
    path[0] = address(this);
    path[1] = _uniswapRouter.WETH();

    // Approve the Uniswap router to spend `tokenAmount` tokens.
    approve(_uniswapRouterAddress, tokenAmount);

    // Perform the swap and get the amount of ETH received.
    uint[] memory amounts = _uniswapRouter.swapExactTokensForETH(
      tokenAmount,
      0,
      path,
      msg.sender,
      block.timestamp + 15
    );

    uint256 ethReceived = amounts[1];

    // Calculate the tax and send it to the treasury.
    uint256 taxAmount = ethReceived * taxRate / 100;
    uint256 netAmount = ethReceived - taxAmount;

    (bool sent, ) = treasury.call{value: taxAmount}("");
    require(sent, "Failed to send tax");

    // Send the remaining Ether to the user.
    payable(msg.sender).transfer(netAmount);

    emit SellToken(msg.sender, tokenAmount, code);
  }

  function createUniswapPairAndAddLiquidity(uint256 tokenAmount, uint256 ethAmount) public onlyOwner {
    address pair = _uniswapFactory.createPair(address(this), _uniswapRouter.WETH());
    _approve(address(this), address(_uniswapRouter), tokenAmount);

    _uniswapRouter.addLiquidityETH{value: ethAmount}(
      address(this),
      tokenAmount,
      0,
      0,
      owner(),
      block.timestamp + 15 // deadline
    );
  }

  function withdrawTo(address payable _to, uint256 _amount) public onlyOwner {
    require(_amount <= address(this).balance, "Not enough balance in contract");
    _to.transfer(_amount);
    emit WithdrawTo(_to, _amount);
  }

  receive() external payable { }
}
