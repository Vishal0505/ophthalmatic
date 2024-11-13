import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import { NavLink } from "react-router-dom";
import warehouse1 from "../../assets/warehouse/warehouse1.jpg";
import warehouse10 from "../../assets/warehouse/warehouse10.jpg";
import warehouse2 from "../../assets/warehouse/warehouse2.jpg";
import warehouse3 from "../../assets/warehouse/warehouse3.jpg";
import warehouse4 from "../../assets/warehouse/warehouse4.jpg";
import warehouse5 from "../../assets/warehouse/warehouse5.jpg";
import warehouse6 from "../../assets/warehouse/warehouse6.jpg";
import warehouse7 from "../../assets/warehouse/warehouse7.jpg";
import warehouse8 from "../../assets/warehouse/warehouse8.jpg";
import warehouse9 from "../../assets/warehouse/warehouse9.jpg";
import Container from "../../components/ui/container";


export default function OurWareHouse() {
    return (
        <Flex direction='column'>
            <Flex direction='column' py='9' style={{ background: "linear-gradient(91.45deg, rgba(40, 70, 148, 0.14) -1.47%, rgba(255, 255, 255, 0.14) 23.84%, rgba(40, 70, 148, 0.14) 49.14%, rgba(255, 255, 255, 0.14) 74.45%, rgba(40, 70, 148, 0.14) 99.76%)" }}>
                <Flex gap='3' align='center' justify='center' width='100%'>
                    <Text className="text-5xl font-semibold text-primary">Our</Text>
                    <Text className="text-5xl font-semibold">Warehouse</Text>
                </Flex>
                <Flex justify="center" gap='2' className="text-sm font-medium">
                    <NavLink to="/" className='text-textGray'>
                        Home
                    </NavLink>
                    <Text className='text-textGray'>/</Text>
                    <NavLink to="/ware-house" className={({ isActive }) => isActive && 'text-primary'}>
                        Our Warehouse
                    </NavLink>
                </Flex>
            </Flex>
            <Container className="my-12">
                <Grid columns="4" gap="4">
                    <Box className="col-span-3">
                        <img
                            src={warehouse1}
                            alt="Building 1"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>

                    <Box className="col-span-1">
                        <Flex className="h-full" direction='column' gap='4'>
                            <img
                                src={warehouse2}
                                alt="Building 3"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                            <img
                                src={warehouse3}
                                alt="Building 4"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Flex>
                    </Box>
                    <Box className="col-span-2">
                        <img
                            src={warehouse4}
                            alt="Building 5"
                            className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>
                    <Box className="col-span-2">
                        <img
                            src={warehouse5}
                            alt="Building 2"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>
                    <Flex className="h-full" direction='column' gap='4'>
                        <Box className="col-span-2">
                            <img
                                src={warehouse9}
                                alt="Building 5"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Box>
                        <Box className="col-span-2">
                            <img
                                src={warehouse10}
                                alt="Building 2"
                                className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Box>
                    </Flex>
                    <Box className="col-span-2">
                        <img
                            src={warehouse6}
                            alt="Building 1"
                            className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>

                    <Box className="col-span-1">
                        <Flex className="h-full" direction='column' gap='4'>
                            <img
                                src={warehouse7}
                                alt="Building 3"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                            <img
                                src={warehouse8}
                                alt="Building 4"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Flex>
                    </Box>
                </Grid>
            </Container>
        </Flex>
    );
}
