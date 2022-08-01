import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { toast } from "react-hot-toast";
import { isMember } from "../utils";

const useWallet = () => {
  const { address, isConnecting } = useAccount();
  const [isAllowed, setIsAllowed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const amIMember = async () => {
    const memberStatus = await isMember(address);

    if (memberStatus) {
      setIsAllowed(true);
      setIsLoading(false);
      toast.success("Verification completed successfully! 🥳");
    }
    if (!memberStatus) {
      setIsLoading(false);
      toast.error("Verification failed. ✋");
    }
  };

  useEffect(() => {
    if (!isConnecting) {
      amIMember().catch(err => console.error(err));
    }
  }, [address]);

  return { address, isLoading, isAllowed, isConnecting };

};

export default useWallet;