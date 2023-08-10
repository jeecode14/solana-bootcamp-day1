// npm init -y
// npm install --save@solana/web3.js

import * as Web3 from '@solana/web3.js';

async function main(){
    //console.log('hello world');
    const publicKey = new Web3.PublicKey('HBc6iGW4D6cHtFFRqzBsKXTcw7HnTnP4uh5AyfecNpit');
    //const endpoint = Web3.clusterApiUrl('devnet');
    //console.log(endpoint);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const balance = await connection.getBalance(publicKey);

    console.log('balance', balance)

    const accountInfo = await connection.getAccountInfo(publicKey);
    console.log('accountInfo', accountInfo);
}

main()