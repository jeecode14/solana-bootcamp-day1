import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import base58 from 'bs58';

const publicKey = new Web3.PublicKey('HBc6iGW4D6cHtFFRqzBsKXTcw7HnTnP4uh5AyfecNpit');
const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));

const decode = base58.decode(process.env.PRIVATE_KEY as any); 
const keyPair = Web3.Keypair.fromSecretKey(decode)


async function main() {
    
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: publicKey,
                isSigner: true,
                isWritable: false,
            }
        ],
        data: Buffer.alloc(20),
        programId: new Web3.PublicKey('9KtHCypL5ySeF74EUTS45X9r7qWuYvbBMTe69CDP72FS'),
    });

    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    
    const signature = await Web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [keyPair]
    )
    //.then(() => process.exit(0))
    .catch(err => {
        console.error("error:",err)
    });
    console.log('SIGNATURE', signature)
}

main()
