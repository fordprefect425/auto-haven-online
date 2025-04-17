
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Fuel, Zap, Calendar, DollarSign } from "lucide-react";

interface CarCardProps {
  id: string;
  title: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  image: string;
  featured?: boolean;
}

export function CarCard({ 
  id, 
  title, 
  year, 
  price, 
  mileage, 
  fuelType, 
  transmission, 
  image, 
  featured 
}: CarCardProps) {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${featured ? 'border-auto-blue-600 shadow-md' : ''}`}>
      <div className="relative">
        {featured && (
          <div className="absolute top-2 left-2 z-10">
            <Badge className="bg-auto-blue-600">Featured</Badge>
          </div>
        )}
        <Link to={`/cars/${id}`}>
          <img 
            src={image} 
            alt={title} 
            className="w-full aspect-[16/9] object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/cars/${id}`} className="hover:text-auto-blue-600 transition-colors">
            <h3 className="font-bold text-lg">{title}</h3>
          </Link>
          <span className="text-xl font-bold text-auto-blue-600">${price.toLocaleString()}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-4">
          <div className="flex items-center text-sm text-auto-gray-500">
            <Calendar className="h-4 w-4 mr-1 text-auto-gray-400" />
            <span>{year}</span>
          </div>
          <div className="flex items-center text-sm text-auto-gray-500">
            <Car className="h-4 w-4 mr-1 text-auto-gray-400" />
            <span>{mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center text-sm text-auto-gray-500">
            <Fuel className="h-4 w-4 mr-1 text-auto-gray-400" />
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center text-sm text-auto-gray-500">
            <Zap className="h-4 w-4 mr-1 text-auto-gray-400" />
            <span>{transmission}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2 justify-between pt-2">
        <Button variant="outline" className="flex-1">
          View Details
        </Button>
        <Button className="flex-1 bg-auto-red-600 hover:bg-auto-red-700">
          <DollarSign className="h-4 w-4 mr-1" />
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
