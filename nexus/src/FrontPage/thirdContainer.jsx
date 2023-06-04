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
// import "./FirstContainer.css";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

export default function ThirdContainer() {
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
        <div className="logotext" style={{}}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              textAlign: "left",
            }}
          >
            <header>
              <h2 style={{ fontWeight: "bold", fontSize: "medium" }}>
                Post-Poo Drops has returned
              </h2>
            </header>
            <br />
            <div>
              <div class="Paragraph-module_set__LZFen Paragraph-module_dark__Qz-sp Paragraph-module_large__-7Gyi HeroBannerContent-module_description__UIt-1">
                <p style={{ fontWeight: "lighter" }}>
                  Here to make the malodorous melodious once again. Dispense
                  this favoured formulation into the toilet bowl after flushing
                  to effectively mask disagreeable odours.
                </p>
              </div>
            </div>
            <br />
            <br />
            <div>
              <a
                className="le"
                href="/hk/en/r/parsley-seed-intense-serum/"
                target="_self"
                style={{
                  border: "1px solid gray",
                  padding: "15px 100px 15px 15px",
                }}
              >
                Discover Post-Poo Drops{" "}
              </a>
            </div>
          </div>
        </div>
        <div>
          <figure>
            <div>
              <picture>
                <source srcset="https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png" />

                <img
                  alt="Aesop Parsley Seed Anti-Oxidant Intense Serum bottles lined up next to a concrete wall"
                  loading="eager"
                  src="https://www.aesop.com/u1nb1km7t5q7/4SUhr7BGma03r1oHxGHgpY/736e8b4997372edbecf26d60044caabf/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg"
                />
              </picture>
            </div>
          </figure>
        </div>
      </div>
    </Container>
  );
}
