import { Box, Flex, Grid } from "@radix-ui/themes";
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
import Breadcrumb from "../../components/ui/breadcrumb";
import Container from "../../components/ui/container";


export default function OurWareHouse() {

    return (
        <Flex direction='column'>
            <Breadcrumb title="Our" secondaryTitle="Warehouse" path="ware-house" label="Our Warehouse" />
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
