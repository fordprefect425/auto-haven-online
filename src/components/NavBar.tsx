
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, DollarSign, Wrench, Home, ShoppingCart } from "lucide-react";

export function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-auto-blue-600" />
            <span className="text-2xl font-bold text-auto-blue-600">AutoHaven</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="flex items-center text-auto-gray-600 hover:text-auto-blue-600 transition-colors">
              <Home className="mr-1 h-4 w-4" />
              Home
            </Link>
            <Link to="/cars" className="flex items-center text-auto-gray-600 hover:text-auto-blue-600 transition-colors">
              <Car className="mr-1 h-4 w-4" />
              Cars
            </Link>
            <Link to="/financing" className="flex items-center text-auto-gray-600 hover:text-auto-blue-600 transition-colors">
              <DollarSign className="mr-1 h-4 w-4" />
              Financing
            </Link>
            <Link to="/services" className="flex items-center text-auto-gray-600 hover:text-auto-blue-600 transition-colors">
              <Wrench className="mr-1 h-4 w-4" />
              Services
            </Link>
            <Button className="bg-auto-red-600 hover:bg-auto-red-700 text-white">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Purchase Now
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
