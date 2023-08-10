// spl = fungible; token program
// 1. create mint
// 2. create token account; for the public key to hold balance
// 3. Minting; Assignment; clue: with mint word
// 4. Any Image
// 5. Learn rust 

import 'dotenv/config'
import * as Web3 from '@solana/web3.js';
import base58 from 'bs58';
import * as token from "@solana/spl-token"; // download solana spl token: npm install @solana/spl-token



const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));


const publicKey = new Web3.PublicKey('HBc6iGW4D6cHtFFRqzBsKXTcw7HnTnP4uh5AyfecNpit');
const decode = base58.decode(process.env.PRIVATE_KEY as any); console.log(decode)
const keyPair = Web3.Keypair.fromSecretKey(decode)


async function main() {

    const tokenMint = await token.createMint(
        connection,
        keyPair,   
        publicKey,
        publicKey,
        9
    )
    console.log(tokenMint.toBase58());
}

main();