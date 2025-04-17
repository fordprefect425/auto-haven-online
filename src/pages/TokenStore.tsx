
import { TokenPackage } from "@/components/TokenPackage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coins, CreditCard, Gift } from "lucide-react";

export default function TokenStore() {
  const tokenPackages = [
    {
      id: 1,
      name: "Starter Pack",
      tokens: 10000,
      price: 4.99,
      bonus: 1000,
      popular: false,
      color: "purple",
    },
    {
      id: 2,
      name: "Weekly Special",
      tokens: 50000,
      price: 19.99,
      bonus: 7500, // 15% bonus
      popular: true,
      color: "blue",
    },
    {
      id: 3,
      name: "High Roller",
      tokens: 150000,
      price: 49.99,
      bonus: 22500, // 15% bonus
      popular: false,
      color: "green",
    },
    {
      id: 4,
      name: "Jackpot Bundle",
      tokens: 500000,
      price: 99.99,
      bonus: 100000, // 20% bonus
      popular: false,
      color: "gold",
    },
  ];

  const subscriptionPackages = [
    {
      id: 5,
      name: "Daily Rewards",
      tokens: 5000,
      dailyBonus: 1000,
      price: 9.99,
      period: "weekly",
      color: "purple",
    },
    {
      id: 6,
      name: "VIP Membership",
      tokens: 50000,
      dailyBonus: 3000,
      price: 29.99,
      period: "monthly",
      popular: true,
      color: "gold",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">
          <Coins className="inline mr-2 text-yellow-400" /> Token Store
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-300 mb-4">
            Purchase tokens on our website and get <span className="text-yellow-400 font-bold">10% MORE BONUS</span> compared to in-app purchases!
          </p>
          <div className="p-4 rounded-lg bg-gradient-to-r from-purple-900/50 to-purple-800/50 border border-purple-700/50 mb-6">
            <p className="text-sm text-gray-300">
              <Gift className="inline mr-2 text-yellow-400" />
              All web purchases receive additional bonuses and exclusive perks not available in the app!
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="packages" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8 bg-[#1A1A2E]">
          <TabsTrigger value="packages" className="text-lg py-3">
            <CreditCard className="mr-2" /> One-Time Purchases
          </TabsTrigger>
          <TabsTrigger value="subscriptions" className="text-lg py-3">
            <Gift className="mr-2" /> Subscriptions
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="packages" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tokenPackages.map((pkg) => (
              <TokenPackage
                key={pkg.id}
                name={pkg.name}
                tokens={pkg.tokens}
                price={pkg.price}
                bonus={pkg.bonus}
                popular={pkg.popular}
                color={pkg.color}
                subscription={false}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="subscriptions" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subscriptionPackages.map((pkg) => (
              <TokenPackage
                key={pkg.id}
                name={pkg.name}
                tokens={pkg.tokens}
                price={pkg.price}
                dailyBonus={pkg.dailyBonus}
                period={pkg.period}
                popular={pkg.popular}
                color={pkg.color}
                subscription={true}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="max-w-4xl mx-auto mt-12 p-6 rounded-lg bg-[#1A1A2E] border border-purple-900/50">
        <h3 className="text-xl font-bold mb-4 text-white">About Our Tokens</h3>
        <p className="text-gray-300 mb-4">
          Tokens are the virtual currency used in our games. They can be used to play slots, enter tournaments, and unlock special features. Our web store offers exclusive bonuses compared to in-app purchases.
        </p>
        <p className="text-sm text-gray-400">
          Note: All purchases are final. Tokens have no real-world monetary value and cannot be exchanged for cash. For assistance with purchases, please contact our support team.
        </p>
      </div>
    </div>
  );
}
