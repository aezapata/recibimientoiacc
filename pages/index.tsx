import type { NextPage } from "next";
import Layout from "../shared/layout";
import styles from "../styles/Home.module.css";
import Image from 'next/image'
const Home: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
      <Image
                src="/favicon.ico"
                alt="IACC"
                priority={true}
                width={250}
                height={250}
                layout="fixed"
              />
        <h1 className={styles.title}>Será por defender estos colores</h1>
      </main>
    </Layout>
  );
};

export default Home;
