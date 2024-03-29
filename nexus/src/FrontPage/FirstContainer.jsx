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
import Logo from "./Logo";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

export default function SplitWithImage() {
  return (
    <Container
      maxW={"100%"}
      py={12}
      bg={"rgb(246, 245, 232)"}
      className="container"
      color={"black"}
    >
      <div
        style={{
          backgroundColor: "rgb(246, 245, 232)",
        }}
        className="imagetext"
      >
        <div>
          <figure>
            <div>
              <picture>
                <source
                  media="(min-width: 1920px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/4bBiVangCUB2A9WlEs5NPl/6e88aea30ce982d78727433f059a1c42/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Desktop_XL_2560x1200px.jpg"
                />
                <source
                  media="(min-width: 1025px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/4SUhr7BGma03r1oHxGHgpY/736e8b4997372edbecf26d60044caabf/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg"
                />

                <source
                  media="(min-width: 640px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/eteg85jRjqdWWK9ntUMfH/4302818074a4706f38bcaf7413846f7b/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Tablet_1536x950px.jpg"
                />
                <source
                  media="(min-width: 0px)"
                  srcset="https://www.aesop.com/u1nb1km7t5q7/6RGVJ6lzt9hHpnwVvWU96O/bce5b71553c26dd5f3f739e06803ee42/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Mobile_640x640px.jpg"
                />
                <img
                  alt="Aesop Parsley Seed Anti-Oxidant Intense Serum bottles lined up next to a concrete wall"
                  loading="eager"
                  src="https://www.aesop.com/u1nb1km7t5q7/4SUhr7BGma03r1oHxGHgpY/736e8b4997372edbecf26d60044caabf/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg"
                />
              </picture>
            </div>
          </figure>
        </div>
        <div className="logotext" style={{}}>
          <div
            className="text"
            style={{
              display: "flex",
              flexDirection: "column",

              textAlign: "left",
            }}
          >
            <header>
              <h2 style={{ fontWeight: "bold", fontSize: "medium" }}>
                Supporting city skin
              </h2>
              <br />
              <h1 style={{ fontWeight: "lighter", fontSize: "25px" }}>
                Parsley Seed Anti-Oxidant Intense Serum
              </h1>
            </header>
            <br />
            <div>
              <div class="Paragraph-module_set__LZFen Paragraph-module_dark__Qz-sp Paragraph-module_large__-7Gyi HeroBannerContent-module_description__UIt-1">
                <p style={{ fontWeight: "lighter" }}>
                  Explore how this anti-oxidant-rich serum hydrates, replenishes
                  and fortifies the skin via a suite of ingredients selected
                  with urban dwellers in mind.
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
                Discover the formulation{" "}
              </a>
            </div>
          </div>
          <div className="logo">
            <a href="/hk/en/r/parsley-seed-intense-serum/" target="_self">
              <i aria-hidden="true">
                <Logo />
              </i>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
