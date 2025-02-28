import {
  Box,
  Button,
  Card,
  Flex,
  Select,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import Container from "../../components/ui/container";
import { CountrySelect } from "../../components/CountrySelect";
import { useState } from "react";

export default function HaveQuestion() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  return (
    <>
      <Flex className="" justify="center">
        <Container className="w-full">
          <Flex className="justify-center gap-10 flex-col lg:flex-row ">
            <Flex className="justify-start text-start flex-col sm:flex-row ">
              <Flex className="justify-start flex-col py-6 pe-4">
                <Text size="2" className="text-primary text-start">
                  Have Question ?
                </Text>
                <Text className="text-[40px] font-semibold">
                  Reach out to us for expert <br /> advice and assistance.
                </Text>
              </Flex>
            </Flex>
            <Flex className="flex-1 have-question">
              <Card variant="surface" className="bg-white !p-[30px] w-full">
                <Flex className="flex-col gap-5">
                  <Text>
                    Fill out the form below, and we’ll get back to you as soon
                    as possible!
                  </Text>
                  <Box>
                    <TextField.Root
                      size="3"
                      radius="full"
                      className=""
                      placeholder="Name"
                    />
                  </Box>{" "}
                  <Box>
                    <TextField.Root
                      size="3"
                      radius="full"
                      placeholder="Phone number"
                    />
                  </Box>{" "}
                  <Box>
                    <TextField.Root
                      size="3"
                      radius="full"
                      placeholder="Email"
                    />
                  </Box>
                  <Flex direction="column" className="max-w-full">
                    <CountrySelect
                      countries={countries}
                      setCountries={setCountries}
                      setSelectedCountry={setSelectedCountry}
                      selectedCountry={selectedCountry}
                    />
                  </Flex>
                  <Flex direction="column" className="max-w-full">
                    <Select.Root defaultValue="purchase" size="3">
                      <Select.Trigger radius="full" />
                      <Select.Content>
                        <Select.Group>
                          <Select.Label>Purpose</Select.Label>
                          <Select.Item value="purchase">For Purchase</Select.Item>
                          <Select.Item value="dealership">For Dealership</Select.Item>
                          <Select.Item value="product_sample">For Product Sample</Select.Item>
                          <Select.Item value="other">Other</Select.Item>
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>

                  </Flex>
                  <TextArea size="3" resize="vertical" className="!rounded-2xl" placeholder="Message" />
                  <Flex justify="end" align="center">
                    <Button
                      variant="solid"
                      size="3"
                      radius="full"
                      className="!bg-primary hover:!bg-footerbg "
                    >
                      Contact Now
                    </Button>
                  </Flex>
                </Flex>
              </Card>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
