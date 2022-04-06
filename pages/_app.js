import { SnackbarProvider } from "notistack";
import { StoreProvider } from "../contexts/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <StoreProvider>
        {" "}
        <Component {...pageProps} />
      </StoreProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
