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

export default function FourthConatiner() {
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
        className="imagetext"
      >
       <div>
  <figure>
    <div>
      <video autoPlay loop playsInline>
        <source src="https://videos.ctfassets.net/u1nb1km7t5q7/3H3gi1VVqEIO5FXiJK9uHE/b9587027398dd4edbe29526e5d3fee67/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Gift_Finder_1920x1080px.mp4" type="video/mp4"/>
      </video>
    </div>
  </figure>
</div>

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
                Discover the formulation{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
