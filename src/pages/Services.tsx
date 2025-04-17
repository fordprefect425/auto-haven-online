
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wrench, 
  Shield, 
  FileText, 
  Truck, 
  CreditCard, 
  Clock, 
  Phone, 
  CheckCircle2 
} from "lucide-react";
import React from "react";

const Services = () => {
  // Service types
  const serviceTypes = [
    {
      icon: <Wrench className="h-10 w-10 text-auto-blue-600" />,
      title: "Maintenance",
      description: "Keep your vehicle running smoothly with our professional maintenance services.",
      services: [
        {
          name: "Basic Service Package",
          price: "$99",
          period: "one-time",
          features: [
            "Oil and filter change",
            "Multi-point inspection",
            "Tire rotation",
            "Fluid top-offs",
            "Battery test"
          ]
        },
        {
          name: "Premium Service Package",
          price: "$249",
          period: "one-time",
          features: [
            "All Basic Service features",
            "Brake inspection and adjustment",
            "Air filter replacement",
            "Cabin filter replacement",
            "Wiper blade replacement",
            "AC system check"
          ]
        },
        {
          name: "Annual Maintenance Plan",
          price: "$599",
          period: "per year",
          features: [
            "3 Basic Service visits per year",
            "1 Premium Service visit per year",
            "Priority scheduling",
            "Complimentary car wash with each service",
            "Free loaner vehicle during service",
            "10% discount on additional repairs"
          ]
        }
      ]
    },
    {
      icon: <Shield className="h-10 w-10 text-auto-blue-600" />,
      title: "Protection Plans",
      description: "Protect your investment with our comprehensive warranty and protection plans.",
      services: [
        {
          name: "Extended Warranty - Basic",
          price: "$1,299",
          period: "3 years",
          features: [
            "Engine and transmission coverage",
            "Drivetrain protection",
            "Electrical system coverage",
            "$100 deductible per visit",
            "Transferable if you sell your vehicle"
          ]
        },
        {
          name: "Extended Warranty - Premium",
          price: "$1,999",
          period: "3 years",
          features: [
            "All Basic Warranty features",
            "$0 deductible",
            "Coverage for electronics and tech systems",
            "Roadside assistance included",
            "Trip interruption reimbursement",
            "Rental car coverage during repairs"
          ]
        },
        {
          name: "Comprehensive Protection Package",
          price: "$2,499",
          period: "3 years",
          features: [
            "All Premium Warranty features",
            "GAP insurance included",
            "Cosmetic damage protection",
            "Tire and wheel protection",
            "Key replacement coverage",
            "Interior fabric protection",
            "Exterior paint protection"
          ]
        }
      ]
    },
    {
      icon: <CreditCard className="h-10 w-10 text-auto-blue-600" />,
      title: "Financing & Insurance",
      description: "Secure your investment with our financing and insurance options.",
      services: [
        {
          name: "GAP Insurance",
          price: "$699",
          period: "one-time",
          features: [
            "Covers the 'gap' between insurance payout and loan balance",
            "Protection if vehicle is totaled or stolen",
            "Available for most financing options",
            "One-time payment for complete coverage",
            "Peace of mind protection"
          ]
        },
        {
          name: "Credit Life & Disability",
          price: "Varies",
          period: "monthly",
          features: [
            "Covers loan payments if you become disabled",
            "Pays off loan balance in case of death",
            "Affordable monthly premium",
            "Added security for you and your family",
            "Available for most credit profiles"
          ]
        },
        {
          name: "Mechanical Breakdown Insurance",
          price: "From $1,199",
          period: "coverage period",
          features: [
            "Alternative to traditional extended warranty",
            "Often more comprehensive coverage",
            "Lower deductibles available",
            "Coverage for new and pre-owned vehicles",
            "Repairs at any ASE certified facility",
            "Available for vehicles up to 10 years old"
          ]
        }
      ]
    }
  ];
  
  // Additional services
  const additionalServices = [
    {
      icon: <Truck />,
      title: "Home Delivery",
      description: "We'll deliver your new vehicle directly to your home or office, saving you time and hassle."
    },
    {
      icon: <FileText />,
      title: "Vehicle History Reports",
      description: "Get detailed vehicle history reports for any car in our inventory, showing previous owners, service records, and more."
    },
    {
      icon: <Clock />,
      title: "Trade-In Appraisal",
      description: "Get a fair and competitive offer for your current vehicle when you trade it in for a new purchase."
    }
  ];
  
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-auto-gray-800 mb-4">Our Services</h1>
          <p className="text-xl text-auto-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services to keep your vehicle running smoothly and protect your investment.
          </p>
        </div>
        
        {/* Main Services Tabs */}
        <Tabs defaultValue="maintenance" className="mb-16">
          <TabsList className="w-full flex justify-center space-x-4 mb-8">
            {serviceTypes.map((type, index) => (
              <TabsTrigger 
                key={index} 
                value={type.title.toLowerCase()}
                className="flex items-center px-6 py-3"
              >
                <span className="mr-2">{React.cloneElement(type.icon, { className: "h-5 w-5" })}</span>
                {type.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {serviceTypes.map((type, index) => (
            <TabsContent key={index} value={type.title.toLowerCase()} className="space-y-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-4 bg-auto-blue-50 rounded-full mb-4">
                  {type.icon}
                </div>
                <h2 className="text-2xl font-bold text-auto-gray-800 mb-2">{type.title} Services</h2>
                <p className="text-auto-gray-600 max-w-2xl mx-auto">
                  {type.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {type.services.map((service, sIndex) => (
                  <Card key={sIndex} className="overflow-hidden h-full">
                    <CardContent className="p-0">
                      <div className="p-6 border-b">
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                        <div className="flex items-baseline mb-4">
                          <span className="text-3xl font-bold text-auto-blue-600">{service.price}</span>
                          <span className="text-auto-gray-500 ml-1">/{service.period}</span>
                        </div>
                        <Button className="w-full bg-auto-blue-600 hover:bg-auto-blue-700">
                          Select Plan
                        </Button>
                      </div>
                      
                      <div className="p-6">
                        <ul className="space-y-3">
                          {service.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center">
                              <CheckCircle2 className="h-5 w-5 text-auto-blue-600 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-auto-gray-800 mb-8 text-center">Additional Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-auto-blue-50 rounded-full mb-4">
                    {React.cloneElement(service.icon, { className: "h-10 w-10 text-auto-blue-600" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-auto-gray-500">{service.description}</p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Service Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-auto-gray-800 mb-8 text-center">Our Service Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-auto-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule</h3>
              <p className="text-auto-gray-500">Book your service appointment online or by phone.</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-auto-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Drop Off</h3>
              <p className="text-auto-gray-500">Bring your vehicle in or use our convenient pickup service.</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-auto-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Service</h3>
              <p className="text-auto-gray-500">Our technicians perform the requested services and inspections.</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-auto-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Pickup</h3>
              <p className="text-auto-gray-500">Collect your serviced vehicle or have it delivered to your door.</p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-auto-blue-50 rounded-lg shadow-md p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold text-auto-gray-800 mb-2">Ready to Schedule a Service?</h2>
              <p className="text-auto-gray-600">
                Our team of automotive professionals is ready to help keep your vehicle in top condition.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col sm:flex-row md:flex-col gap-4">
              <Button className="flex items-center justify-center bg-auto-blue-600 hover:bg-auto-blue-700">
                <Phone className="mr-2 h-4 w-4" />
                Schedule Service
              </Button>
              <Button variant="outline">
                Contact Service Advisor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
