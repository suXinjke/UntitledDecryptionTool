const fs = require('fs')
const { decrypt } = require( './decrypt' )

const helpMessage =
`Untitled decryption tool

node decrypt.js <input file path> <output file path> [offset]
`

if ( process.argv.length < 4 ) {
    console.log( helpMessage )
    return
}

const [ INPUT_PATH, OUTPUT_PATH ] = process.argv.slice( 2, 4 )
const OFFSET = Number( process.argv.slice( 4 ) || 0 )
if ( Number.isNaN( OFFSET ) ) {
    throw new Error( `Provided offset is not a number` )
}
console.log( OFFSET )
const FILE = fs.readFileSync( INPUT_PATH )
const OUTPUT = decrypt( FILE, Number( OFFSET ) )
fs.writeFileSync( OUTPUT_PATH, OUTPUT )
console.log( `OK ${OUTPUT_PATH}` )