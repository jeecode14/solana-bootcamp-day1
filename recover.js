// recover.js
//import 'dotenv/config'

const bs58 = require('bs58');
const fs = require('fs');
b = bs58.decode('5DgN3M9xEMw4B4Lj6ZoERcudodtcWSH3sJcspuQYBZi2nD13ufWqfbL6hyBgp4XAA6zGp3t3EUgr2URcfp2u8FLt');
j = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);
fs.writeFileSync('key.json', `[${j}]`);