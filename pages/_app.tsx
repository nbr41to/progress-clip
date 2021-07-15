import { AuthProvider } from '../src/context/Auth';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
