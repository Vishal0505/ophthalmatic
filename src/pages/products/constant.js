import Prod1 from "../../assets/products/prem-1.png";
import Prod2 from "../../assets/products/prem-2.png";
import Prod3 from "../../assets/products/prem-3.png";

export const Products = [
  {
    id: 1,
    imageUrl: Prod1,
    name: "(OU-03)",
    category: "Ophthalmic Refraction Unit",
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
    name: "(OU-02)",
    category: "Ophthalmic Refraction Unit",
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
    imageUrl: Prod3,
    name: "(OU-01)",
    category: "Opthalmic Operation",
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

export const Categories = [
  "Ophthalmic Refraction Unit",
  "Opthalmic Operation",
  "Ophthalmic Operation Unit",
];
