'use client';

import { client } from "@/app/client";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { useState } from "react";
import { chainUsed } from "@/utils/factoryContract/page";


const wallets = [
    createWallet("com.coinbase.wallet"),
    createWallet("com.ledger")
]

const CHAIN = chainUsed;

export const Login = () => {

    return (
        <>

            <ConnectButton
                client={client}
                chain={CHAIN}
                wallets={wallets}
                connectButton={{
                    label: "Connect Now",
                    style: {
                        borderRadius: "40px",
                        background: "linear-gradient(to right, #8BC34A, #004D40)",
                        color: "white",
                        margin: "20px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        border: "1px solid rgb(0, 255, 115)"

                    }
                }}
            />
        </>
    )
};