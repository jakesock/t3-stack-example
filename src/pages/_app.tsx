import { api } from "@/utils/api";
import { type AppType } from "next/app";

import "@fontsource/poppins";
import "../styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(App);
