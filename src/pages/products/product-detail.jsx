import { Box, Card, Table, Text } from "@radix-ui/themes";
import { useLocation } from "react-router-dom";
import Container from "../../components/ui/container";
import HaveQuestion from "../home/have-question";
import OurProducts from "../home/our-products";

export default function SpecificProductPage() {
  const location = useLocation();
  const product = location.state?.product;

  console.log("product", product);

  return (
    <>
      <Box className="bg-productbackground">
        <Container>
          <div className="flex flex-col gap-6 py-6">
            <Card>
              <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 px-2 sm:px-8 py-6 sm:py-6 ">
                <div className="sm:w-1/3 sm:h-1/3 flex flex-col justify-center items-center ">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className=" sm:h-72  object-cover rounded-md mb-4 "
                  />
                  <Box>
                    <Text size="6">
                      {" "}
                      {product.category}
                      {product.name}
                    </Text>
                  </Box>
                </div>
              </div>
              <div className="flex gap-2 flex-col">
                <div className=" flex flex-col  gap-6">
                  {product.features && (
                    <Box className=" border border-gray-300 rounded-md">
                      <Box className="bg-background py-2 rounded-t-md">
                        <Text size="3" weight="medium" mb={2} className="pl-2">
                          FEATURES
                        </Text>
                      </Box>
                      <ul className="list-disc list-inside space-y-2 pl-5 ">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-gray-700">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Box>
                  )}
                </div>
                <Box className=" border border-gray-300 rounded-md">
                  <Box className="bg-background py-2 rounded-t-md">
                    <Text size="3" weight="medium" mb={2} className="pl-2">
                      SPECIALITY
                    </Text>
                  </Box>
                  <ul className="list-disc list-inside space-y-2 pl-5 my-3 ">
                    {product.specialty.description.map((feature, index) => (
                      <li key={index} className="text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Box>
                {/* <Box className=" border border-gray-300 rounded-md">
                  <Box className="bg-background py-2 rounded-t-md">
                    <Text size="3" weight="medium" mb={2} className="pl-2">
                      CONTROL PANEL
                    </Text>
                  </Box>
                  <ul className="list-disc list-inside space-y-2 pl-5 my-3" >
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Box> */}
                {product.specifications && (
                  <Box className=" border border-gray-300 rounded-md">
                    <Box className="bg-background py-2 rounded-t-md">
                      <Text size="3" weight="medium" mb={2} className="pl-2">
                        SPECIFICATIONS
                      </Text>
                    </Box>
                    <Table.Root size="2">
                      <Table.Body>
                        {Object.entries(product.specifications).map(
                          ([key, value], index) => (
                            <Table.Row key={index}>
                              <Table.RowHeaderCell className="capitalize w-2/6">
                                <Text className="font-medium">
                                  {" "}
                                  {key.replace(/([A-Z])/g, " $1")}
                                </Text>
                              </Table.RowHeaderCell>
                              <Table.Cell>{value}</Table.Cell>
                            </Table.Row>
                          )
                        )}
                      </Table.Body>
                    </Table.Root>
                  </Box>
                )}
              </div>
            </Card>
            <Box>
              <Card>
                <OurProducts subTitles={"Related Product"} />
              </Card>
            </Box>
          </div>
        </Container>
        <Box className="bg-skyblue py-12">
          <HaveQuestion />
        </Box>
      </Box>
    </>
  );
}
