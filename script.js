// Course Data Structure
const courses = [
    {
        id: 'web3-intro',
        title: 'Introduction to Web3',
        icon: '🌐',
        category: 'fundamentals',
        level: 'Beginner',
        duration: '4 weeks',
        description: 'Master the fundamentals of Web3, decentralized systems, and how they differ from traditional Web2. Learn about peer-to-peer networks and the vision behind Web3.',
        modules: 8,
        lessons: [
            { id: 1, title: 'What is Web3?', duration: '15 min', completed: false, content: 'Web3 is a decentralized internet built on blockchain technology. Unlike Web2 which relies on centralized servers and corporations, Web3 empowers users with direct control over their data, assets, and identities. It represents the next evolution of the internet where users own their data and participate in governance.' },
            { id: 2, title: 'Web2 vs Web3 Comparison', duration: '20 min', completed: false, content: 'Web2 platforms (Google, Facebook, Amazon) control user data and act as intermediaries. Web3 removes intermediaries, enables direct peer-to-peer transactions, and gives users true ownership of their digital assets and identity. Understand the paradigm shift and its implications.' },
            { id: 3, title: 'The Vision Behind Web3', duration: '18 min', completed: false, content: 'Explore the philosophical and technical motivations behind Web3. Learn about decentralization, user sovereignty, and how blockchain enables trust without central authorities. Understand the movement toward a more equitable internet.' },
            { id: 4, title: 'Key Concepts Overview', duration: '25 min', completed: false, content: 'Introduction to blockchain, smart contracts, cryptocurrency, DeFi, NFTs, and DAOs. Get a bird\'s eye view of the major pillars of the Web3 ecosystem and how they interconnect.' },
            { id: 5, title: 'Decentralization Explained', duration: '22 min', completed: false, content: 'Deep dive into what decentralization means, why it matters, and how it\'s achieved through distributed networks. Understand consensus mechanisms and their role in maintaining decentralized systems.' },
            { id: 6, title: 'Getting Started with Wallets', duration: '20 min', completed: false, content: 'Your first practical step: set up a Web3 wallet. Learn about hot wallets vs cold wallets, key management, seed phrases, and best security practices for protecting your assets.' },
            { id: 7, title: 'Security Best Practices', duration: '25 min', completed: false, content: 'Essential security knowledge: protecting private keys, recognizing phishing scams, using hardware wallets, and maintaining operational security in the Web3 space.' },
            { id: 8, title: 'Web3 Ecosystem Overview', duration: '30 min', completed: false, content: 'Survey the Web3 landscape: exchanges, wallets, DeFi protocols, NFT marketplaces, and development platforms. Understand the interconnected nature of the Web3 ecosystem.' }
        ]
    },
    {
        id: 'blockchain',
        title: 'Blockchain Technology',
        icon: '⛓️',
        category: 'blockchain',
        level: 'Beginner',
        duration: '5 weeks',
        description: 'Comprehensive guide to blockchain technology, how it works, its properties, and real-world applications beyond just cryptocurrency.',
        modules: 10,
        lessons: [
            { id: 1, title: 'Blockchain Fundamentals', duration: '25 min', completed: false, content: 'Understand the core concept: a blockchain is a distributed ledger that records transactions across multiple computers. Learn about immutability, transparency, and distributed consensus.' },
            { id: 2, title: 'Blocks and Hashing', duration: '20 min', completed: false, content: 'Explore the building blocks of blockchain. Understand how blocks contain data and are linked via cryptographic hashes. Learn how this creates an immutable chain.' },
            { id: 3, title: 'Cryptographic Hashing', duration: '22 min', completed: false, content: 'Deep dive into SHA-256 and other hash functions. Understand one-way functions, avalanche effect, and how hashing ensures data integrity in blockchain.' },
            { id: 4, title: 'Merkle Trees', duration: '18 min', completed: false, content: 'Learn about Merkle trees and how they efficiently verify data in blockchain. Understand how Bitcoin and other blockchains use Merkle trees for performance.' },
            { id: 5, title: 'Consensus Mechanisms', duration: '30 min', completed: false, content: 'Explore Proof of Work (PoW), Proof of Stake (PoS), and other consensus algorithms. Understand how nodes agree on blockchain state without central authority.' },
            { id: 6, title: 'Mining and Validators', duration: '25 min', completed: false, content: 'Learn about miners in PoW systems and validators in PoS systems. Understand rewards, penalties, and economic incentives that secure the network.' },
            { id: 7, title: 'Distributed Ledgers', duration: '20 min', completed: false, content: 'Understand how blockchain maintains distributed state across thousands of nodes. Learn about eventual consistency, synchronization, and fork resolution.' },
            { id: 8, title: 'Smart Contracts', duration: '25 min', completed: false, content: 'Introduction to self-executing contracts on blockchain. Learn how code is executed trustlessly on decentralized networks.' },
            { id: 9, title: 'Blockchain Properties', duration: '20 min', completed: false, content: 'Understand immutability, transparency, decentralization, and security properties of blockchain. Learn trade-offs and limitations.' },
            { id: 10, title: 'Real-World Applications', duration: '25 min', completed: false, content: 'Explore blockchain use cases beyond cryptocurrency: supply chain, healthcare, identity, voting, and more. Understand where blockchain provides value.' }
        ]
    },
    {
        id: 'cryptocurrency',
        title: 'Cryptocurrency Basics',
        icon: '💰',
        category: 'cryptocurrency',
        level: 'Beginner',
        duration: '4 weeks',
        description: 'Master cryptocurrency fundamentals, understand digital currencies, tokens, and how they enable peer-to-peer value transfer.',
        modules: 8,
        lessons: [
            { id: 1, title: 'What is Cryptocurrency?', duration: '20 min', completed: false, content: 'Cryptocurrencies are digital currencies secured by cryptography. Unlike fiat money controlled by governments, crypto operates on decentralized networks. Learn the core principles.' },
            { id: 2, title: 'How Crypto Transactions Work', duration: '25 min', completed: false, content: 'Understand the anatomy of a crypto transaction: inputs, outputs, signatures, and confirmation. Learn how transactions are validated and added to the blockchain.' },
            { id: 3, title: 'Public and Private Keys', duration: '22 min', completed: false, content: 'Master asymmetric cryptography in Web3. Learn how public keys work as addresses and private keys authorize transactions. Understand key derivation and HD wallets.' },
            { id: 4, title: 'Wallet Types and Security', duration: '25 min', completed: false, content: 'Compare custodial vs non-custodial wallets, hot vs cold storage. Learn MetaMask, hardware wallets, and security best practices for protecting your crypto.' },
            { id: 5, title: 'Supply, Inflation, and Economics', duration: '20 min', completed: false, content: 'Understand tokenomics: maximum supply, inflation rates, and economic models. Learn how different cryptocurrencies approach monetary policy.' },
            { id: 6, title: 'Altcoins and Tokens', duration: '20 min', completed: false, content: 'Beyond Bitcoin: explore altcoins and tokens. Understand token standards (ERC-20, ERC-721), utility vs security tokens, and the token economy.' },
            { id: 7, title: 'Trading and Exchanges', duration: '25 min', completed: false, content: 'Learn about centralized exchanges (CEX), decentralized exchanges (DEX), trading pairs, and market mechanics. Understand order types and risk management.' },
            { id: 8, title: 'Regulations and Compliance', duration: '20 min', completed: false, content: 'Navigate the regulatory landscape. Understand KYC/AML requirements, tax implications, and how regulations vary by jurisdiction.' }
        ]
    },
    {
        id: 'bitcoin',
        title: 'Bitcoin Deep Dive',
        icon: '₿',
        category: 'networks',
        level: 'Intermediate',
        duration: '5 weeks',
        description: 'The original cryptocurrency: understand Bitcoin\'s history, technology, mining, and why it remains the most secure blockchain.',
        modules: 10,
        lessons: [
            { id: 1, title: 'Bitcoin History and Genesis', duration: '20 min', completed: false, content: 'Start with Satoshi Nakamoto\'s 2008 whitepaper and Bitcoin\'s genesis block. Understand the context: financial crisis of 2008 and the birth of peer-to-peer digital currency.' },
            { id: 2, title: 'Bitcoin Network', duration: '25 min', completed: false, content: 'Explore the Bitcoin network: nodes, mining pools, and full nodes. Understand network propagation, mempool, and how transactions spread across the network.' },
            { id: 3, title: 'Proof of Work in Bitcoin', duration: '25 min', completed: false, content: 'Deep dive into Bitcoin\'s PoW: difficulty adjustment, hash rate, and energy consumption. Understand why PoW secures Bitcoin and the mining arms race.' },
            { id: 4, title: 'UTXO Model', duration: '20 min', completed: false, content: 'Bitcoin uses the UTXO (Unspent Transaction Output) model, unlike accounts. Learn how UTXOs work, why they matter, and how they ensure security.' },
            { id: 5, title: 'Bitcoin Transactions', duration: '22 min', completed: false, content: 'Detailed walkthrough of Bitcoin transactions: inputs, outputs, fees, and confirmation times. Learn SegWit, transaction malleability, and optimization.' },
            { id: 6, title: 'Bitcoin Scripting', duration: '25 min', completed: false, content: 'Bitcoin has a scripting language enabling various transaction types: multisig, timelocks, and more. Understand what\'s possible with Bitcoin script.' },
            { id: 7, title: 'Bitcoin Scaling Solutions', duration: '25 min', completed: false, content: 'Understand Lightning Network, sidechains, and rollups. Explore how Bitcoin is scaled for more transactions while maintaining security.' },
            { id: 8, title: 'Bitcoin Mining', duration: '25 min', completed: false, content: 'Everything about mining: hardware requirements (ASIC), pool mining, profitability, and environmental considerations. Understand block rewards and halving cycles.' },
            { id: 9, title: 'Bitcoin Security Model', duration: '20 min', completed: false, content: 'Why Bitcoin is the most secure blockchain: economic incentives, 51% attack analysis, and accumulated computational work. Understand the security guarantees.' },
            { id: 10, title: 'Bitcoin\'s Future and Evolution', duration: '20 min', completed: false, content: 'Discuss Bitcoin upgrades, Taproot, and community governance. Explore competing visions for Bitcoin\'s future and ongoing development.' }
        ]
    },
    {
        id: 'ethereum',
        title: 'Ethereum and Smart Contracts',
        icon: '⟠',
        category: 'networks',
        level: 'Intermediate',
        duration: '6 weeks',
        description: 'Master Ethereum\'s programmable blockchain, smart contracts, and its role as the foundation for DeFi and Web3 applications.',
        modules: 12,
        lessons: [
            { id: 1, title: 'Ethereum Origin Story', duration: '20 min', completed: false, content: 'From Vitalik Buterin\'s vision to Ethereum\'s launch in 2015. Understand how Ethereum added programmability to blockchain technology.' },
            { id: 2, title: 'Accounts and Gas', duration: '25 min', completed: false, content: 'Ethereum uses an account model (unlike Bitcoin\'s UTXO). Learn about externally owned accounts (EOA), contract accounts, and gas mechanics for transaction costs.' },
            { id: 3, title: 'Ether and Tokens', duration: '20 min', completed: false, content: 'Understanding ETH: Ethereum\'s native currency. Learn about tokens built on Ethereum: ERC-20 (fungible), ERC-721 (NFTs), and other token standards.' },
            { id: 4, title: 'Smart Contracts Fundamentals', duration: '30 min', completed: false, content: 'Introduction to smart contracts: self-executing code on blockchain. Understand Solidity basics, contract deployment, and state management.' },
            { id: 5, title: 'Solidity Programming Basics', duration: '30 min', completed: false, content: 'Deep dive into Solidity: variables, functions, control flow, and data types. Learn to write simple smart contracts for Ethereum.' },
            { id: 6, title: 'Contract Interaction', duration: '25 min', completed: false, content: 'How external accounts call smart contracts. Understand transactions vs calls, fallback functions, and contract-to-contract interaction.' },
            { id: 7, title: 'State and Storage', duration: '22 min', completed: false, content: 'Understand Ethereum\'s state: accounts, storage, and how state is maintained. Learn about storage slots and optimization for gas efficiency.' },
            { id: 8, title: 'Events and Logging', duration: '20 min', completed: false, content: 'Smart contracts emit events for off-chain indexing. Learn how to use events effectively, query them via ABI, and understand their role in DApp architecture.' },
            { id: 9, title: 'Security Best Practices', duration: '25 min', completed: false, content: 'Smart contract security: common vulnerabilities (reentrancy, overflow/underflow), audits, and defensive programming. Learn to write secure smart contracts.' },
            { id: 10, title: 'EVM and Execution', duration: '25 min', completed: false, content: 'Understanding the Ethereum Virtual Machine: bytecode, gas costs, and execution model. Learn how contracts are compiled and executed.' },
            { id: 11, title: 'Ethereum 2.0 and Proof of Stake', duration: '25 min', completed: false, content: 'The Merge: transition from PoW to PoS. Understand validators, staking, and how Ethereum 2.0 improves scalability and sustainability.' },
            { id: 12, title: 'Layer 2 Scaling Solutions', duration: '25 min', completed: false, content: 'Optimistic rollups, zk-rollups, sidechains. Learn how Ethereum scales for thousands of transactions per second while maintaining security.' }
        ]
    },
    {
        id: 'solana',
        title: 'Solana Network',
        icon: '◎',
        category: 'networks',
        level: 'Intermediate',
        duration: '4 weeks',
        description: 'Fast and low-cost: learn about Solana\'s unique architecture, Proof of History, and its role in high-speed Web3 applications.',
        modules: 8,
        lessons: [
            { id: 1, title: 'Solana Architecture', duration: '25 min', completed: false, content: 'Solana\'s unique design: parallel processing, Proof of History (PoH), and Tower BFT consensus. Understand how Solana achieves high throughput without sharding.' },
            { id: 2, title: 'Proof of History', duration: '25 min', completed: false, content: 'Solana\'s innovation: Proof of History creates a historical record proving events occurred at specific times. Learn how PoH enables faster consensus and better scalability.' },
            { id: 3, title: 'SOL Token and Economics', duration: '20 min', completed: false, content: 'Understanding SOL: staking, transaction fees, and economic incentives. Learn about Solana\'s token supply and inflation model.' },
            { id: 4, title: 'Solana Program Model', duration: '30 min', completed: false, content: 'Solana uses "programs" instead of smart contracts. Learn the differences from Ethereum, state accounts, instruction processing, and Solana\'s programming model.' },
            { id: 5, title: 'Rust for Solana Development', duration: '30 min', completed: false, content: 'Solana programs are written in Rust. Introduction to Rust basics and how they apply to Solana development. Build your first Solana program.' },
            { id: 6, title: 'SPL Tokens', duration: '22 min', completed: false, content: 'Solana Program Library tokens: token standards, minting, and token interactions. Understand how tokens work on Solana vs Ethereum.' },
            { id: 7, title: 'Solana DeFi Ecosystem', duration: '25 min', completed: false, content: 'Explore Solana\'s DeFi applications: Marinade, Raydium, Orca. Understand how the fast network enables new DeFi possibilities.' },
            { id: 8, title: 'Solana vs Ethereum Comparison', duration: '25 min', completed: false, content: 'Compare Solana and Ethereum: architecture, programming models, trade-offs. Understand when to choose each platform for different applications.' }
        ]
    },
    {
        id: 'defi-fundamentals',
        title: 'DeFi Fundamentals',
        icon: '💵',
        category: 'technical',
        level: 'Intermediate',
        duration: '5 weeks',
        description: 'Decentralized Finance (DeFi): learn how financial services work without intermediaries, from lending to trading.',
        modules: 10,
        lessons: [
            { id: 1, title: 'What is DeFi?', duration: '20 min', completed: false, content: 'DeFi removes intermediaries from financial services. Understand the benefits, risks, and how smart contracts enable trustless finance.' },
            { id: 2, title: 'Lending and Borrowing', duration: '25 min', completed: false, content: 'How DeFi lending works: collateral, liquidation, interest rates. Explore protocols like Aave and Compound.' },
            { id: 3, title: 'Decentralized Exchanges (DEX)', duration: '25 min', completed: false, content: 'How DEXs work: Automated Market Makers (AMM), liquidity pools, and swaps. Understand Uniswap and other DEX protocols.' },
            { id: 4, title: 'Liquidity Pools', duration: '22 min', completed: false, content: 'How liquidity providers earn fees. Understand impermanent loss, slippage, and optimizing capital in liquidity pools.' },
            { id: 5, title: 'Staking and Yield Farming', duration: '25 min', completed: false, content: 'Earn rewards: staking crypto to secure networks or participating in yield farming. Understand risks and returns.' },
            { id: 6, title: 'Flash Loans', duration: '20 min', completed: false, content: 'Uncollateralized loans that must be repaid in the same transaction. Learn how flash loans enable arbitrage and liquidations.' },
            { id: 7, title: 'Derivatives and Perpetuals', duration: '25 min', completed: false, content: 'Trading derivatives on-chain: futures, options, and perpetual contracts. Understand leverage, liquidations, and risk management.' },
            { id: 8, title: 'DeFi Security', duration: '20 min', completed: false, content: 'DeFi risks: smart contract vulnerabilities, flash loan attacks, liquidation cascades. Learn to evaluate DeFi protocol safety.' },
            { id: 9, title: 'Composability and Risk', duration: '25 min', completed: false, content: 'The "money legos" concept: how DeFi protocols combine. Understand systemic risk and cascade effects in DeFi.' },
            { id: 10, title: 'DeFi Use Cases and Opportunities', duration: '25 min', completed: false, content: 'Explore real DeFi applications: stable coins, insurance, synthetics. Understand emerging DeFi innovations.' }
        ]
    },
    {
        id: 'nfts-and-web3',
        title: 'NFTs and Digital Ownership',
        icon: '🖼️',
        category: 'nontechnical',
        level: 'Beginner',
        duration: '3 weeks',
        description: 'Understand Non-Fungible Tokens (NFTs), digital ownership, royalties, and their applications beyond art.',
        modules: 6,
        lessons: [
            { id: 1, title: 'What are NFTs?', duration: '20 min', completed: false, content: 'NFTs are unique digital tokens representing ownership. Unlike cryptocurrencies that are fungible, NFTs are one-of-a-kind. Understand use cases and implications.' },
            { id: 2, title: 'ERC-721 and ERC-1155 Standards', duration: '20 min', completed: false, content: 'NFT token standards on Ethereum. Learn the difference between ERC-721 (unique) and ERC-1155 (batch). Understand metadata and IPFS.' },
            { id: 3, title: 'NFT Marketplaces', duration: '20 min', completed: false, content: 'How to buy, sell, and trade NFTs. Explore OpenSea, Blur, and other marketplaces. Understand gas fees and trading mechanics.' },
            { id: 4, title: 'Creating and Minting NFTs', duration: '25 min', completed: false, content: 'Launch your own NFT collection: minting process, metadata, and smart contracts. Learn about gas optimization and batch minting.' },
            { id: 5, title: 'Royalties and Smart Contracts', duration: '20 min', completed: false, content: 'How creators earn royalties on resales. Understand the technical implementation and enforcement of royalties in NFT smart contracts.' },
            { id: 6, title: 'Beyond Art: NFT Applications', duration: '25 min', completed: false, content: 'NFTs beyond collectibles: digital identity, gaming items, domain names, real estate. Explore emerging use cases and future possibilities.' }
        ]
    },
    {
        id: 'governance-daos',
        title: 'Governance and DAOs',
        icon: '🏛️',
        category: 'nontechnical',
        level: 'Intermediate',
        duration: '4 weeks',
        description: 'Decentralized Autonomous Organizations (DAOs): community governance, voting mechanisms, and decentralized decision-making.',
        modules: 8,
        lessons: [
            { id: 1, title: 'What is a DAO?', duration: '20 min', completed: false, content: 'DAOs are organizations managed by smart contracts and community voting. Understand governance tokens, proposals, and decentralized decision-making.' },
            { id: 2, title: 'Governance Tokens', duration: '20 min', completed: false, content: 'Tokens that grant voting rights. Learn about delegation, voting power, and how governance tokens align incentives in decentralized communities.' },
            { id: 3, title: 'Voting Mechanisms', duration: '25 min', completed: false, content: 'Different voting systems: simple majority, quadratic voting, ranked choice. Understand voting strategies and their implications for governance.' },
            { id: 4, title: 'DAO Structures and Examples', duration: '25 min', completed: false, content: 'Explore real DAOs: Uniswap DAO, MakerDAO, Aave governance. Understand different organizational structures and governance models.' },
            { id: 5, title: 'Proposal and Execution', duration: '22 min', completed: false, content: 'How proposals are created, voted on, and executed. Learn timelock, veto mechanisms, and community coordination.' },
            { id: 6, title: 'Treasury Management', duration: '20 min', completed: false, content: 'How DAOs manage funds: multi-sig wallets, spending proposals, and treasury strategies. Understand incentive alignment.' },
            { id: 7, title: 'DAO Challenges and Governance Attacks', duration: '25 min', completed: false, content: 'Governance challenges: voter apathy, whale dominance, and governance attacks. Learn mitigation strategies.' },
            { id: 8, title: 'Building Your Own DAO', duration: '25 min', completed: false, content: 'Practical guide to launching a DAO: choosing governance frameworks, initial distribution, and community building.' }
        ]
    },
    {
        id: 'web3-careers',
        title: 'Careers in Web3',
        icon: '💼',
        category: 'nontechnical',
        level: 'Beginner',
        duration: '2 weeks',
        description: 'Explore career opportunities in Web3: technical and non-technical roles, required skills, and how to get started.',
        modules: 6,
        lessons: [
            { id: 1, title: 'Web3 Industry Overview', duration: '20 min', completed: false, content: 'The Web3 job market: roles, companies, and opportunities. Understand different sectors: DeFi, NFTs, infrastructure, gaming.' },
            { id: 2, title: 'Developer Roles', duration: '25 min', completed: false, content: 'Smart contract developers, full-stack Web3 engineers, and blockchain developers. Learn required skills and career paths.' },
            { id: 3, title: 'Non-Technical Roles', duration: '25 min', completed: false, content: 'Product managers, business development, marketing, and operations in Web3. Understand how to contribute without deep technical knowledge.' },
            { id: 4, title: 'Required Skills and Learning Path', duration: '25 min', completed: false, content: 'Essential skills for Web3 careers: Solidity, blockchain concepts, security. Plan your learning journey.' },
            { id: 5, title: 'Getting Your First Web3 Job', duration: '25 min', completed: false, content: 'Networking strategies, building a portfolio, contributing to open source. Learn how to land your first Web3 role.' },
            { id: 6, title: 'Entrepreneurship in Web3', duration: '20 min', completed: false, content: 'Building startups and projects in Web3. Understand fundraising, community building, and launching successful Web3 ventures.' }
        ]
    },
    {
        id: 'web3-security',
        title: 'Web3 Security and Safety',
        icon: '🔐',
        category: 'technical',
        level: 'Intermediate',
        duration: '4 weeks',
        description: 'Master Web3 security: protecting your assets, identifying scams, and understanding smart contract vulnerabilities.',
        modules: 8,
        lessons: [
            { id: 1, title: 'Crypto Security Fundamentals', duration: '25 min', completed: false, content: 'Key management, seed phrases, and private key security. Learn to protect your crypto assets from theft and loss.' },
            { id: 2, title: 'Common Scams and Phishing', duration: '20 min', completed: false, content: 'Identifying and avoiding Web3 scams: fake wallets, phishing sites, rug pulls. Learn red flags and protective measures.' },
            { id: 3, title: 'Hardware Wallets and Cold Storage', duration: '20 min', completed: false, content: 'Best practices for secure storage: hardware wallets like Ledger and Trezor. Understand the security trade-offs of different wallet types.' },
            { id: 4, title: 'Smart Contract Vulnerabilities', duration: '30 min', completed: false, content: 'Common smart contract bugs: reentrancy, integer overflow, access control. Learn to identify vulnerabilities in code.' },
            { id: 5, title: 'Auditing Smart Contracts', duration: '25 min', completed: false, content: 'How to evaluate smart contract security: reading audit reports, understanding risk. Learn to assess protocol safety before investing.' },
            { id: 6, title: 'DeFi Protocol Security', duration: '25 min', completed: false, content: 'Evaluating DeFi protocols: smart contract audits, economic design, and oracle security. Understand unique DeFi risks.' },
            { id: 7, title: 'Operational Security (OPSEC)', duration: '20 min', completed: false, content: 'Daily OPSEC practices: browser security, device security, and privacy. Learn to navigate Web3 safely in your daily activities.' },
            { id: 8, title: 'Recovery and Incident Response', duration: '20 min', completed: false, content: 'What to do if compromised: recovery steps, reporting scams, and getting help. Understand incident response in Web3.' }
        ]
    },
    {
        id: 'layer2-scaling',
        title: 'Layer 2 and Scaling Solutions',
        icon: '📈',
        category: 'technical',
        level: 'Advanced',
        duration: '5 weeks',
        description: 'Understanding Layer 2 solutions, rollups, sidechains, and how blockchain scaling works at scale.',
        modules: 10,
        lessons: [
            { id: 1, title: 'Scaling Problem Overview', duration: '20 min', completed: false, content: 'Why blockchains struggle with scale: throughput limits, latency, and costs. Understand the trilemma: decentralization, security, and scalability.' },
            { id: 2, title: 'Rollup Solutions', duration: '25 min', completed: false, content: 'How rollups scale blockchain: batching transactions and posting to mainchain. Understand optimistic vs zk-rollups.' },
            { id: 3, title: 'Optimistic Rollups', duration: '30 min', completed: false, content: 'Deep dive into optimistic rollups: fraud proofs, challenge period, and canonical state. Explore Optimism and Arbitrum.' },
            { id: 4, title: 'Zero-Knowledge Rollups', duration: '30 min', completed: false, content: 'ZK-rollups use cryptographic proofs for security. Learn how zero-knowledge proofs work and their advantages over optimistic rollups.' },
            { id: 5, title: 'Sidechains and Plasma', duration: '25 min', completed: false, content: 'Alternative scaling approaches: sidechains like Polygon, Plasma, and validity chains. Understand their security and decentralization trade-offs.' },
            { id: 6, title: 'Payment Channels', duration: '20 min', completed: false, content: 'Off-chain transactions: Lightning Network and payment channels. Learn how to transact with minimal blockchain footprint.' },
            { id: 7, title: 'Cross-Chain Bridges', duration: '25 min', completed: false, content: 'Bridge protocols for inter-chain communication. Understand bridge security and how they enable multi-chain applications.' },
            { id: 8, title: 'State Channels and Commit Chains', duration: '22 min', completed: false, content: 'Advanced scaling patterns: state channels and commit chains. Learn when to apply each scaling approach.' },
            { id: 9, title: 'Future of Scaling', duration: '20 min', completed: false, content: 'Emerging scaling solutions: sharding, data availability layers, and beyond. Explore the future of blockchain scalability.' },
            { id: 10, title: 'Choosing Your Layer 2', duration: '20 min', completed: false, content: 'Comparing different Layer 2 solutions: speed, cost, security, and ecosystem. Understand trade-offs and use cases.' }
        ]
    },
    {
        id: 'web3-development',
        title: 'Web3 Development Basics',
        icon: '💻',
        category: 'technical',
        level: 'Intermediate',
        duration: '6 weeks',
        description: 'Start building Web3: development tools, smart contract basics, and deployment on real networks.',
        modules: 12,
        lessons: [
            { id: 1, title: 'Web3 Developer Stack', duration: '25 min', completed: false, content: 'Essential tools: Remix, Hardhat, Truffle, and Foundry. Learn the modern Web3 development environment.' },
            { id: 2, title: 'Solidity Syntax and Basics', duration: '30 min', completed: false, content: 'Introduction to Solidity: data types, operators, and control flow. Write your first smart contract.' },
            { id: 3, title: 'Functions and Modifiers', duration: '25 min', completed: false, content: 'Function visibility, modifiers for access control, and fallback functions. Write secure, efficient functions.' },
            { id: 4, title: 'State Variables and Storage', duration: '25 min', completed: false, content: 'Understanding contract state: storage layout and optimization. Write gas-efficient smart contracts.' },
            { id: 5, title: 'Contract Deployment', duration: '20 min', completed: false, content: 'Deploy contracts: using Remix, Hardhat, or web3.js. Understand constructor parameters and initialization.' },
            { id: 6, title: 'Interacting with Contracts', duration: '25 min', completed: false, content: 'Call contract functions using web3.js or ethers.js. Build simple frontends for contract interaction.' },
            { id: 7, title: 'Testing Smart Contracts', duration: '25 min', completed: false, content: 'Write comprehensive tests: unit tests, integration tests, and security testing. Use Hardhat for testing.' },
            { id: 8, title: 'Contract Verification and Security', duration: '25 min', completed: false, content: 'Verify contracts on Etherscan, static analysis, and common security patterns. Write safe smart contracts.' },
            { id: 9, title: 'Libraries and Frameworks', duration: '20 min', completed: false, content: 'OpenZeppelin contracts for security. Learn to use established libraries and patterns.' },
            { id: 10, title: 'Gas Optimization', duration: '25 min', completed: false, content: 'Optimize for gas: storage packing, efficient loops, and bytecode optimization. Write cost-effective contracts.' },
            { id: 11, title: 'Front-end Integration', duration: '25 min', completed: false, content: 'Connect web3 contracts to frontend: ethers.js, Web3.js, and wagmi. Build complete Web3 dapps.' },
            { id: 12, title: 'Deployment to Testnet', duration: '20 min', completed: false, content: 'Deploy to Sepolia, Goerli, and other testnets. Get testnet funds and debug on real networks.' }
        ]
    }
];

// Initialize app
let currentCourse = null;
let userProgress = JSON.parse(localStorage.getItem('userProgress')) || {};

function initializeApp() {
    renderCoursesList();
    updateProgressTracking();
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('[id$="Section"]').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected section
    const sectionId = sectionName === 'home' ? 'homeSection' : 
                      sectionName === 'courses' ? 'coursesSection' :
                      sectionName === 'progress' ? 'progressSection' :
                      sectionName === 'resources' ? 'resourcesSection' : 'homeSection';
    
    document.getElementById(sectionId).classList.remove('hidden');
    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

function renderCoursesList() {
    const coursesList = document.getElementById('coursesList');
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    
    let filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm) || 
                            course.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || course.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    coursesList.innerHTML = filteredCourses.map(course => {
        const progress = userProgress[course.id] || { completed: 0, total: course.lessons.length };
        const progressPercent = Math.round((progress.completed / course.lessons.length) * 100);
        
        return `
            <div class="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 card-hover">
                <div class="gradient-blue h-32 flex items-center justify-center">
                    <div class="text-5xl">${course.icon}</div>
                </div>
                <div class="p-6">
                    <h3 class="text-lg font-bold text-slate-900 mb-2">${course.title}</h3>
                    <p class="text-slate-600 text-sm mb-4">${course.description}</p>
                    
                    <div class="mb-4">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-xs font-semibold text-slate-600">${progress.completed}/${course.lessons.length}</span>
                            <span class="text-xs font-semibold text-blue-600">${progressPercent}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progressPercent}%"></div>
                        </div>
                    </div>
                    
                    <div class="flex items-center justify-between text-sm text-slate-600 mb-4">
                        <span>${course.level}</span>
                        <span>${course.duration}</span>
                    </div>
                    
                    <button onclick="openCourse('${course.id}')" class="w-full gradient-blue text-white py-2 rounded-lg font-semibold hover:shadow-lg transition">
                        ${progressPercent === 0 ? 'Start Course' : 'Continue'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    if (filteredCourses.length === 0) {
        coursesList.innerHTML = '<div class="col-span-full text-center py-12 text-slate-500">No courses found. Try adjusting your filters.</div>';
    }
}

function openCourse(courseId) {
    currentCourse = courses.find(c => c.id === courseId);
    if (!currentCourse) return;
    
    // Initialize progress if not exists
    if (!userProgress[courseId]) {
        userProgress[courseId] = {
            completed: 0,
            total: currentCourse.lessons.length,
            completedLessons: []
        };
    }
    
    // Update course details section
    document.getElementById('courseTitle').textContent = currentCourse.title;
    document.getElementById('courseIconDetail').textContent = currentCourse.icon;
    document.getElementById('courseDescription').textContent = currentCourse.description;
    document.getElementById('courseLevel').textContent = `${currentCourse.level} • ${currentCourse.modules} modules`;
    document.getElementById('courseDuration').textContent = currentCourse.duration;
    document.getElementById('courseModules').textContent = `${currentCourse.modules} modules`;
    document.getElementById('courseDiff').textContent = currentCourse.level;
    
    // Update progress
    const progress = userProgress[courseId];
    const progressPercent = Math.round((progress.completed / currentCourse.lessons.length) * 100);
    document.getElementById('progressPercent').textContent = progressPercent + '%';
    document.getElementById('progressFill').style.width = progressPercent + '%';
    
    // Render lessons
    const lessonsList = document.getElementById('lessonsList');
    lessonsList.innerHTML = currentCourse.lessons.map((lesson, index) => {
        const isCompleted = userProgress[courseId].completedLessons.includes(lesson.id);
        return `
            <div class="lesson-item ${isCompleted ? 'completed' : ''}" onclick="openLesson(${lesson.id}, ${index})">
                <div class="flex items-center justify-between">
                    <div class="flex-1">
                        <h4 class="font-semibold text-slate-900">${lesson.title}</h4>
                        <p class="text-sm text-slate-600 mt-1">${lesson.duration}</p>
                    </div>
                    <div class="text-2xl ml-4">
                        ${isCompleted ? '✓' : '→'}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    showSection('courseDetail');
}

function openLesson(lessonId, index) {
    const lesson = currentCourse.lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    
    // Create a modal or expand view for lesson content
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div class="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
                <h3 class="text-2xl font-bold text-slate-900">${lesson.title}</h3>
                <button onclick="this.closest('.fixed').remove()" class="text-slate-500 hover:text-slate-700 text-2xl">×</button>
            </div>
            <div class="p-6">
                <p class="text-slate-600 leading-relaxed mb-6">${lesson.content}</p>
                <div class="flex gap-4">
                    <button onclick="markLessonComplete(${lesson.id}); this.closest('.fixed').remove();" class="flex-1 gradient-blue text-white py-2 rounded-lg font-semibold hover:shadow-lg transition">
                        Mark as Complete
                    </button>
                    <button onclick="this.closest('.fixed').remove()" class="flex-1 border border-slate-300 text-slate-700 py-2 rounded-lg font-semibold hover:bg-slate-50 transition">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function markLessonComplete(lessonId) {
    if (!currentCourse) return;
    
    const progress = userProgress[currentCourse.id];
    if (!progress.completedLessons.includes(lessonId)) {
        progress.completedLessons.push(lessonId);
        progress.completed = progress.completedLessons.length;
    }
    
    saveProgress();
    openCourse(currentCourse.id);
}

function completeCourse() {
    if (!currentCourse) return;
    
    // Mark all lessons as complete
    const progress = userProgress[currentCourse.id];
    currentCourse.lessons.forEach(lesson => {
        if (!progress.completedLessons.includes(lesson.id)) {
            progress.completedLessons.push(lesson.id);
        }
    });
    progress.completed = progress.completedLessons.length;
    
    saveProgress();
    openCourse(currentCourse.id);
    
    // Show completion message
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-md w-full p-8 text-center">
            <div class="text-6xl mb-4">🎉</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Course Complete!</h3>
            <p class="text-slate-600 mb-6">You've successfully completed ${currentCourse.title}</p>
            <div class="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
                <p class="text-sm font-semibold text-blue-900">Certificate of Completion</p>
                <p class="text-xs text-blue-700 mt-1">Download your certificate from your profile</p>
            </div>
            <button onclick="this.closest('.fixed').remove(); showSection('progress');" class="w-full gradient-blue text-white py-2 rounded-lg font-semibold hover:shadow-lg transition">
                View Progress
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

function saveProgress() {
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
    updateProgressTracking();
}

function updateProgressTracking() {
    // Update overall progress
    let totalLessons = 0;
    let completedLessons = 0;
    let completedCourses = 0;
    
    courses.forEach(course => {
        totalLessons += course.lessons.length;
        const progress = userProgress[course.id] || { completed: 0 };
        completedLessons += progress.completed;
        
        if (progress.completed === course.lessons.length) {
            completedCourses++;
        }
    });
    
    const overallPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    
    if (document.getElementById('overallProgress')) {
        document.getElementById('overallProgress').textContent = overallPercent + '%';
        document.getElementById('overallProgressBar').style.width = overallPercent + '%';
    }
    
    if (document.getElementById('completedCount')) {
        document.getElementById('completedCount').textContent = completedCourses;
    }
    
    // Update progress list
    const progressList = document.getElementById('progressList');
    if (progressList) {
        progressList.innerHTML = courses.map(course => {
            const progress = userProgress[course.id] || { completed: 0, total: course.lessons.length };
            const progressPercent = Math.round((progress.completed / course.lessons.length) * 100);
            const isComplete = progressPercent === 100;
            
            return `
                <div class="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-lg font-bold text-slate-900">${course.title}</h3>
                        <span class="${isComplete ? 'text-green-600' : 'text-blue-600'} font-bold">${progressPercent}%</span>
                    </div>
                    <div class="progress-bar mb-3">
                        <div class="progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                    <div class="text-sm text-slate-600 mb-3">${progress.completed}/${course.lessons.length} lessons completed</div>
                    <button onclick="openCourse('${course.id}')" class="text-blue-600 font-semibold hover:text-blue-700 text-sm">
                        ${isComplete ? 'Review Course' : 'Continue Learning'} →
                    </button>
                </div>
            `;
        }).join('');
    }
}

// Resources modals
function openGlossary() {
    const glossary = {
        'Blockchain': 'A distributed ledger technology that records transactions in blocks linked by cryptographic hashes.',
        'Smart Contract': 'Self-executing code on a blockchain that automatically enforces and executes the terms of an agreement.',
        'Gas': 'The computational cost required to execute transactions on Ethereum, measured in Gwei.',
        'Wallet': 'A software or hardware tool that stores cryptocurrency private keys and enables transactions.',
        'DeFi': 'Decentralized Finance - financial services built on blockchain without traditional intermediaries.',
        'NFT': 'Non-Fungible Token - a unique digital asset representing ownership on a blockchain.',
        'DAO': 'Decentralized Autonomous Organization - a community governed by smart contracts and voting.',
        'DEX': 'Decentralized Exchange - a platform for trading cryptocurrency without a central authority.',
        'Liquidity Pool': 'A smart contract that holds reserves of two assets and enables automated trading.',
        'Staking': 'Locking cryptocurrency in a network to earn rewards and help secure it.',
        'Yield Farming': 'Providing liquidity or performing other actions to earn rewards in DeFi protocols.',
        'Slippage': 'The difference between expected and actual price when executing a trade.',
        'Impermanent Loss': 'Potential loss for liquidity providers due to price movements between assets.',
        'Flash Loan': 'An uncollateralized loan that must be repaid in the same transaction.',
        'HODL': 'Hold On for Dear Life - a long-term investment strategy in cryptocurrency.',
        'FUD': 'Fear, Uncertainty, and Doubt - negative speculation affecting markets.',
        'FOMO': 'Fear of Missing Out - an emotional reaction to potential gains in crypto.',
        'Rug Pull': 'A scam where developers steal investor funds and abandon a project.',
        'Airdrop': 'Free tokens distributed to crypto users as marketing or reward.',
        'Whitepaper': 'A technical document describing a cryptocurrency or blockchain project.'
    };
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    const glossaryHtml = Object.entries(glossary).map(([term, definition]) => 
        `<div class="mb-4"><div class="font-bold text-slate-900">${term}</div><div class="text-sm text-slate-600">${definition}</div></div>`
    ).join('');
    
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div class="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
                <h3 class="text-2xl font-bold text-slate-900">Web3 Glossary</h3>
                <button onclick="this.closest('.fixed').remove()" class="text-slate-500 hover:text-slate-700 text-2xl">×</button>
            </div>
            <div class="p-6">${glossaryHtml}</div>
        </div>
    `;
    document.body.appendChild(modal);
}

function openLinks() {
    const links = [
        { name: 'Ethereum.org', url: 'https://ethereum.org', description: 'Official Ethereum documentation and guides' },
        { name: 'Bitcoin.org', url: 'https://bitcoin.org', description: 'Official Bitcoin information' },
        { name: 'Solana.com', url: 'https://solana.com', description: 'Solana blockchain documentation' },
        { name: 'Uniswap', url: 'https://uniswap.org', description: 'Leading decentralized exchange' },
        { name: 'OpenZeppelin', url: 'https://openzeppelin.com', description: 'Secure smart contract library' },
        { name: 'CoinMarketCap', url: 'https://coinmarketcap.com', description: 'Cryptocurrency market data' }
    ];
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    const linksHtml = links.map(link => 
        `<div class="border-b border-slate-200 pb-4 mb-4">
            <a href="${link.url}" target="_blank" class="font-bold text-blue-600 hover:text-blue-700">${link.name}</a>
            <p class="text-sm text-slate-600 mt-1">${link.description}</p>
        </div>`
    ).join('');
    
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div class="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
                <h3 class="text-2xl font-bold text-slate-900">Recommended Resources</h3>
                <button onclick="this.closest('.fixed').remove()" class="text-slate-500 hover:text-slate-700 text-2xl">×</button>
            </div>
            <div class="p-6">${linksHtml}</div>
        </div>
    `;
    document.body.appendChild(modal);
}

function openWhitepapers() {
    const whitepapers = [
        { name: 'Bitcoin Whitepaper', author: 'Satoshi Nakamoto', year: 2008 },
        { name: 'Ethereum Whitepaper', author: 'Vitalik Buterin', year: 2013 },
        { name: 'Solana Whitepaper', author: 'Anatoly Yakovenko', year: 2017 },
        { name: 'Polkadot Whitepaper', author: 'Gavin Wood', year: 2016 }
    ];
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    const whitepaperHtml = whitepapers.map(wp => 
        `<div class="border-b border-slate-200 pb-4 mb-4">
            <div class="font-bold text-slate-900">${wp.name}</div>
            <div class="text-sm text-slate-600 mt-1">by ${wp.author} (${wp.year})</div>
        </div>`
    ).join('');
    
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div class="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
                <h3 class="text-2xl font-bold text-slate-900">Whitepapers</h3>
                <button onclick="this.closest('.fixed').remove()" class="text-slate-500 hover:text-slate-700 text-2xl">×</button>
            </div>
            <div class="p-6">${whitepaperHtml}</div>
        </div>
    `;
    document.body.appendChild(modal);
}

function openTools() {
    const tools = [
        { name: 'MetaMask', type: 'Wallet', description: 'Popular browser extension wallet for Ethereum' },
        { name: 'Ledger', type: 'Hardware Wallet', description: 'Secure hardware wallet for crypto storage' },
        { name: 'Trezor', type: 'Hardware Wallet', description: 'Open-source hardware wallet' },
        { name: 'Etherscan', type: 'Block Explorer', description: 'View Ethereum transactions and smart contracts' },
        { name: 'OpenSea', type: 'NFT Marketplace', description: 'Buy and sell NFTs on multiple blockchains' },
        { name: 'Uniswap', type: 'DEX', description: 'Decentralized exchange for token swaps' }
    ];
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    const toolsHtml = tools.map(tool => 
        `<div class="border-b border-slate-200 pb-4 mb-4">
            <div class="flex justify-between items-start">
                <div>
                    <div class="font-bold text-slate-900">${tool.name}</div>
                    <div class="text-xs bg-blue-100 text-blue-700 inline-block px-2 py-1 rounded mt-1">${tool.type}</div>
                </div>
            </div>
            <p class="text-sm text-slate-600 mt-2">${tool.description}</p>
        </div>`
    ).join('');
    
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div class="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
                <h3 class="text-2xl font-bold text-slate-900">Web3 Tools & Wallets</h3>
                <button onclick="this.closest('.fixed').remove()" class="text-slate-500 hover:text-slate-700 text-2xl">×</button>
            </div>
            <div class="p-6">${toolsHtml}</div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Event listeners for search and filter
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', renderCoursesList);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', renderCoursesList);
    }
});