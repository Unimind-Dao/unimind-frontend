import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { ThemeProvider } from "styled-components";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { appWithTranslation } from "next-i18next";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Toaster from "../components/Toaster/Toaster";
import { useTheme } from "@mui/material";
import "@rainbow-me/rainbowkit/styles.css";
import "../index.css";
import "../styles/fonts.css";
import { COLORS } from "../theme/theme";

const { chains, provider } = configureChains(
  [chain.rinkeby],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const chainId = ChainId.Rinkeby;

function UnimindDao({ Component, pageProps }) {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ThirdwebProvider desiredChainId={chainId}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              accentColor: COLORS.primary,
              accentColorForeground: "black",
              borderRadius: "small",
              fontStack: "system",
            })}
          >
            <Component {...pageProps} />
            <Toaster />
          </RainbowKitProvider>
        </WagmiConfig>
      </ThirdwebProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(UnimindDao);
