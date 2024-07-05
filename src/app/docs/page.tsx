import React from 'react'
import './style.css';

const Page = () => {
    return (
        <div className="page-wrapper">
            <header className="header">
                <div className="logo">CannaMint Docs</div>
                <div className="breadcrumb">Home &gt; CannaMint Token Creator Docs</div>
            </header>
            <div className="container">
                <aside className="sidebar">
                    <ul>
                        <li><a href="#introduction">Introduction</a></li>
                        <li><a href="#connecting-wallet">Connecting Wallet</a></li>
                        <li><a href="#create-token">Create Base Token</a></li>
                        <li><a href="#token-parameters">Token Parameters</a></li>
                        <li><a href="#token-management">Token Management</a></li>
                        <li><a href="#contract-verification">Contract Verification</a></li>
                        <li><a href="#supply-fee">Supply Fee</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                    </ul>
                </aside>

                <main className="content">
                    <h1>CannaMint Token Generator Docs</h1>
                    <div className="last-updated">Last updated: July 4th, 2024</div>

                    <section id="introduction">
                        <h2>Introduction</h2>
                        <p>CannaMint Token Creator is the fastest and most secure way to launch a token on Base. Our platform offers the simplest method to create Base ERC-20 tokens with no coding required. Mint tokens instantly with audited Solidity contract libraries and remove all technical aspects of token creation. All these best-in-class features are included in your generated token.</p>
                        <p>CannaMint stands out as the most affordable platform for token creation on Base. We go beyond just token generation by providing free additional services such as setting up a liquidity pool (coming soon), ensuring a comprehensive launch experience for your project.</p>
                    </section>

                    <section id="connecting-wallet">
                        <h2>Connecting Wallet</h2>
                        <p>CannaMint offers unparalleled wallet compatibility for the Base network which enables as many people as possible to launch their own token. Our connect wallet modal supports over 350 different wallets, ensuring that you can use your preferred wallet to interact with our platform. Whether you&apos;re using a popular wallet or a more niche option, CannaMint has you covered. Simply click the "Connect Wallet" button to access our extensive list of supported wallets and get started with your token creation journey.</p>
                        <img src="/img/wallets.JPG" alt="CannaMint Wallet Connect Interface showing over 350 compatible wallets" className="full-width-image" />
                    </section>

                    <section id="create-token">
                        <h2>Create New Base ERC-20 Token</h2>
                        <p>Creating your Base ERC-20 token with CannaMint only takes 10 seconds! Our intuitive user-friendly interface guides you through each step, from defining your token&apos;s basic parameters to implementing advanced features. No coding knowledge is required – we&apos;ve simplified the entire process so you can focus on your token&apos;s unique properties and use case.</p>
                    </section>

                    <section id="token-parameters">
                        <h2>Token Parameters</h2>
                        <p>Customize your Base ERC-20 token with a wide range of parameters. Set your token&apos;s name, symbol, and total supply. Don&apos;t worry about the decimals, we got them hardcoded. Implement advanced features like transaction fees and automated liquidity generation (coming soon). Our platform provides clear explanations for each parameter, helping you make informed decisions about your token&apos;s functionality.</p>
                        <img src="/img/info.JPG" alt="CannaMint Wallet Connect Interface showing over 350 compatible wallets" className="full-width-image" />
                    </section>

                    <section id="token-management">
                        <h2>Token Management</h2>
                        <p>After creating your token, CannaMint offers robust management tools and video tutorials. Monitor your token&apos;s performance, manage liquidity pools, and implement token burns or mints as needed. Our platform provides ongoing support to ensure your Base ERC-20 token continues to meet your project&apos;s evolving needs.</p>
                    </section>

                    <section id="contract-verification">
                        <h2>Automatic Contract Verification</h2>
                        <p>At CannaMint, we prioritize transparency and trust in the token creation process. One of the key features we offer is automatic contract verification on Basescan for all tokens launched through our platform.</p>
                        <h3>What is Contract Verification?</h3>
                        <p>Contract verification is the process of publishing your smart contract&apos;s source code on the blockchain explorer (in this case, Basescan). This allows anyone to review the code, ensuring transparency and building trust in your project.</p>
                        <h3>CannaMint&apos;s Automatic Verification</h3>
                        <p>When you create a token using CannaMint, we handle the verification process for you:</p>
                        <ul>
                            <li>Your contract is automatically submitted to Basescan for verification.</li>
                            <li>The source code becomes publicly visible and verifiable on Basescan.</li>
                            <li>No additional steps are required from you - it&apos;s all done seamlessly.</li>
                        </ul>
                        <h3>Benefits of Automatic Verification</h3>
                        <ul>
                            <li><strong>Transparency</strong>: Investors and users can easily verify your token&apos;s functionality.</li>
                            <li><strong>Credibility</strong>: Verified contracts are seen as more trustworthy in the crypto community.</li>
                            <li><strong>Time-saving</strong>: You don&apos;t need to go through the manual verification process.</li>
                            <li><strong>Error-free</strong>: Eliminates the risk of mistakes in the verification process.</li>
                        </ul>
                        <p>By choosing CannaMint for your Base ERC-20 token launch, you&apos;re ensuring that your project starts on the right foot with a verified, transparent smart contract. This feature underscores our commitment to fostering a trustworthy and open ecosystem on the Base network.</p>
                    </section>

                    <section id="supply-fee">
                        <h2>CannaMint&apos;s 1% Supply Fee</h2>
                        <p>At CannaMint, we believe in creating a sustainable ecosystem that benefits both new token launches and our existing community. To achieve this, we implement a 1% supply fee on all tokens launched through our platform. Here&apos;s how it works and why it&apos;s beneficial for everyone involved:</p>
                        <h3>How It Works</h3>
                        <ol>
                            <li>When you launch a new Base ERC-20 token using CannaMint, we collect a 1% supply fee from the total token supply.</li>
                            <li>Half of this collected fee (0.5% of the total supply) is airdropped to holders of Based THC, the token that powers the CannaMint ecosystem.</li>
                        </ol>
                        <h3>Benefits</h3>
                        <ul>
                            <li><strong>Exposure and Marketing</strong>: By distributing your tokens to Based THC holders, your new project gains immediate exposure to an active and engaged community of crypto enthusiasts. This serves as free marketing for your token launch.</li>
                            <li><strong>Instant Holder Base</strong>: The airdrop creates an initial holder base for your token, potentially increasing its visibility and trading volume from the start.</li>
                            <li><strong>Community Support</strong>: Based THC holders become natural allies for your project, as they now have a stake in your token&apos;s success.</li>
                            <li><strong>Ecosystem Strength</strong>: The fee mechanism strengthens the entire CannaMint ecosystem, ensuring the platform&apos;s continued development and improvement, which in turn benefits all tokens launched through it.</li>
                            <li><strong>Incentivized Holding</strong>: This mechanism incentivizes holding Based THC, creating a more stable and engaged user base for the CannaMint platform.</li>
                        </ul>
                        <h3>Powered by Based THC</h3>
                        <p>CannaMint is powered by Based THC, our native token. By holding Based THC, users not only support the CannaMint platform but also gain exposure to a diverse portfolio of new token launches on the Base network.</p>
                        <p>This innovative fee structure creates a win-win situation: new token launches benefit from immediate exposure and a built-in holder base, while Based THC holders are rewarded with a constant stream of new tokens, aligning the interests of all participants in the CannaMint ecosystem.</p>
                    </section>

                    <section id="faqs">
                        <h2>FAQs</h2>
                        <p>Find answers to frequently asked questions about CannaMint Token Creator.</p>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Page