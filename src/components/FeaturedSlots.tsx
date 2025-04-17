
import { SlotCard } from "./SlotCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { SLOTS_DATA } from "@/data/slots";

export function FeaturedSlots() {
  // Get featured slots (first 3 slots in this example)
  const featuredSlots = SLOTS_DATA.filter(slot => slot.category === "featured").slice(0, 3);
  
  return (
    <section className="py-16 bg-[#0A0A14]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured <span className="text-yellow-400">Slots</span></h2>
            <p className="text-gray-400 mt-2">Experience our most popular and exciting slot games</p>
          </div>
          <Link to="/slots">
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300 flex items-center">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSlots.map((slot) => (
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
      </div>
    </section>
  );
}
