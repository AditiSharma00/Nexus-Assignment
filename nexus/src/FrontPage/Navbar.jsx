import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { AiOutlineSearch } from "react-icons/ai";
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg={"#333"} position={"relative"} zIndex={1}>
      <Flex
        color={"#fffef2"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        alignItems={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={8} pt={4} mt={2}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontWeight={600}
            variant={"link"}
            href={"#"}
            color={"#fffef2"}
          >
            Log In
          </Button>
          <Button
            as={"a"}
            fontWeight={600}
            variant={"link"}
            href={"#"}
            color={"#fffef2"}
          >
            Cabinet
          </Button>
          <Button
            as={"a"}
            fontWeight={600}
            variant={"link"}
            href={"#"}
            color={"#fffef2"}
          >
            Cart
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav style={{ bg: "#F4F4E7" }} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontWeight={600}
                // color={linkColor}
                _hover={{
                  textDecoration: "none",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                boxShadow={"xl"}
                bg={"#333"}
                w={"140px"}
                border={"1px solid black"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link role={"group"} display={"block"} border={"1px solid #fffef2"}>
      <Stack direction={"row"} align={"center"} border={"1px solid #fffef2"}>
        <Box>
          <Text transition={"all .3s ease"} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }} bg={"#F4F4E7"}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          {...navItem}
          style={{ bg: "#F4F4E7" }}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
        borderBottom={"1px solid gray"}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Skin Care",
    children: [
      {
        label: "Skin Care",
      },
    ],
  },
  {
    label: "Body & Hand",
    children: [
      {
        label: "Body & Hand",
      },
    ],
  },
  {
    label: "Hair",

    children: [
      {
        label: "Hair",
      },
    ],
  },
  {
    label: "Fragrance",
    children: [
      {
        label: "Fragrance",
      },
    ],
  },
  {
    label: "Home",
    children: [
      {
        label: "Home",
      },
    ],
  },
  {
    label: "Kits & Travel",
    children: [
      {
        label: "Kits & Travel",
        href: "#",
      },
    ],
  },
  {
    label: "Gifts",
    children: [
      {
        label: "Gifts",
        href: "#",
      },
    ],
  },
  {
    label: "Read",
    children: [
      {
        label: "Read",
        href: "#",
      },
    ],
  },
  {
    label: "Stores",
    children: [
      {
        label: "open store loactor",
        href: "#",
      },
    ],
  },
  {
    label: (
      <AiOutlineSearch
        style={{
          width: "30px",
          height: "25px",
          marginTop: "-25px",
        }}
      />
    ),
    children: [
      {
        label: "open store loactor",
        href: "#",
      },
    ],
  },
];
