import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
