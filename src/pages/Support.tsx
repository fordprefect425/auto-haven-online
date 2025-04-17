
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MessagesSquare, Mail, Phone, HelpCircle, Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log("Form submitted:", formData);
    toast.success("Your message has been sent. We'll get back to you soon!");
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const faqs = [
    {
      question: "How do I purchase tokens?",
      answer: "You can purchase tokens from our Token Store page. We offer various packages with different amounts of tokens. Web purchases come with an additional 10% bonus compared to in-app purchases."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and various mobile payment options. All transactions are secure and processed through our payment gateway."
    },
    {
      question: "Are my purchases refundable?",
      answer: "Token purchases are generally non-refundable. However, if you experience any issues with your purchase, please contact our support team and we'll do our best to resolve the situation."
    },
    {
      question: "How do I access my purchased tokens?",
      answer: "After a successful purchase, your tokens will be automatically added to your account. If you're logged in on the game, you may need to restart the app to see your updated token balance."
    },
    {
      question: "What is the difference between regular tokens and bonus tokens?",
      answer: "Regular tokens are the ones you purchase, while bonus tokens are extra tokens we give you as part of promotions or special offers. Both types can be used in the same way within our games."
    },
    {
      question: "Can I transfer tokens between accounts?",
      answer: "Currently, we don't support token transfers between accounts. Each account's tokens are specific to that account only."
    },
    {
      question: "Why should I buy tokens on the website instead of in the app?",
      answer: "Purchasing tokens on our website gives you an additional 10% bonus compared to in-app purchases. This is because app stores take a commission on in-app purchases, and we pass those savings to you when you buy directly from us."
    },
    {
      question: "What happens to my tokens if I uninstall the game?",
      answer: "Your tokens are tied to your account, not your device. As long as you sign in with the same account, your tokens will be available even if you uninstall and reinstall the game or play on a different device."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">
          <HelpCircle className="inline mr-2 text-yellow-400" /> Support Center
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Have questions or need assistance? Our support team is here to help you with any issues or inquiries you may have.
        </p>
      </div>

      <Tabs defaultValue="faq" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8 bg-[#1A1A2E]">
          <TabsTrigger value="faq" className="text-lg py-3">
            <HelpCircle className="mr-2" /> Frequently Asked Questions
          </TabsTrigger>
          <TabsTrigger value="contact" className="text-lg py-3">
            <MessagesSquare className="mr-2" /> Contact Us
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="faq" className="mt-0">
          <Card className="border-0 bg-[#1A1A2E] shadow-xl">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-purple-900/30">
                    <AccordionTrigger className="text-white hover:text-purple-400 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contact" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card className="h-full border-0 bg-gradient-to-b from-[#1A1A2E] to-[#121224] shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-purple-900/50 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Email</h4>
                        <p className="text-gray-400">support@luckyspins.com</p>
                        <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-purple-900/50 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Phone</h4>
                        <p className="text-gray-400">+1 (888) 123-4567</p>
                        <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9AM-5PM PST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-purple-900/50 p-3 rounded-full mr-4">
                        <MessagesSquare className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Live Chat</h4>
                        <p className="text-gray-400">Available in our app</p>
                        <p className="text-sm text-gray-500 mt-1">Fastest response time</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card className="border-0 bg-gradient-to-b from-[#1A1A2E] to-[#121224] shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-white">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-[#121224] border-purple-900/50 text-white"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-[#121224] border-purple-900/50 text-white"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-[#121224] border-purple-900/50 text-white"
                        placeholder="What is your inquiry about?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-[#121224] border-purple-900/50 text-white min-h-[150px]"
                        placeholder="Please describe your issue or question in detail"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white"
                    >
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
