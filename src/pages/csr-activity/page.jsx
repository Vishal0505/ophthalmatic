import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import csr1 from "../../assets/csr/csr1.jpg";
import csr2 from "../../assets/csr/csr2.jpg";
import csr3 from "../../assets/csr/csr3.jpg";
import csr4 from "../../assets/csr/csr4.jpg";
import csr5 from "../../assets/csr/csr5.jpg";
import csr6 from "../../assets/csr/csr6.jpg";
import csr7 from "../../assets/csr/csr7.jpg";
import csr8 from "../../assets/csr/csr8.jpg";
import csr9 from "../../assets/csr/csr9.jpg";
import Breadcrumb from "../../components/ui/breadcrumb";
import Container from "../../components/ui/container";


export default function CsrActivity() {
    return (
        <Flex direction='column'>
            <Breadcrumb title="Corporate" secondaryTitle="Social Responsibility" path="csr-activity" label="CSR" />
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
