import { ethers } from "ethers";

export default function ConnectWallet({ setSigner }) {
  const connect = async () => {
    if (!window.ethereum) return alert("Install MetaMask!");
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    setSigner(signer);
  };

  return <button onClick={connect}>Connect Wallet</button>;
}
