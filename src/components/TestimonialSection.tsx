
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialSection() {
  const testimonials = [
    {
      name: "David Wilson",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "The financing options offered by AutoHaven made purchasing my dream car a reality. The staff was professional and helped me find the perfect payment plan.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "I was hesitant about buying a used car online, but AutoHaven made the process incredibly smooth. The car was exactly as described and the delivery was prompt.",
      rating: 5
    },
    {
      name: "Michael Chang",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      content: "Their maintenance package has saved me thousands on repairs. The technicians are knowledgeable and always keep my car running like new.",
      rating: 4
    }
  ];
  
  return (
    <section className="py-16 bg-auto-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-auto-gray-800">What Our Customers Say</h2>
          <p className="text-auto-gray-500 mt-2 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-auto-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-auto-gray-300'}`}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-auto-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
