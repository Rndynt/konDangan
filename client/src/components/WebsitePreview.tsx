import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Heart, Gift, MessageSquare, Menu, X } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
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

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function WebsitePreview({ data }: WebsitePreviewProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date(data.weddingDate || "2025-12-25");
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [data.weddingDate]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'story', label: 'Story' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'registry', label: 'Gift' },
    { id: 'rsvp', label: 'RSVP' }
  ];

  return (
    <div className="w-full bg-white" style={{ fontFamily: data.fontFamily }}>
      <nav className="sticky top-0 z-40 backdrop-blur-lg bg-white/80 border-b border-border h-20">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-serif text-xl font-semibold"
            style={{ color: data.primaryColor }}
            data-testid="button-nav-logo"
          >
            {data.coupleName || "Sarah & Ahmad"}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-20 md:top-0 left-0 right-0 md:left-auto md:right-auto flex-col md:flex-row gap-2 md:gap-6 bg-white md:bg-transparent p-6 md:p-0 border-b md:border-0 shadow-lg md:shadow-none`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:opacity-70 transition-opacity py-2 md:py-0 text-left md:text-center"
                data-testid={`button-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="rounded-full px-6 min-h-[40px] mt-2 md:mt-0"
              style={{ backgroundColor: data.primaryColor }}
              onClick={() => scrollToSection('rsvp')}
              data-testid="button-nav-rsvp"
            >
              RSVP
            </Button>
          </div>
        </div>
      </nav>

      <section 
        id="hero"
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

            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div 
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: data.primaryColor }}
                  data-testid="countdown-days"
                >
                  {timeLeft.days}
                </div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Days</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div 
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: data.primaryColor }}
                  data-testid="countdown-hours"
                >
                  {timeLeft.hours}
                </div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Hours</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div 
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: data.primaryColor }}
                  data-testid="countdown-minutes"
                >
                  {timeLeft.minutes}
                </div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Mins</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div 
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: data.primaryColor }}
                  data-testid="countdown-seconds"
                >
                  {timeLeft.seconds}
                </div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Secs</div>
              </div>
            </div>
          </div>
          <Button 
            size="lg" 
            className="rounded-full px-8 min-h-[48px]"
            style={{ backgroundColor: data.primaryColor }}
            onClick={() => scrollToSection('rsvp')}
            data-testid="button-rsvp-hero"
          >
            RSVP Sekarang
          </Button>
        </div>
      </section>

      <section id="story" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4" style={{ color: data.primaryColor }}>Our Story</h2>
          <div className="w-20 h-1 mx-auto mb-8" style={{ backgroundColor: data.primaryColor }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4" data-testid="milestone-title-1">Pertama Bertemu</h3>
            <p className="text-sm text-muted-foreground mb-2" data-testid="milestone-date-1">Januari 2020</p>
            <p className="text-muted-foreground leading-relaxed" data-testid="preview-story">
              {data.ourStory || "Kami bertemu di sebuah kafe kecil di musim semi. Dari pertemuan sederhana itu, kami tahu bahwa ini adalah awal dari sesuatu yang istimewa."}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src={coupleImage} alt="Couple" className="rounded-2xl shadow-lg w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img src={proposalImage} alt="Proposal" className="rounded-2xl shadow-lg w-full" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4" data-testid="milestone-title-2">Lamaran</h3>
            <p className="text-sm text-muted-foreground mb-2" data-testid="milestone-date-2">Juni 2023</p>
            <p className="text-muted-foreground leading-relaxed" data-testid="milestone-desc-2">
              Momen yang tak terlupakan ketika kami memutuskan untuk menghabiskan sisa hidup bersama, di bawah langit senja yang indah.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4" data-testid="milestone-title-3">Tunangan</h3>
            <p className="text-sm text-muted-foreground mb-2" data-testid="milestone-date-3">Desember 2023</p>
            <p className="text-muted-foreground leading-relaxed" data-testid="milestone-desc-3">
              Acara pertunangan yang penuh kebahagiaan bersama keluarga dan teman terdekat. Hari yang menandai dimulainya perjalanan menuju pernikahan kami.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src={danceImage} alt="Engagement" className="rounded-2xl shadow-lg w-full" />
          </div>
        </div>
      </section>

      <section id="events" className="py-24 px-6 bg-muted/30">
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

      <section id="gallery" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4" style={{ color: data.primaryColor }}>Gallery</h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: data.primaryColor }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[coupleImage, proposalImage, danceImage, venueImage, coupleImage, proposalImage, danceImage, venueImage].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl hover-elevate cursor-pointer" data-testid={`gallery-image-${i}`}>
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="registry" className="py-24 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4" style={{ color: data.primaryColor }}>Gift Registry</h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: data.primaryColor }} />
            <p className="text-muted-foreground">
              Kehadiran dan doa Anda adalah hadiah terbaik bagi kami. Namun jika Anda ingin memberikan hadiah, Anda dapat mengirimkannya melalui:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${data.primaryColor}20` }}>
                  <Gift className="w-8 h-8" style={{ color: data.primaryColor }} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-6">Transfer Bank</h3>
                <div className="space-y-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Bank BCA</p>
                    <p className="text-lg font-semibold" data-testid="bank-account-number">1234567890</p>
                    <p className="text-sm mt-1" data-testid="bank-account-name">Sarah Putri</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full rounded-full min-h-[48px]"
                    onClick={() => {
                      navigator.clipboard.writeText('1234567890');
                    }}
                    data-testid="button-copy-account"
                  >
                    Salin Nomor Rekening
                  </Button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${data.primaryColor}20` }}>
                  <Gift className="w-8 h-8" style={{ color: data.primaryColor }} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-6">QR Code</h3>
                <div className="space-y-4 text-center">
                  <div className="w-48 h-48 mx-auto bg-gray-100 rounded-xl flex items-center justify-center" data-testid="qr-code-placeholder">
                    <div className="text-center">
                      <Gift className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">QR Code Placeholder</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Scan untuk mengirim hadiah</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="rsvp" className="py-24 px-6 bg-muted/30">
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

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4" style={{ color: data.primaryColor }}>Wishes & Testimonials</h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: data.primaryColor }} />
            <p className="text-muted-foreground">Ucapan dari teman dan keluarga</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card data-testid="testimonial-card-1">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6" style={{ color: data.primaryColor }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" data-testid="testimonial-name-1">Rina & Budi</h4>
                    <p className="text-sm text-muted-foreground">Sahabat</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed" data-testid="testimonial-message-1">
                  "Selamat untuk Sarah & Ahmad! Kami sangat bahagia melihat kalian berdua bersatu. Semoga pernikahan kalian penuh kebahagiaan dan berkah."
                </p>
              </div>
            </Card>

            <Card data-testid="testimonial-card-2">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6" style={{ color: data.primaryColor }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" data-testid="testimonial-name-2">Keluarga Wijaya</h4>
                    <p className="text-sm text-muted-foreground">Keluarga</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed" data-testid="testimonial-message-2">
                  "Pasangan yang sempurna! Kami mendoakan yang terbaik untuk kehidupan pernikahan kalian. Tuhan memberkati!"
                </p>
              </div>
            </Card>

            <Card data-testid="testimonial-card-3">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6" style={{ color: data.primaryColor }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" data-testid="testimonial-name-3">Dina Kartika</h4>
                    <p className="text-sm text-muted-foreground">Teman Kerja</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed" data-testid="testimonial-message-3">
                  "Dari awal kami sudah tahu kalian berdua jodoh! Selamat menikah Sarah & Ahmad, semoga langgeng sampai kakek-nenek."
                </p>
              </div>
            </Card>

            <Card data-testid="testimonial-card-4">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6" style={{ color: data.primaryColor }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" data-testid="testimonial-name-4">Pak Hadi & Bu Siti</h4>
                    <p className="text-sm text-muted-foreground">Tetangga</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed" data-testid="testimonial-message-4">
                  "Menyaksikan kalian tumbuh dan sekarang menikah membuat kami sangat bahagia. Barakallah untuk kalian berdua!"
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif mb-4" style={{ color: data.primaryColor }}>
              {data.coupleName || "Sarah & Ahmad"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {data.groomName && data.brideName 
                ? `Thank you for celebrating with ${data.groomName} & ${data.brideName}` 
                : "Thank you for celebrating with us"}
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:opacity-70"
                style={{ backgroundColor: `${data.primaryColor}20` }}
                data-testid="link-instagram"
              >
                <FaInstagram className="w-6 h-6" style={{ color: data.primaryColor }} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:opacity-70"
                style={{ backgroundColor: `${data.primaryColor}20` }}
                data-testid="link-facebook"
              >
                <FaFacebook className="w-6 h-6" style={{ color: data.primaryColor }} />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:opacity-70"
                style={{ backgroundColor: `${data.primaryColor}20` }}
                data-testid="link-whatsapp"
              >
                <FaWhatsapp className="w-6 h-6" style={{ color: data.primaryColor }} />
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Dibuat dengan <span style={{ color: data.primaryColor }}>♥</span> di Undangan.id
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © 2025 Undangan.id. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
