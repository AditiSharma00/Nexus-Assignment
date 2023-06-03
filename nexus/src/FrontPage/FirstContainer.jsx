import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";
import "./FirstContainer.css"

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"100%"} py={12} bg={"rgb(246, 245, 232)"} className="container">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            fontWeight={200}
            fontSize={"4xl"}
            p={4}
            alignSelf={"flex-start"}
          >
            Aesop
          </Text>
          <Heading>Supporting city skin</Heading>
          <Text fontSize={"lg"}>Parsley Seed Anti-Oxidant Intense Serum</Text>
          <Text fontSize={"lg"} ml={"185px"} mr={"40px"}>
            Explore how this anti-oxidant-rich serum hydrates, replenishes and
            fortifies the skin via a suite of ingredients selected with urban
            dwellers in mind.
          </Text>
          <Button
            bg={"rgb(246, 245, 232)"}
            width={"320px"}
            ml={"200px"}
            border={"1px solid gray"}
            _hover={{
              bg: "#333",
              color: "#fffef2",
            }}
            p={"19px 26px"}
            borderRadius={"none"}
            fontWeight={"bold"}
            fontSize={"15px"}
          >
            Discover the Formulation
          </Button>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://www.aesop.com/u1nb1km7t5q7/4SUhr7BGma03r1oHxGHgpY/736e8b4997372edbecf26d60044caabf/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
