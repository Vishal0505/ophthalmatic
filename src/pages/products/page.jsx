import { Button, Flex, Text } from "@radix-ui/themes";
import Container from "../../components/ui/container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/ui/breadcrumb";
import Container from "../../components/ui/container";
import HaveQuestion from "../home/have-question";
import { Categories, Products } from "./constant";

export default function ProductPage() {

  const [selectedCategory, setSelectedCategory] = useState(Categories[0]);
  let navigate = useNavigate();

  const filteredProducts = Products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <Flex direction="column" gap="8">
      <Breadcrumb
        title="Our"
        secondaryTitle="Products"
        path="product"
        label="Our Products"
      />
      <Container className="w-full">
        <Flex direction="column" gap="8">
          <Flex justify="center" gap="5">
            {Categories?.map((category, index) => (
              <Button
                key={index}
                size="3"
                color={selectedCategory === category ? "" : "gray"}
                variant={selectedCategory === category ? "solid" : "outline"}
                radius="medium"
                className={`${selectedCategory === category ? "!bg-primary" : "!bg-white"
                // className={`${selectedCategory === category ? "!bg-primary" : "!bg-white !border !border-red-300"
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                <Text
                  className={`${
                    selectedCategory === category ? "text-white" : "text-black"
                  }`}
                >
                  {category}
                </Text>
              </Button>
            ))}
          </Flex>

          {/* Conditionally render products or a message */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-6 bg-productbackground rounded-lg flex-1">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <Flex
                  key={item.id}
                  className="px-4 "
                  onClick={() => {
                    navigate("/product-detail", { state: { product: item } });
                  }}
                >
                  <Flex
                    direction="column"
                    className="p-4 bg-white rounded-md border border-gray-300"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item?.name}
                      className="h-56 object-contain rounded-md mb-4"
                      loading="lazy"
                    />
                    <Flex justify="center" direction="column">
                      <Text
                        align="center"
                        className="text-base font-medium text-center"
                      >
                        {item.category}
                      </Text>
                      <Text
                        align="center"
                        className="text-base font-medium text-center"
                      >
                        {item.name}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))
            ) : (
              <Flex
                justify="center"
                align="center"
                className="col-span-full py-12"
              >
                <Text className="text-lg font-semibold text-gray-600">
                  No products available in this category.
                </Text>
              </Flex>
            )}
          </div>
        </Flex>
      </Container>

      <Flex className="bg-skyblue py-12">
        <Container className="w-full">
          <HaveQuestion />
        </Container>
      </Flex>
    </Flex>
  );
}
