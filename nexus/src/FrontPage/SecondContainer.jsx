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
import "./FirstContainer.css";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

export default function SecondConatiner() {
  return (
    <Container
      maxW={"100%"}
      py={12}
      bg={"#f7faf1"}
      className="container"
      color={"black"}
    >
      <div
        style={{
          backgroundColor: "#f7faf1",
        }}
        className="img imagetext"
      >
        <div>
          <figure>
            <div>
              <picture>
                <source srcset="https://www.aesop.com/u1nb1km7t5q7/1s7e7J0Y8Piw8fEPVeV72e/34ee50838a19fd38c74107f9a0766264/Aesop_A_Guide_To_Facial_Serums_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg" />

                <img
                  alt="Aesop Parsley Seed Anti-Oxidant Intense Serum bottles lined up next to a concrete wall"
                  loading="eager"
                  src="https://www.aesop.com/u1nb1km7t5q7/4SUhr7BGma03r1oHxGHgpY/736e8b4997372edbecf26d60044caabf/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg"
                />
              </picture>
            </div>
          </figure>
        </div>
        <div className="loe">
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              textAlign: "left",
            }}
          >
            <header>
              <h2 style={{ fontWeight: "bold", fontSize: "medium" }}>
                The Athenaeum
              </h2>
              <br />
              <h1 style={{ fontWeight: "lighter", fontSize: "25px" }}>
                A guide to facial serums
              </h1>
            </header>
            <br />
            <div>
              <div class="Paragraph-module_set__LZFen Paragraph-module_dark__Qz-sp Paragraph-module_large__-7Gyi HeroBannerContent-module_description__UIt-1">
                <p style={{ fontWeight: "lighter" }}>
                  A comprehensive guide to Aesop's plentiful offering of facial
                  serums. Learn about these skin care formulations designed for
                  different skin types.
                </p>
              </div>
            </div>
            <br />
            <br />
            <div>
              <a
                href="/hk/en/r/parsley-seed-intense-serum/"
                target="_self"
                style={{
                  border: "1px solid gray",
                  padding: "15px 100px 15px 15px",
                }}
              >
                Learn more about serums {" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
