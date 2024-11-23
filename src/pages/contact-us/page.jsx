import { Card, Flex, Text } from "@radix-ui/themes";
import map from "../../assets/contact/map.png";
import ContactAddress from "../../components/icons/contact-address";
import ContactCall from "../../components/icons/contact-call";
import ContactMail from "../../components/icons/contact-mail";
import Breadcrumb from "../../components/ui/breadcrumb";
import Container from "../../components/ui/container";
import HaveQuestion from "../home/have-question";
import { useEffect } from "react";

export default function ContactPage() {
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: Adds smooth scrolling effect
  });
}, []);
  return (
    <Flex direction='column' gap='8'>
      <Breadcrumb title="Contact" secondaryTitle="US" path="contact" label="Contact Us" />
      <Flex gap='8' direction='column' width='100%'>
        <Container className="w-full">
          <Flex className="flex-col md:flex-row w-full contact-cards" gap='8'>
            <Flex className="flex-1 ">
              <Card className="!p-5 w-full bg-white">
                <Flex direction="column" justify='between' height='100%'>
                  <Flex>
                    <ContactCall />
                  </Flex>
                  <Flex direction='column'>
                    <Text className="font-medium text-[26px] w-full">
                      Contact
                    </Text>
                    <a className="font-normal text-base" href='tel:+918140259610'>
                      +91 8140259610
                    </a>
                  </Flex>
                </Flex>
              </Card>
            </Flex>
            <Flex className="flex-1 ">
              <Card className="!p-5 w-full bg-white">
                <Flex direction="column" justify='between' height='100%'>
                  <Flex>
                    <ContactMail />
                  </Flex>
                  <Flex direction='column'>
                    <Text className="font-medium text-[26px] w-full">
                      Mail
                    </Text>
                    <a className="font-normal text-base" href='mailto:export@gadhiyagroup.com'>
                      <span>export@gadhiyagroup.com</span>
                    </a>
                  </Flex>
                </Flex>
              </Card>
            </Flex>
            <Flex className="flex-1 ">
              <Card className="!p-5 w-full bg-white">
                <Flex direction="column" justify='between' height='100%'>
                  <Flex>
                    <ContactAddress />
                  </Flex>
                  <Flex direction='column'>
                    <Text className="font-medium text-[26px] w-full">
                      Address
                    </Text>
                    <Text className="font-normal text-base">
                      303, Fortune Sky, Nr. Galaxy Bunglow, Nava Naroda, Ahmedabad, Gujarat, 382345.
                    </Text>
                  </Flex>
                </Flex>
              </Card>
            </Flex>
          </Flex>
        </Container>
        <HaveQuestion />
      </Flex>
      <Flex>
        <img src={map} alt="Logo" className="" />
      </Flex>
    </Flex>
  )
}
