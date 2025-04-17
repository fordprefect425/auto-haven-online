
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Play } from "lucide-react";

interface SlotCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  rtp: number;
  popularity: number;
}

export function SlotCard({ title, description, image, category, rtp, popularity }: SlotCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-b from-[#1A1A2E] to-[#121224] text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F19] to-transparent opacity-70"></div>
        <Badge className="absolute top-3 right-3 bg-yellow-500 text-black font-medium">{category}</Badge>
        <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-700 hover:bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Play className="mr-2 h-4 w-4" /> Play Now
        </Button>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
        <CardDescription className="text-gray-400 line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <div className="text-gray-400 mr-2">RTP:</div>
            <div className="text-green-400 font-medium">{rtp}%</div>
          </div>
          <div className="flex items-center">
            <div className="text-gray-400 mr-2">Popularity:</div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < popularity ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button className="w-full bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
