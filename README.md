# CannaMint Base

A lightweight ERC20 token creation platform — the base version of CannaMint without DEX integration. Deploy custom tokens on EVM-compatible chains through a simple web interface.

## Overview

CannaMint Base lets users connect their wallet, fill in token details, and deploy a fully functional ERC20 token in minutes. The platform handles smart contract deployment via thirdweb SDK, giving users immediate ownership of their token contract.

## Features

- **Wallet Connection** — MetaMask, WalletConnect, or any Web3Modal-compatible wallet
- **Token Deployment** — Create ERC20 tokens with custom name, symbol, supply, and decimals
- **Real-time Feedback** — SweetAlert2 notifications for transaction status
- **Responsive Design** — Tailwind CSS, mobile-friendly

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 14 (App Router), TypeScript |
| Blockchain | thirdweb SDK v5, ethers |
| Wallet | @web3modal |
| Styling | Tailwind CSS |
| UI | sweetalert2 |

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A thirdweb client ID from [thirdweb.com/dashboard](https://thirdweb.com/dashboard)
- A Web3Modal project ID from [cloud.walletconnect.com](https://cloud.walletconnect.com)

### Installation

```bash
git clone https://github.com/t9fiction/cannamint-base.git
cd cannamint-base
npm install
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_thirdweb_client_id
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Usage

1. Connect your wallet
2. Enter token name, symbol, total supply, and decimals
3. Confirm and deploy
4. The token contract address is displayed on success

## Project Structure

```
cannamint-base/
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/    # React components
│   ├── lib/           # SDK configuration
│   └── providers/     # Web3 providers
├── public/
└── package.json
```

## License

MIT
