import logo from './logo.svg';
import './App.css';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

function App() {

  const {
    chainId,
    activateBrowserWallet,
    account,
    deactivate
  } = useEthers();

  const etherBalance = useEtherBalance(account);

  // const tokenList = getTokenList(chainId);
  // const balances = useTokensBalance(tokenList, account);

  return (
    <div className="App">
      <div><img src={logo} className="App-logo" alt="logo" /></div>
      <div>
        {
          account ?
            <button onClick={() => deactivate()}>Disconnect</button> :
            <button onClick={() => activateBrowserWallet()}>Connect</button>
        }

        { account && <p>Account: {account}</p>}
        { etherBalance && <p>Balance: { formatEther(etherBalance) }</p>}
      </div>
    </div>
  );
}

export default App;
