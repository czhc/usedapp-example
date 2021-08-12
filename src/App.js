import logo from './logo.svg';
import './App.css';
import { useEthers, useEtherBalance, useContractCalls, ChainId, ERC20Interface } from '@usedapp/core';
import { CHAIN_TOKENS } from './constants/chainTokens';
import { formatEther, formatUnits } from '@ethersproject/units';

import uniswapToken from '@uniswap/default-token-list'

const getTokenList = (chainId?: ChainId) =>
    uniswapToken.tokens.filter((token) => token.chainId === chainId)

const useTokensBalance = (tokenList: any[], account?: string | null) =>  {
    return useContractCalls(
      tokenList && account
        ? tokenList.map((token: any) => ({
          abi: ERC20Interface,
          address: token.address,
          method: 'balanceOf',
          args: [account]
        }))
        : []
      )
}

const notEthereum = (chainId?: ChainId): Boolean => {
  return chainId && [1,3,4,5,42].indexOf(chainId) === -1
};

const tokenListTable = (tokenList, balances) => {
  return <table class="App-Tokens--Table">
    <tr>
      <th></th>
      <th>Symbol</th>
      <th>Token</th>
      <th>Balance</th>
    </tr>
    {
      tokenList &&
        tokenList.map((token, idx) => (
            <tr>
              <td><img class="App-Tokens--Icon" src={token.logoURI} alt={token.name}/></td>
              <td><span class="App-Tokens--Symbol">{token.symbol}</span></td>
              <td><span class="App-Tokens--Name">{token.name}</span></td>
              <td><span>{
                balances[idx] &&
                  formatUnits(balances[idx][0], token.decimals)}
              </span></td>
            </tr>
          ))
      }
  </table>;
}

function App() {

  const {
    chainId,
    activateBrowserWallet,
    account,
    deactivate
  } = useEthers();

  const etherBalance = useEtherBalance(account);

  const tokenList = getTokenList(chainId);
  const balances = useTokensBalance(tokenList, account);

  return (
    <div className="App">
      <h1>useDapp Example</h1>
      <div><img src={logo} className="App-logo" alt="logo" /></div>
      <div>
        {
          account ?
            <button class="App-Connect" onClick={() => deactivate()}>Disconnect</button> :
            <button class="App-Connect" onClick={() => activateBrowserWallet()}>Connect</button>
        }

        { account && <p>Account: {account}</p>}
        <p>Connected to: {ChainId[chainId]}</p>
        { etherBalance && <p>Balance: { formatEther(etherBalance) } { CHAIN_TOKENS[chainId]}</p>}

        { notEthereum(chainId)
            ? <p class="alert">Network not supported. </p> :
            tokenListTable(tokenList, balances)
          }

      </div>
    </div>
  );
}


export default App;
