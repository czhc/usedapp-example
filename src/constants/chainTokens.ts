import { ChainId } from '@usedapp/core';

export const CHAIN_TOKENS = {
  [ChainId.Mainnet]: 'ETH',
  [ChainId.Ropsten]: 'rpETH',
  [ChainId.Kovan]: 'kETH',
  [ChainId.Rinkeby]: 'rbETH',
  [ChainId.Goerli]: 'gETH',
  [ChainId.BSC]: 'BNB',
  [ChainId.xDai]: 'xDAI',
  [ChainId.Polygon]: 'MATIC',
  [ChainId.Mumbai]: 'tMATIC',
  [ChainId.Harmony]: 'ONE',
  [ChainId.Localhost]: 'testETH',
  [ChainId.Hardhat]: 'testETH'
}