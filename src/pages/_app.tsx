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
      <meta name="description" content="にゃーん合同会社｜NYAN CO." />
      <link rel="icon" href="/favicon.png" />
      {/* ogp */}
      <title>
        にゃーん合同会社｜NYAN CO.
      </title>
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/ogp.png" />
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
