
import { useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ARTICLES_DATA } from "@/data/articles";

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  
  const filteredArticles = ARTICLES_DATA.filter(article => {
    return (
      (article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       article.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (category === "all" || article.category === category)
    );
  });
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Slot <span className="text-yellow-400">Articles & Guides</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Learn about slot game mechanics, strategies, and stories behind popular games. Enhance your gaming experience with expert tips.
        </p>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10 bg-[#1A1A2E] border-[#3A1464] text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex gap-2 items-center">
          <Filter className="h-5 w-5 text-gray-400" />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px] bg-[#1A1A2E] border-[#3A1464] text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1A2E] border-[#3A1464] text-white">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="guides">Guides</SelectItem>
              <SelectItem value="strategies">Strategies</SelectItem>
              <SelectItem value="stories">Game Stories</SelectItem>
              <SelectItem value="news">News</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
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
      
      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400">No articles found. Try a different search term or category.</p>
        </div>
      )}
    </div>
  );
}
