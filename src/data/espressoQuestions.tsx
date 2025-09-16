const espressoQuestions = [
// Original Set
{
question: "What is Espresso?",
options: [
"A Layer 1 blockchain",
"A global confirmation layer for L2 chains",
"A centralized data provider",
"A cryptocurrency wallet"
],
answer: "B"
},
{
question: "What consensus protocol does Espresso use?",
options: [
"HotShot",
"Proof-of-Work",
"Snowflake",
"Tendermint"
],
answer: "A"
},
{
question: "How fast does HotShot confirm transactions?",
options: [
"A few milliseconds",
"Within a few minutes",
"Within a few seconds",
"One hour"
],
answer: "C"
},
{
question: "What is one benefit of using Espresso confirmations?",
options: [
"Increased mining rewards",
"Faster proof-of-stake finality",
"Near-instant access to reliable information across chains",
"Cheaper gas fees on Ethereum"
],
answer: "C"
},
{
question: "Which of the following risks does Espresso help prevent?",
options: [
"Chain halts",
"Sequencer equivocation",
"Validator slashing",
"Gas inflation"
],
answer: "B"
},
{
question: "During Mainnet 0, how many nodes are running the Espresso Network?",
options: [
"10",
"25",
"50",
"100"
],
answer: "D"
},
{
question: "What role can Espresso play besides confirmations?",
options: [
"Web hosting",
"NFT marketplace",
"Decentralized sequencing and data availability",
"Identity verification"
],
answer: "C"
},
{
question: "What type of participation is planned post-Mainnet 0?",
options: [
"Centralized delegation",
"Proof-of-authority voting",
"Permissionless proof-of-stake",
"Federated consensus"
],
answer: "C"
},
{
question: "Which of the following is NOT mentioned as an integration stack for Espresso?",
options: [
"Arbitrum Orbit",
"Polygon CDK",
"Solana VM",
"Cartesi"
],
answer: "C"
},
{
question: "What kind of rollups are mentioned as relevant for Espresso integration?",
options: [
"ZK rollups and Optimistic rollups",
"Plasma rollups and Validium",
"Hybrid rollups and Merge rollups",
"Multichain rollups and Oracle rollups"
],
answer: "A"
},
{
question: "How does Espresso improve scalability for applications?",
options: [
"By limiting transaction throughput",
"By providing low-cost data availability",
"By reducing block sizes",
"By enforcing rate limits"
],
answer: "B"
},
{
question: "What does Espresso aim to reduce for intent-based systems?",
options: [
"User latency",
"Finality risk",
"Hash rate volatility",
"Bandwidth consumption"
],
answer: "B"
},
{
question: "Which applications are explicitly supported during Espresso integration?",
options: [
"Solana and Avalanche",
"Cartesi and OP Stack chains",
"Tezos and Cosmos",
"Polkadot and Flow"
],
answer: "B"
},
{
question: "What is required to enable faster bridging using Espresso?",
options: [
"Setting up a validator node",
"Clicking the provided link to start integration",
"Minting an Espresso token",
"Running a ZK circuit"
],
answer: "B"
},

// Modular Stack Questions
{
question: "What design principle is central to the Espresso Network?",
options: [
"Immutability",
"Privacy by default",
"Modularity",
"Fixed consensus"
],
answer: "C"
},
{
question: "Which of the following is a required component to use Espresso?",
options: [
"Espresso’s decentralized sequencing",
"Ethereum for settlement",
"Centralized sequencers",
"None — all components are optional"
],
answer: "D"
},
{
question: "What benefit does Espresso provide to all chains that integrate with it?",
options: [
"Stablecoins",
"Reliable, fast confirmations",
"Gas rebates",
"Token bridging"
],
answer: "B"
},
{
question: "What is Espresso's approach to other data availability (DA) solutions?",
options: [
"Espresso replaces them entirely",
"Espresso ignores them",
"Espresso is incompatible with them",
"Espresso is designed to be compatible with them"
],
answer: "D"
},
{
question: "Which of the following are examples of alternative DA layers compatible with Espresso?",
options: [
"EigenDA, Celestia, Avail",
"Solana, Flow, Near",
"Bitcoin, Litecoin, Dogecoin",
"Polygon, Cosmos, BNB Chain"
],
answer: "A"
},
{
question: "Can a chain using its own sovereign sequencer still benefit from Espresso?",
options: [
"No, it must use Espresso sequencing",
"Yes, for confirmations only",
"Only if it uses Ethereum for DA",
"Only if it’s a validium"
],
answer: "B"
},
{
question: "What role can Espresso optionally play for a chain besides confirmations?",
options: [
"Liquidity provider",
"Governance framework",
"Decentralized sequencer and data availability layer",
"Private messaging system"
],
answer: "C"
},
{
question: "What is a 'caffeinated chain'?",
options: [
"A chain built only on Celestia",
"A rollup that uses Espresso for DA, sequencing, and confirmations",
"A rollup that uses Ethereum for all layers",
"A chain optimized for machine learning"
],
answer: "B"
},
{
question: "Which of the following describes a validium using Espresso?",
options: [
"Uses Espresso only for token minting",
"Uses Ethereum for sequencing and DA",
"Uses its own sequencer, but Espresso for DA and confirmations",
"Runs only on the OP stack"
],
answer: "C"
},
{
question: "Which of the following is *not* required to use Espresso?",
options: [
"Using Ethereum for settlement",
"Using Espresso confirmations",
"Using decentralized sequencing from Espresso",
"Using centralized sequencing"
],
answer: "C"
},
{
question: "What kind of rollups can apply the use cases discussed for Espresso?",
options: [
"Only Ethereum rollups",
"Only based rollups",
"Only ZK rollups",
"Ethereum rollups and sovereign rollups"
],
answer: "D"
},

// Global Confirmation Layer Questions
{
question: "What is Espresso’s Global Confirmation Network?",
options: [
"A centralized database for transaction logs",
"A shared source of truth for confirmations across chains",
"A messaging protocol between sequencers",
"A ZK rollup execution engine"
],
answer: "B"
},
{
question: "Which consensus protocol powers Espresso’s Global Confirmation Network?",
options: [
"Tendermint",
"Proof-of-Stake",
"HotShot",
"Snowman++"
],
answer: "C"
},
{
question: "How long does it typically take HotShot to confirm a transaction?",
options: [
"15 minutes",
"Several hours",
"A few seconds",
"10 blocks"
],
answer: "C"
},
{
question: "What advantage does HotShot provide over Ethereum L1 in terms of bridging?",
options: [
"Higher block reward incentives",
"Instant finality using zk-SNARKs",
"Bridging can happen in seconds instead of 15 minutes",
"Lower validator set requirements"
],
answer: "C"
},
{
question: "How does HotShot prevent sequencer equivocation?",
options: [
"By encrypting transaction order",
"By locking sequencers in advance",
"By confirming the sequence quickly before L1 finality",
"By posting hashes to IPFS"
],
answer: "C"
},
{
question: "What is the required adversarial stake to revert a HotShot-confirmed transaction?",
options: [
"10%",
"33%",
"50%",
"100%"
],
answer: "B"
},
{
question: "What happens if a safety breach occurs in HotShot?",
options: [
"The L1 reorgs to resolve it",
"Bridging is paused for 24 hours",
"The adversary’s stake is slashed",
"Transactions are sent to arbitration"
],
answer: "C"
},
{
question: "How does HotShot enhance cross-chain applications like bridges?",
options: [
"By providing a unified wallet interface",
"By allowing instant withdrawals without confirmations",
"By reducing confirmation latency across chains",
"By replacing rollup settlement contracts"
],
answer: "C"
},
{
question: "What does HotShot's confirmation guarantee closely mirror?",
options: [
"Polygon PoS",
"Solana consensus",
"Ethereum L1",
"Cosmos Hub"
],
answer: "C"
},
{
question: "Why is a shared Global Confirmation Network better than multiple centralized sequencers?",
options: [
"It improves token price stability",
"It eliminates the need for bridges",
"It reduces the risk of equivocation from hacks or bad actors",
"It adds more validators to Ethereum"
],
answer: "C"
}
];
  export default espressoQuestions;