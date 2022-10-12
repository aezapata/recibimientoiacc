import styles from "../../styles/Header.module.css";
import Image from 'next/image'
import useDeviceDetect from "../hooks/useDeviceDetect";
export const Header = () => {
  const {isMobile} = useDeviceDetect()
  return (
    <div className={styles.container}>
       <Image
                src="/favicon.ico"
                alt="IACC"
                priority={true}
                width={isMobile ? 250 : 94.2}
                height={isMobile ? 250 : 69.6}
                layout="fixed"
              />
      <div> </div>
    </div>
  );
};
