
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCars } from "@/components/FeaturedCars";
import { ServicesOverview } from "@/components/ServicesOverview";
import { TestimonialSection } from "@/components/TestimonialSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, DollarSign, Wrench, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <FeaturedCars />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Car showroom" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-auto-gray-800 mb-4">Why Choose AutoHaven?</h2>
              <p className="text-auto-gray-600 mb-6">
                At AutoHaven, we're committed to providing a premium car buying experience with transparency and integrity. 
                Our team of automotive experts carefully selects and inspects each vehicle to ensure you're getting a quality used car.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-auto-blue-50 rounded-full">
                    <Car className="h-6 w-6 text-auto-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Extensive Selection</h3>
                    <p className="text-auto-gray-500">Browse our inventory of premium used vehicles, all thoroughly inspected and certified.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-auto-blue-50 rounded-full">
                    <DollarSign className="h-6 w-6 text-auto-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Competitive Financing</h3>
                    <p className="text-auto-gray-500">Our financing experts work with multiple lenders to get you the best rates possible.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-auto-blue-50 rounded-full">
                    <Wrench className="h-6 w-6 text-auto-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Professional Servicing</h3>
                    <p className="text-auto-gray-500">Our certified mechanics keep your vehicle running smoothly with regular maintenance and repairs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-auto-blue-50 rounded-full">
                    <Clock className="h-6 w-6 text-auto-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Streamlined Process</h3>
                    <p className="text-auto-gray-500">Our efficient buying process means less time dealing with paperwork and more time enjoying your vehicle.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/cars" className="inline-block mt-6">
                <Button className="bg-auto-blue-600 hover:bg-auto-blue-700">
                  Browse Our Inventory
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesOverview />
      
      <TestimonialSection />
      
      {/* Call to Action Section */}
      <section className="py-16 bg-auto-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Car?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Browse our extensive inventory of premium used cars and find the perfect match for your lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/cars">
              <Button size="lg" className="bg-white text-auto-blue-600 hover:bg-gray-100">
                Browse Inventory
              </Button>
            </Link>
            <Link to="/financing">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-auto-blue-700">
                Financing Options
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
