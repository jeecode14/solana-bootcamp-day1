import 'dotenv/config'
import * as Web3 from '@solana/web3.js';
import base58 from 'bs58';
// npm install --save bs58 dotenv

//console.log(process.env.PRIVATE_KEY);

async function main(){
    const decode = base58.decode(process.env.PRIVATE_KEY as any)
    const keyPair = Web3.Keypair.fromSecretKey(decode)
    console.log('publicKey', keyPair.publicKey)

    const publicKeyFrom = new Web3.PublicKey('HBc6iGW4D6cHtFFRqzBsKXTcw7HnTnP4uh5AyfecNpit');
    const publicKeyTo = new Web3.PublicKey('9bF7mJJGxfAzzFC8N3RayvpBKt1BHurvet5vkL5hghKB');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 100
    });

    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair])

    console.log('txtHash', txSignature)
}

main();