
import { CarCard } from "./CarCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { CARS_DATA } from "@/data/cars";

export function FeaturedCars() {
  // Get featured cars (first 3 cars in this example)
  const featuredCars = CARS_DATA.slice(0, 3);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-auto-gray-800">Featured Vehicles</h2>
            <p className="text-auto-gray-500 mt-2">Explore our top-rated hand-picked vehicles</p>
          </div>
          <Link to="/cars">
            <Button variant="ghost" className="text-auto-blue-600 hover:text-auto-blue-700 flex items-center">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <CarCard 
              key={car.id}
              id={car.id}
              title={car.title}
              year={car.year}
              price={car.price}
              mileage={car.mileage}
              fuelType={car.fuelType}
              transmission={car.transmission}
              image={car.image}
              featured={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
