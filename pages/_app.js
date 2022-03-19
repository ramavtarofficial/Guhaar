// import { MoralisProvider } from "react-moralis";
import '../styles/globals.css'
import Layout from '../components/Layout';
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider serverUrl={process.env.MORALIS_SERVER_URL} appId={process.env.MORALIS_APPLICATION_ID}>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoralisProvider>

    // <MoralisProvider serverUrl="" appId="">
    //
    // </MoralisProvider>

  )
};

export default MyApp;