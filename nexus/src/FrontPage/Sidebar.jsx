import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import "./Sidebar.css";
function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sliderValue, setSliderValue] = useState(50);
  const handleTextClick = () => {
    onOpen();
  };

  const handleDrawerClose = () => {
    onClose();
  };
  const handleSliderChange = (value) => {
    setSliderValue(value);
  };
  return (
    <div>
      <Box bg="#252525">
        <p
          onClick={handleTextClick}
          font-size=" 1.4rem"
          fontWeight={"thin"}
          _hover={{
            bg: "#252525",
            textDecoration: "underline",
          }}
          className="sidebar-text"
        >
          Click and Collect is now available at select stores. Enjoy
          complimentary carbon neutral shipping on all orders. +
        </p>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={handleDrawerClose}
        size="xl"
      >
        <DrawerOverlay />
        <DrawerContent bg={"#f7faf1"}>
          <DrawerCloseButton
            border={"none"}
            style={{ _hover: { backgroundColor: "#252525" } }}
          />

          <DrawerBody
            bg={"#f7faf1"}
            fontSize={"sm"}
            className="sl"
            p={"150px 150px"}
          >
            <div class="FlyingPanel--content">
              <h2 class="FlyingPanel--title" style={{ fontWeight: "bold" }}>
                Shipping fees and delivery times{" "}
              </h2>
              <div>
                <div class="ShippingModal--row">
                  <div
                    class="ShippingModal--rowHeading"
                    id="sf-express-hong-kong"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div class="ShippingModal--title">
                      <div>
                        <p style={{ fontWeight: "bold" }}>
                          SF Express (Hong Kong SAR, China)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="ShippingModal--infoWrapper">
                    <div
                      class="ShippingModal--infoLineItem"
                      id="hk-all-orders-comp"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div class="ShippingModal--info">
                        <div>
                          <p>All orders</p>
                        </div>
                      </div>
                      <p class="ShippingModal--price">Complimentary</p>
                    </div>
                    <div
                      class="ShippingModal--infoLineItem"
                      id="Space"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div class="ShippingModal--info">
                        <div></div>
                      </div>
                    </div>
                    <div
                      class="ShippingModal--infoLineItem"
                      id="hk-delivery-time-urban"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div class="ShippingModal--info">
                        <div>
                          <p>Urban areas</p>
                        </div>
                      </div>
                      <p class="ShippingModal--price">2-3 business days</p>
                    </div>
                    <div
                      class="ShippingModal--infoLineItem"
                      id="hk-delivery-time-islands"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div class="ShippingModal--info">
                        <div>
                          <p>Outlying Islands</p>
                        </div>
                      </div>
                      <p class="ShippingModal--price">3-5 business days</p>
                    </div>
                  </div>
                </div>
                <div class="ShippingModal--row">
                  <div class="ShippingModal--rowHeading" id="lht-express-macau">
                    <div class="ShippingModal--title">
                      <div>
                        <p style={{ fontWeight: "bold" }}>
                          LHT Express (Macau SAR, China)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="ShippingModal--infoWrapper">
                    <div
                      class="ShippingModal--infoLineItem"
                      id="hk-mo-all-orders-comp"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div class="ShippingModal--info">
                        <div>
                          <p>All orders</p>
                        </div>
                      </div>
                      <p class="ShippingModal--price">Complimentary</p>
                    </div>
                    <div class="ShippingModal--infoLineItem" id="Space">
                      <div class="ShippingModal--info">
                        <div></div>
                      </div>
                    </div>
                    <div
                      class="ShippingModal--infoLineItem"
                      id="hk-macau-delivery-time"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div class="ShippingModal--info">
                        <div>
                          <p>All areas</p>
                        </div>
                      </div>
                      <p class="ShippingModal--price">5-7 business days</p>
                    </div>
                    <div class="ShippingModal--infoLineItem" id="Space">
                      <div class="ShippingModal--info">
                        <div></div>
                      </div>
                    </div>
                    <div
                      class="ShippingModal--infoLineItem"
                      id="hk-macau-dangerous-goods"
                    >
                      <div class="ShippingModal--info">
                        <div>
                          <p>
                            Regrettably we are unable to accept orders
                            containing Dangerous Goods to Macau SAR, China.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ShippingModal--row">
                  <div
                    class="ShippingModal--rowHeading"
                    id="complimentary-samples"
                  >
                    <div class="ShippingModal--title">
                      <div>
                        <p style={{ fontWeight: "bold" }}>
                          Complimentary samples
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="ShippingModal--infoWrapper">
                    <div
                      class="ShippingModal--infoLineItem"
                      id="complimentary-samples-body"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div class="ShippingModal--info">
                        <div>
                          <p>
                            All online orders include complimentary samples. At
                            checkout, select from the available bundles to add
                            them to your order.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ShippingModal--row">
                  <div
                    class="ShippingModal--rowHeading"
                    id="hk-click-and-collect"
                  >
                    <div class="ShippingModal--title">
                      <div>
                        <p>
                          <b></b>
                          <a href="/hk/en/r/click-and-collect/">
                            <b>Click and Collect</b>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="ShippingModal--infoWrapper">
                    <div
                      class="ShippingModal--infoLineItem"
                      id="click-and-collect-body"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div class="ShippingModal--info">
                        <div>
                          <p>
                            Simply choose{" "}
                            <a href="/hk/en/r/click-and-collect/">
                              in-store collection
                            </a>{" "}
                            at checkout, then pick up your order at your
                            preferred location.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="ShippingModal--infoLineItem" id="space"></div>
                    <div
                      class="ShippingModal--infoLineItem"
                      id="click-and-collect-body-2"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div class="ShippingModal--info">
                        <div>
                          <p>
                            For general enquiries regarding Click and Collect,
                            we welcome you to phone us on +852 3001 6734 instead
                            of contacting your local store.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ShippingModal--row">
                  <div class="ShippingModal--rowHeading" id="hk-returns">
                    <div class="ShippingModal--title">
                      <div>
                        <p style={{ fontWeight: "bold" }}>Returns</p>
                      </div>
                    </div>
                  </div>
                  <div class="ShippingModal--infoWrapper">
                    <div
                      class="ShippingModal--infoLineItem"
                      id="HK-Returns-info"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div class="ShippingModal--info">
                        <div>
                          <p>
                            Online purchases may be returned to us or any Aesop
                            Stores within 30 days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ShippingModal--row">
                  <div
                    class="ShippingModal--rowHeading"
                    id="carbon-neutral-shipping"
                  >
                    <div class="ShippingModal--title">
                      <div>
                        <p style={{ fontWeight: "bold" }}>
                          Carbon neutral shipping{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="ShippingModal--infoWrapper">
                    <div
                      class="ShippingModal--infoLineItem"
                      id="carbon-neutral-shipping-line-item"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div class="ShippingModal--info">
                        <div>
                          <p>
                            We offset operational emissions to ensure the
                            delivery of every order is carbon neutral.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DrawerBody>
          <div className="slider-container">
            <Slider
              orientation="vertical"
              aria-label="vertical-slider"
              defaultValue={sliderValue}
              onChange={handleSliderChange}
              min={0}
              max={100}
              step={1}
              height="100%"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Sidebar;
