import { useState } from "react";
import { apps, categories } from "@/data/apps";
import AppCard, { AppType } from "@/components/AppCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  // Фильтрация приложений по поиску и категории
  const filteredApps: AppType[] = apps.filter((app) => {
    const matchesSearch = app.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Все" || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container max-w-6xl py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">СофтХаб</h1>
        <p className="text-muted-foreground">Найдите и скачайте лучшие приложения для своих устройств</p>
      </header>

      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl mb-2">Ничего не найдено</h3>
          <p className="text-muted-foreground">Попробуйте изменить запрос или выбрать другую категорию</p>
        </div>
      )}
    </div>
  );
}
