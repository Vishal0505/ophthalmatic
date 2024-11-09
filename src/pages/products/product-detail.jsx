import { Box, Card, Flex, Table, Text } from "@radix-ui/themes";
import Prod1 from "../../assets/products/prem-1.png";
import Container from "../../components/ui/container";
import OurProducts from "../home/our-products";
import { product } from "./constant";
import HaveQuestion from "../home/have-question";
import { useLocation, useNavigate } from "react-router-dom";

export default function SpecificProductPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  console.log("product",product);
  
  return (
    <>
      <Box className="bg-productbackground">
        <Container>
          <div className="flex flex-col gap-6 py-6">
            <Card>
              <div className=" flex justify-center gap-16 px-8 py-6 ">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-auto h-auto object-cover rounded-md mb-4"
                />
                <div className="flex flex-col gap-6">
                  <Box>
                    <Text size="6">{product.name}</Text>
                  </Box>
                  <Box>
                    <Text size="2" weight="medium" mb={2}>
                      FEATURES
                    </Text>
                    <ul className="list-disc list-inside space-y-2 pl-5 ">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-gray-700">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Box>
                </div>
              </div>
              <div className="flex gap-2 flex-col">
                <Box className=" border border-gray-300 rounded-md">
                  <Box className="bg-background py-2 rounded-t-md">
                    <Text size="3" weight="medium" mb={2} className="pl-2">
                      SPECIALITY
                    </Text>
                  </Box>
                  <ul className="list-disc list-inside space-y-2 pl-5 my-3 ">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Box>
                <Box className=" border border-gray-300 rounded-md">
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
                </Box>
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
              </div>
            </Card>
            <Box>
              <Card>
                <OurProducts subTitles={"Related Product"} />
              </Card>
            </Box>
          </div>
        </Container>
        <Box className=" bg-slate-700">
          <HaveQuestion />
        </Box>
      </Box>
    </>
  );
}
