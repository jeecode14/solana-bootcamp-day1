import { createMetaplexInstance } from './metaplex'

async function main() {
    const metaplex = createMetaplexInstance();
    const {nft} = await metaplex.nfts().create({
        uri:'https://arweave.net/T7VvSh_mG5Ij_jxG_0hg2hAGjnLSmUODZEvHkqBxkD4', //metadata of the nft
        name:'Jeecode TV Logo',
        sellerFeeBasisPoints: 5000 // => 50% ; Move to 2 decimal places; unit is percent (%) ; royalty
    },
    {
        commitment: 'finalized'
    })

    console.log(nft)
}

main()