# useDapp Example

[usedapp.io](https://usedapp.io/)

## Notes

* `DAppProvider` - wraps application to manage all blockchain connections.
    * config parameters:
        * `readOnlyChainId`: default chain in readonly mode
        * `readOnlyUrls`: object mapping for ChainId to JSON RPC url
* `useEthers`: hook for connected-related modules e.g. chainId, account and [`ethers`](ethers.io) lib