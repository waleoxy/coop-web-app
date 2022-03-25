import { StoreProvider } from "../contexts/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      {" "}
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
