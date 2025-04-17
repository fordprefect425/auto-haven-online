
import { useState } from "react";
import { CarCard } from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CARS_DATA } from "@/data/cars";
import { Filter, ChevronDown, Search } from "lucide-react";

const CarListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [yearRange, setYearRange] = useState([2010, 2023]);
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Get all unique makes
  const allMakes = [...new Set(CARS_DATA.map(car => car.make))];
  
  // Filter cars based on the selected filters
  const filteredCars = CARS_DATA.filter(car => {
    // Search term filter
    const matchesSearch = car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.model.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Price range filter
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
    
    // Year range filter
    const matchesYear = car.year >= yearRange[0] && car.year <= yearRange[1];
    
    // Make filter
    const matchesMake = selectedMakes.length === 0 || selectedMakes.includes(car.make);
    
    return matchesSearch && matchesPrice && matchesYear && matchesMake;
  });
  
  // Toggle selected make
  const toggleMake = (make: string) => {
    if (selectedMakes.includes(make)) {
      setSelectedMakes(selectedMakes.filter(m => m !== make));
    } else {
      setSelectedMakes([...selectedMakes, make]);
    }
  };
  
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-auto-gray-800 mb-2">Browse Our Inventory</h1>
          <p className="text-auto-gray-600">Discover our selection of premium used vehicles</p>
        </div>
        
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-auto-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search by make, model, or keyword..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="md:w-auto">
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          <div className="md:w-auto">
            <Select defaultValue="newest">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Filters */}
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Price Range Filter */}
            <div>
              <Label htmlFor="price-range" className="block mb-2">Price Range</Label>
              <Slider
                id="price-range"
                min={0}
                max={100000}
                step={1000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-auto-gray-500">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
            </div>
            
            {/* Year Range Filter */}
            <div>
              <Label htmlFor="year-range" className="block mb-2">Year Range</Label>
              <Slider
                id="year-range"
                min={2010}
                max={2023}
                step={1}
                value={yearRange}
                onValueChange={setYearRange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-auto-gray-500">
                <span>{yearRange[0]}</span>
                <span>{yearRange[1]}</span>
              </div>
            </div>
            
            {/* Makes Filter */}
            <div className="md:col-span-2">
              <Label className="block mb-2">Makes</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {allMakes.map(make => (
                  <div key={make} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`make-${make}`} 
                      checked={selectedMakes.includes(make)}
                      onCheckedChange={() => toggleMake(make)}
                    />
                    <label
                      htmlFor={`make-${make}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {make}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-auto-gray-500">Showing {filteredCars.length} vehicles</p>
        </div>
        
        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
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
            />
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredCars.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-auto-gray-800 mb-2">No vehicles matching your criteria</h3>
            <p className="text-auto-gray-500 mb-6">Try adjusting your filters or search terms</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setPriceRange([0, 100000]);
                setYearRange([2010, 2023]);
                setSelectedMakes([]);
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarListings;
