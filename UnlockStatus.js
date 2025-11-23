import { useEffect, useState } from "react";

export default function UnlockStatus({ unlockTime }) {
  const [timeLeft, setTimeLeft] = useState(unlockTime - Date.now()/1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(unlockTime - Date.now()/1000);
    }, 1000);
    return () => clearInterval(timer);
  }, [unlockTime]);

  return <div>{timeLeft > 0 ? `Locked: ${Math.floor(timeLeft)} seconds left` : "Unlocked!"}</div>;
}
