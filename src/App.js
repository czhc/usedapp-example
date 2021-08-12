import logo from './logo.svg';
import './App.css';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

function App() {

  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <div className="App">
      <div><img src={logo} className="App-logo" alt="logo" /></div>
      <div>
        <button onClick={() => activateBrowserWallet()}>
          { account ? 'Re-connect': 'Connect '}
        </button>
        { account && <p>Account: {account}</p>}
        { etherBalance && <p>Balance: { formatEther(etherBalance) }</p>}
      </div>
    </div>
  );
}

export default App;
