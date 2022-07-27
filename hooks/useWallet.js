import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { isMember } from "../utils";
import { toast } from "react-hot-toast";

const useWallet = () => {
  const { address, isConnecting } = useAccount();
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);

  const amIMember = async () => {
    const memberStatus = await isMember(address);
    if (memberStatus) {
      setAllowed(true);
      setLoading(false);
      toast.success("Verification completed successfully! 🥳");
    }
    if (!memberStatus) {
      setLoading(false);
      toast.error("Verification failed. ✋");
    }
  };

  useEffect(() => {
    if (!isConnecting) {
      amIMember().catch(err => console.error(err));
    }
  }, [address]);

  return { address, loading, allowed, isConnecting };

};

export default useWallet;