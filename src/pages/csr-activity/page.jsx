import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import { NavLink } from "react-router-dom";
import csr1 from "../../assets/csr/csr1.jpg";
import csr2 from "../../assets/csr/csr2.jpg";
import csr3 from "../../assets/csr/csr3.jpg";
import csr4 from "../../assets/csr/csr4.jpg";
import csr5 from "../../assets/csr/csr5.jpg";
import csr6 from "../../assets/csr/csr6.jpg";
import csr7 from "../../assets/csr/csr7.jpg";
import csr8 from "../../assets/csr/csr8.jpg";
import csr9 from "../../assets/csr/csr9.jpg";
import Container from "../../components/ui/container";


export default function CsrActivity() {
    return (
        <Flex direction='column'>
            <Flex direction='column' py='9' style={{ background: "linear-gradient(91.45deg, rgba(40, 70, 148, 0.14) -1.47%, rgba(255, 255, 255, 0.14) 23.84%, rgba(40, 70, 148, 0.14) 49.14%, rgba(255, 255, 255, 0.14) 74.45%, rgba(40, 70, 148, 0.14) 99.76%)" }}>
                <Flex gap='3' align='center' justify='center' width='100%'>
                    <Text className="text-5xl font-semibold text-primary">Corporate </Text>
                    <Text className="text-5xl font-semibold">Social Responsibility</Text>
                </Flex>
                <Flex justify="center" gap='2' className="text-sm font-medium">
                    <NavLink to="/" className='text-textGray'>
                        Home
                    </NavLink>
                    <Text className='text-textGray'>/</Text>
                    <NavLink to="/csr-activity" className={({ isActive }) => isActive && 'text-primary'}>
                        CSR
                    </NavLink>
                </Flex>
            </Flex>
            <Container className="my-12">
                <Flex direction='column' gap='8'>
                    <Text className="text-lg text-center text-gray-800">
                        At Gadhiya Foundation, we believe that true progress begins with the health and happiness of our community.
                        Our Free Eye Check-Up Camp embodies our dedication to community development, sustainable progress,
                        and social welfare. This special event provides essential eye care services - including comprehensive eye
                        exams and prescription glasses - at no cost to individuals in need. Our commitment extends beyond immediate
                        care; we aim to foster long-term well-being and empowerment by addressing critical health needs sustainably.
                        By focusing on improving vision and promoting eye health, we contribute to a healthier, more informed
                        community where every individual can thrive.
                    </Text>
                    <Grid columns="4" gap="4">
                        <Box className="col-span-3">
                            <img
                                src={csr1}
                                alt="Building 1"
                                className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Box>

                        <Box className="col-span-1">
                            <Flex className="h-full" direction="column" gap="4">
                                <img
                                    src={csr2}
                                    alt="Building 3"
                                    className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                                />
                                <img
                                    src={csr3}
                                    alt="Building 4"
                                    className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                                />
                            </Flex>
                        </Box>

                        <Box className="col-span-1">
                            <Flex className="h-full" direction="column" gap="4">
                                <img
                                    src={csr4}
                                    alt="Building 3"
                                    className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                                />
                                <img
                                    src={csr5}
                                    alt="Building 4"
                                    className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                                />
                            </Flex>
                        </Box>
                        <Box className="col-span-3">
                            <img
                                src={csr6}
                                alt="Building 1"
                                className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Box>

                        <Box className="col-span-3">
                            <img
                                src={csr7}
                                alt="Building 1"
                                className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Box>

                        <Box className="col-span-1">
                            <Flex className="h-full" direction="column" gap="4">
                                <img
                                    src={csr8}
                                    alt="Building 3"
                                    className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                                />
                                <img
                                    src={csr9}
                                    alt="Building 4"
                                    className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                                />
                            </Flex>
                        </Box>
                    </Grid>
                </Flex>
            </Container>
        </Flex>
    );
}
