import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
}
