import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Header} from "./components/header";

type LayoutProps = {
    children: JSX.Element,
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Recibimiento IACC</title>
        <meta name="description" content="Instituto atletico central cordoba" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Y EIA
        </a>
      </footer>
    </>
  );
}
