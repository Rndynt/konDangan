import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import TemplateCard from "@/components/TemplateCard";
import weddingPink from '@assets/generated_images/Wedding_website_template_elegant_pink_b3b8566b.png';
import weddingNavy from '@assets/generated_images/Wedding_website_template_luxury_navy_f1fc892c.png';
import birthdayFun from '@assets/generated_images/Birthday_website_template_colorful_fun_058271e2.png';
import corporateEvent from '@assets/generated_images/Corporate_event_website_professional_e5d86ef7.png';

const templates = [
  { id: "elegant-pink", title: "Elegant Blush", category: "Pernikahan", imageUrl: weddingPink },
  { id: "luxury-navy", title: "Luxury Navy", category: "Pernikahan", imageUrl: weddingNavy },
  { id: "birthday-fun", title: "Festive Celebration", category: "Ulang Tahun", imageUrl: birthdayFun },
  { id: "corporate-event", title: "Professional", category: "Acara Formal", imageUrl: corporateEvent },
  { id: "elegant-pink-2", title: "Classic Romance", category: "Pernikahan", imageUrl: weddingPink },
  { id: "luxury-navy-2", title: "Modern Elegance", category: "Pernikahan", imageUrl: weddingNavy },
];

const categories = ["Semua", "Pernikahan", "Ulang Tahun", "Acara Formal"];

export default function TemplateGallery() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [previewTemplate, setPreviewTemplate] = useState<string | null>(null);

  const filteredTemplates = selectedCategory === "Semua" 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  const handleUseTemplate = (id: string) => {
    console.log('Using template:', id);
    setLocation(`/editor/${id}`);
  };

  const handlePreviewTemplate = (id: string) => {
    console.log('Previewing template:', id);
    setPreviewTemplate(id);
  };

  const previewData = previewTemplate ? templates.find(t => t.id === previewTemplate) : null;

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-lg bg-background/80 sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-serif text-xl font-semibold hover-elevate rounded-md px-2 -ml-2" data-testid="link-home">
              konDangan.id
            </Link>
            <Button variant="outline" asChild data-testid="button-back">
              <Link href="/">Kembali</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 py-12">
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

          <main className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-semibold mb-2">Pilih Template Website</h1>
              <p className="text-muted-foreground">Pilih template website undangan yang sesuai dengan acara Anda</p>
            </div>

            <div className="lg:hidden mb-8">
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    data-testid={`button-category-mobile-${category.toLowerCase()}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  {...template}
                  onPreview={handlePreviewTemplate}
                  onUse={handleUseTemplate}
                />
              ))}
            </div>
          </main>
        </div>
      </div>

      <Dialog open={!!previewTemplate} onOpenChange={() => setPreviewTemplate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {previewData && (
            <div className="overflow-y-auto max-h-[90vh]">
              <img 
                src={previewData.imageUrl} 
                alt={previewData.title}
                className="w-full h-auto"
              />
              <div className="p-6 border-t border-border sticky bottom-0 bg-background">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{previewData.title}</h3>
                    <p className="text-sm text-muted-foreground">{previewData.category}</p>
                  </div>
                  <Button onClick={() => handleUseTemplate(previewData.id)} data-testid="button-use-from-preview">
                    Gunakan Template
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
