import styles from "../../styles/Header.module.css";
import Image from 'next/image'
export const Header = () => {
  return (
    <div className={styles.container}>
       <Image
                src="/favicon.ico"
                alt="IACC"
                priority={true}
                width={94.2}
                height={69.6}
                layout="fixed"
              />
      <div> </div>
    </div>
  );
};
