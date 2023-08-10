import fs from 'fs'
import { toMetaplexFile } from '@metaplex-foundation/js'
import { createMetaplexInstance } from './metaplex'

const buffer = fs.readFileSync(__dirname + '/jeecodetv.ico')
const file = toMetaplexFile(buffer, 'image.png')
const metaplex = createMetaplexInstance();

async function main() {
    const imageUrl = await metaplex.storage().upload(file);
    console.log('imageUrl', imageUrl);
    // https://arweave.net/7Hl60pk_ZrzkYv7PyVCVsAnf3EqGx_VD5E1-k49ezTE
}

main()