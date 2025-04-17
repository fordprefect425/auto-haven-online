
import { FinancingCalculator } from "@/components/FinancingCalculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  DollarSign, 
  ShieldCheck, 
  Percent, 
  CreditCard, 
  FileCheck, 
  ThumbsUp, 
  Clock 
} from "lucide-react";

const Financing = () => {
  // Financing options
  const financingOptions = [
    {
      title: "Standard Financing",
      icon: <DollarSign className="h-10 w-10 text-auto-blue-600" />,
      features: [
        "Rates starting from 3.99% APR",
        "Loan terms from 36 to 72 months",
        "No prepayment penalties",
        "Available for most credit scores"
      ],
      cta: "Apply Now"
    },
    {
      title: "Premium Financing",
      icon: <ShieldCheck className="h-10 w-10 text-auto-blue-600" />,
      features: [
        "Rates starting from 2.99% APR",
        "Extended warranty included",
        "Maintenance package for first year",
        "GAP insurance included"
      ],
      cta: "Learn More",
      highlighted: true
    },
    {
      title: "Lease Options",
      icon: <CreditCard className="h-10 w-10 text-auto-blue-600" />,
      features: [
        "Low monthly payments",
        "Flexible term options",
        "Option to purchase at end of lease",
        "Includes routine maintenance"
      ],
      cta: "See Lease Options"
    }
  ];
  
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-auto-gray-800 mb-4">Flexible Financing Options</h1>
          <p className="text-xl text-auto-gray-600 max-w-3xl mx-auto">
            We offer competitive rates and flexible terms to help you drive home in your dream car today.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Process Steps */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-auto-gray-800 mb-6">Our Simple Financing Process</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-auto-blue-50 text-auto-blue-600 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
                    <p className="text-auto-gray-600">
                      Fill out our secure online application in just a few minutes. No impact on your credit score.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-auto-blue-50 text-auto-blue-600 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Get Pre-Approved</h3>
                    <p className="text-auto-gray-600">
                      Receive your financing options within 24 hours. Choose the plan that works best for you.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-auto-blue-50 text-auto-blue-600 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Finalize Your Purchase</h3>
                    <p className="text-auto-gray-600">
                      Sign your financing documents and drive away in your new vehicle with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-auto-gray-800 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">What credit score do I need to qualify?</h3>
                  <p className="text-auto-gray-600">
                    We work with all credit profiles. While higher scores may qualify for better rates, 
                    we have financing solutions for a wide range of credit situations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">How much should I put down?</h3>
                  <p className="text-auto-gray-600">
                    While a down payment is not always required, we generally recommend 10-20% of the vehicle's price 
                    to secure better rates and lower monthly payments.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">What documentation do I need?</h3>
                  <p className="text-auto-gray-600">
                    You'll need a valid driver's license, proof of income, proof of residence, and proof of insurance.
                    Additional documents may be required depending on your specific situation.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Can I get pre-approved before I shop?</h3>
                  <p className="text-auto-gray-600">
                    Yes! We encourage getting pre-approved so you know exactly what you can afford before you start shopping.
                    This can streamline your purchase process significantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div>
            {/* Financing Calculator */}
            <div className="mb-8">
              <FinancingCalculator />
            </div>
            
            {/* Financing Benefits */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Why Choose Our Financing</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Percent className="h-5 w-5 text-auto-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Competitive Rates</h4>
                    <p className="text-sm text-auto-gray-500">We partner with multiple lenders to ensure you get the best possible rate.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-auto-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Easy Application</h4>
                    <p className="text-sm text-auto-gray-500">Our streamlined application process takes just minutes to complete.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-auto-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Flexible Terms</h4>
                    <p className="text-sm text-auto-gray-500">Choose from a variety of loan terms to fit your budget and lifestyle.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-auto-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Quick Approvals</h4>
                    <p className="text-sm text-auto-gray-500">Get financing decisions typically within 24 hours or less.</p>
                  </div>
                </li>
              </ul>
              
              <Button className="w-full mt-6 bg-auto-blue-600 hover:bg-auto-blue-700">
                Apply for Financing
              </Button>
            </div>
          </div>
        </div>
        
        {/* Financing Options */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-auto-gray-800 mb-8 text-center">Choose Your Financing Option</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <Card key={index} className={`overflow-hidden ${option.highlighted ? 'border-auto-blue-600 shadow-lg' : ''}`}>
                {option.highlighted && (
                  <div className="bg-auto-blue-600 text-white py-2 text-center font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardContent className={`p-6 ${option.highlighted ? 'pt-4' : 'pt-6'}`}>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-auto-blue-50 rounded-full">
                      {option.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mb-4">{option.title}</h3>
                  
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 text-auto-blue-600 mr-2" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${option.highlighted ? 'bg-auto-blue-600 hover:bg-auto-blue-700' : ''}`}
                    variant={option.highlighted ? 'default' : 'outline'}
                  >
                    {option.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-auto-blue-600 text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            Apply now to see what financing options are available for you. No obligations and no impact on your credit score.
          </p>
          <Button size="lg" className="bg-white text-auto-blue-600 hover:bg-gray-100">
            Apply for Financing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Financing;
