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
      <Drawer isOpen={isOpen} placement="left" onClose={handleDrawerClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Drawer Content</DrawerHeader>
          <DrawerBody>
            <p>
              sdfgthujkjhgftrdsxcvhjkuytredfcvbhjkuytredfcvhjyutredfcbvnmkiyutyrgcbvnbhyutresfcvbhjyutredcvbjkuytreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeewaszxcvbnkloiu7y6t5redsjkliu7y6t5rloSome
              data goes here...Some data goes here...Some data goes here...Some
              data goes here...Some data goes here...Some data goes
              here...vvSome data goes here...Some data goes here...Some data
              goes here...Some data goes here...Some data goes here...Some data
              goes here...Some data goes here...Some data goes here...Some data
              goes here...Some data goes here...Some data goes here...Some data
              goes here...Some data goes here...Some data goes here...Some data
              goes here...Some data goes here...Some data goes here...Some data
              goes here...Some data goes here...Some data goes here...Some data
              goes here...Some data goes here...Some data goes here...Some data
              goes here...Some data goes here...Some data goes here...Some data
              goes here...Some data goes here...Some data goes here...Some data
              goes here...Some data goes here...Some data goes here...
            </p>
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
