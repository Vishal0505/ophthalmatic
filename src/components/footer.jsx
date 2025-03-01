import { Box, Flex, Separator, Text } from "@radix-ui/themes";
import { NavLink } from "react-router-dom";
import footer_logo from "../assets/logo/footer_logo.png";
import Container from "./ui/container";
import FooterPhone from "./icons/round/footer-phone";
import FooterEmail from "./icons/round/footer-email";
import FooterAddress from "./icons/round/footer-address";
import Instagram from "./icons/instagram";
import Facebook from "./icons/facebook";
import Twitter from "./icons/twitter";
import Linkedin from "./icons/linkedin";
import { scrollToTop } from "../utils/utils";

export default function Footer() {

  return (
    <>
      <Box className="bg-footerbg">
        <Container>
          <Flex direction="column">
            {/*  contact section   */}

            <Flex className="text-white py-8 flex-col lg:flex-row gap-2 lg:gap-[100px]">
              {/* Footer logo   */}
              <Flex direction='column' className="py-8 lg:py-0" gap='4'>
                <NavLink to="/" activeClassName="text-gray-500" onClick={scrollToTop}>
                  <img src={footer_logo} alt="Logo" className="" />
                </NavLink>
                <Text className="text-base font-medium sm:text-start text-white" >
                  CE & ISO 13485 : 2016 Certified Company
                </Text>
              </Flex>
              <Flex className="flex-1 flex-col sm:flex-row gap-8 sm:gap-0" justify='between'>
                {/* quick links section   */}
                <Flex className="!justify-start sm:!justify-center px-0 sm:px-2">
                  <Flex className="col-span-1 lg:col-span-2  !justify-start sm:!justify-center" >
                    <Flex direction="column" gap="4" className="text-start" >
                      <Text as="h4" className="text-lg font-bold text-white mb-2" >
                        Quick Links
                      </Text>
                      <NavLink to="/" onClick={scrollToTop} className="text-white hover:text-primary">
                        Home
                      </NavLink>
                      <NavLink to="/about-us" onClick={scrollToTop} className="text-white hover:text-primary">
                        About Us
                      </NavLink>
                      <NavLink to="/contact" onClick={scrollToTop} className="text-white hover:text-primary">
                        Contact Us
                      </NavLink>
                      <NavLink to="/dealership" onClick={scrollToTop} className="text-white hover:text-primary">
                        Become our dealer
                      </NavLink>
                      <NavLink to="/blogs" onClick={scrollToTop} className="text-white hover:text-primary">
                        Blogs & Articles
                      </NavLink>
                    </Flex>
                  </Flex>
                </Flex>
                {/* our products section  */}
                <Flex className="!justify-start sm:!justify-center px-0 sm:px-2">
                  <Flex className="col-span-1 lg:col-span-2  !justify-start sm:!justify-center" >
                    <Flex direction="column" gap="4" className="text-start">
                      <Text as="h4" className="text-lg font-bold text-white mb-2" >
                        Our Products{" "}
                      </Text>
                      <NavLink to="/product" className="text-white hover:text-primary" onClick={scrollToTop}>
                        Ophthalmic Refraction Unit
                      </NavLink>
                      <NavLink to="/product" className="text-white hover:text-primary" onClick={scrollToTop}>
                        Ophthalmic Opretion Table
                      </NavLink>
                      <NavLink to="/product" className="text-white hover:text-primary" onClick={scrollToTop} >
                        Ophthalmic Instrument Table
                      </NavLink>
                      <NavLink to="/product" className="text-white hover:text-primary" onClick={scrollToTop}>
                        Arm For Phoropter
                      </NavLink>
                      <NavLink to="/product" className="text-white hover:text-primary" onClick={scrollToTop}>
                        Surgeon’s Chair
                      </NavLink>
                    </Flex>
                  </Flex>
                </Flex>
                {/* service and social section  */}
                <Flex className="!justify-start sm:!justify-center px-0 sm:px-2">
                  <Flex className="col-span-1 lg:col-span-2  !justify-start sm:!justify-center" >
                    <Flex direction='column' justify='between' className="text-start">
                      <Flex direction="column" gap="4">
                        <Text as="h4" className="text-lg font-bold text-white mb-2" onClick={scrollToTop}>
                          Services
                        </Text>
                        <NavLink to="/csr-activity" className="text-white hover:text-primary" onClick={scrollToTop}>
                          CSR
                        </NavLink>
                        <NavLink to="/ware-house" className="text-white hover:text-primary" onClick={scrollToTop} >
                          workshop
                        </NavLink>
                      </Flex>
                      <Flex direction='column'>
                        <Text as="h4" className="text-lg font-bold text-white mb-2" >
                          Social
                        </Text>
                        <Flex gap="5" pt="4" className="!justify-center md:!justify-start">
                          <NavLink target="_blank" to="https://www.instagram.com/ophthalmatic/profilecard/?igsh=dDc4czBnOHZqZmls " className="text-white hover:text-primary" >
                            <Box className="cursor-pointer">
                              <Instagram />
                            </Box>
                          </NavLink>
                          <NavLink target="_blank" to="https://www.facebook.com/share/15SQQ4QmZN/ " className="text-white hover:text-primary" >
                            <Box className="cursor-pointer">
                              <Facebook />
                            </Box>
                          </NavLink>
                          <NavLink target="_blank" to="" className="text-white hover:text-primary" >
                            <Box className="cursor-pointer">
                              <Twitter />
                            </Box>
                          </NavLink>
                          <NavLink target="_blank" to="https://www.linkedin.com/in/bansil-gadhiya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="text-white hover:text-primary" >
                            <Box className="cursor-pointer">
                              <Linkedin />
                            </Box>
                          </NavLink>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Separator size="4" color="blue" />

            <Flex className="text-white flex-col sm:flex-row py-8 gap-8" justify='between'>
              <Flex className="w-full sm:w-3/5 flex-col sm:flex-row" gap='5'>
                <Flex gap="4" justify="start" sm="justify-center" className="flex-row md:flex-col lg:flex-row w-full items-center md:items-start lg:items-center" >
                  <FooterPhone />
                  <Flex direction="column" className="items-start md:items-start">
                    <Text className="text-white text-lg sm:text-start font-medium">
                      Contact
                    </Text>
                    <a className="text-sm sm:text-start" href='tel:+918140259610'>
                      +91 8140259610
                    </a>
                  </Flex>
                </Flex>
                <Flex gap="4" justify="start" sm="justify-center" className="flex-row md:flex-col lg:flex-row w-full items-center md:items-start lg:items-center">
                  <FooterEmail />
                  <Flex direction="column" className=" md:items-start">
                    <Text className="text-white text-lg md:text-start font-medium">
                      Mail
                    </Text>
                    <a className="text-sm sm:text-start" href='mailto:export@gadhiyagroup.com'>
                      <span>export@gadhiyagroup.com</span>
                    </a>
                  </Flex>
                </Flex>
              </Flex>
              <Flex className="w-full sm:w-2/5">
                <Flex gap="4" sm="justify-start" className=" flex-row md:flex-col lg:flex-row ps-0 lg:ps-[90px] items-center md:items-start lg:items-center">
                  <FooterAddress />
                  <Flex direction="column" className=" md:items-start md:text-start">
                    <Text className="text-white text-lg font-medium">
                      Address
                    </Text>
                    <Text className="text-white text-sm ">
                      Third, 303, Fortune Sky, Nava Naroda Road, Nr. Galaxy Bunglows, Nava Naroda, Ahmedabad, Gujarat, 382345.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Separator size="4" color="blue" />

            <Flex className="flex-col sm:flex-row" align="center" justify='center' py='6' >
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
