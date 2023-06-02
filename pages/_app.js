import { StoreProvider } from '../client/context/index';
import '@/styles/globals.css';
import Layout from './Layout';

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}
