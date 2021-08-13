# useDapp Example

Deployed: [usedapp-example.vercel.app](https://usedapp-example.vercel.app/)

![Screenshot](./usedapp-example.png)

## Notes

* `DAppProvider` - main component, wraps around other Provider components which provide custom hooks for chain, block handling

* custom React Hooks for simpler (React native-ish) state management, abstracts from a lot of the complexities of even using `ethers`, `web3`. Also **updates components as new blocks are mined**.
    * `useEthers` wraps aronud `ethers` `provider` to get wallet, network data
    * `useContractCalls` for specific contract calls and return values
    * [source](https://github.com/EthWorks/useDApp/tree/master/packages/core/src/hooks)

* custom `Models` for data models, but additional functions to handle data presentation & formatting e.g. currency conversion, timestamps etc.
    * [source](https://github.com/EthWorks/useDApp/tree/master/packages/core/src/model)

* Helpers: more presentation, utilities functions
    * `getExplorerTransactionLink` points to [etherscan, bscscan](https://github.com/EthWorks/useDApp/blob/59592f354785780e7dc4ec648595022c05ba24c5/packages/core/src/helpers/chain.ts) etc.
    * [address](https://github.com/EthWorks/useDApp/blob/59592f354785780e7dc4ec648595022c05ba24c5/packages/core/src/helpers/address.ts) management including truncation, equals/matching etc.

## References

* [usedapp.io](https://usedapp.io/)
* [source:github](https://github.com/EthWorks/useDApp/)
* [Ethworks Medium](https://medium.com/ethworks/introducing-usedapp-framework-for-rapid-dapp-development-4959361f242a)
* [useDapp ReadTheDocs](https://usedapp.readthedocs.io/)
* [ethers/ethersproject docs](https://docs.ethers.io/)
