
export interface Car {
  id: string;
  title: string;
  year: number;
  make: string;
  model: string;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  engine: string;
  exteriorColor: string;
  interiorColor: string;
  vin: string;
  description: string;
  features: string[];
  image: string;
  gallery: string[];
}

export const CARS_DATA: Car[] = [
  {
    id: "car-1",
    title: "2020 BMW 3 Series 330i",
    year: 2020,
    make: "BMW",
    model: "3 Series 330i",
    price: 32999,
    mileage: 25438,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "2.0L Turbo I4",
    exteriorColor: "Alpine White",
    interiorColor: "Black",
    vin: "WBA5R1C08LFH34567",
    description: "This low-mileage BMW 330i is in excellent condition, featuring the Premium Package and M Sport Package. The car comes with BMW's renowned handling and performance, along with luxury amenities including leather seats, panoramic sunroof, and the latest iDrive infotainment system.",
    features: [
      "Premium Package",
      "M Sport Package",
      "Navigation System",
      "Heated Seats",
      "Apple CarPlay",
      "Android Auto",
      "Panoramic Sunroof",
      "Parking Sensors",
      "Backup Camera",
      "Blind Spot Monitoring"
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
    ]
  },
  {
    id: "car-2",
    title: "2021 Tesla Model 3 Long Range",
    year: 2021,
    make: "Tesla",
    model: "Model 3 Long Range",
    price: 44995,
    mileage: 18753,
    fuelType: "Electric",
    transmission: "Automatic",
    engine: "Dual Motor AWD",
    exteriorColor: "Midnight Silver",
    interiorColor: "White",
    vin: "5YJ3E1EA7MF123456",
    description: "This Tesla Model 3 Long Range features dual motor all-wheel drive and comes with Autopilot capability. With a range of over 350 miles per charge, this electric vehicle offers both performance and efficiency. The minimalist interior includes a 15-inch touchscreen that controls most of the car's functions.",
    features: [
      "Autopilot",
      "Premium Interior",
      "Heated Seats",
      "Glass Roof",
      "15-inch Touchscreen",
      "Enhanced Sound System",
      "Wireless Charging",
      "Power-folding Mirrors",
      "LED Fog Lights",
      "19-inch Sport Wheels"
    ],
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1551737823-bfc9a3c2d9f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    ]
  },
  {
    id: "car-3",
    title: "2019 Jeep Grand Cherokee Limited",
    year: 2019,
    make: "Jeep",
    model: "Grand Cherokee Limited",
    price: 29700,
    mileage: 42615,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "3.6L V6",
    exteriorColor: "Diamond Black",
    interiorColor: "Black/Brown",
    vin: "1C4RJFBG5KC789012",
    description: "This Jeep Grand Cherokee Limited offers a perfect blend of luxury and off-road capability. The vehicle features a powerful 3.6L V6 engine, Quadra-Trac II 4WD system, and comes equipped with the Limited Luxury Group package. The interior includes leather-trimmed seating, heated front and rear seats, and a premium Alpine sound system.",
    features: [
      "Quadra-Trac II 4WD",
      "Limited Luxury Group",
      "Navigation System",
      "Panoramic Sunroof",
      "Leather Interior",
      "Heated Seats",
      "Alpine Premium Audio",
      "Remote Start",
      "Blind Spot Monitoring",
      "Power Liftgate"
    ],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1588636142475-a62d56692870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ]
  },
  {
    id: "car-4",
    title: "2018 Honda Accord EX-L",
    year: 2018,
    make: "Honda",
    model: "Accord EX-L",
    price: 24500,
    mileage: 35892,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "1.5L Turbo I4",
    exteriorColor: "Modern Steel Metallic",
    interiorColor: "Black",
    vin: "1HGCV1F18JA012345",
    description: "This Honda Accord EX-L represents the best of Honda's sedan lineup with comfortable seating for five, excellent fuel economy, and a turbocharged engine. The EX-L trim includes leather seating, a premium audio system, and Honda Sensing safety suite.",
    features: [
      "Leather Seats",
      "Honda Sensing Suite",
      "Apple CarPlay",
      "Android Auto",
      "Blind Spot Information",
      "Power Moonroof",
      "Heated Front Seats",
      "10-speaker Audio System",
      "Smart Entry with Push Button Start",
      "Dual-Zone Climate Control"
    ],
    image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    ]
  },
  {
    id: "car-5",
    title: "2020 Ford F-150 Lariat",
    year: 2020,
    make: "Ford",
    model: "F-150 Lariat",
    price: 38750,
    mileage: 31245,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "3.5L EcoBoost V6",
    exteriorColor: "Velocity Blue",
    interiorColor: "Medium Earth Gray",
    vin: "1FTEW1E53LFA67890",
    description: "This Ford F-150 Lariat comes equipped with the powerful 3.5L EcoBoost V6 engine and 10-speed automatic transmission. With 4x4 capability and the FX4 Off-Road Package, this truck is ready for both work and adventure. The Lariat trim offers upscale features like leather seating, SYNC 3 infotainment, and a premium B&O sound system.",
    features: [
      "4x4 Drivetrain",
      "FX4 Off-Road Package",
      "Leather-Trimmed Seats",
      "SYNC 3 with Navigation",
      "B&O Sound System",
      "Trailer Tow Package",
      "LED Headlights",
      "Power-Deployable Running Boards",
      "Remote Tailgate Release",
      "Rear View Camera"
    ],
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1605893477799-b99e3b8b93eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1571172964276-91faaa704e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ]
  },
  {
    id: "car-6",
    title: "2021 Audi Q5 Premium Plus",
    year: 2021,
    make: "Audi",
    model: "Q5 Premium Plus",
    price: 43995,
    mileage: 22475,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "2.0L Turbo I4",
    exteriorColor: "Mythos Black Metallic",
    interiorColor: "Rock Gray",
    vin: "WA1ANAFY6M2123456",
    description: "This Audi Q5 Premium Plus features Audi's quattro all-wheel drive system, providing confidence in all driving conditions. The vehicle includes the Technology package with Audi's virtual cockpit, MMI Navigation Plus, and Bang & Olufsen 3D Premium Sound System. The stylish exterior is complemented by a luxurious interior with leather seating and advanced technology features.",
    features: [
      "quattro All-Wheel Drive",
      "Technology Package",
      "Virtual Cockpit",
      "MMI Navigation Plus",
      "Bang & Olufsen Sound System",
      "Panoramic Sunroof",
      "Leather Seating",
      "Audi Pre Sense",
      "Parking System Plus",
      "Audi Side Assist"
    ],
    image: "https://images.unsplash.com/photo-1614453147729-4eaf88e9b319?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614453147729-4eaf88e9b319?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1617886322168-72b886573c35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    ]
  }
];
