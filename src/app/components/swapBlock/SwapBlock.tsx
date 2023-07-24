"use client";
import React, { ReactElement, useEffect, useState } from "react";
import emitterABI from "../../../contracts/auth.json";
import tokenABI from "../../../contracts/SwapTaxToken.json";
import { Web3 } from "web3";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import { app, db } from "../../../../firebaseConfig";
import {
  getAuth,
  signInWithCustomToken,
  onAuthStateChanged,
} from "firebase/auth";
import { toLower } from "ramda";
import axios from "axios";
import { formatUnits, getAddress, parseEther, parseUnits } from "ethers";
import BigNumber from "bignumber.js";
import ButtonWrapper from "../custom_button";
import ethImage from "../../images/eth_logo.svg";
import maticImg from "../../images/matic.svg";
import exchangeImg from "../../images/exchange.svg";

import {
  DivSwapBlockSC,
  H3SwapBlockHeaderSC,
  DivSwapWrapperSC,
  DivSwapPaySC,
  DivSwapTextWrapperSC,
  PSwapBlockTextSC,
  PSwapBlockSumSC,
  DivSwapImgWrapperSC,
  DivForImgSC,
  PCaptionForImgSC,
  ButtonExchangeSC,
} from "./styles.SwapBlock";

interface Asset {
  sum: string;
  imagePath: string;
  caption: string;
}

const auth = getAuth();
const defaultGasPrice = parseUnits("200", "gwei");
const SwapBlock = () => {
  const [payment, setPayment] = useState<Asset>({
    sum: "0.001",
    imagePath: ethImage.src,
    caption: "Earthy",
  });
  const [receipt, setReceipt] = useState<Asset>({
    sum: "0.002",
    imagePath: maticImg.src,
    caption: "Matic",
  });
  const [account, setAccount] = useState<string>("");
  const [tokenContract, settokenContract] = useState<any>(null);
  const [emitterContract, setemitterContract] = useState<any>(null);
  const [web3, setweb3] = useState<any>(null);

  const [buy, setBuy] = useState<any>(0);

  const [sell, setSell] = useState<any>(0);
  const Swap = () => {
    const previousPayment = payment;
    const previousReceipt = receipt;

    setPayment(previousReceipt);
    setReceipt(previousPayment);
  };
  useEffect(() => {
    const _web3 = new Web3(window.ethereum);
    setweb3(_web3);

    settokenContract(
      new _web3.eth.Contract(
        tokenABI,
        "0x31Db46A0B13436514ccd2b1A921FAC0c8B96942f"
      )
    );

    setemitterContract(
      new _web3.eth.Contract(
        emitterABI,
        "0xfA2a9Be4097e4391e924957A1a0906a588B3FE55"
      )
    );
  }, []);

  const getGasPrice = async () => {
    try {
      const response = await axios.get(
        "https://gpoly.blockscan.com/gasapi.ashx?apikey=key&method=pendingpooltxgweidata"
      );
      console.log(response.data.result.rapidgaspricegwei.toString());
      return parseUnits(
        parseFloat(
          String(response.data.result.rapidgaspricegwei * 1.5)
        ).toString(),
        "gwei"
      );
    } catch (error) {
      console.error(`Failed to fetch gas prices: ${error}`);
      return defaultGasPrice;
    }
  };

  const tokenForETHQuote = async () => {
    let _sell: any = 0;
    try {
      const { data } = await axios.get(
        `https://polygon.api.0x.org/swap/v1/quote?buyToken=MATIC&sellToken=0x6B22Cd88CA6Fa3E8429CfFcDFE914936a7EBeF15&sellAmount=100000000000`,
        {
          headers: {
            "0x-api-key": "25ee6597-bb0c-4048-b3c8-4d0bf1b61c53",
          },
        }
      );
      setSell(new BigNumber(data.guaranteedPrice));
      _sell = new BigNumber(data.guaranteedPrice);
    } catch (error) {
      console.error(error);
    }
    return _sell;
  };

  const checkTokenBalance = async () => {
    try {
      const balance = await tokenContract.methods.balanceOf(account).call();
      return formatUnits(balance, 18);
    } catch (error) {
      console.error(`Failed to fetch token balance: ${error}`);
    }
  };

  const ETHForTokenQuote = async () => {
    let _buy: any = 0;
    try {
      const { data } = await axios.get(
        `https://polygon.api.0x.org/swap/v1/quote?buyToken=0x6B22Cd88CA6Fa3E8429CfFcDFE914936a7EBeF15&sellToken=MATIC&sellAmount=100000000000`,
        {
          headers: {
            "0x-api-key": "25ee6597-bb0c-4048-b3c8-4d0bf1b61c53",
          },
        }
      );
      _buy = new BigNumber(data.guaranteedPrice);
      setBuy(new BigNumber(data.guaranteedPrice));
    } catch (error) {
      console.error(error);
    }
    return _buy;
  };

  const getETHBalance = async () => {
    try {
      const balance = await web3.eth.getBalance(getAddress(account));
      return formatUnits(balance, 18);
    } catch (error) {
      console.error(`Failed to fetch balance: ${error}`);
    }
  };
  const ConnectWallet = async () => {
    try {
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(">>>>>>>>>", accounts);
      setAccount(accounts[0]);
    } catch (error: any) {
      if (error.code && error.code === 4001) {
        console.log("Connection Rejected");
      }
      if (error.code && error.code === -32002) {
        console.log("Existing transaction pending");
      }
    }
  };

  const getConnection = async () => {
    return new Promise(async (resolve) => {
      let connectionDoc = await addDoc(collection(db, "connections"), {
        address: toLower(account),
      });

      const unsub = onSnapshot(
        doc(db, "codes", connectionDoc.id),
        async (_doc: any) => {
          console.log(_doc.data());
          if (_doc.data()) {
            try {
              await emitterContract.methods.Login(_doc.data().code).send({
                from: account,
                gasPrice: await getGasPrice(),
              });
              console.log("Transaction pending. Please wait.");
            } catch (e) {
              console.log("Login failed");
            } finally {
              unsub();
              resolve(connectionDoc);
            }
          }
        }
      );
    });
  };

  const Login = async () => {
    const connectionDoc: any = await getConnection();

    const unsub = onSnapshot(
      doc(db, "codes", connectionDoc.id),
      async (_doc: any) => {
        if (_doc.data() && _doc.data().token) {
          try {
            await signInWithCustomToken(auth, _doc.data().token);
          } catch (e) {
            console.log(e);
          } finally {
            unsub();
          }
        }
      }
    );
  };

  const buyTokens = async (amount: any) =>
    new Promise(async (resolve) => {
      const ETHBalance = await getETHBalance();

      console.log(`ETH Balance: ${ETHBalance}`);

      const amountETH = parseEther(amount);

      const quote = await ETHForTokenQuote();
      console.log(`ETH -> Token price: ${quote.toString()}`);

      try {
        await tokenContract.methods.buyTokens(amountETH, 1).send({
          from: account,
          value: amountETH,
          gasPrice: await getGasPrice(),
        });

        const q = query(collection(db, "users", account, "swapETHForTokens"));
        const now = Date.now();

        const unsubscribe = onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              let data = change.doc.data();
              if (data.timestamp > now) {
                unsubscribe();
                resolve(data);
              }
            }
          });
        });
      } catch (e) {
        console.log(e);
      }
    });

  const sellTokens = async (amount: any) =>
    new Promise(async (resolve) => {
      const tokenBalance = await checkTokenBalance();
      console.log(`Token Balance: ${tokenBalance}`);
      const amountToken = parseEther(amount);

      const quote = await tokenForETHQuote();
      console.log(`Token -> ETH price: ${quote.toString()}`);

      try {
        await tokenContract.methods.approve(
          "0xf43Fa9c52192998e3cda213005Af50bB6cA7875B",
          amountToken
        );

        await tokenContract.methods.sellTokens(amountToken, 1).send({
          from: account,
          gasPrice: await getGasPrice(),
        });

        const q = query(collection(db, "users", account, "swapTokensForETH"));
        const now = Date.now();
        console.log(now);

        const unsubscribe = onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              let data = change.doc.data();
              if (data.timestamp > now) {
                unsubscribe();
                resolve(data);
              }
            }
          });
        });
      } catch (e) {
        console.log(e);
      }
    });

  // const onConnect = async () => {
  //   try {
  //     await ConnectWallet();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const onBuy = async () => {
    try {
      if (!account) {
        try {
          await ConnectWallet();
          console.log("подключен");
        } catch (error) {
          console.error(error);
          console.log("не подключен");
        }
      }
      console.log("покупка");
      await buyTokens(receipt.sum);
    } catch (error) {
      console.log("отмена покупки");
      console.error(error);
    }
  };
  const onSell = async () => {
    try {
      if (!account) {
        try {
          await ConnectWallet();
          console.log("подключен");
        } catch (error) {
          console.error(error);
          console.log("не подключен");
        }
      }
      console.log("продажа");
      await sellTokens(payment.sum);
    } catch (error) {
      console.log("отмена продажи");
      console.error(error);
    }
  };
  const onLogin = async () => {
    try {
      await Login();
    } catch (error) {
      console.error(error);
    }
  };

  const Logout = async () => {
    await auth.signOut();
    console.log("Logged out");
    window.location.reload();
  };

  return (
    <>
      <DivSwapBlockSC>
        <H3SwapBlockHeaderSC>Swap</H3SwapBlockHeaderSC>
        <DivSwapWrapperSC>
          <DivSwapPaySC>
            <DivSwapTextWrapperSC>
              <PSwapBlockTextSC>You pay</PSwapBlockTextSC>
              <PSwapBlockSumSC>{payment.sum}</PSwapBlockSumSC>
            </DivSwapTextWrapperSC>
            <DivSwapImgWrapperSC>
              <DivForImgSC path={payment.imagePath}></DivForImgSC>
              <PCaptionForImgSC>{payment.caption}</PCaptionForImgSC>
            </DivSwapImgWrapperSC>
          </DivSwapPaySC>
          <DivSwapPaySC>
            <DivSwapTextWrapperSC>
              <PSwapBlockTextSC>You receive</PSwapBlockTextSC>
              <PSwapBlockSumSC>{receipt.sum}</PSwapBlockSumSC>
            </DivSwapTextWrapperSC>
            <DivSwapImgWrapperSC>
              <DivForImgSC path={receipt.imagePath}></DivForImgSC>
              <PCaptionForImgSC>{receipt.caption}</PCaptionForImgSC>
            </DivSwapImgWrapperSC>
          </DivSwapPaySC>
          <ButtonExchangeSC
            onClick={Swap}
            path={exchangeImg.src}
          ></ButtonExchangeSC>{" "}
        </DivSwapWrapperSC>

        {payment.caption === "Earthy" ? (
          <div onClick={onSell}>
            <ButtonWrapper
              width={292}
              height={64}
              directionRadius={"center"}
              primary={true}
            >
              <span>Sell</span>
            </ButtonWrapper>
          </div>
        ) : (
          <div onClick={onBuy}>
            <ButtonWrapper
              width={292}
              height={64}
              directionRadius={"center"}
              primary={true}
            >
              <span>Buy</span>
            </ButtonWrapper>
          </div>
        )}

       
      </DivSwapBlockSC>
    </>
  );
};

export default SwapBlock;
