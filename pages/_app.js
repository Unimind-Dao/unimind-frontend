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

import "@rainbow-me/rainbowkit/styles.css";
import "../index.css";
import "../styles/fonts.css";
import theme from "../theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

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
  console.log("theme.palette.primary.main", theme.palette.primary.main);

  return (
    <ThemeProvider theme={theme}>
      <ThirdwebProvider desiredChainId={chainId}>
        <CssBaseline />
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              accentColor: theme.palette.primary.main,
              accentColorForeground: "black",
              borderRadius: "small",
              fontStack: "system",
            })}
          >
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
            <Toaster />
          </RainbowKitProvider>
        </WagmiConfig>
      </ThirdwebProvider>
    </ThemeProvider>
  );
}

export default UnimindDao;
