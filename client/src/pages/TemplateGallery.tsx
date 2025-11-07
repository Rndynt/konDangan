import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TemplateCard from "@/components/TemplateCard";
import weddingFloral from '@assets/generated_images/Wedding_invitation_template_floral_fe55e57a.png';
import weddingGeometric from '@assets/generated_images/Wedding_invitation_geometric_modern_2587ca6c.png';
import birthdayConfetti from '@assets/generated_images/Birthday_invitation_minimalist_confetti_45dbb0b1.png';
import formalCorporate from '@assets/generated_images/Formal_event_invitation_corporate_4be24768.png';

const templates = [
  { id: "wedding-floral", title: "Elegant Floral", category: "Pernikahan", imageUrl: weddingFloral },
  { id: "wedding-geometric", title: "Modern Geometric", category: "Pernikahan", imageUrl: weddingGeometric },
  { id: "birthday-confetti", title: "Festive Confetti", category: "Ulang Tahun", imageUrl: birthdayConfetti },
  { id: "formal-corporate", title: "Professional", category: "Formal", imageUrl: formalCorporate },
  { id: "wedding-floral-2", title: "Classic Floral", category: "Pernikahan", imageUrl: weddingFloral },
  { id: "birthday-modern", title: "Modern Birthday", category: "Ulang Tahun", imageUrl: birthdayConfetti },
];

const categories = ["Semua", "Pernikahan", "Ulang Tahun", "Formal"];

export default function TemplateGallery() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredTemplates = selectedCategory === "Semua" 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  const handleSelectTemplate = (id: string) => {
    console.log('Navigating to editor with template:', id);
    setLocation(`/editor/${id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border sticky top-0 bg-background z-50">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-serif text-xl font-semibold hover-elevate rounded-md px-2 -ml-2" data-testid="link-home">
              Undangan.id
            </Link>
            <Button variant="outline" asChild data-testid="button-back">
              <Link href="/">Kembali</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24">
              <h2 className="text-sm font-medium mb-4 text-muted-foreground">Kategori</h2>
              <div className="flex flex-col gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setSelectedCategory(category)}
                    data-testid={`button-category-${category.toLowerCase()}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:hidden mb-6 w-full">
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer hover-elevate"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`badge-category-mobile-${category.toLowerCase()}`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <main className="flex-1">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">Pilih Template</h1>
              <p className="text-muted-foreground">Pilih template yang sesuai dengan acara Anda</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  {...template}
                  onSelect={handleSelectTemplate}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
