import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
  Wrap,
} from "@chakra-ui/react";
import Image from "next/image";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
   
      <Flex width={"100vw"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Card background={"rgba(0, 0, 0, 0.5)"} minW="sm" align={"center"}>
          <CardHeader>
            <Image
              src="/favicon.ico"
              alt="IACC"
              priority={true}
              width={150}
              height={150}
              layout="fixed"
            />
          </CardHeader>
          <CardBody>
            <Text color={"white"}>Será por defender nuestros colores</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="whiteAlpha">Aporta acá</Button>
          </CardFooter>
        </Card>
      </Flex>
    
  );
};

export default Index;
