
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CARS_DATA } from "@/data/cars";
import { CarCard } from "@/components/CarCard";
import { 
  Car, 
  Fuel, 
  Zap, 
  Calendar, 
  DollarSign, 
  ArrowLeft, 
  CheckCircle2, 
  ChevronRight,
  FileText,
  Wrench,
  Shield,
  ShoppingCart
} from "lucide-react";
import { useState } from "react";

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const car = CARS_DATA.find(car => car.id === id);
  
  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-auto-gray-800 mb-4">Vehicle Not Found</h2>
          <p className="text-auto-gray-600 mb-6">The vehicle you're looking for doesn't exist or has been removed.</p>
          <Link to="/cars">
            <Button>Browse All Vehicles</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Find similar cars (same make but different model)
  const similarCars = CARS_DATA.filter(c => c.make === car.make && c.id !== car.id).slice(0, 3);
  
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Back to listings */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            className="flex items-center text-auto-gray-600 hover:text-auto-gray-800"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Listings
          </Button>
        </div>
        
        {/* Car Detail Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-auto-gray-800">{car.title}</h1>
            <div className="flex items-center mt-2">
              <Badge variant="outline" className="mr-2">
                {car.make}
              </Badge>
              <Badge variant="outline" className="mr-2">
                {car.year}
              </Badge>
              <Badge variant="outline" className="mr-2">
                {car.mileage.toLocaleString()} miles
              </Badge>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="text-3xl font-bold text-auto-blue-600 mb-2">${car.price.toLocaleString()}</div>
            <div className="flex gap-3">
              <Button 
                className="bg-auto-red-600 hover:bg-auto-red-700"
                onClick={() => navigate(`/checkout/${car.id}`)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Buy Now
              </Button>
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Get Financing
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Info */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={car.gallery[activeImageIndex]} 
                  alt={car.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 grid grid-cols-3 gap-2">
                {car.gallery.map((image, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer aspect-[16/9] rounded overflow-hidden ${
                      index === activeImageIndex ? 'ring-2 ring-auto-blue-600' : ''
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${car.title} gallery image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tabs */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Vehicle Description</h3>
                <p className="text-auto-gray-600 mb-6">{car.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center p-3 bg-auto-blue-50 rounded-lg">
                    <Car className="h-5 w-5 text-auto-blue-600 mr-4" />
                    <div>
                      <div className="text-sm text-auto-gray-500">Mileage</div>
                      <div className="font-medium">{car.mileage.toLocaleString()} miles</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-auto-blue-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-auto-blue-600 mr-4" />
                    <div>
                      <div className="text-sm text-auto-gray-500">Year</div>
                      <div className="font-medium">{car.year}</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-auto-blue-50 rounded-lg">
                    <Fuel className="h-5 w-5 text-auto-blue-600 mr-4" />
                    <div>
                      <div className="text-sm text-auto-gray-500">Fuel Type</div>
                      <div className="font-medium">{car.fuelType}</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-auto-blue-50 rounded-lg">
                    <Zap className="h-5 w-5 text-auto-blue-600 mr-4" />
                    <div>
                      <div className="text-sm text-auto-gray-500">Transmission</div>
                      <div className="font-medium">{car.transmission}</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Vehicle Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-auto-blue-600 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Vehicle Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-auto-gray-500">Make</h4>
                      <p className="font-medium">{car.make}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm text-auto-gray-500">Model</h4>
                      <p className="font-medium">{car.model}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm text-auto-gray-500">Year</h4>
                      <p className="font-medium">{car.year}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm text-auto-gray-500">Engine</h4>
                      <p className="font-medium">{car.engine}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-auto-gray-500">Exterior Color</h4>
                      <p className="font-medium">{car.exteriorColor}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm text-auto-gray-500">Interior Color</h4>
                      <p className="font-medium">{car.interiorColor}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm text-auto-gray-500">VIN</h4>
                      <p className="font-medium">{car.vin}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm text-auto-gray-500">Mileage</h4>
                      <p className="font-medium">{car.mileage.toLocaleString()} miles</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Sidebar */}
          <div>
            {/* Finance Calculator Widget */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <DollarSign className="h-5 w-5 text-auto-blue-600 mr-2" />
                Financing Options
              </h3>
              <p className="text-auto-gray-600 mb-4">
                Estimated payment based on {car.price.toLocaleString()} with $5,000 down for 60 months.
              </p>
              <div className="bg-auto-blue-50 p-4 rounded-lg mb-4">
                <div className="text-xl font-bold text-auto-blue-700 mb-1">
                  ${Math.round((car.price - 5000) / 60 * (1 + 0.0449)).toLocaleString()}/mo*
                </div>
                <div className="text-sm text-auto-gray-500">*With approved credit at 4.49% APR</div>
              </div>
              <Link to="/financing">
                <Button className="w-full bg-auto-blue-600 hover:bg-auto-blue-700">
                  Calculate Payment Options
                </Button>
              </Link>
            </div>
            
            {/* Value Added Services */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3">Value Added Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-auto-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Extended Warranty</h4>
                    <p className="text-sm text-auto-gray-500">Protect your vehicle with our comprehensive extended warranty plans.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-5 w-5 text-auto-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Maintenance Package</h4>
                    <p className="text-sm text-auto-gray-500">Keep your vehicle in top condition with our maintenance packages.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-auto-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Vehicle History Report</h4>
                    <p className="text-sm text-auto-gray-500">Request a comprehensive vehicle history report.</p>
                  </div>
                </li>
              </ul>
              <Link to="/services" className="inline-block mt-4 text-auto-blue-600 hover:text-auto-blue-700 text-sm font-semibold">
                <span className="flex items-center">
                  Learn more about our services
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Have Questions?</h3>
              <p className="text-auto-gray-600 mb-4">
                Our automotive experts are here to help you with any questions about this vehicle.
              </p>
              <Button className="w-full mb-3">
                Contact Us
              </Button>
              <div className="text-center text-sm text-auto-gray-500">
                Call us at (555) 123-4567
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Vehicles */}
        {similarCars.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-auto-gray-800 mb-6">Similar Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarCars.map(similarCar => (
                <CarCard
                  key={similarCar.id}
                  id={similarCar.id}
                  title={similarCar.title}
                  year={similarCar.year}
                  price={similarCar.price}
                  mileage={similarCar.mileage}
                  fuelType={similarCar.fuelType}
                  transmission={similarCar.transmission}
                  image={similarCar.image}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
