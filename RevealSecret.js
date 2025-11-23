import { decryptSecret } from "../utils/fhe";
import FHETimelockABI from "../contracts/FHETimelock.json";
import { ethers } from "ethers";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

export default function RevealSecret({ signer, privateKey }) {
  const [secret, setSecret] = useState("");

  const reveal = async () => {
    const contract = new ethers.Contract(contractAddress, FHETimelockABI, signer);
    const encrypted = await contract.revealSecret();
    const decrypted = decryptSecret(encrypted, privateKey);
    setSecret(decrypted);
  };

  return (
    <div>
      <button onClick={reveal}>Reveal Secret</button>
      {secret && <p>Your secret: {secret}</p>}
    </div>
  );
}
