import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../shared/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Será por defender estos colores</h1>
      </main>
    </Layout>
  );
};

export default Home;
