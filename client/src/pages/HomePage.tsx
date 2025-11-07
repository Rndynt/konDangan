import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Code, Link as LinkIcon } from "lucide-react";
import heroImage from '@assets/generated_images/Couple_using_laptop_together_home_4ee41ca7.png';
import weddingPink from '@assets/generated_images/Wedding_website_template_elegant_pink_b3b8566b.png';
import weddingNavy from '@assets/generated_images/Wedding_website_template_luxury_navy_f1fc892c.png';
import birthdayFun from '@assets/generated_images/Birthday_website_template_colorful_fun_058271e2.png';
import corporateEvent from '@assets/generated_images/Corporate_event_website_professional_e5d86ef7.png';

export default function HomePage() {
  const features = [
    {
      icon: Palette,
      title: "Template Elegant & Modern",
      description: "Pilihan template website undangan yang sophisticated untuk berbagai acara spesial"
    },
    {
      icon: Code,
      title: "Customize Tanpa Coding",
      description: "Edit konten, warna, dan foto dengan mudah melalui visual editor yang intuitif"
    },
    {
      icon: LinkIcon,
      title: "RSVP Terintegrasi",
      description: "Sistem RSVP otomatis dan bagikan link undangan ke semua tamu dengan mudah"
    }
  ];

  const templates = [
    { id: "elegant-pink", image: weddingPink, category: "Pernikahan" },
    { id: "luxury-navy", image: weddingNavy, category: "Pernikahan" },
    { id: "birthday-fun", image: birthdayFun, category: "Ulang Tahun" },
    { id: "corporate", image: corporateEvent, category: "Acara Formal" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-lg bg-background/80 sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16">
            <div className="font-serif text-xl font-semibold">konDangan.id</div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild data-testid="button-dashboard">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="ghost" asChild data-testid="button-lihat-contoh">
                <Link href="/templates">Lihat Contoh</Link>
              </Button>
              <Button asChild data-testid="button-mulai-gratis">
                <Link href="/templates">Mulai Gratis</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden" data-testid="section-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" data-testid="heading-hero">
            Buat Website Undangan yang Memukau
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
            Template elegant, customize mudah, bagikan instan
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="min-h-[48px] px-8 rounded-full" asChild data-testid="button-mulai-gratis-hero">
              <Link href="/templates">Mulai Gratis</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="min-h-[48px] px-8 rounded-full backdrop-blur-md bg-white/90 hover:bg-white border-white/20"
              asChild
              data-testid="button-lihat-contoh-hero"
            >
              <Link href="/templates">Lihat Contoh</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="heading-templates-section">Template yang Memukau</h2>
            <p className="text-lg text-muted-foreground" data-testid="text-templates-description">Pilih dari koleksi template website undangan kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template) => (
              <Link key={template.id} href={`/editor/${template.id}`}>
                <Card className="group overflow-hidden hover-elevate cursor-pointer" data-testid={`card-template-preview-${template.id}`}>
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img 
                      src={template.image} 
                      alt={template.category}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      data-testid={`img-template-${template.id}`}
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground" data-testid={`text-template-category-${template.id}`}>{template.category}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild data-testid="button-lihat-semua-template">
              <Link href="/templates">Lihat Semua Template</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} data-testid={`card-feature-${index}`}>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6" data-testid={`icon-feature-${index}`}>
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4" data-testid={`heading-feature-${index}`}>{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
