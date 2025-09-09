import { ethers } from "ethers";
import { useState } from "react";


declare global {
  interface Window {
    ethereum?: any;
  }
}

function ConnectWallet() {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);


  async function connectToEthereum() {

    try {
      if (!window.ethereum) {
        alert("MetaMask not installed; Cant Work 😭😭");
        return;
      }

      
      const provider = new ethers.BrowserProvider(window.ethereum);

      
      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      setAddress(addr);

      const bal = await provider.getBalance(addr);
      setBalance(ethers.formatEther(bal));
    } catch (err) {
      console.error("Error connecting wallet:", err);
    }
  }

  return (
    <div className="w-full flex items-center justify-center">
      {address ? (
        <main className="max-w-lg md:max-w-3xl border-2 p-5 shadow-lg text-gray-700 rounded-lg flex flex-col  my-10">
          <p className="flex flex-col md:flex-row md:items-center gap-2 p-2"> <span className="text-2xl md:text-3xl  font-bold">
            Wallet:
             </span>
             <span>{address}</span>
             </p>
          <p > <span className=" text-2xl md:text-3xl font-bold">Balance:</span> {balance ? balance : "0"} ETH</p>
        </main>
      ) : (
        <div className=" my-10">
             <button
          onClick={connectToEthereum}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg "
        >
          Check Your Ethereum Balance
        </button>
        </div>
      
      )}
    </div>
  );
}

export default ConnectWallet;
