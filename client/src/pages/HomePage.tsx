import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Palette, Share2 } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Sparkles,
      title: "Template Elegant",
      description: "Pilihan template minimalis dan sophisticated untuk berbagai acara"
    },
    {
      icon: Palette,
      title: "Mudah Dikustomisasi",
      description: "Ubah teks, warna, font, dan tambahkan foto dengan mudah"
    },
    {
      icon: Share2,
      title: "Siap Bagikan",
      description: "Download dan bagikan undangan Anda dalam format digital"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16">
            <div className="font-serif text-xl font-semibold">Undangan.id</div>
            <Button asChild data-testid="button-mulai-header">
              <Link href="/templates">Mulai Membuat</Link>
            </Button>
          </div>
        </div>
      </nav>

      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              Buat Undangan Online dalam Hitungan Menit
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Desain undangan elegant dan minimalis untuk pernikahan, ulang tahun, dan acara spesial Anda. Tanpa perlu keahlian desain.
            </p>
            <Button size="lg" asChild className="min-h-[44px] px-8" data-testid="button-mulai-hero">
              <Link href="/templates">Mulai Membuat</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} data-testid={`card-feature-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
