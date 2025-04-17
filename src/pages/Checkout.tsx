
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CARS_DATA } from "@/data/cars";
import { ArrowLeft, CreditCard, Building, Clock, Check, Shield } from "lucide-react";

const Checkout = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const car = CARS_DATA.find(car => car.id === id);
  
  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-auto-gray-800 mb-4">Vehicle Not Found</h2>
          <p className="text-auto-gray-600 mb-6">The vehicle you're trying to purchase doesn't exist or has been removed.</p>
          <Link to="/cars">
            <Button>Browse All Vehicles</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Calculate taxes and total
  const taxRate = 0.0825; // 8.25%
  const taxes = car.price * taxRate;
  const processingFee = 499;
  const total = car.price + taxes + processingFee;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 2000);
  };
  
  if (isComplete) {
    return (
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="shadow-lg">
            <CardHeader className="text-center bg-green-50 border-b">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-700">Purchase Complete!</CardTitle>
              <CardDescription>Your order has been successfully processed.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold mb-2">Thank you for your purchase!</h2>
                <p className="text-auto-gray-600">
                  We're excited to help you drive home in your new {car.year} {car.make} {car.model}.
                </p>
              </div>
              
              <div className="bg-auto-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Order Summary</h3>
                <div className="flex justify-between mb-1">
                  <span>Order Number:</span>
                  <span className="font-medium">AH-{Math.floor(Math.random() * 1000000)}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Vehicle:</span>
                  <span className="font-medium">{car.title}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Total Amount:</span>
                  <span className="font-medium">${total.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <h3 className="font-semibold">Next Steps:</h3>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>Check your email for a purchase confirmation and detailed instructions.</li>
                  <li>Our team will contact you within 24 hours to arrange delivery or pickup.</li>
                  <li>Complete final paperwork and registration with our finance department.</li>
                  <li>Enjoy your new vehicle!</li>
                </ol>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="sm:flex-1 bg-auto-blue-600 hover:bg-auto-blue-700" onClick={() => navigate("/")}>
                Return to Homepage
              </Button>
              <Button className="sm:flex-1" variant="outline">
                View Account
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            className="flex items-center text-auto-gray-600 hover:text-auto-gray-800"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Vehicle
          </Button>
        </div>
        
        <h1 className="text-3xl font-bold text-auto-gray-800 mb-8 text-center">Complete Your Purchase</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>Please enter your payment details.</CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {/* Payment Method Tabs */}
                  <Tabs 
                    defaultValue="card" 
                    className="mb-8"
                    value={selectedTab}
                    onValueChange={setSelectedTab}
                  >
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="card" className="flex items-center">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Credit Card
                      </TabsTrigger>
                      <TabsTrigger value="bank" className="flex items-center">
                        <Building className="mr-2 h-4 w-4" />
                        Bank Transfer
                      </TabsTrigger>
                      <TabsTrigger value="financing" className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        Financing
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="card">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="nameOnCard">Name on Card</Label>
                          <Input id="nameOnCard" placeholder="John Doe" required />
                        </div>
                        
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input 
                            id="cardNumber" 
                            placeholder="4111 1111 1111 1111" 
                            required 
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiration Date</Label>
                            <Input id="expiryDate" placeholder="MM/YY" required />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" required type="password" />
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="bank">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="accountName">Account Holder Name</Label>
                          <Input id="accountName" placeholder="John Doe" required />
                        </div>
                        
                        <div>
                          <Label htmlFor="routingNumber">Routing Number</Label>
                          <Input id="routingNumber" placeholder="123456789" required />
                        </div>
                        
                        <div>
                          <Label htmlFor="accountNumber">Account Number</Label>
                          <Input id="accountNumber" placeholder="9876543210" required />
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="financing">
                      <div className="text-center py-6">
                        <Shield className="h-12 w-12 text-auto-blue-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Financing Option</h3>
                        <p className="text-auto-gray-500 mb-4">
                          For financing options, a $500 deposit is required today. Our finance team will contact you to complete the application process.
                        </p>
                        <div className="bg-auto-blue-50 p-4 rounded-lg inline-block">
                          <div className="font-medium">Deposit Required: $500</div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  {/* Billing Address */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Billing Address</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" required />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="sm:col-span-1">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" required />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input id="state" required />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">Zip Code</Label>
                          <Input id="zipCode" required />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" required />
                      </div>
                    </div>
                  </div>
                  
                  {/* Terms and Conditions */}
                  <div className="mb-8">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="terms" required />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms and conditions
                        </label>
                        <p className="text-sm text-auto-gray-500">
                          By checking this box, you agree to our <a href="#" className="text-auto-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-auto-blue-600 hover:underline">Privacy Policy</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-auto-blue-600 hover:bg-auto-blue-700"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : `Pay $${selectedTab === 'financing' ? '500' : total.toLocaleString()}`}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Order Summary */}
          <div>
            <Card className="shadow-md sticky top-24">
              <CardHeader className="border-b">
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={car.image} 
                    alt={car.title} 
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{car.title}</h3>
                    <p className="text-sm text-auto-gray-500">
                      {car.mileage.toLocaleString()} miles • {car.fuelType} • {car.transmission}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-auto-gray-600">Vehicle Price</span>
                    <span className="font-medium">${car.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-auto-gray-600">Sales Tax (8.25%)</span>
                    <span className="font-medium">${taxes.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-auto-gray-600">Processing Fee</span>
                    <span className="font-medium">${processingFee}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-auto-blue-600">${total.toLocaleString()}</span>
                  </div>
                  
                  {selectedTab === 'financing' && (
                    <div className="bg-auto-blue-50 p-3 rounded-lg mt-4">
                      <div className="font-medium flex justify-between">
                        <span>Deposit Due Today:</span>
                        <span>$500</span>
                      </div>
                      <div className="text-sm text-auto-gray-500 mt-1">
                        Remaining balance will be financed.
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="bg-auto-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-auto-blue-600" />
                    Secure Purchase Guarantee
                  </h4>
                  <p className="text-sm text-auto-gray-500">
                    Your purchase is protected by our 7-day money-back guarantee. If you're not completely satisfied, return the vehicle for a full refund.
                  </p>
                </div>
                
                <div className="text-sm text-auto-gray-500">
                  Need help? <a href="#" className="text-auto-blue-600 hover:underline">Contact our sales team</a> or call (555) 123-4567
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
