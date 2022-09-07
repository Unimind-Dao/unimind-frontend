import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { MetaTags } from "../components/MetaTags";
import Toaster from "../components/Toaster/Toaster";
import theme from "../theme/theme";
import createEmotionCache from "../utils/createEmotionCache";

import "@rainbow-me/rainbowkit/styles.css";
import "../index.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

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

function UnimindDao({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
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
              <>
                <Head>
                  <title>unimind.dao</title>
                  <MetaTags />
                </Head>
                <Component {...pageProps} />
                <Toaster />
              </>
            </RainbowKitProvider>
          </WagmiConfig>
        </ThirdwebProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(UnimindDao);
