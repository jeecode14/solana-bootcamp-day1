// install npm i --save @metaplex-foundation/js

import 'dotenv/config'
import * as Web3 from '@solana/web3.js';
import base58 from 'bs58';
import {Metaplex, keypairIdentity, bundlrStorage} from '@metaplex-foundation/js'

const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
const decode = base58.decode(process.env.PRIVATE_KEY || 'any')
const keyPair = Web3.Keypair.fromSecretKey(decode)

export  const createMetaplexInstance = () => {
    const metaplex = Metaplex.make(connection)
    .use(keypairIdentity(keyPair))
    .use(bundlrStorage({
        address: 'https://devnet.bundlr.network',
        providerUrl: Web3.clusterApiUrl('devnet'),
        timeout: 60000
    }))
    return metaplex
}