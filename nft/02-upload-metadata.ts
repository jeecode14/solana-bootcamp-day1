import { createMetaplexInstance } from './metaplex'

async function main() {
    const metaplex = createMetaplexInstance();
    const metadata  = {
        name: 'Jeecode TV Logo',
        symbol: 'JCODETV',
        image: 'https://arweave.net/7Hl60pk_ZrzkYv7PyVCVsAnf3EqGx_VD5E1-k49ezTE',
        attributes: [
            {
                trait_type: 'batch',
                value: '2'
            },
            {
                trait_type: 'date',
                value: 'July 30, 2023'
            },
        ]
    }
    const result = await metaplex.nfts().uploadMetadata(metadata)
    console.log('result:', result)
    console.log('uri:', result.uri)
}

main()