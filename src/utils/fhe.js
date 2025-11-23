import { FHE } from "fhevm";

export function encryptSecret(plaintext, publicKey) {
    return FHE.encrypt(plaintext, publicKey);
}

export function decryptSecret(encrypted, privateKey) {
    return FHE.decrypt(encrypted, privateKey);
}
