# Para Multisig

A decentralized multisig wallet application built on the **Miden blockchain** with **Para embedded wallet** integration for ECDSA K256 Keccak-based transaction signing.

## Overview

Para Multisig enables multiple signers to collaboratively manage and execute transactions with customizable signature thresholds (M-of-N). The application consists of a Rust backend server that interfaces with the Miden blockchain and a React frontend that integrates with Para's embedded wallet system.

## Features

### Multisig Wallet Management

- Create multisig wallets with configurable thresholds (M-of-N signatures required)
- Add multiple signers with their EVM-compatible public keys
- View wallet balances and consumable notes

### Transaction Proposals

- **Consume Proposals**: Batch consume multiple notes into the multisig account
- **Send Proposals**: Transfer assets to recipient accounts
- Track proposal status (Pending → Ready → Executed)

### Signature Collecti

- Sign transaction proposals via Para embedded wallet
- Automatic threshold detection when enough signatures are collected
- Execute transactions once threshold is reached

### Single-Signer Operations

- Mint tokens from test faucets
- View account balances
- Send simple transactions

## Tech Stack

### Backend (Server)

- **Runtime**: Tokio async runtime
- **Framework**: Axum 0.8
- **Blockchain**: Miden Client 0.12.5
- **Storage**: SQLite

### Frontend (UI)

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State**: TanStack React Query
- **Wallet**: Para React SDK, Miden SDK

## Project Structure

```
para-multisig/
├── server/                 # Rust backend
│   ├── src/
│   │   ├── main.rs         # Entry point
│   │   ├── state.rs        # App state & Miden client
│   │   ├── storage.rs      # In-memory storage
│   │   ├── multisig.rs     # Multisig account creation
│   │   ├── multisig_auth.rs # Transaction authenticator
│   │   ├── handlers/       # HTTP request handlers
│   │   └── routes/         # API route definitions
│   └── Cargo.toml
│
└── ui/                     # React frontend
    ├── src/
    │   ├── App.tsx         # Main application
    │   ├── components/     # UI components
    │   ├── hooks/          # React hooks (useMiden, useMultisig)
    │   └── lib/            # Utilities & API client
    ├── package.json
    └── vite.config.ts
```

## API Endpoints

| Method | Endpoint                           | Description                 |
| ------ | ---------------------------------- | --------------------------- |
| GET    | `/health`                          | Health check                |
| GET    | `/multisig`                        | List all multisig accounts  |
| POST   | `/multisig`                        | Create new multisig account |
| GET    | `/multisig/{account_id}`           | Get account details         |
| GET    | `/multisig/{account_id}/notes`     | Get consumable notes        |
| GET    | `/multisig/{account_id}/balances`  | Get account balances        |
| POST   | `/multisig/{account_id}/consume`   | Create consume proposal     |
| POST   | `/multisig/{account_id}/send`      | Create send proposal        |
| GET    | `/multisig/{account_id}/proposals` | List proposals              |
| GET    | `/proposals/{proposal_id}`         | Get proposal details        |
| POST   | `/proposals/{proposal_id}/sign`    | Submit signature            |
| POST   | `/proposals/{proposal_id}/execute` | Execute transaction         |

## Getting Started

### Prerequisites

- Rust (latest stable)
- Node.js 18+
- pnpm
- Access to a Miden node

### Environment Variables

Create a `.env` file in the `ui/` directory:

```env
VITE_PARA_API_KEY=your_para_api_key
VITE_API_URL=http://127.0.0.1:3001
```

### Running the Server

```bash
cd server
cargo run
```

The server starts on `http://127.0.0.1:3001`.

### Running the UI

```bash
cd ui
pnpm install
pnpm dev
```

## How It Works

### Creating a Multisig Wallet

1. Connect your Para embedded wallet
2. Click "Create Multisig" and specify:
   - Wallet name
   - Signature threshold
   - Signer names and public keys
3. The server creates a Miden account with `AuthEcdsaK256KeccakMultisig` authentication

### Signing a Transaction

1. Create a proposal (consume or send)
2. The server generates a transaction summary commitment
3. Each signer reviews and signs via Para wallet
4. Signatures are collected until threshold is reached
5. Any party can execute the finalized transaction

### Signature Flow

```
Para Wallet                UI                    Server              Miden
    |                       |                       |                   |
    |<-- Sign Request ------|                       |                   |
    |--- ECDSA Signature -->|                       |                   |
    |                       |-- Transform & Submit->|                   |
    |                       |                       |-- Verify & Store->|
    |                       |                       |<-- Threshold Met--|
    |                       |                       |-- Execute TX ---->|
```

## License

MIT
