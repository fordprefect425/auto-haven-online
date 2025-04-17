
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Coins, Gift, Percent } from "lucide-react";

export function TokenPromotion() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1606420187127-ade1c4b02abd?q=80&w=1974')",
             backgroundSize: "cover",
             backgroundPosition: "center"
           }}>
      </div>
      
      {/* Animated coin particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-20 h-20 rounded-full bg-yellow-500/30 blur-xl top-20 left-[10%] animate-pulse"></div>
        <div className="absolute w-32 h-32 rounded-full bg-yellow-500/20 blur-xl top-[60%] right-[5%] animate-pulse" style={{animationDelay: "1.5s"}}></div>
        <div className="absolute w-24 h-24 rounded-full bg-yellow-500/20 blur-xl bottom-[10%] left-[30%] animate-pulse" style={{animationDelay: "0.7s"}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <div className="bg-yellow-500/20 inline-block p-2 rounded-lg mb-4">
              <Percent className="h-6 w-6 text-yellow-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Get <span className="text-yellow-300">10% EXTRA TOKENS</span> When You Purchase on Web
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Skip the app store fees and get more value for your money by purchasing tokens directly on our website.
            </p>
            <div className="flex flex-wrap gap-6 items-center mb-8">
              <div className="flex items-center">
                <div className="bg-purple-700/50 p-2 rounded-full mr-3">
                  <Gift className="h-5 w-5 text-yellow-300" />
                </div>
                <span className="text-white">Exclusive Web Bonuses</span>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-700/50 p-2 rounded-full mr-3">
                  <Coins className="h-5 w-5 text-yellow-300" />
                </div>
                <span className="text-white">More Tokens, Same Price</span>
              </div>
            </div>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-6 py-6 shadow-lg" asChild>
              <Link to="/token-store">
                Buy Tokens Now <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="lg:w-2/5">
            <div className="bg-gradient-to-b from-purple-800/80 to-indigo-900/80 rounded-xl p-6 border border-purple-700/50 shadow-lg relative">
              <div className="absolute -top-5 -right-5 bg-yellow-500 text-black py-2 px-4 rounded-lg font-bold transform rotate-3 shadow-lg">
                WEB EXCLUSIVE
              </div>
              
              <div className="mb-6 text-center">
                <Coins className="h-16 w-16 text-yellow-400 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-white">Web Special Offer</h3>
                <p className="text-gray-300">Limited time promotion</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 rounded-lg bg-purple-800/50 border border-purple-700/50">
                  <div>
                    <p className="text-gray-300">50,000 Tokens</p>
                    <p className="text-sm text-gray-400">Regular price</p>
                  </div>
                  <div className="text-xl font-bold text-white">$19.99</div>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-purple-800/50 border border-purple-700/50">
                  <div>
                    <p className="text-yellow-300 font-bold">+ 5,000 Bonus Tokens</p>
                    <p className="text-sm text-gray-400">Web exclusive 10% bonus</p>
                  </div>
                  <div className="text-xl font-bold text-green-400">FREE</div>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <div>
                    <p className="text-white font-bold">Total Tokens</p>
                  </div>
                  <div className="text-2xl font-bold text-yellow-300">55,000</div>
                </div>
              </div>
              
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-lg py-6" asChild>
                <Link to="/token-store">
                  <Coins className="mr-2" /> Claim This Offer
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
