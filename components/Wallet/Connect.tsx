import styled from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectWallet = () => {
  // const connectWithMetamask = useMetamask();
  // const disconnect = useDisconnect()
  // const address = useAddress();

  // useEffect(() => {
  //   address !== undefined && toast.success('Successfully connected with MetaMask 🦊')
  // }, [address])

  return (
    <div>
      <ConnectButton
        chainStatus="none"
        accountStatus="address"
        showBalance={false}
      />
    </div>
  );
};

export default ConnectWallet;