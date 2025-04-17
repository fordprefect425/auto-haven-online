
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative">
      {/* Hero background */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Luxury car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      
      {/* Hero content */}
      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Find Your Perfect Drive</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Browse our extensive collection of premium used vehicles, with financing options and comprehensive after-sales service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/cars">
              <Button size="lg" className="bg-auto-blue-600 hover:bg-auto-blue-700 text-white">
                Browse Inventory
              </Button>
            </Link>
            <Link to="/financing">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                Financing Options
              </Button>
            </Link>
          </div>
          
          {/* Search bar */}
          <div className="mt-12 bg-white p-4 rounded-lg shadow-lg max-w-xl">
            <div className="flex items-center">
              <Search className="h-5 w-5 text-auto-gray-500 ml-2" />
              <input 
                type="text" 
                placeholder="Search by make, model, or keyword..." 
                className="flex-1 px-4 py-2 focus:outline-none text-auto-gray-800"
              />
              <Button className="bg-auto-red-600 hover:bg-auto-red-700">Search</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
