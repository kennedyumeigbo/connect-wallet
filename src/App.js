import './App.css';
import { useState } from 'react';

function App() {

  // Properties
  const [walletAddress, setWalletAddress] = useState("");

  // request access to MetaMask wallet in browser
  async function requestAccount() {
    console.log("Requesting account...");

    // Check if MetaMask exists
    if(window.ethereum) {
      console.log("metamask exists..")

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log("Error with connection.")
      }

    } else {
      console.log("no metamask sorry")
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h5>Please run on a browser that has MetaMask... <span>🦊</span></h5>
        <button onClick={requestAccount}>Connect Wallet</button>
        <h3>Wallet Address: {walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
