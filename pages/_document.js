import { Head, Html, Main, NextScript } from "next/document";

import i18nextConfig from "../next-i18next.config";

export default function Document(props) {
  const currentLocals =
    props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocals}>
      <Head>
        <link
          href="/fonts/SpaceGrotesk-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="/fonts/Poppins-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
