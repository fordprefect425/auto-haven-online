
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wrench, 
  DollarSign, 
  Shield, 
  Clock, 
  Truck, 
  FileText 
} from "lucide-react";

export function ServicesOverview() {
  const services = [
    {
      icon: <DollarSign className="h-10 w-10 text-auto-blue-600" />,
      title: "Flexible Financing",
      description: "Competitive rates and flexible terms tailored to your budget and credit situation."
    },
    {
      icon: <Wrench className="h-10 w-10 text-auto-blue-600" />,
      title: "Professional Maintenance",
      description: "Expert mechanics ensuring your vehicle runs smoothly with regular maintenance plans."
    },
    {
      icon: <Shield className="h-10 w-10 text-auto-blue-600" />,
      title: "Extended Warranty",
      description: "Peace of mind with our comprehensive extended warranty plans for used vehicles."
    },
    {
      icon: <Clock className="h-10 w-10 text-auto-blue-600" />,
      title: "Trade-In Options",
      description: "Fair market value for your current vehicle when upgrading to another model."
    },
    {
      icon: <Truck className="h-10 w-10 text-auto-blue-600" />,
      title: "Home Delivery",
      description: "Convenient home delivery service available within a 100-mile radius."
    },
    {
      icon: <FileText className="h-10 w-10 text-auto-blue-600" />,
      title: "Vehicle History",
      description: "Detailed vehicle history reports provided for all our inventory."
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-auto-gray-800">Our Services</h2>
          <p className="text-auto-gray-500 mt-2 max-w-2xl mx-auto">
            We offer a wide range of services to ensure your car buying experience is seamless and enjoyable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-auto-blue-50 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-auto-gray-500">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-auto-blue-600 hover:bg-auto-blue-700">
              Learn More About Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
