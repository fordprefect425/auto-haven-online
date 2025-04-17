
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Coins } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A0F36] to-[#3A1464] opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1605170439002-90845e8c0137?q=80&w=2069')",
             backgroundSize: "cover",
             backgroundPosition: "center"
           }}>
      </div>
      
      {/* Animated light effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-40 h-40 rounded-full bg-purple-500/20 blur-3xl -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-60 h-60 rounded-full bg-pink-500/20 blur-3xl top-1/4 right-10 animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute w-40 h-40 rounded-full bg-blue-500/20 blur-3xl bottom-10 left-1/3 animate-pulse" style={{animationDelay: "2s"}}></div>
      </div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Spin to Win at <span className="text-yellow-400">Lucky Spins</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Experience the thrill of Vegas-style slots, learn winning strategies, and get exclusive bonuses when you purchase tokens online!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-6 shadow-lg" asChild>
              <Link to="/slots">
                Explore Slots <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button className="bg-purple-700 hover:bg-purple-800 text-lg px-8 py-6 shadow-lg" asChild>
              <Link to="/token-store">
                <Coins className="mr-2" /> Buy Tokens
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
