import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";
import i18nextConfig from "../next-i18next.config";

export default function Document(props) {
  const currentLocals =
    props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocals}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
