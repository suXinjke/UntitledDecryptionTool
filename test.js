const { decrypt } = require( './decrypt' )
const assert = require( 'assert' );

const INPUT = Buffer.from( '28 FF 5F C0 04 B4 0C A9 34 6F A0 81 88 FD 08 04'.split( ' ' ).map( x => parseInt( x, 16 ) ) )
const EXPECTED_OUTPUT = '51 DB D1 2D 87 9F D7 06 5E BC 94 51 A8 1C C1 1D'.split( ' ' ).map( x => parseInt( x, 16 ) )

const OUTPUT = decrypt( INPUT, 0 );
for ( let i = 0 ; i < EXPECTED_OUTPUT.length ; i++ ) {
    assert.strictEqual( OUTPUT[i], EXPECTED_OUTPUT[i], `Byte at location 0x${i.toString(16).toUpperCase()} didn't match` )
}

console.log( 'OK' )