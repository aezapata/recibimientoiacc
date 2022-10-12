import styles from "../../styles/Header.module.css";
import Image from 'next/image'
import useDeviceDetect from "../hooks/useDeviceDetect";
export const Header = () => {
  const {isMobile} = useDeviceDetect()
  return (
    <div className={styles.container}>
     
      <div> </div>
    </div>
  );
};
