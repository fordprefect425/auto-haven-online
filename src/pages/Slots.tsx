
import { useState } from "react";
import { SlotCard } from "@/components/SlotCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SLOTS_DATA } from "@/data/slots";

export default function Slots() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  
  const filteredSlots = SLOTS_DATA.filter(slot => {
    return (
      (slot.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       slot.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (category === "all" || slot.category === category)
    );
  });
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Our <span className="text-yellow-400">Exclusive Slots</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore our exciting collection of slots. From classic fruit machines to modern video slots with thrilling bonus features.
        </p>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search slots..."
            className="pl-10 bg-[#1A1A2E] border-[#3A1464] text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex gap-2 items-center">
          <Filter className="h-5 w-5 text-gray-400" />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px] bg-[#1A1A2E] border-[#3A1464] text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1A2E] border-[#3A1464] text-white">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="classic">Classic</SelectItem>
              <SelectItem value="video">Video Slots</SelectItem>
              <SelectItem value="progressive">Progressive</SelectItem>
              <SelectItem value="featured">Featured</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Slots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSlots.map((slot) => (
          <SlotCard
            key={slot.id}
            title={slot.title}
            description={slot.description}
            image={slot.image}
            category={slot.category}
            rtp={slot.rtp}
            popularity={slot.popularity}
          />
        ))}
      </div>
      
      {filteredSlots.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400">No slots found. Try a different search term or category.</p>
        </div>
      )}
    </div>
  );
}
