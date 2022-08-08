import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useTranslation } from "next-i18next";

const ConnectWallet = () => {
  const { t } = useTranslation("navigation");

  return (
    <>
      <ConnectButton
        label={t("connectWallet")}
        chainStatus="none"
        accountStatus="address"
        showBalance={false}
      />
    </>
  );
};

export default ConnectWallet;
