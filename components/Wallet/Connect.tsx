import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectWallet = () => {
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
