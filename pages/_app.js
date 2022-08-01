import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { ThemeProvider } from "styled-components";
import { darkTheme, getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig, } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Toaster from "../components/Toaster/Toaster"
import { theme } from "../theme/theme";
import '@rainbow-me/rainbowkit/styles.css';
import "../index.css"

const { chains, provider } = configureChains(
  [chain.rinkeby],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

const chainId = ChainId.Rinkeby;


function UnimindDao({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={chainId}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme({
          accentColor: theme.colors.primary,
          accentColorForeground: 'black',
          borderRadius: 'small',
          fontStack: 'system',
        })}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <Toaster />
          </ThemeProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ThirdwebProvider>
  )
}

export default UnimindDao