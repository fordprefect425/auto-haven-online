
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: number;
}

export function ArticleCard({ id, title, description, image, category, date, readTime }: ArticleCardProps) {
  const categoryColors: Record<string, string> = {
    guides: "bg-blue-600",
    strategies: "bg-green-600",
    stories: "bg-purple-600",
    news: "bg-amber-600",
    default: "bg-gray-600"
  };
  
  const categoryColor = categoryColors[category] || categoryColors.default;
  
  return (
    <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-b from-[#1A1A2E] to-[#121224] text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F19] to-transparent opacity-70"></div>
        <Badge className={`absolute top-3 right-3 ${categoryColor} text-white font-medium`}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-white line-clamp-2">{title}</CardTitle>
        <CardDescription className="text-gray-400 line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime} min read</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button className="w-full bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white group" asChild>
          <Link to={`/articles/${id}`}>
            Read Article
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
