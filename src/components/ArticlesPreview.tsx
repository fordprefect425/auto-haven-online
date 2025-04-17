
import { ArticleCard } from "./ArticleCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ARTICLES_DATA } from "@/data/articles";

export function ArticlesPreview() {
  // Get recent articles (first 3 articles in this example)
  const recentArticles = ARTICLES_DATA.slice(0, 3);
  
  return (
    <section className="py-16 bg-[#12121E]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white">Latest <span className="text-yellow-400">Articles</span></h2>
            <p className="text-gray-400 mt-2">Expert tips, strategies, and behind-the-scenes stories</p>
          </div>
          <Link to="/articles">
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300 flex items-center">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
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
    </section>
  );
}
