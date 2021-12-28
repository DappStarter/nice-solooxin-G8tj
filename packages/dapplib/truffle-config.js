require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun foot dad renew sad upper harvest immense army gasp'; 
let testAccounts = [
"0x29d2f0ad91156322eef7ec339c3b7ac6a5f89709acec27b29da8c46fe96cca2f",
"0xb560e978403ac51c8e755c282a661d78fd034d8b360efb06e8fd3147451da382",
"0x750494c0c984780b7b706824eea212ddd85e4efe0a9e9d3332059e03b8f2ba26",
"0xad969c6cdd0bf98ae7cb60b158490ae44a7bacf7e237302407466d231983df93",
"0x528ea5d43937a12e938813e1ee170711f9e80695257d7f71d7b98304c77ceaba",
"0x55fbd2112ca0a1b877a098ad9e3e1a1592709afac8f113a9b78758c651979156",
"0x4288bff0cbc86281d63af58e74f53ddf17f4e5d930500869f4ea66d7d7b059a7",
"0x12fecb6253b6db5a9e67926610c1c46049f5a3f56eeb5a81b8bfaf58d0320d28",
"0xcf6e7b016f40349908c4f2be8042c52bee34310a225cce35226e09226fb3a630",
"0x1af3fe02240c0785741d5d9b6d1903c411000389c54a96d11314fcdc595793dc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

