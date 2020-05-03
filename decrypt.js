const fs = require('fs')

function signedIntToHex( number ) {
    if ( number < 0 ) {
      number = 0xFFFFFFFF + number + 1;
    }

    return number.toString(16).toUpperCase().padStart(8, '0');
}

function reverseStuff(inp = Buffer.from()) {
    const first = Buffer.from( inp.slice( 0, 4 ) )
    const second = Buffer.from( inp.slice( -4 ) )

    return [ first.reverse(), second.reverse() ]
}

function super_complex_twister( first = Buffer.from(), second = Buffer.from(), key = Buffer.from() ) {

    first = first.readUInt32LE(0)
    second = second.readUInt32LE(0)

    let eax = 0, ebx = 0, ecx = 0, edx = 0, edi = 0

    edx = key.readUInt32LE(0x54);
    edx = edx ^ first

    ecx = edx
    ecx = ecx >>> 0x10
    ecx = ecx & 0xff
    ecx = key.readUInt32LE(ecx * 4 + 0x458)
    edi = edx
    edi = edi >>> 0x18
    ecx += key.readUInt32LE(edi * 4 + 0x58) & 0xffffffff
    ebx = edx
    ebx = ebx >>> 0x8
    edi = ebx & 0xff
    ecx = ecx ^ key.readUInt32LE(edi * 4 + 0x858)
    edi = edx & 0xff
    ecx += key.readUInt32LE(edi * 4 + 0xc58) & 0xffffffff
    ecx = ecx ^ key.readUInt32LE(0x50)
    ecx = ecx ^ second
    ebx = ecx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = ecx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = ecx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = ecx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x4c)
    edx = edx ^ edi
    ebx = edx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = edx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = edx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = edx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x48)
    ecx = ecx ^ edi
    ebx = ecx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = ecx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = ecx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = ecx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x44)
    edx = edx ^ edi
    ebx = edx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = edx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = edx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = edx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x40)
    ecx = ecx ^ edi
    ebx = ecx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = ecx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = ecx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = ecx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x3c)
    edx = edx ^ edi
    ebx = edx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = edx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = edx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = edx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x38)
    ecx = ecx ^ edi
    ebx = ecx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = ecx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = ecx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = ecx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x34)
    edx = edx ^ edi
    ebx = edx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = edx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = edx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = edx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x30)
    ecx = ecx ^ edi
    ebx = ecx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = ecx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = ecx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = ecx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x2c)
    edx = edx ^ edi
    ebx = edx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = edx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = edx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = edx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x28)
    ecx = ecx ^ edi
    ebx = ecx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = ecx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = ecx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = ecx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x24)
    edx = edx ^ edi
    ebx = edx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = edx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = edx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = edx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x20)
    ecx = ecx ^ edi
    ebx = ecx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = ecx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = ecx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = ecx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x1c)
    edx = edx ^ edi
    ebx = edx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = edx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = edx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = edx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x18)
    ecx = ecx ^ edi
    ebx = ecx
    ebx = ebx >>> 0x10
    edi = ebx & 0xff
    edi = key.readUInt32LE(edi * 4 + 0x458)
    ebx = ecx
    ebx = ebx >>> 0x18
    edi += key.readUInt32LE(ebx * 4 + 0x58) & 0xffffffff
    ebx = ecx
    ebx = ebx >>> 0x8
    ebx = ebx & 0xff
    edi = edi ^ key.readUInt32LE(ebx * 4 + 0x858)
    ebx = ecx & 0xff
    edi += key.readUInt32LE(ebx * 4 + 0xc58) & 0xffffffff
    edi = edi ^ key.readUInt32LE(0x14)
    eax = key.readUInt32LE(0x10)
    edx = edx ^ edi
    eax = eax ^ ecx

    return [ edx, eax ]
}

const key = fs.readFileSync('./key.bin')

module.exports.decrypt = function( FILE = Buffer.from(), offset = 0 ) {
    let ebp = key.readUInt32LE(0x8)
    let ebx = key.readUInt32LE(0xC)

    const OUTPUT = Buffer.from( FILE )

    for ( let i = offset ; i < FILE.length ; i += 0x8 ) {
        const input = Buffer.from( FILE.slice( i, i + 0x8 ) )

        const [ reversed_1, reversed_2 ] = reverseStuff(input)

        let [ twisted_1, twisted_2 ] = super_complex_twister(reversed_1, reversed_2, key)

        let eax = twisted_2
        let ecx = twisted_1 ^ ebx
        ebx = reversed_2.readUInt32LE(0)
        input[7] = ecx & 0xFF

        let edx = ecx >>> 0x8
        input[6] = edx
        edx = ecx
        eax = ebp ^ eax

        ebp = reversed_1.readUInt32LE(0)
        edx = edx >>> 0x10
        input[5] = edx
        ecx = ecx >>> 0x18
        input[4] = ecx
        ecx = eax
        input[3] = eax
        edx = eax
        ecx = ecx >>> 0x8
        edx = edx >>> 0x10
        input[2] = ecx
        eax = eax >> 0x18
        input[1] = edx
        input[0] = eax

        OUTPUT.set( input, i )
    }

    return OUTPUT
}
