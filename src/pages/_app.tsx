import "../common/assets/styles/globals.css";
import "nprogress/nprogress.css";
import type { AppProps } from "next/app";
import { configure, start, done } from "nprogress";
import { useEffect } from "react";
import { useRouter } from "next/router";
configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      start();
    });
    router.events.on("routeChangeComplete", () => {
      done();
    });
    router.events.on("routeChangeError", () => {
      done();
    });
  }, [router]);
  return <Component {...pageProps} />;
}

export default MyApp;
