import type { AppProps } from "next/app";

// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "black",
        backgroundColor: "black",
        backgroundImage: "/fondo.jpeg",
        lineHeight: "tall",
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
      a: {
        color: "teal.500",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
