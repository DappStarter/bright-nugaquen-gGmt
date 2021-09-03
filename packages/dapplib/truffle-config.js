require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift rescue stereo umbrella imitate private fortune gasp'; 
let testAccounts = [
"0xd40c0e4a5e9fe41b63d95cf644beb1b85d579c4ae34cd8ba5d74defbdfd1a3b6",
"0xe714aaaa0c16333db15d70b11634a7bd53f85a2c2db9115b2be5b6893fadb048",
"0x4c8816195ef0cfbf7542d5eba351653faf45aefc8c5edcfede9aa68c8f568f20",
"0x13bb3326a3656491dd94d2d2a70b46910682261bc44d592f03b46386e0d856b7",
"0x952babafe153d916d30ed1cb3d80bc11df6dae03abc81b1ba221d02df21e05d7",
"0xe4b834e4b345e8dd77902becfa33ddc22db45e839d332f3b44f61ddb22ddde77",
"0x1365e288a25337c563cd66f6949508010b488286b05e6417780751c557e3755c",
"0x4890d0ea6239c3817d30950d7b967086264054af22adb9258060f0b8731c06e6",
"0x47ff714db2f0518d31407a4f3437f6c52d064624379b993b070c9978b554b940",
"0x64a7a9e87a3835bf716de3966f43020923ad195296a4e5d34a17b20c66c2ffd2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


