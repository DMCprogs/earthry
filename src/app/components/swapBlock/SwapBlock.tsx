'use client'
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

import { ChangeEvent, useEffect, useState } from "react";
import Web3 from "web3";
import axios from "axios";
import BigNumber from "bignumber.js";
import { toLower } from "ramda";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
    getAuth,
    onAuthStateChanged,
    signInWithCustomToken,
} from "firebase/auth";
import { addDoc, collection, doc, onSnapshot, query } from "firebase/firestore";
import { formatUnits, getAddress, parseEther, parseUnits } from "ethers";
import emitterABI from "../../../contracts/auth.json";
import tokenABI from "../../../contracts/SwapTaxToken.json";

// Инициализация firebase
const firebaseConfig = {
    apiKey: "AIzaSyAjRXa8x097C0uFrHM2S4FH1nCJymEyDCE",
    authDomain: "earthy-392113.firebaseapp.com",
    projectId: "earthy-392113",
    storageBucket: "earthy-392113.appspot.com",
    messagingSenderId: "191723511562",
    appId: "1:191723511562:web:53da1381abfeea27ffa4f3",
    measurementId: "G-WSVP70JL6Y",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Инициализация web3
declare global {
    interface Window {
        ethereum: any;
    }
}
const web3 = new Web3(window.ethereum);
// const web3 = new Web3(
//     window.ethereum.request({ method: "eth_requestAccounts" })
// );

// Инициализация контрактов
const tokenContract = new web3.eth.Contract(
    tokenABI,
    "0x31Db46A0B13436514ccd2b1A921FAC0c8B96942f"
);
const emitterContract = new web3.eth.Contract(
    emitterABI,
    "0xfA2a9Be4097e4391e924957A1a0906a588B3FE55"
);

const defaultGasPrice = parseUnits("200", "gwei");

const defaultValue: Number = 100;
const tokenValueInDollars: Number = 595.18;
const tokenValueInEth: Number = 0.32;

const SwapBlock = () => {
    const [value, setValue] = useState<string>("");
    const [account, setAccount] = useState<string>("");
    const [quotes, setQuotes] = useState<{ buy: BigNumber; sell: BigNumber }>({
        buy: new BigNumber(0),
        sell: new BigNumber(0),
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/[^0-9.]/g, "");

        setValue(numericValue);
    };

    // Ваши функции теперь являются функциями, определенными внутри компонента
    const getGasPrice = async () => {
        try {
            const response = await axios.get(
                "https://gpoly.blockscan.com/gasapi.ashx?apikey=key&method=pendingpooltxgweidata"
            );
            console.log(response.data.result.rapidgaspricegwei.toString());
            return parseUnits(
                parseFloat(
                    (response.data.result.rapidgaspricegwei * 1.5).toString()
                ).toString(),
                "gwei"
            );
        } catch (error) {
            console.error(`Failed to fetch gas prices: ${error}`);
            return defaultGasPrice;
        }
    };
    const checkTokenBalance = async () => {
        try {
            const balance = await tokenContract.methods
                .balanceOf(account)
                .call();
            return formatUnits(balance, 18);
        } catch (error) {
            console.error(`Failed to fetch token balance: ${error}`);
        }
    };
    const getETHBalance = async () => {
        try {
            const balance = await web3.eth.getBalance(getAddress(account));
            return formatUnits(balance, 18);
        } catch (error) {
            console.error(`Failed to fetch balance: ${error}`);
        }
    };
    const tokenForETHQuote = async () => {
        try {
            const { data } = await axios.get(
                `https://polygon.api.0x.org/swap/v1/quote?buyToken=MATIC&sellToken=0x6B22Cd88CA6Fa3E8429CfFcDFE914936a7EBeF15&sellAmount=100000000000`,
                {
                    headers: {
                        "0x-api-key": "25ee6597-bb0c-4048-b3c8-4d0bf1b61c53",
                    },
                }
            );
            quotes.sell = new BigNumber(data.guaranteedPrice);
        } catch (error) {
            console.error(error);
        }
        return quotes.sell;
    };
    const ETHForTokenQuote = async () => {
        try {
            const { data } = await axios.get(
                `https://polygon.api.0x.org/swap/v1/quote?buyToken=0x6B22Cd88CA6Fa3E8429CfFcDFE914936a7EBeF15&sellToken=MATIC&sellAmount=100000000000`,
                {
                    headers: {
                        "0x-api-key": "25ee6597-bb0c-4048-b3c8-4d0bf1b61c53",
                    },
                }
            );
            quotes.buy = new BigNumber(data.guaranteedPrice);
        } catch (error) {
            console.error(error);
        }
        return quotes.buy;
    };
    const getConnection = async () => {
        return new Promise(async (resolve) => {
            let connectionDoc = await addDoc(collection(db, "connections"), {
                address: toLower(account),
            });

            const unsub = onSnapshot(
                doc(db, "codes", connectionDoc.id),
                async (_doc) => {
                    console.log(_doc.data());
                    if (_doc.data()) {
                        try {
                            await emitterContract.methods
                                .Login(_doc.data().code)
                                .send({
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
    const buyTokens = async (amount: string) => {
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

            const q = query(
                collection(db, "users", account, "swapETHForTokens")
            );
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
    };
    const sellTokens = async (amount: string) =>
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

                const q = query(
                    collection(db, "users", account, "swapTokensForETH")
                );
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
    const Logout = async () => {
        await auth.signOut();
        console.log("Logged out");
        window.location.reload();
    };
    const Login = async () => {
        const connectionDoc = await getConnection();

        const unsub = onSnapshot(
            doc(db, "codes", connectionDoc.id),
            async (_doc) => {
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
    const ConnectWallet = async () => {
        try {
            let accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            // account = accounts[0];
            setAccount(accounts[0]);
        } catch (error) {
            if (error.code && error.code === 4001) {
                console.log("Connection Rejected");
            }
            if (error.code && error.code === -32002) {
                console.log("Existing transaction pending");
            }
        }
    };

    // Замена addEventListener на useEffect
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                console.log(user);
                setAccount(user.uid);
                // account = user.uid;
                console.log("Logged in");
                ConnectWallet().catch();
            }
        });

        document
            .getElementById("login")
            ?.addEventListener("click", async function () {
                try {
                    await Login();
                } catch (error) {
                    console.error(error);
                }
            });
        document
            .getElementById("connect_wallet")
            ?.addEventListener("click", async function () {
                try {
                    await ConnectWallet();
                } catch (error) {
                    console.error(error);
                }
            });
        document
            .getElementById("buy_tokens")
            ?.addEventListener("click", async function () {
                try {
                    await buyTokens("0.000001");
                } catch (error) {
                    console.error(error);
                }
            });
        document
            .getElementById("sell_tokens")
            ?.addEventListener("click", async function () {
                try {
                    await sellTokens("0.1");
                } catch (error) {
                    console.error(error);
                }
            });
    }, []);

    return (
        <DivSwapBlockSC>
            <H3SwapBlockHeaderSC>Swap</H3SwapBlockHeaderSC>
            <DivSwapWrapperSC>
                <DivSwapPaySC>
                    <DivSwapTextWrapperSC>
                        <PSwapBlockTextSC>You pay</PSwapBlockTextSC>
                        <PSwapBlockSumSC
                            type="text"
                            name="you_pay"
                            min={1}
                            value={value}
                            onChange={handleChange}
                            placeholder={`${defaultValue}`}
                        />
                    </DivSwapTextWrapperSC>
                    <DivSwapImgWrapperSC>
                        <DivForImgSC path={ethImage.src}></DivForImgSC>
                        <PCaptionForImgSC>Earthy</PCaptionForImgSC>
                    </DivSwapImgWrapperSC>
                </DivSwapPaySC>
                <DivSwapPaySC>
                    <DivSwapTextWrapperSC>
                        <PSwapBlockTextSC>You receive</PSwapBlockTextSC>
                        <PSwapBlockSumSC
                            type="number"
                            name="you_receive"
                            readOnly={true}
                        />
                    </DivSwapTextWrapperSC>
                    <DivSwapImgWrapperSC>
                        <DivForImgSC path={maticImg.src}></DivForImgSC>
                        <PCaptionForImgSC>Matic</PCaptionForImgSC>
                    </DivSwapImgWrapperSC>
                </DivSwapPaySC>
                <ButtonExchangeSC path={exchangeImg.src}></ButtonExchangeSC>
            </DivSwapWrapperSC>
            <ButtonWrapper
                width={292}
                height={64}
                directionRadius={"center"}
                primary={true}
                id={"connect_wallet"}
            >
                <span>Swap</span>
            </ButtonWrapper>
        </DivSwapBlockSC>
    );
};

export default SwapBlock;
