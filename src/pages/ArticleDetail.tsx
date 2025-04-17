
import { useParams, Link } from "react-router-dom";
import { ARTICLES_DATA } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  
  const article = ARTICLES_DATA.find(article => article.id === id);
  
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4 text-white">Article Not Found</h1>
        <p className="text-gray-300 mb-6">Sorry, the article you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/articles">
            <ArrowLeft className="mr-2" /> Back to Articles
          </Link>
        </Button>
      </div>
    );
  }
  
  // Find related articles (same category)
  const relatedArticles = ARTICLES_DATA
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);
  
  const categoryColors: Record<string, string> = {
    guides: "bg-blue-600",
    strategies: "bg-green-600",
    stories: "bg-purple-600",
    news: "bg-amber-600",
    default: "bg-gray-600"
  };
  
  const categoryColor = categoryColors[article.category] || categoryColors.default;
  
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" className="mb-6" asChild>
        <Link to="/articles">
          <ArrowLeft className="mr-2" /> Back to Articles
        </Link>
      </Button>
      
      <div className="max-w-4xl mx-auto">
        <Badge className={`${categoryColor} text-white font-medium mb-4`}>
          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
        </Badge>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          {article.title}
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{article.readTime} min read</span>
          </div>
        </div>
        
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-auto"
          />
        </div>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed mb-4">
            {article.content || article.description}
          </p>
          
          {/* Sample content since we don't have full articles in the data */}
          <p className="text-gray-300 leading-relaxed mb-4">
            Slot machines have been a cornerstone of casino entertainment for decades, evolving from simple mechanical devices to complex digital experiences with immersive themes and bonus features.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-6 mb-4">How Slot Machines Work</h2>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            Modern slot machines operate using Random Number Generators (RNGs), ensuring that each spin is independent and random. This technology guarantees fair play and unpredictable outcomes, making every gaming session unique.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            The Return to Player (RTP) percentage indicates how much of the wagered money will be paid back to players over time. Higher RTP values generally mean better odds for players, though results can vary significantly in short-term play.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-6 mb-4">Strategies for Enjoying Slot Games</h2>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            While slots are primarily games of chance, there are ways to enhance your experience. Setting a budget, understanding the game's features, and choosing games with higher RTP values can lead to more enjoyable sessions.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            It's also important to recognize that slots are designed for entertainment. Approach them with the mindset of having fun rather than as a way to make money, and you'll enjoy a more positive gaming experience.
          </p>
        </div>
      </div>
      
      {relatedArticles.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-white">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description}
                image={article.image}
                category={article.category}
                date={article.date}
                readTime={article.readTime}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
