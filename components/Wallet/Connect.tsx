import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

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