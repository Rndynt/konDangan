import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowUpDown } from "lucide-react";
import TemplateCard from "@/components/TemplateCard";
import weddingPink from '@assets/generated_images/Wedding_website_template_elegant_pink_b3b8566b.png';
import weddingNavy from '@assets/generated_images/Wedding_website_template_luxury_navy_f1fc892c.png';
import birthdayFun from '@assets/generated_images/Birthday_website_template_colorful_fun_058271e2.png';
import corporateEvent from '@assets/generated_images/Corporate_event_website_professional_e5d86ef7.png';
import weddingFloral from '@assets/generated_images/Wedding_invitation_template_floral_fe55e57a.png';
import weddingGeometric from '@assets/generated_images/Wedding_invitation_geometric_modern_2587ca6c.png';
import weddingVenue from '@assets/generated_images/Wedding_venue_outdoor_garden_52e64c6d.png';
import birthdayMinimalist from '@assets/generated_images/Birthday_invitation_minimalist_confetti_45dbb0b1.png';
import formalInvitation from '@assets/generated_images/Formal_event_invitation_corporate_4be24768.png';
import couplePortrait from '@assets/generated_images/Wedding_couple_portrait_romantic_d63596a0.png';
import watercolorFloral from '@assets/generated_images/Watercolor_floral_background_elegant_3a887409.png';
import proposalMoment from '@assets/generated_images/Proposal_moment_couple_sunset_178d1bd3.png';

interface Template {
  id: string;
  title: string;
  category: string;
  style: string;
  colorScheme: string;
  imageUrl: string;
  popularity: number;
  dateAdded: string;
  screenshots: string[];
}

const templates: Template[] = [
  { 
    id: "elegant-pink", 
    title: "Elegant Blush", 
    category: "Pernikahan", 
    style: "Elegant",
    colorScheme: "Pink",
    imageUrl: weddingPink,
    popularity: 95,
    dateAdded: "2024-11-01",
    screenshots: [weddingPink, couplePortrait, watercolorFloral]
  },
  { 
    id: "luxury-navy", 
    title: "Luxury Navy", 
    category: "Pernikahan", 
    style: "Classic",
    colorScheme: "Navy",
    imageUrl: weddingNavy,
    popularity: 92,
    dateAdded: "2024-10-28",
    screenshots: [weddingNavy, weddingVenue, couplePortrait]
  },
  { 
    id: "birthday-fun", 
    title: "Festive Celebration", 
    category: "Ulang Tahun", 
    style: "Modern",
    colorScheme: "Bold",
    imageUrl: birthdayFun,
    popularity: 88,
    dateAdded: "2024-10-25",
    screenshots: [birthdayFun, birthdayMinimalist]
  },
  { 
    id: "corporate-event", 
    title: "Professional", 
    category: "Acara Formal", 
    style: "Minimalis",
    colorScheme: "Neutral",
    imageUrl: corporateEvent,
    popularity: 85,
    dateAdded: "2024-10-20",
    screenshots: [corporateEvent, formalInvitation]
  },
  { 
    id: "classic-romance", 
    title: "Classic Romance", 
    category: "Pernikahan", 
    style: "Vintage",
    colorScheme: "Pastel",
    imageUrl: weddingFloral,
    popularity: 90,
    dateAdded: "2024-11-03",
    screenshots: [weddingFloral, watercolorFloral, couplePortrait]
  },
  { 
    id: "modern-geometric", 
    title: "Modern Geometry", 
    category: "Pernikahan", 
    style: "Modern",
    colorScheme: "Bold",
    imageUrl: weddingGeometric,
    popularity: 87,
    dateAdded: "2024-10-30",
    screenshots: [weddingGeometric, weddingVenue]
  },
  { 
    id: "garden-elegance", 
    title: "Garden Elegance", 
    category: "Pernikahan", 
    style: "Elegant",
    colorScheme: "Pastel",
    imageUrl: weddingVenue,
    popularity: 89,
    dateAdded: "2024-11-05",
    screenshots: [weddingVenue, watercolorFloral, couplePortrait]
  },
  { 
    id: "minimalist-birthday", 
    title: "Minimalist Party", 
    category: "Ulang Tahun", 
    style: "Minimalis",
    colorScheme: "Pastel",
    imageUrl: birthdayMinimalist,
    popularity: 82,
    dateAdded: "2024-10-22",
    screenshots: [birthdayMinimalist, birthdayFun]
  },
  { 
    id: "formal-corporate", 
    title: "Corporate Formal", 
    category: "Acara Formal", 
    style: "Classic",
    colorScheme: "Navy",
    imageUrl: formalInvitation,
    popularity: 80,
    dateAdded: "2024-10-18",
    screenshots: [formalInvitation, corporateEvent]
  },
  { 
    id: "romantic-portrait", 
    title: "Romantic Portrait", 
    category: "Pernikahan", 
    style: "Vintage",
    colorScheme: "Pink",
    imageUrl: couplePortrait,
    popularity: 91,
    dateAdded: "2024-11-02",
    screenshots: [couplePortrait, proposalMoment, watercolorFloral]
  },
  { 
    id: "watercolor-dreams", 
    title: "Watercolor Dreams", 
    category: "Pernikahan", 
    style: "Elegant",
    colorScheme: "Pastel",
    imageUrl: watercolorFloral,
    popularity: 93,
    dateAdded: "2024-11-04",
    screenshots: [watercolorFloral, weddingFloral, couplePortrait]
  },
  { 
    id: "sunset-proposal", 
    title: "Sunset Proposal", 
    category: "Pernikahan", 
    style: "Modern",
    colorScheme: "Bold",
    imageUrl: proposalMoment,
    popularity: 86,
    dateAdded: "2024-10-26",
    screenshots: [proposalMoment, couplePortrait, weddingVenue]
  },
  { 
    id: "rustic-charm", 
    title: "Rustic Charm", 
    category: "Pernikahan", 
    style: "Rustic",
    colorScheme: "Brown",
    imageUrl: weddingVenue,
    popularity: 84,
    dateAdded: "2024-11-06",
    screenshots: [weddingVenue, watercolorFloral, couplePortrait]
  },
  { 
    id: "golden-luxury", 
    title: "Golden Luxury", 
    category: "Pernikahan", 
    style: "Luxury",
    colorScheme: "Gold",
    imageUrl: weddingNavy,
    popularity: 94,
    dateAdded: "2024-11-07",
    screenshots: [weddingNavy, couplePortrait, proposalMoment]
  },
  { 
    id: "beach-wedding", 
    title: "Beach Wedding", 
    category: "Pernikahan", 
    style: "Modern",
    colorScheme: "Teal",
    imageUrl: proposalMoment,
    popularity: 88,
    dateAdded: "2024-11-06",
    screenshots: [proposalMoment, weddingVenue, couplePortrait]
  },
  { 
    id: "royal-purple", 
    title: "Royal Purple", 
    category: "Pernikahan", 
    style: "Classic",
    colorScheme: "Purple",
    imageUrl: weddingFloral,
    popularity: 91,
    dateAdded: "2024-11-05",
    screenshots: [weddingFloral, watercolorFloral, couplePortrait]
  },
  { 
    id: "minimalist-white", 
    title: "Minimalist White", 
    category: "Pernikahan", 
    style: "Minimalis",
    colorScheme: "White",
    imageUrl: weddingGeometric,
    popularity: 86,
    dateAdded: "2024-11-04",
    screenshots: [weddingGeometric, couplePortrait]
  },
  { 
    id: "bohemian-dream", 
    title: "Bohemian Dream", 
    category: "Pernikahan", 
    style: "Boho",
    colorScheme: "Pastel",
    imageUrl: watercolorFloral,
    popularity: 85,
    dateAdded: "2024-11-03",
    screenshots: [watercolorFloral, weddingVenue, couplePortrait]
  },
  { 
    id: "art-deco-glam", 
    title: "Art Deco Glam", 
    category: "Pernikahan", 
    style: "Luxury",
    colorScheme: "Pink",
    imageUrl: weddingPink,
    popularity: 92,
    dateAdded: "2024-11-07",
    screenshots: [weddingPink, couplePortrait, proposalMoment]
  },
  { 
    id: "kids-birthday-bash", 
    title: "Kids Birthday Bash", 
    category: "Ulang Tahun", 
    style: "Modern",
    colorScheme: "Rainbow",
    imageUrl: birthdayFun,
    popularity: 83,
    dateAdded: "2024-11-02",
    screenshots: [birthdayFun, birthdayMinimalist]
  },
  { 
    id: "sweet-sixteen", 
    title: "Sweet Sixteen", 
    category: "Ulang Tahun", 
    style: "Elegant",
    colorScheme: "Pink",
    imageUrl: weddingPink,
    popularity: 87,
    dateAdded: "2024-11-01",
    screenshots: [weddingPink, birthdayFun]
  },
  { 
    id: "corporate-gala", 
    title: "Corporate Gala", 
    category: "Acara Formal", 
    style: "Luxury",
    colorScheme: "Silver",
    imageUrl: formalInvitation,
    popularity: 89,
    dateAdded: "2024-11-06",
    screenshots: [formalInvitation, corporateEvent]
  },
  { 
    id: "graduation-party", 
    title: "Graduation Party", 
    category: "Acara Formal", 
    style: "Modern",
    colorScheme: "Bold",
    imageUrl: corporateEvent,
    popularity: 81,
    dateAdded: "2024-10-31",
    screenshots: [corporateEvent, formalInvitation]
  },
  { 
    id: "baby-shower", 
    title: "Baby Shower", 
    category: "Acara Spesial", 
    style: "Elegant",
    colorScheme: "Blue",
    imageUrl: watercolorFloral,
    popularity: 90,
    dateAdded: "2024-11-05",
    screenshots: [watercolorFloral, weddingFloral]
  },
];

const categories = ["Semua", "Pernikahan", "Ulang Tahun", "Acara Formal", "Acara Spesial"];
const styles = ["Semua", "Elegant", "Modern", "Minimalis", "Vintage", "Classic", "Rustic", "Luxury", "Boho"];
const colorSchemes = ["Semua", "Pastel", "Bold", "Neutral", "Navy", "Pink", "Gold", "Purple", "Teal", "White", "Brown", "Rainbow", "Silver", "Blue"];
const sortOptions = [
  { value: "terbaru", label: "Terbaru" },
  { value: "terpopuler", label: "Terpopuler" },
  { value: "nama-az", label: "Nama A-Z" },
];

export default function TemplateGallery() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedStyle, setSelectedStyle] = useState("Semua");
  const [selectedColorScheme, setSelectedColorScheme] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("terbaru");
  const [previewTemplate, setPreviewTemplate] = useState<string | null>(null);

  const filteredAndSortedTemplates = templates
    .filter(t => {
      const matchesCategory = selectedCategory === "Semua" || t.category === selectedCategory;
      const matchesStyle = selectedStyle === "Semua" || t.style === selectedStyle;
      const matchesColorScheme = selectedColorScheme === "Semua" || t.colorScheme === selectedColorScheme;
      const matchesSearch = searchQuery === "" || t.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesStyle && matchesColorScheme && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "terbaru") {
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      } else if (sortBy === "terpopuler") {
        return b.popularity - a.popularity;
      } else if (sortBy === "nama-az") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  const handleUseTemplate = (id: string) => {
    console.log('Using template:', id);
    setLocation(`/editor/${id}`);
  };

  const handlePreviewTemplate = (id: string) => {
    console.log('Previewing template:', id);
    setPreviewTemplate(id);
  };

  const previewData = previewTemplate ? templates.find(t => t.id === previewTemplate) : null;

  const activeFiltersCount = [
    selectedCategory !== "Semua",
    selectedStyle !== "Semua",
    selectedColorScheme !== "Semua",
    searchQuery !== ""
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-lg bg-background/80 sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-serif text-xl font-semibold hover-elevate rounded-md px-2 -ml-2" data-testid="link-home">
              konDangan.id
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild data-testid="button-dashboard">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="outline" asChild data-testid="button-back">
                <Link href="/">Kembali</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div>
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

              <div>
                <h2 className="text-sm font-medium mb-4 text-muted-foreground">Gaya</h2>
                <div className="flex flex-col gap-2">
                  {styles.map((style) => (
                    <Button
                      key={style}
                      variant={selectedStyle === style ? "secondary" : "ghost"}
                      className="justify-start"
                      onClick={() => setSelectedStyle(style)}
                      data-testid={`button-style-${style.toLowerCase()}`}
                    >
                      {style}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-medium mb-4 text-muted-foreground">Skema Warna</h2>
                <div className="flex flex-col gap-2">
                  {colorSchemes.map((scheme) => (
                    <Button
                      key={scheme}
                      variant={selectedColorScheme === scheme ? "secondary" : "ghost"}
                      className="justify-start"
                      onClick={() => setSelectedColorScheme(scheme)}
                      data-testid={`button-color-${scheme.toLowerCase()}`}
                    >
                      {scheme}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-semibold mb-2">Pilih Template Website</h1>
              <p className="text-muted-foreground">Pilih template website undangan yang sesuai dengan acara Anda</p>
            </div>

            <div className="mb-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Cari template..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                    data-testid="input-search"
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[180px]" data-testid="select-sort">
                    <ArrowUpDown className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value} data-testid={`option-sort-${option.value}`}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {activeFiltersCount > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-muted-foreground">Filter aktif:</span>
                    {selectedCategory !== "Semua" && (
                      <Badge variant="secondary" className="gap-1" data-testid="badge-filter-category">
                        {selectedCategory}
                      </Badge>
                    )}
                    {selectedStyle !== "Semua" && (
                      <Badge variant="secondary" className="gap-1" data-testid="badge-filter-style">
                        {selectedStyle}
                      </Badge>
                    )}
                    {selectedColorScheme !== "Semua" && (
                      <Badge variant="secondary" className="gap-1" data-testid="badge-filter-color">
                        {selectedColorScheme}
                      </Badge>
                    )}
                    {searchQuery && (
                      <Badge variant="secondary" className="gap-1" data-testid="badge-filter-search">
                        "{searchQuery}"
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedCategory("Semua");
                        setSelectedStyle("Semua");
                        setSelectedColorScheme("Semua");
                        setSearchQuery("");
                      }}
                      data-testid="button-clear-filters"
                    >
                      Hapus Semua
                    </Button>
                  </div>
                )}
              </div>

              <div className="lg:hidden space-y-4">
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-medium text-muted-foreground w-full">Kategori:</span>
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
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-medium text-muted-foreground w-full">Gaya:</span>
                  {styles.map((style) => (
                    <Button
                      key={style}
                      variant={selectedStyle === style ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedStyle(style)}
                      data-testid={`button-style-mobile-${style.toLowerCase()}`}
                    >
                      {style}
                    </Button>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-medium text-muted-foreground w-full">Skema Warna:</span>
                  {colorSchemes.map((scheme) => (
                    <Button
                      key={scheme}
                      variant={selectedColorScheme === scheme ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedColorScheme(scheme)}
                      data-testid={`button-color-mobile-${scheme.toLowerCase()}`}
                    >
                      {scheme}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-muted-foreground" data-testid="text-results-count">
                Menampilkan {filteredAndSortedTemplates.length} template
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  {...template}
                  onPreview={handlePreviewTemplate}
                  onUse={handleUseTemplate}
                />
              ))}
            </div>

            {filteredAndSortedTemplates.length === 0 && (
              <div className="text-center py-16" data-testid="text-no-results">
                <p className="text-muted-foreground text-lg mb-4">Tidak ada template yang sesuai dengan filter Anda</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("Semua");
                    setSelectedStyle("Semua");
                    setSelectedColorScheme("Semua");
                    setSearchQuery("");
                  }}
                  data-testid="button-reset-filters"
                >
                  Reset Filter
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Dialog open={!!previewTemplate} onOpenChange={() => setPreviewTemplate(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-0" data-testid="dialog-preview">
          {previewData && (
            <div className="flex flex-col h-[90vh]">
              <div className="p-6 border-b border-border">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-2" data-testid="text-preview-title">{previewData.title}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" data-testid="badge-preview-category">{previewData.category}</Badge>
                      <Badge variant="outline" data-testid="badge-preview-style">{previewData.style}</Badge>
                      <Badge variant="outline" data-testid="badge-preview-color">{previewData.colorScheme}</Badge>
                    </div>
                  </div>
                  <Button onClick={() => handleUseTemplate(previewData.id)} data-testid="button-use-from-preview">
                    Gunakan Template
                  </Button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 bg-muted/30" data-testid="container-preview-screenshots">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3 text-muted-foreground">Preview Template</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Gulir ke bawah untuk melihat semua bagian dari template ini
                    </p>
                  </div>
                  
                  {previewData.screenshots.map((screenshot, index) => (
                    <div 
                      key={index} 
                      className="bg-background rounded-2xl overflow-hidden shadow-lg hover-elevate"
                      data-testid={`image-preview-screenshot-${index}`}
                    >
                      <img 
                        src={screenshot} 
                        alt={`${previewData.title} - Screenshot ${index + 1}`}
                        className="w-full h-auto"
                      />
                      {index < previewData.screenshots.length - 1 && (
                        <div className="p-4 text-center border-t border-border">
                          <p className="text-xs text-muted-foreground">
                            Bagian {index + 1} dari {previewData.screenshots.length}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-border bg-background">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm text-muted-foreground">
                    <p>Template ini mencakup {previewData.screenshots.length} bagian yang dapat disesuaikan</p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      onClick={() => setPreviewTemplate(null)}
                      data-testid="button-close-preview"
                    >
                      Tutup
                    </Button>
                    <Button 
                      onClick={() => handleUseTemplate(previewData.id)}
                      data-testid="button-use-from-preview-footer"
                    >
                      Gunakan Template
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
