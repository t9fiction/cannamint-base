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
    const [hovered, setHovered] = useState(false);

    const buttonStyle = {
        borderRadius: "40px",
        background: "linear-gradient(to right, #8BC34A, #004D40)",
        color: "white",
        width: "200px",
        margin: "20px",
        paddingTop: "12px",
        paddingBottom: "12px",
        paddingLeft: "24px",
        paddingRight: "24px",
        border: "1px solid rgb(0, 255, 115)",
        cursor: "pointer",
        transition: "background-color 0.3s, color 0.3s"
    };

    return (
        <>
            {/* <div >
                <w3m-button />
            </div> */}
            {/* {
                isConnected ? <button onClick={() => disconnect()} style={{
                    ...buttonStyle,
                    backgroundColor: hovered ? "#004D40" : "#8BC34A",
                    color: hovered ? "#8BC34A" : "white"
                }}
                >Disconnect</button>
                    :
                    <button
                        onClick={() => open()}
                        style={{
                            ...buttonStyle,
                            backgroundColor: hovered ? "#004D40" : "#8BC34A",
                            color: hovered ? "#8BC34A" : "white"
                        }}
                    >
                        Connect Now
                    </button>
            } */}


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