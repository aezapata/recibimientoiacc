// import styles from "../../styles/Footer.module.scss";
// import Image from "next/image";
// import useDeviceDetect from "../hooks/useDeviceDetect";
// import { Box } from "@chakra-ui/react";

// const SlideWithImage = ({ image }: any) => {
//   return (
//     <Box className={styles.slide}>
//       <Image
//         className={styles.image}
//         src={"/" + image}
//         alt="IACC"
//         priority={true}
//         width={94.2}
//         height={94.2}
//       />
//     </Box>
//   );
// };

// export const Footer = () => {
//   const { isMobile } = useDeviceDetect();

//   const urlImages = [
//     "lpda.png",
//     "musicaGloriosa.jpeg",
//     "gloriosoIACC.png",
//     "zonasur.png",
//     "lavozdelhincha.png",
//     "lpdaLetras.png",
//   ];
//   const urlImagesQ = [...urlImages, ...urlImages, ...urlImages, ...urlImages];
//   return (
//     <Box className={styles.container}>
//       <Box className={styles.slider}>
//         <Box className={styles.slideTrack}>
//           {urlImagesQ.map((imageUrl) => (
//             <SlideWithImage image={imageUrl} />
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };
