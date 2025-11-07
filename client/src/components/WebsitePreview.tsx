import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Heart } from "lucide-react";
import coupleImage from '@assets/generated_images/Wedding_couple_portrait_romantic_d63596a0.png';
import venueImage from '@assets/generated_images/Wedding_venue_outdoor_garden_52e64c6d.png';
import danceImage from '@assets/generated_images/Couple_first_dance_romantic_76675a79.png';
import proposalImage from '@assets/generated_images/Proposal_moment_couple_sunset_178d1bd3.png';
import watercolorBg from '@assets/generated_images/Watercolor_floral_background_elegant_3a887409.png';

interface WebsitePreviewProps {
  data: {
    coupleName: string;
    groomName: string;
    brideName: string;
    weddingDate: string;
    ceremonyTime: string;
    ceremonyLocation: string;
    receptionTime: string;
    receptionLocation: string;
    ourStory: string;
    primaryColor: string;
    fontFamily: string;
  };
}

export default function WebsitePreview({ data }: WebsitePreviewProps) {
  return (
    <div className="w-full bg-white" style={{ fontFamily: data.fontFamily }}>
      <section 
        className="relative min-h-screen flex items-center justify-center text-center p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${watercolorBg})` }}
      >
        <div className="relative z-10 max-w-3xl">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-wider mb-4 opacity-80">The Wedding of</p>
            <h1 
              className="font-serif text-6xl md:text-7xl mb-6" 
              style={{ color: data.primaryColor }}
              data-testid="preview-couple-name"
            >
              {data.coupleName || "Sarah & Ahmad"}
            </h1>
            <div className="flex items-center justify-center gap-3 text-lg mb-8">
              <Calendar className="w-5 h-5" />
              <p data-testid="preview-wedding-date">{data.weddingDate || "25 Desember 2025"}</p>
            </div>
          </div>
          <Button 
            size="lg" 
            className="rounded-full px-8 min-h-[48px]"
            style={{ backgroundColor: data.primaryColor }}
            data-testid="button-rsvp-hero"
          >
            RSVP Sekarang
          </Button>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4" style={{ color: data.primaryColor }}>Our Story</h2>
          <div className="w-20 h-1 mx-auto mb-8" style={{ backgroundColor: data.primaryColor }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Pertama Bertemu</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="preview-story">
              {data.ourStory || "Kami bertemu di sebuah kafe kecil di musim semi. Dari pertemuan sederhana itu, kami tahu bahwa ini adalah awal dari sesuatu yang istimewa."}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src={coupleImage} alt="Couple" className="rounded-2xl shadow-lg w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img src={proposalImage} alt="Proposal" className="rounded-2xl shadow-lg w-full" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Lamaran</h3>
            <p className="text-muted-foreground leading-relaxed">
              Momen yang tak terlupakan ketika kami memutuskan untuk menghabiskan sisa hidup bersama, di bawah langit senja yang indah.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4" style={{ color: data.primaryColor }}>Acara</h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: data.primaryColor }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${data.primaryColor}20` }}>
                  <Heart className="w-8 h-8" style={{ color: data.primaryColor }} />
                </div>
                <h3 className="text-2xl font-semibold text-center mb-6">Akad Nikah</h3>
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <p data-testid="preview-ceremony-time">{data.ceremonyTime || "08:00 - 10:00 WIB"}</p>
                  </div>
                  <div className="flex items-start justify-center gap-2">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                    <p className="text-left" data-testid="preview-ceremony-location">
                      {data.ceremonyLocation || "Masjid Istiqlal, Jakarta Pusat"}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${data.primaryColor}20` }}>
                  <Heart className="w-8 h-8" style={{ color: data.primaryColor }} />
                </div>
                <h3 className="text-2xl font-semibold text-center mb-6">Resepsi</h3>
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <p data-testid="preview-reception-time">{data.receptionTime || "11:00 - 14:00 WIB"}</p>
                  </div>
                  <div className="flex items-start justify-center gap-2">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                    <p className="text-left" data-testid="preview-reception-location">
                      {data.receptionLocation || "Balai Kartini, Jakarta Selatan"}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12">
            <img src={venueImage} alt="Venue" className="rounded-2xl shadow-lg w-full max-w-4xl mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4" style={{ color: data.primaryColor }}>Gallery</h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: data.primaryColor }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[coupleImage, proposalImage, danceImage, venueImage, coupleImage, proposalImage, danceImage, venueImage].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl hover-elevate cursor-pointer">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4" style={{ color: data.primaryColor }}>RSVP</h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: data.primaryColor }} />
            <p className="text-muted-foreground">Konfirmasi kehadiran Anda</p>
          </div>

          <Card>
            <div className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full rounded-lg border-2 border-border px-4 py-3 min-h-[48px]"
                    placeholder="Nama Anda"
                    data-testid="input-rsvp-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Kehadiran</label>
                  <select 
                    className="w-full rounded-lg border-2 border-border px-4 py-3 min-h-[48px]"
                    data-testid="select-rsvp-attendance"
                  >
                    <option value="">Pilih</option>
                    <option value="hadir">Hadir</option>
                    <option value="tidak">Tidak Hadir</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Jumlah Tamu</label>
                  <input 
                    type="number" 
                    className="w-full rounded-lg border-2 border-border px-4 py-3 min-h-[48px]"
                    placeholder="1"
                    min="1"
                    data-testid="input-rsvp-guests"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea 
                    className="w-full rounded-lg border-2 border-border px-4 py-3 min-h-[120px]"
                    placeholder="Ucapan untuk mempelai..."
                    data-testid="textarea-rsvp-message"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full rounded-full min-h-[48px]"
                  style={{ backgroundColor: data.primaryColor }}
                  data-testid="button-submit-rsvp"
                >
                  Kirim RSVP
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-2">
            {data.groomName && data.brideName 
              ? `Thank you for celebrating with ${data.groomName} & ${data.brideName}` 
              : "Thank you for celebrating with us"}
          </p>
          <p className="text-sm text-muted-foreground">
            Dibuat dengan <span style={{ color: data.primaryColor }}>♥</span> di Undangan.id
          </p>
        </div>
      </footer>
    </div>
  );
}
