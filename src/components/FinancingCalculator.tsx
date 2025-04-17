
import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calculator, DollarSign, Clock } from "lucide-react";

export function FinancingCalculator() {
  const [carPrice, setCarPrice] = useState(25000);
  const [downPayment, setDownPayment] = useState(5000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(60);
  
  // Calculate monthly payment
  const calculateMonthlyPayment = () => {
    const principal = carPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const termMonths = loanTerm;
    
    if (monthlyRate === 0) return principal / termMonths;
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                         (Math.pow(1 + monthlyRate, termMonths) - 1);
    
    return isNaN(monthlyPayment) ? 0 : monthlyPayment;
  };
  
  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * loanTerm;
  const totalInterest = totalPayment - (carPrice - downPayment);
  
  const handleCarPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/[^0-9]/g, '') || '0');
    setCarPrice(value);
  };
  
  const handleDownPaymentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/[^0-9]/g, '') || '0');
    setDownPayment(Math.min(value, carPrice));
  };
  
  return (
    <Card className="border shadow-lg">
      <CardHeader className="border-b bg-auto-blue-50">
        <CardTitle className="flex items-center text-auto-blue-700">
          <Calculator className="mr-2 h-5 w-5" />
          Financing Calculator
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="car-price">Car Price</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-auto-gray-500 h-4 w-4" />
              <Input 
                id="car-price" 
                type="text"
                value={carPrice.toLocaleString()}
                onChange={handleCarPriceChange}
                className="pl-9" 
              />
            </div>
            <Slider 
              value={[carPrice]} 
              min={5000} 
              max={100000} 
              step={1000} 
              onValueChange={(value) => setCarPrice(value[0])}
              className="mt-2"
            />
            <div className="flex justify-between text-xs text-auto-gray-500">
              <span>$5,000</span>
              <span>$100,000</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="down-payment">Down Payment</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-auto-gray-500 h-4 w-4" />
              <Input 
                id="down-payment" 
                type="text"
                value={downPayment.toLocaleString()}
                onChange={handleDownPaymentChange}
                className="pl-9" 
              />
            </div>
            <Slider 
              value={[downPayment]} 
              min={0} 
              max={carPrice} 
              step={500} 
              onValueChange={(value) => setDownPayment(value[0])}
              className="mt-2"
            />
            <div className="flex justify-between text-xs text-auto-gray-500">
              <span>$0</span>
              <span>${carPrice.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="interest-rate">Interest Rate (%)</Label>
            <Input 
              id="interest-rate" 
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
              step={0.1}
              min={0}
              max={20}
            />
            <Slider 
              value={[interestRate]} 
              min={0} 
              max={20} 
              step={0.1} 
              onValueChange={(value) => setInterestRate(value[0])}
              className="mt-2"
            />
            <div className="flex justify-between text-xs text-auto-gray-500">
              <span>0%</span>
              <span>20%</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="loan-term">Loan Term (months)</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-auto-gray-500 h-4 w-4" />
              <Input 
                id="loan-term" 
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value) || 0)}
                className="pl-9"
                min={12}
                max={84}
                step={12}
              />
            </div>
            <Slider 
              value={[loanTerm]} 
              min={12} 
              max={84} 
              step={12} 
              onValueChange={(value) => setLoanTerm(value[0])}
              className="mt-2"
            />
            <div className="flex justify-between text-xs text-auto-gray-500">
              <span>12 months</span>
              <span>84 months</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-auto-blue-50 rounded-lg">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-auto-gray-600">Monthly Payment:</span>
              <span className="text-xl font-bold text-auto-blue-700">${monthlyPayment.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-auto-gray-600">Total Payment:</span>
              <span className="font-semibold">${totalPayment.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-auto-gray-600">Total Interest:</span>
              <span className="font-semibold">${totalInterest.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Button className="w-full bg-auto-blue-600 hover:bg-auto-blue-700">
            Apply for Financing
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
