// import "https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css";
import "../common/assets/styles/globals.css";
import "nprogress/nprogress.css";
import type { AppProps } from "next/app";
import { configure, start, done } from "nprogress";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
      start();
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
      done();
    });
    router.events.on("routeChangeError", () => {
      setLoading(false);
      done();
    });
  }, [router]);
  return <Component {...pageProps} />;
}

export default MyApp;
