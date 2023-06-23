import { AppProps } from "next/app";
import Head from "next/head";
import '../styles/global.scss'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" />
      <link rel="apple-touch-icon" href="/favicon.png" key="appleTouchIcon" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.png" />
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
