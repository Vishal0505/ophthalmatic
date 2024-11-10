import { Box, Button, Flex, Text } from "@radix-ui/themes";
import BackgroundImage from "../../components/ui/background-image";
import bgimg from "../../assets/bg/bgimg.jpg";

import Prod1 from "../../assets/products/prem-1.png";
import Prod2 from "../../assets/products/prem-2.png";
import Prod3 from "../../assets/products/prem-3.png";
import Prod4 from "../../assets/products/prem-4.png";
import Container from "../../components/ui/container";

import { useNavigate } from "react-router-dom";
import { Categories, Products } from "./constant";
import { useState } from "react";
// const products = [
//   {
//     id: 1,
//     name: "Ophthalmic Refraction Unit ",
//     category: "(OU-03) ",
//     imageUrl: Prod1,
//   },
//   {
//     id: 2,
//     name: " Ophthalmic Operation Table ",
//     category: "(OT - 02)",
//     imageUrl: Prod2,
//   },
//   {
//     id: 3,
//     name: "Ophthalmic Operation Table ",
//     category: "(OT - 01) ",
//     imageUrl: Prod3,
//   },
//   {
//     id: 4,
//     name: "Surgeon’s Chair ",
//     category: "(SC-01)",
//     imageUrl: Prod4,
//   },
//   {
//     id: 5,
//     name: "Ophthalmic Operation Table ",
//     category: "(OT - 01) ",
//     imageUrl: Prod1,
//   },
//   {
//     id: 6,
//     name: "Ophthalmic Refraction Unit ",
//     category: "(OU-03) ",
//     imageUrl: Prod2,
//   },
//   {
//     id: 7,
//     name: "Ophthalmic Refraction Unit ",
//     category: "(OU-03) ",
//     imageUrl: Prod2,
//   },
//   {
//     id: 8,
//     name: "Ophthalmic Refraction Unit ",
//     category: "(OU-03) ",
//     imageUrl: Prod2,
//   },
// ];
const data = [
  {
    id: 1,
    imageUrl: Prod1,
    category: "(OU-03)",
    name: "Ophthalmic Refraction Unit",
    colors: ["Blue", "Black", "White"],
    features: [
      "Equipped with a silent, CE-marked German DC motor for smooth up and down movements.",
      "Features Zero Position Memory for optimal comfort.",
      "Adjustable footrest that can be fully raised to a sleeping position.",
      "Foot switch controls for ease of up and down movements.",
      "Fully Rotatable, Reclining Refraction Chair.",
      "Comfortable polyurethane-filled seat for enhanced comfort.",
    ],
    specialty: {
      description: [
        "Smooth-rotating, well-balanced Sliding Table Top with ample space for two instruments.",
        "Automatic under-the-table connection slot for slit lamp.",
        "Touch-activated Safety Switch to stop inadvertent chair movements.",
        "Integrated automated Control Console with touch-screen keys.",
        "Three Ports to support Lamp, Phoropter, Projector & Near Vision Holder.",
        "Counterbalanced Instrument Table.",
        "Dual Arm, frictionless Trial Lens Rack with straight, unidirectional movement.",
      ],
    },
    controlPanel: {
      features: [
        "Elegant, single-piece Console panel for centralized unit control.",
        "Handheld controller for chair movements.",
        "Built-in connectivity for Indirect Ophthalmoscope, Near Vision Holder & Projector.",
      ],
    },
    specifications: {
      minimumChairHeight: "550 mm ± 10 mm",
      maximumChairHeight: "750 mm",
      backrestMovement: "Manual",
      floorToSlidingArmHeight: "875 mm",
      poleHeight: "1200 mm",
      maximumAreaOfChairUnit: "2390 x 1050 mm",
      chairRotation: "180° ± 5°",
      upAndDownMovementStroke: "200 mm",
      maximumLoadCapacity: "150 Kg",
      electricalSpecifications: "220 V / 110 V, 50/60 Hz",
      totalWeight: "280 Kg approx.",
      floorToOverheadLampHeight: "2180 mm",
    },
  },
  {
    id: 2,
    imageUrl: Prod2,
    category: "(OU-02)",
    name: "Advanced Surgical Microscope",
    colors: ["Gray", "White"],
    features: [
      "High-resolution optics with integrated camera support.",
      "LED illumination for shadow-free visualization.",
      "Motorized XYZ controls for precise positioning.",
      "Ergonomic design for reduced fatigue during long procedures.",
      "Modular components for easy upgrades.",
    ],
    specialty: {
      description: [
        "Dual footswitch control for hands-free operation.",
        "Integrated HD camera for video documentation.",
        "Advanced autofocus system with variable magnification.",
        "Anti-fog lens system to ensure clear visibility at all times.",
        "Wireless remote control for adjusting settings.",
      ],
    },
    controlPanel: {
      features: [
        "Touch-screen control panel for intuitive operation.",
        "Customizable presets for different surgical procedures.",
        "Integrated wireless connectivity for remote diagnostics.",
      ],
    },
    specifications: {
      magnificationRange: "5x to 25x",
      workingDistance: "200 mm",
      lightSource: "LED 100,000 Lux",
      fieldOfView: "10 - 150 mm",
      powerSupply: "110-240V AC, 50/60 Hz",
      weight: "45 Kg",
    },
  },
  {
    id: 3,
    name: "Digital Eye Chart System ",
    imageUrl: Prod3,
    category: "(OU-01)",
    colors: ["Black", "Silver"],
    features: [
      "Large high-resolution LCD screen for crisp visuals.",
      "Remote control operation for ease of use.",
      "Multiple chart display modes including Snellen, ETDRS, and Tumbling E.",
      "Customizable settings for patient-specific testing.",
      "Lightweight and portable design.",
    ],
    specialty: {
      description: [
        "Auto-calibration feature for accurate testing distances.",
        "Built-in ambient light sensor for optimal brightness adjustment.",
        "User-friendly interface with multilingual support.",
        "Compatibility with electronic medical record (EMR) systems.",
        "Wall-mount or stand options for flexible installation.",
      ],
    },
    controlPanel: {
      features: [
        "Wireless remote with customizable shortcuts.",
        "HDMI and USB connectivity for seamless integration.",
        "Energy-efficient design with auto power-off feature.",
      ],
    },
    specifications: {
      screenSize: "24 inches",
      resolution: "1920 x 1080 Full HD",
      powerConsumption: "40W",
      connectivity: "HDMI, USB, Bluetooth",
      weight: "5 Kg",
      mountingOptions: "Wall mount or Stand mount",
    },
  },
];

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(Categories[0]);
  let navigate = useNavigate();

  const filteredProducts = Products.filter(
    (product) => product.category === selectedCategory
  );
  return (
    <Box>
      <Box className="bg-custom-gradient">
        <Flex className="  justify-center items-center gap-2 flex-col py-12">
          <Flex className="flex-row gap-2">
            <Text className="text-4xl font-medium text-primary">Our</Text>
            <Text className="text-4xl font-medium">Products</Text>
          </Flex>
          <Flex>
            <Text
              className="cursor-pointer hover:text-primary"
              onClick={() => {
                navigate("/");
              }}
            >
              Home /&nbsp;
            </Text>
            <Text className="text-primary"> Our Products </Text>
          </Flex>
        </Flex>
      </Box>
      <Container>
        <>
          <div className="flex justify-start sm:justify-center gap-4 py-8  overflow-auto	">
            {Categories.map((category, index) => (
              <Button
                key={index}
                size="3"
                color={selectedCategory === category ? "" : "gray"}
                variant={selectedCategory === category ? "solid" : "outline"}
                radius="medium"
                className={`$
                  selectedCategory === category ? "!bg-primary" : "!bg-white !border !border-red-300"
                `}
                onClick={() => setSelectedCategory(category)}
              >
                <Text
                  className={`${
                    selectedCategory === category ? "text-white" : "text-black"
                  } `}
                >
                  {category}
                </Text>
              </Button>
            ))}
          </div>
          <Box>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-6 bg-productbackground">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="px-4 "
                  onClick={() => {
                    navigate("/product-detail", { state: { product: item } });
                  }}
                >
                  <div className="p-4 bg-white rounded-md border border-gray-300">
                    <img
                      src={item.imageUrl}
                      alt={item?.name}
                      className="w-full h-56 object-cover rounded-md mb-4"
                    />
                    <Flex justify="center" direction="column">
                      <Text
                        align="center"
                        className="text-base font-medium text-center "
                      >
                        {item.category}
                      </Text>
                      <Text
                        align="center"
                        className="text-base font-medium text-center "
                      >
                        {item.name}
                      </Text>
                    </Flex>
                  </div>
                </div>
              ))}
            </div>
          </Box>
        </>
      </Container>
    </Box>
  );
}
