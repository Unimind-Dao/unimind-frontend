import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Toaster from "../components/Toaster/Toaster";
import { ThemeProvider } from "@mui/material";
import "@rainbow-me/rainbowkit/styles.css";
import "../index.css";
import "../styles/fonts.css";
import theme from "../theme/theme";
import "@rainbow-me/rainbowkit/styles.css";
import "../index.css";
import "../styles/fonts.css";

const { chains, provider } = configureChains(
  [chain.rinkeby],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()],
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
  return (
    <ThemeProvider theme={theme}>
      <ThirdwebProvider desiredChainId={chainId}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} theme={darkTheme({
            accentColor: theme.palette.primary.main,
            accentColorForeground: "black",
            borderRadius: "small",
          })}>
            <Component {...pageProps} />
            <Toaster />
          </RainbowKitProvider>
        </WagmiConfig>
      </ThirdwebProvider>
    </ThemeProvider>
  );
}

export default UnimindDao;
