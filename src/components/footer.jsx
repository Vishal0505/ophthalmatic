import { Box, Flex, Separator, Text } from "@radix-ui/themes";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPinIcon,
  Phone,
  Twitter
} from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import Container from "./ui/container";

export default function Footer() {
  return (
    <>
      <Box className="bg-footerbg">
        <Container>
          <Flex direction="column">
            <div className="grid grid-row-1 grid-flow-row sm:grid-cols-3 sm:grid-flow-col justify-items-center items-center py-7 sm:gap-0 gap-6 pl-4 sm:pl-0">
              <Flex className="sm:flex-row flex-col items-center gap-4 sm:gap-2">
                <Box className="border border-white rounded-full p-2 ">
                  <Phone fill="white" />
                </Box>
                <Flex
                  direction="column"
                  className="items-center sm:items-start"
                >
                  <Text
                    className="text-white text-lg text-center sm:text-start"
                    weight="medium"
                  >
                    Contact
                  </Text>
                  <Text className="text-white text-sm text-center sm:text-start">
                    +91 81402 59610
                  </Text>
                </Flex>
              </Flex>
              <Flex className="sm:flex-row flex-col items-center" gap="2">
                <Box className="border border-white rounded-full p-2 ">
                  <Mail fill="white" />
                </Box>
                <Flex
                  direction="column"
                  className="items-center sm:items-start"
                >
                  <Text
                    className="text-white text-lg text-center sm:text-start"
                    weight="medium"
                  >
                    Mail
                  </Text>
                  <Text className="text-white text-sm text-center sm:text-start">
                    export@gadhiyagroup.com
                  </Text>
                </Flex>
              </Flex>
              <Flex className="sm:flex-row flex-col items-center" gap="2">
                <Box className="border border-white rounded-full p-2 ">
                  <MapPinIcon fill="white" />
                </Box>
                <Flex
                  direction="column"
                  className="items-center sm:items-start"
                >
                  <Text
                    className="text-white text-lg text-start"
                    weight="medium"
                  >
                    Address
                  </Text>
                  <Text className="text-white text-sm text-start">
                    {" "}
                    525, 5th Floor, The Nikol Trade Center, Nr.
                  </Text>
                  <Text className="text-white text-sm text-start">
                    {" "}
                    Kanba Hospital, Nikol, Ahmedabad - 382350
                  </Text>
                </Flex>
              </Flex>
            </div>
            <Separator size="4" color="green" />
            <div className="grid grid-cols-1 sm:grid-cols-4 py-6 px-4 bg-footerbg justify-items-center  gap-8 sm:gap-0">
              <Box className="py-8 sm:py-0">
                <NavLink to="/" activeClassName="text-black">
                  <img
                    src={logo}
                    alt="Gadhiya Group Logo"
                    className="h-auto w-52"
                  />
                </NavLink>
              </Box>
              <Box>
                <Flex direction="column" gap="2">
                  <Text
                    as="h4"
                    className="text-lg font-bold text-center sm:text-start text-white mb-2 sm:mb-4"
                  >
                    Quick Links
                  </Text>

                  <NavLink
                    to="/about-us"
                    className="text-white hover:underline sm:text-start text-center"
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to="/about-us"
                    className="text-white hover:underline sm:text-start text-center"
                  >
                    Why Us
                  </NavLink>
                  <NavLink
                    to="/ware-house"
                    className="text-white hover:underline sm:text-start text-center"
                  >
                    Workshop
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="text-white hover:underline sm:text-start text-center"
                  >
                    Contact Us
                  </NavLink>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column" gap="2">
                  <Text
                    as="h4"
                    className="text-lg font-bold text-center sm:text-start text-white mb-2 sm:mb-4"
                  >
                    Services
                  </Text>
                  <NavLink
                    to="/csr-activity"
                    className="text-white hover:underline sm:text-start text-center"
                  >
                    CSR
                  </NavLink>
                  <NavLink
                    to="/export-activity"
                    className="text-white hover:underline sm:text-start text-center"
                  >
                    Export Activity
                  </NavLink>
                  <NavLink
                    to="/international-conference"
                    className="text-white hover:underline sm:text-start text-center"
                  >
                    International Conference
                  </NavLink>
                  <NavLink
                    to="/certificate"
                    className="text-white hover:underline sm:text-start text-center"
                  >
                    Certificate
                  </NavLink>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column" gap="2">
                  <Text
                    as="h4"
                    className="text-lg font-bold text-center sm:text-start text-white mb-2 sm:mb-4"
                  >
                    Our Products{" "}
                  </Text>
                  <NavLink
                    to="/csr-activity"
                    className="text-white hover:underline sm:text-start text-center"
                  >
                    Ceramics & Bathware
                  </NavLink>
                  <NavLink
                    to="/export-activity"
                    className="text-white hover:underline sm:text-start text-center"
                  >
                    Wall Clocks & Gift Items
                  </NavLink>
                  <NavLink
                    to="/international-conference"
                    className="text-white hover:underline sm:text-start text-center"
                  >
                    Rubber Mats & Other Products
                  </NavLink>
                </Flex>
              </Box>
            </div>
            <Separator size="4" color="green" />
            <Flex
              className="flex-col sm:flex-row gap-4 sm:gap-0"
              align="center"
              px="4"
            >
              <Flex gap="4" py="4">
                <Instagram color="white" className="size-5" />
                <Facebook color="white" className="size-5" />
                <Twitter color="white" fill="white" className="size-5" />
                <Linkedin color="white" fill="white" className="size-5" />
              </Flex>
              <Text className="text-white" size="2">
                © Ophthalmatic 2024 All right reserved.
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
