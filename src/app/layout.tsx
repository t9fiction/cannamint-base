import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
// import Web3ModalProvider from "@/utils/context";
// import { headers } from "next/headers";
// import { cookieToInitialState } from 'wagmi'
// import { config } from "@/utils/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CannaMint",
  description:
    "Launch your Base token with one click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <Web3ModalProvider > */}
        <ThirdwebProvider>
          {children}
        </ThirdwebProvider>
      {/* </Web3ModalProvider> */}
      </body>
    </html>
  );
}
