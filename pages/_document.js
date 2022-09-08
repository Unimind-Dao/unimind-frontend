import createEmotionServer from "@emotion/server/create-instance";
import { Head, Html, Main, NextScript } from "next/document";

import i18nextConfig from "../next-i18next.config";
import createEmotionCache from "../utils/createEmotionCache";

const fontPaths = [
  "/fonts/SpaceGrotesk-Regular.woff",
  "/fonts/SpaceGrotesk-Medium.woff2",
  "/fonts/SpaceGrotesk-Medium.woff",
  "/fonts/Poppins-Regular.woff",
  "/fonts/Poppins-Medium.woff",
];

const getFontFormat = (path = "") =>
  `font/${path.slice(path.indexOf(".") + 1)}`;

const FontLink = () => (
  <>
    {fontPaths.map((path) => (
      <link
        key={path}
        href={path}
        type={getFontFormat(path)}
        rel="preload"
        as="font"
        crossOrigin="anonymous"
      />
    ))}
  </>
);

export default function Document(props) {
  const currentLocals =
    props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocals}>
      <Head>
        <FontLink />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export const getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
