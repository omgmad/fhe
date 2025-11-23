import { useState } from "react";
import { encryptSecret } from "../utils/fhe";
import FHETimelockABI from "../contracts/FHETimelock.json";
import { ethers } from "ethers";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

export default function CreateSecret({ signer, publicKey }) {
  const [secret, setSecret] = useState("");

  const storeSecret = async () => {
    const encrypted = encryptSecret(secret, publicKey);
    const contract = new ethers.Contract(contractAddress, FHETimelockABI, signer);
    await contract.updateSecret(encrypted);
    alert("Secret stored on-chain!");
  };

  return (
    <div>
      <input value={secret} onChange={e => setSecret(e.target.value)} placeholder="Enter your secret"/>
      <button onClick={storeSecret}>Store Secret</button>
    </div>
  );
}
