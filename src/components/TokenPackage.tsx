
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, Check, Star } from "lucide-react";

interface TokenPackageProps {
  name: string;
  tokens: number;
  price: number;
  bonus?: number;
  dailyBonus?: number;
  period?: 'weekly' | 'monthly';
  popular?: boolean;
  color?: 'purple' | 'blue' | 'green' | 'gold';
  subscription: boolean;
}

export function TokenPackage({ 
  name, 
  tokens, 
  price, 
  bonus, 
  dailyBonus,
  period,
  popular = false, 
  color = 'purple',
  subscription
}: TokenPackageProps) {
  
  const colorStyles = {
    purple: {
      gradient: "from-purple-700 to-purple-900",
      border: "border-purple-700",
      hover: "hover:border-purple-500",
      badge: "bg-purple-600",
      button: "bg-purple-600 hover:bg-purple-500",
    },
    blue: {
      gradient: "from-blue-700 to-blue-900",
      border: "border-blue-700",
      hover: "hover:border-blue-500",
      badge: "bg-blue-600",
      button: "bg-blue-600 hover:bg-blue-500",
    },
    green: {
      gradient: "from-green-700 to-green-900",
      border: "border-green-700",
      hover: "hover:border-green-500",
      badge: "bg-green-600",
      button: "bg-green-600 hover:bg-green-500",
    },
    gold: {
      gradient: "from-amber-600 to-amber-800",
      border: "border-amber-600",
      hover: "hover:border-amber-400",
      badge: "bg-amber-500 text-black",
      button: "bg-amber-500 hover:bg-amber-400 text-black",
    },
  };
  
  const selectedColorStyle = colorStyles[color];
  
  return (
    <Card 
      className={`relative overflow-hidden border ${selectedColorStyle.border} ${selectedColorStyle.hover} bg-[#1A1A2E] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      {popular && (
        <div className="absolute -right-12 top-6 bg-yellow-500 text-black py-1 px-12 transform rotate-45 text-sm font-bold">
          MOST POPULAR
        </div>
      )}
      
      <div className={`h-2 w-full bg-gradient-to-r ${selectedColorStyle.gradient}`}></div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-white flex items-center">
          {popular && <Star className="h-5 w-5 text-yellow-400 mr-2 fill-yellow-400" />}
          {name}
        </CardTitle>
        <CardDescription className="text-gray-400">
          {subscription ? `${period?.charAt(0).toUpperCase()}${period?.slice(1)} plan` : "One-time purchase"}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-center py-4">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Coins className="h-6 w-6 text-yellow-400" />
            <span className="text-3xl font-bold text-white">{tokens.toLocaleString()}</span>
          </div>
          <span className="text-lg text-gray-300">Tokens</span>
          
          {bonus && (
            <div className="mt-2">
              <Badge className={`${selectedColorStyle.badge} text-white`}>
                +{bonus.toLocaleString()} BONUS TOKENS (10% WEB BONUS)
              </Badge>
            </div>
          )}
          
          {dailyBonus && (
            <div className="mt-2">
              <Badge className={`${selectedColorStyle.badge} text-white`}>
                +{dailyBonus.toLocaleString()} DAILY BONUS
              </Badge>
            </div>
          )}
        </div>
        
        <div className="text-center pb-4">
          <div className="flex items-center justify-center gap-1">
            <span className="text-3xl font-bold text-white">${price.toFixed(2)}</span>
            {period && <span className="text-gray-400">/{period}</span>}
          </div>
          
          <div className="text-sm text-gray-400 mt-1">
            {!subscription && "One-time payment"}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">
              {subscription ? "Recurring rewards" : "Instant delivery"}
            </span>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">
              10% more tokens compared to in-app purchase
            </span>
          </div>
          {popular && (
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">
                Best value for money
              </span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className={`w-full ${selectedColorStyle.button}`}>
          Purchase Now
        </Button>
      </CardFooter>
    </Card>
  );
}
