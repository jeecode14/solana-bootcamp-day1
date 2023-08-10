import 'dotenv/config'
import * as Web3 from '@solana/web3.js';
import base58 from 'bs58';
import * as token from "@solana/spl-token" // download solana spl token: npm install @solana/spl-token

const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));


// assign public key
const publicKey = new Web3.PublicKey('HBc6iGW4D6cHtFFRqzBsKXTcw7HnTnP4uh5AyfecNpit');
const decode = base58.decode(process.env.PRIVATE_KEY as any); console.log(decode)
const keyPair = Web3.Keypair.fromSecretKey(decode)
const tokenMint = "5UE7FSv7NeMsAJWHde5coDYHfWkmSXb3H48HMVSqqNdA"

async function main() {

    const tokenAccount = await token.createAccount(
        connection,
        keyPair,   
        new Web3.PublicKey(tokenMint),
        publicKey
    )
    console.log(tokenAccount.toBase58());
}

main();