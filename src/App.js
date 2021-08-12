import logo from './logo.svg';
import './App.css';
import { useEthers, useEtherBalance, useContractCalls, ChainId, ERC20Interface } from '@usedapp/core';
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
        { etherBalance && <p>Balance: { formatEther(etherBalance) } ETH</p>}

        <table class="App-Tokens--Table">
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
        </table>
      </div>
    </div>
  );
}


export default App;
