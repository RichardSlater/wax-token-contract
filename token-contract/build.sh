mkdir /wax/token-contract/build
cd /wax/token-contract/build
cmake ..
make clean
make

rm -f ~/eosio-wallet/default.wallet && cleos wallet create -f /root/default_wallet.pwd && cleos wallet import --private-key $PRV_KEY
cleos -u $ENDPOINT set contract $ACCOUNT /wax/token-contract/build/token /wax/token-contract/build/token/token.wasm /wax/token-contract/build/token/token.abi -p scetrovtests@active
rm -f ~/eosio-wallet/default.wallet