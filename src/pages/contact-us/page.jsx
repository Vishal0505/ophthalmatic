import { Card, Flex, Text } from "@radix-ui/themes";
import { NavLink } from "react-router-dom";
import ContactAddress from "../../components/icons/contact-address";
import ContactCall from "../../components/icons/contact-call";
import ContactMail from "../../components/icons/contact-mail";
import Container from "../../components/ui/container";
import HaveQuestion from "../home/have-question";
import map from "../../assets/contact/map.png"

export default function ContactPage() {

  return (
    <Flex direction='column' gap='8'>
      <Flex direction='column' py='9' style={{ background: "linear-gradient(91.45deg, rgba(40, 70, 148, 0.14) -1.47%, rgba(255, 255, 255, 0.14) 23.84%, rgba(40, 70, 148, 0.14) 49.14%, rgba(255, 255, 255, 0.14) 74.45%, rgba(40, 70, 148, 0.14) 99.76%)" }}>
        <Flex gap='3' align='center' justify='center' width='100%'>
          <Text className="text-5xl font-semibold text-primary">Contact</Text>
          <Text className="text-5xl font-semibold">US</Text>
        </Flex>
        <Flex justify="center" gap='2' className="text-sm font-medium">
          <NavLink to="/" className='text-textGray'>
            Home
          </NavLink>
          <Text className='text-textGray'>/</Text>
          <NavLink to="/contact" className={({ isActive }) => isActive && 'text-primary'}>
            Contact Us
          </NavLink>
        </Flex>
      </Flex>
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
