import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import Container from "../../components/ui/container";

export default function HaveQuestion() {
  return (
    <>
      <Flex className="bg-skyblue" justify='center'>
        <Container className="w-full">
          <Box className="py-10 sm:py-12">
            <Flex className="justify-center gap-4  flex-col sm:flex-row ">
              <Box className="flex-1 flex justify-end text-start flex-col sm:flex-row ">
                <Flex className="justify-end flex-col py-6">
                  <Text size="2" className="text-primary text-start">
                    Have Question ?
                  </Text>
                  <Text className="text-2xl font-medium">
                    Reach out to us for expert advice and assistance.
                  </Text>
                </Flex>
              </Box>
              <Box className="flex-1">
                <Flex className="rounded-xl bg-white flex-col p-4 gap-3">
                  <Text>
                    Fill out the form below, and we’ll get back to you as soon as
                    possible!
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
                    <TextField.Root size="3" radius="full" placeholder="Email" />
                  </Box>
                  <Flex direction="column" className="max-w-full">
                    <Select.Root defaultValue="apple" size="3">
                      <Select.Trigger radius="full" />
                      <Select.Content>
                        <Select.Group>
                          <Select.Label>Fruits</Select.Label>
                          <Select.Item value="orange">Orange</Select.Item>
                          <Select.Item value="apple">Country</Select.Item>
                          <Select.Item value="grape" disabled>
                            Grape
                          </Select.Item>
                        </Select.Group>
                        <Select.Separator />
                        <Select.Group>
                          <Select.Label>Vegetables</Select.Label>
                          <Select.Item value="carrot">Carrot</Select.Item>
                          <Select.Item value="potato">Potato</Select.Item>
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>
                  </Flex>
                  <Flex direction="column" className="max-w-full">
                    <Select.Root defaultValue="apple" size="3">
                      <Select.Trigger radius="full" />
                      <Select.Content>
                        <Select.Group>
                          <Select.Label>Fruits</Select.Label>
                          <Select.Item value="orange">Orange</Select.Item>
                          <Select.Item value="apple">Apple</Select.Item>
                          <Select.Item value="grape" disabled>
                            Grape
                          </Select.Item>
                        </Select.Group>
                        <Select.Separator />
                        <Select.Group>
                          <Select.Label>Vegetables</Select.Label>
                          <Select.Item value="carrot">Carrot</Select.Item>
                          <Select.Item value="potato">Potato</Select.Item>
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>
                  </Flex>
                  <TextArea radius="full" size="3" placeholder="Message" />
                  <Flex className="w-11 justify-end items-end" >
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
              </Box>
            </Flex>
          </Box>
        </Container>
      </Flex>
    </>
  );
}
