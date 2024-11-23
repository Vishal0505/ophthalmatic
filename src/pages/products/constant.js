import Prod1 from "../../assets/products/prem-1.png";
// import OU02 from "../../assets/products/prem-2.png";
import OT02 from "../../assets/products/prem-3.png";
import OT01 from "../../assets/products/prem-4.png";
import OU01 from "../../assets/products/prem-5.png";
import OU03 from "../../assets/products/prem-6.png";
import OU04 from "../../assets/products/prem-7.png";
import OU02 from "../../assets/products/prem-8.png";
import IT01 from "../../assets/products/IT-01.png";
import IT02 from "../../assets/products/IT-02.png";
import IT03 from "../../assets/products/IT-03.png";
import IT04 from "../../assets/products/IT-04.png";
import DS01 from "../../assets/products/DS-01.png";
import PH01 from "../../assets/products/PH-01.png";
import VD01 from "../../assets/products/VD-01.png";
import SC01 from "../../assets/products/SC-01.png";
import PA01 from "../../assets/products/PA-01.png";

export const Products = [
  {
    id: 4,
    imageUrl: OU01,
    name: "(OU-01)",
    category: "Ophthalmic Refraction Unit",
    colors: ["Black", "Silver"],
    features: [
      "Fully Adjustable Recliner: Smoothly rotating, flexible recliner chair with multiple positioning options.",
      "Quiet, Precision Motor: German-made, CE-certified DC motor for silent up/down movements, recline functions, and zero-position memory.",
      "Enhanced Comfort: Polyurethane seat with adjustable footrest, allowing full recline for complete patient comfort.",
      "Foot Switch Operation: Hands-free up/down control for seamless adjustments.",
      "Comprehensive Control: Full movement control accessible from the backrest panel.",
      "Convenient Instrument Tray: Practical, easy-access tray for instruments.",
      "Strong Support Pole: Designed to hold a lamp, phoropter, and projector, with adjustable height and positioning options.",
      "Dust-Free Trial Lens Rack: Enclosed, smooth-sliding tray for organized and protected trial lens storage.",
    ],
    specialty: {
      description: [
        "Smooth Sliding Table: Effortlessly rotating, well-balanced tabletop with ample space for two instruments.",
        "Automatic Connections: Built-in connectivity under the table for a seamless slit lamp connection.",
        "Safety Features: Touch-activated safety switch prevents accidental chair movements.",
        "Centralized Control Console: Intuitive control panel with touchstone keys for streamlined operation.",
        "Versatile Support Pole: Strong, adaptable pole to hold a lamp, phoropter, projector, and near-vision holder.",
        "Instrument Holder: Conveniently designed instrument tray for easy access.",
        "Dust-Free Trial Lens Rack: Enclosed, easy-glide tray for organized trial lens storage.",
        "Comprehensive Connectivity: Integrated ports for indirect ophthalmoscope, near-vision holder, and projector.",
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
      minimumChairHeight: "550 mm ± 10 mm",
      maximumChairHeight: "750 mm",
      backrestMovement: "Electrical",
      floorToSlidingArmHeight: "875 mm",
      poleHeight: "1100 mm",
      maximumAreaOfChairUnit: "2390 x 1250 mm",
      chairRotation: "180 Degrees",
      upAndDownMovementStroke: "200 mm",
      maximumLoadCapacity: "150 Kg",
      powerRequirement: "230V / 110V, 50/60 Hz",
      totalWeight: "250 Kg",
      floorToOverheadLampHeight: "2180 mm",
    },
  },
  {
    id: 3,
    imageUrl: OU02,
    name: "(OU-02)",
    category: "Ophthalmic Refraction Unit",
    colors: ["Gray", "White"],
    features: [
      "Convenient Instrument Tray: Practical, easy-access tray for instruments.",
      "Strong Support Pole: Designed to hold a lamp, phoropter, and projector, with adjustable height and positioning options.",
      "Dust-Free Trial Lens Rack: Enclosed, smooth-sliding tray for organized and protected trial lens storage.",
      "Fully Adjustable Recliner: Smoothly rotating, flexible recliner chair with multiple positioning options.",
      "Quiet, Precision Motor: German-made, CE-certified DC motor for silent up/down movements, recline functions, and zero-position memory.",
      "Enhanced Comfort: Polyurethane seat with adjustable footrest, allowing full recline for complete patient comfort.",
      "Foot Switch Operation: Hands-free up/down control for seamless adjustments.",
      "Comprehensive Control: Full movement control accessible from the backrest panel.",
    ],
    specialty: {
      description: [
        "Broad-Based Design: Provides high stability and reliable performance.",
        "Durable Construction: Sturdy, stable, and jerk-free functionality for long-lasting use.",
        "Optimized Mounting Space: Well-balanced area for convenient instrument placement.",
        "Smooth-Sliding Tabletop: Spacious enough to accommodate two instruments with ease.",
        "Automatic Connections: Built-in, under-table connectivity for seamless slit lamp integration.",
        "Safety Features: Touch-activated safety switch to prevent accidental chair movements.",
        "Bright Task Lighting: Integrated overhead light for optimal visibility.",
        "Centralized Control Console: Touchstone keys provide easy access to essential controls.",
        "Fluid, Precision Movements: Powered by a CE-marked German DC motor for smooth operation.",
        "Extensive Connectivity: Pre-configured ports for indirect ophthalmoscope, near-vision holder, and projector.",
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
      minimumChairHeight: "550 mm ± 10 mm",
      maximumChairHeight: "750 mm",
      backrestMovement: "Electrical",
      floorToSlidingArmHeight: "875 mm",
      poleHeight: "1100 mm",
      maximumAreaOfChairUnit: "2390 x 1250 mm",
      chairRotation: "180 Degrees",
      upAndDownMovementStroke: "200 mm",
      maximumLoadCapacity: "150 Kg",
      powerRequirement: "230V / 110V, 50/60 Hz",
      totalWeight: "250 Kg",
      floorToOverheadLampHeight: "2180 mm",
    },
  },
  {
    id: 1,
    imageUrl: OU03,
    name: "(OU-03)",
    category: "Ophthalmic Refraction Unit",
    colors: ["Blue", "Black", "White"],
    features: [
      "Convenient Instrument Tray: Practical, easy-access tray for instruments.",
      "Strong Support Pole: Designed to hold a lamp, phoropter, and projector, with adjustable height and positioning options.",
      "Dust-Free Trial Lens Rack: Enclosed, smooth-sliding tray for organized and protected trial lens storage.",
      "Quiet, Precision Motor: German-made, CE-certified DC motor for silent up/down movements, recline functions, and zero-position memory.",
      "Enhanced Comfort: Polyurethane seat with adjustable footrest, allowing full recline for complete patient comfort.",
      "Foot Switch Operation: Hands-free up/down control for seamless adjustments.",
    ],
    specialty: {
      description: [
        "Economical Combination Unit: Designed for need-based functionality, providing maximum efficiency in minimal space.",
        "Comprehensive Control Console: Easy-to-use panel with a memo key for quick operation.",
        "Reclining Chair: 165-degree gas spring-driven reclining chair for patient comfort.",
        "Smooth Elevation: Operated by a CE-marked German DC motor for fluid height adjustments.",
        "Sliding Tabletop: Ample space to accommodate two instruments comfortably.",
        "Hand Instrument Holder: Convenient storage space for frequently used instruments.",
        "Dust-Free Trial Lens Rack: Enclosed, smooth-sliding tray for organized trial lens storage.",
        "Sturdy Multi-Instrument Lamp Pole: Supports multiple mounted instruments securely.",
        "Integrated Chair & Table System: Cross-integrated chair-raising system and sliding tabletop for cohesive operation.",
        "Comfortable Polyurethane Seat: Soft and supportive seating for patient ease.",
        "Durable Base: Moulded plastic-covered base with a broad, square platform for stable, jerk-free performance.",
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
    imageUrl: OU04,
    name: "(OU-04)",
    category: "Ophthalmic Refraction Unit",
    colors: ["Blue", "Black", "White"],
    features: [
      "Convenient Instrument Tray: Practical, easy-access tray for instruments.",
      "Strong Support Pole: Designed to hold a lamp, phoropter, and projector, with adjustable height and positioning options.",
      "Quiet, Precision Motor: German-made, CE-certified DC motor for silent up/down movements, recline functions, and zero-position memory.",
      "Enhanced Comfort: Polyurethane seat with adjustable footrest, allowing full recline for complete patient comfort.",
      "Foot Switch Operation: Hands-free up/down control for seamless adjustments.",
    ],
    specialty: {
      description: [
        "Economical Combination Unit: Designed for essential functionality while minimizing space requirements.",
        "High Functionality: Maximum operative features in a compact design.",
        "Intuitive Console Panel: Easy-to-use control panel with memo key for efficient adjustments.",
        "Smooth Elevation: Powered by a CE-marked German DC motor for precise, quiet elevation.",
        "Sliding Tabletop: Provides ample space for two instruments.",
        "Hand Instrument Holder: Dedicated space for accessible hand instrument storage.",
        "Sturdy Multi-Instrument Pole: Supports various mounted instruments securely.",
        "Integrated Chair & Table System: Cross-integrated raising system with a sliding tabletop for seamless use.",
        "Comfortable Polyurethane Seat: Offers soft, supportive seating for patient comfort.",
        "Durable Base: Molded plastic-covered base with a broad, square platform for stable, jerk-free operation.",
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
    id: 5,
    imageUrl: OT01,
    name: "(OT-01)",
    category: "Ophthalmic Operation Table",
    colors: ["Black", "Silver"],
    // features: [
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    // ],
    specialty: {
      description: [
        "The OT-01 is a next-generation, motorized operation table designed for optimal functionality and user comfort.",
        "Motorized Vertical Height Adjustment: Allows ophthalmologists to perform procedures comfortably from a standing or seated position.",
        "Optimally Positioned Head Rest: Manually adjustable up and down to provide the surgeon easy patient access while ensuring comfortable head positioning for the patient, with ample legroom and space for equipment pedals.",
        "Comfortable Polyurethane Cushions: Spacious, hypoallergenic cushions offer excellent patient comfort and are easy to clean and maintain.",
        "Adjustable Wrist Support: Provides surgeons with reliable stability during procedures.",
        "Built-in Trendelenburg and Reverse Trendelenburg Positions: Ensures patient safety during emergencies, with easy head-lowering and head-raising functionality.",
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
      "heightRangeMin/Max": "540 mm ± 5 mm",
      liftingSpeed: "8mm/s",
      totalLength: "1800mm",
      totalWidth: "690 mm",
      baseSize: "1080 mm",
      maximumAreaOfChairUnit: "2350 x 1200 mm",
      chairRotation: "170 Degrees",
      upAndDownMovementStroke: "190 mm",
      maximumLoadCapacity: "120 Kg",
      powerRequirement: "220V / 110V, 50/60 Hz",
      totalWeight: "240 Kg",
      floorToOverheadLampHeight: "2150 mm",
    },
  },
  {
    id: 6,
    imageUrl: OT02,
    name: "(OT-02)",
    category: "Ophthalmic Operation Table",
    colors: ["Black", "Silver"],
    // features: [
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    // ],
    specialty: {
      description: [
        "The OT-02 is specifically designed to meet the comprehensive needs of ophthalmologists, enabling efficient patient preparation, operation, and post-operative care.",
        "Versatile Transformation: Easily converts from a smooth transport chair into a fully functional operation table.",
        "Ergonomic Design: Features multiple position settings to suit various surgical requirements.",
        "Multi-Adjustable Head Rest: Independently tiltable and height-adjustable to maintain the patient’s head in an ideal position.",
        "Ample Legroom: Provides sufficient space for surgeon comfort and mobility.",
        "Sturdy Twin Wheel Castors: High load-bearing with direction-locking for stability during use.",
        "Dual Control Options: Hand control panel and foot control for convenient adjustment of all movements.",
        "Smooth Lifting and Positioning: Operated by a CE-marked German DC motor for controlled chair elevation and precise back-and-forth positioning.",
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
      heightRange: "580 mm / 810 mm",
      totalLength: "1860 mm",
      totalWidth: "610 mm",
      liftingSpeed: "8 mm/s",
      backrestSection: "Electro-cylinder",
      weightCapacity: "135 Kg",
      inputTension: "230V 50/60 Hz, 110V 50/60 Hz",
      grossWeight: "118 Kg",
    },
  },
  {
    id: 7,
    imageUrl: IT01,
    name: "(IT-01)",
    category: "Ophthalmic Instrument Table",
    colors: ["Black", "Silver"],
    // features: [
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    // ],
    specialty: {
      description: [
        "Aesthetic Design: Sleek contours for a modern and professional look.",
        "Versatile Transformation: Quickly converts from a transport chair to an operational table as needed.",
        "Silent Vertical Height Adjustment: Smooth, quiet height adjustments via foot control for seamless operation.",
        "High-Quality Castors: Durable castors ensure safe, stable movement at all times.",
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
      minMaxHeight: "660 mm / 890 mm",
      stroke: "230 mm",
      maximumLoad: "65 Kg",
      tableTopSize: "560 x 405 x 25 mm",
      overallDimension: "580 x 530 x 890 mm",
      powerSupply: "AC 230V 50 Hz / AC 110V 60 Hz",
    },
  },
  {
    id: 8,
    imageUrl: IT02,
    name: "(IT-02)",
    category: "Ophthalmic Instrument Table",
    colors: ["Black", "Silver"],
    // features: [
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    // ],
    specialty: {
      description: [
        "Versatile Design: Suitable for all ophthalmological and optician diagnostic equipment.",
        "Aesthetic Contours: Elegantly shaped for a professional appearance.",
        "Flexible Transformation: Converts seamlessly from a transport chair to an operation table.",
        "Quiet Height Adjustment: Smooth, silent vertical adjustments using foot control for optimal positioning.",
        "Convenient Storage Drawer: Integrated drawer for easy access to essential tools and supplies.",
        "High-Quality Castors: Ensures safe and stable movement throughout use.",
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
      minMaxHeight: "630 mm / 860 mm",
      stroke: "230 mm",
      maximumLoad: "65 Kg",
      tableTopSize: "860 x 405 x 25 mm",
      overallDimension: "860 x 460 x 860 mm",
      powerSupply: "AC 230V 50 Hz / AC 110V 60 Hz",
    },
  },
  {
    id: 9,
    imageUrl: IT03,
    name: "(IT-03)",
    category: "Ophthalmic Instrument Table",
    colors: ["Black", "Silver"],
    // features: [
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    // ],
    specialty: {
      description: [
        "Aesthetic Design: Sleek contours for a modern and professional look.",
        "Versatile Transformation: Quickly converts from a transport chair to an operational table as needed.",
        "Silent Vertical Height Adjustment: Smooth, quiet height adjustments via foot control for seamless operation.",
        "High-Quality Castors: Durable castors ensure safe, stable movement at all times.",
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
      minMaxHeight: "630 mm / 860 mm",
      stroke: "230 mm",
      maximumLoad: "65 Kg",
      tableTopSize: "860 x 405 x 25 mm",
      overallDimension: "860 x 460 x 860 mm",
      powerSupply: "AC 230V 50 Hz / AC 110V 60 Hz",
    },
  },
  {
    id: 10,
    imageUrl: IT04,
    name: "(IT-04)",
    category: "Ophthalmic Instrument Table",
    colors: ["Black", "Silver"],
    // features: [
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    // ],
    specialty: {
      description: [
        "The IT-04 Series is crafted with an innovative asymmetric design featuring side-column up-down movements, tailored for optimal use with YAG Laser, Auto-Refractometer, and Slit Lamp equipment.",
        "Asymmetric Design: Allows convenient access and positioning for advanced ophthalmic diagnostics.",
        "Generous Legroom: Provides ample space for enhanced comfort.",
        "Smooth Motorized Adjustment: Quiet, motorized vertical movement for precise up/down adjustments.",
        "High-Quality Castors: Ensures safe, steady mobility for easy repositioning.",
        "Foot Switch Operation: User-friendly foot switch for quick, hands-free control.",
        "Comfort-Focused: Delivers a comfortable testing experience for both the doctor and patient.",
        "Base Options: Available with an iron base plate IT-04.",
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
      minMaxHeight: "630 mm / 860 mm",
      stroke: "230 mm",
      maximumLoad: "65 Kg",
      tableTopSize: "860 x 405 x 25 mm",
      overallDimension: "860 x 460 x 860 mm",
      powerSupply: "AC 230V 50 Hz / AC 110V 60 Hz",
    },
  },
  {
    id: 11,
    imageUrl: DS01,
    name: "(DS-01)",
    category: "More Products",
    colors: ["Black", "Silver"],
    // features: [
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    // ],
    specialty: {
      description: [
        "Total Comfort: Designed to create an ideal comfort zone for the doctor.",
        "Exceptional Seating: Provides superior sitting convenience with a 360-degree swivel.",
        "Anti-Static Poly-Foam Seat: Ensures comfort and durability.",
        "Adjustable Gas Cylinder: Built-in gas lift for easy height adjustment (min. height: 560mm, max. height: 720mm, stroke: 160mm).",
        "Ergonomic Backrest: Specially designed for optimal upper body and back support.",
        "Chrome-Plated Foot Ring: Strong, supportive foot ring for leg comfort.",
        "Five-Castor Base: Smooth, stable mobility for effortless movement.",
      ],
    },
    controlPanel: {
      features: [
        "Wireless remote with customizable shortcuts.",
        "HDMI and USB connectivity for seamless integration.",
        "Energy-efficient design with auto power-off feature.",
      ],
    },
    // specifications: {
    //   minMaxHeight: "660 mm / 890 mm",
    //   stroke: "230 mm",
    //   maximumLoad: "65 Kg",
    //   tableTopSize: "560 x 405 x 25 mm",
    //   overallDimension: "580 x 530 x 890 mm",
    //   powerSupply: "AC 230V 50 Hz / AC 110V 60 Hz"
    // },
  },
  {
    id: 12,
    imageUrl: PH01,
    name: "(PH-01)",
    category: "More Products",
    colors: ["Black", "Silver"],
    // features: [
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    // ],
    specialty: {
      description: [
        "Effortless Height Adjustment: Smooth gas cylinder-based height adjustment using a hand lever.",
        "Adjustable Stainless Steel Tray: Designed to securely hold surgical instruments.",
        "Sterilization Convenience: Tray can be easily removed for cleaning and sterilization.",
        "Height-Adjustable IV Pole: Stainless steel IV pole for added versatility.",
        "Stable Equipment Platform: Skid-free surface designed for phacoemulsifiers and other devices.",
        "Customizable Platform Dimensions: Equipment platform available in variable measurements, tailored to your needs.",
        "Robust Twin Wheel Castors: High load-bearing castors ensure stability and safe mobility.",
        "Height Adjustment Range: Minimum height of 940 mm to a maximum height of 1195 mm.",
      ],
    },
    controlPanel: {
      features: [
        "Wireless remote with customizable shortcuts.",
        "HDMI and USB connectivity for seamless integration.",
        "Energy-efficient design with auto power-off feature.",
      ],
    },
    // specifications: {
    //   minMaxHeight: "660 mm / 890 mm",
    //   stroke: "230 mm",
    //   maximumLoad: "65 Kg",
    //   tableTopSize: "560 x 405 x 25 mm",
    //   overallDimension: "580 x 530 x 890 mm",
    //   powerSupply: "AC 230V 50 Hz / AC 110V 60 Hz"
    // },
  },
  {
    id: 13,
    imageUrl: VD01,
    name: "(VD-01)",
    category: "More Products",
    colors: ["Black", "Silver"],
    // features: [
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    // ],
    specialty: {
      description: [
        "Multi-Language Support: Offers options in various languages for user convenience.",
        "Front-Facing Display: Easy-to-read display located on the surface for quick access.",
        "Image-Based Display: Designed for patients who may have difficulty reading.",
        "User-Friendly Controls: Intuitive hand-held controls for effortless operation.",
        "Compact and Lightweight: Designed for easy portability and storage.",
        "Color Deficiency Test: Includes a test feature to assess color vision.",
      ],
    },
    controlPanel: {
      features: [
        "Wireless remote with customizable shortcuts.",
        "HDMI and USB connectivity for seamless integration.",
        "Energy-efficient design with auto power-off feature.",
      ],
    },
    // specifications: {
    //   minMaxHeight: "660 mm / 890 mm",
    //   stroke: "230 mm",
    //   maximumLoad: "65 Kg",
    //   tableTopSize: "560 x 405 x 25 mm",
    //   overallDimension: "580 x 530 x 890 mm",
    //   powerSupply: "AC 230V 50 Hz / AC 110V 60 Hz"
    // },
  },
  {
    id: 14,
    imageUrl: SC01,
    name: "(SC-01)",
    category: "More Products",
    colors: ["Black", "Silver"],
    // features: [
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    // ],
    specialty: {
      description: [
        "Motorized Precision: Delivers total physical support for enhanced surgical accuracy.",
        "Ergonomic Design: Tailored for micro-surgery, ensuring optimal comfort and functionality.",
        "Accurate Positioning: Provides an ideal sitting position with high maneuverability.",
        "Quiet Operation: Height adjustment is controlled by a noiseless German DC motor, easily operated with a foot switch.",
        "Smooth Back Support: Features a gentle touch action and an incline locking system for added comfort.",
        "Adjustable Back-Rest: Height-adjustable to accommodate various user needs.",
        "Multi-Position Arm Support: Adjustable arm support for improved ergonomics.",
        "Simultaneous Wheel Locking: Ensures stability with simultaneous locking of rear wheels.",
        "Comfortable Seating: Molded seat with an anti-static polyurethane cushion for enhanced comfort.",
        "Accurate Foot Support: Provides precise support for optimal positioning.",
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
      minMaxHeight: "550 mm / 710 mm",
      stroke: "160 mm",
      maximumLoad: "125 Kg",
      powerSupply: "AC 230V 50 Hz / AC 110V 60 Hz",
    },
  },
  {
    id: 15,
    imageUrl: PA01,
    name: "(PA-01)",
    category: "Phoropter Arm",
    colors: ["Black", "Silver"],
    // features: [
    //   "lorem",
    //   "lorem",
    //   "lorem",
    //   "lorem",
    // ],
    specialty: {
      description: [
        "Precision Control: Designed for accurate positioning of the phoropter, ensuring optimal alignment for examinations.",
        "Ergonomic Design: Provides a comfortable and intuitive setup for both the clinician and patient.",
        "Smooth Height Adjustment: Features a noiseless system for effortless vertical and horizontal adjustments.",
        "Multi-Directional Movement: Offers extensive maneuverability to easily adapt to different patient needs.",
        "Sturdy Construction: Built with high-quality materials for durability and stability during use.",
        "Integrated Locking Mechanism: Ensures secure positioning once the desired height and angle are set.",
        "User-Friendly Controls: Equipped with easy-to-use hand controls for quick adjustments during exams.",
        "Compatibility: Designed to seamlessly integrate with various phoropter models.",
      ],
    },
    controlPanel: {
      features: [
        "Wireless remote with customizable shortcuts.",
        "HDMI and USB connectivity for seamless integration.",
        "Energy-efficient design with auto power-off feature.",
      ],
    },
    // specifications: {
    //   minMaxHeight: "550 mm / 710 mm",
    //   stroke: "160 mm",
    //   maximumLoad: "125 Kg",
    //   powerSupply: "AC 230V 50 Hz / AC 110V 60 Hz"
    // },
  },
];

export const Categories = [
  "Ophthalmic Refraction Unit",
  "Ophthalmic Operation Table",
  "Ophthalmic Instrument Table",
  "Phoropter Arm",
  "More Products",
];
