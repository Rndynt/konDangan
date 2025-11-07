import { useState } from "react";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Monitor, Tablet, Smartphone, Eye, Save, Share2, Home, FileText, Image, Calendar, Users, Mail, Gift, MessageSquare, Shapes, Plus, Trash2, EyeOff, Download, ExternalLink, Check, Sparkles, Copy, Music2, Search, Timer, Wand2, Instagram, Facebook, Twitter } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import WebsitePreview from "@/components/WebsitePreview";
import AssetLibraryModal from "@/components/AssetLibraryModal";

type DeviceType = "desktop" | "tablet" | "mobile";

interface GalleryPhoto {
  id: string;
  url: string;
  caption?: string;
}

interface Testimonial {
  id: string;
  name: string;
  message: string;
  relationship: string;
}

export default function EditorPage() {
  const [, params] = useRoute("/editor/:templateId");
  const [device, setDevice] = useState<DeviceType>("desktop");
  const [publishModalOpen, setPublishModalOpen] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState("");
  const [assetLibraryOpen, setAssetLibraryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("hero");
  const [showConfetti, setShowConfetti] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const [websiteData, setWebsiteData] = useState({
    coupleName: "Sarah & Ahmad",
    groomName: "Ahmad",
    brideName: "Sarah",
    weddingDate: "25 Desember 2025",
    ceremonyTime: "08:00 - 10:00 WIB",
    ceremonyLocation: "Masjid Istiqlal, Jakarta Pusat",
    receptionTime: "11:00 - 14:00 WIB",
    receptionLocation: "Balai Kartini, Jakarta Selatan",
    ourStory: "Kami bertemu di sebuah kafe kecil di musim semi. Dari pertemuan sederhana itu, kami tahu bahwa ini adalah awal dari sesuatu yang istimewa.",
    primaryColor: "#c9a961",
    fontFamily: "Inter",
    galleryPhotos: [] as GalleryPhoto[],
    bankName: "Bank Mandiri",
    accountNumber: "1234567890",
    accountHolderName: "Sarah & Ahmad",
    testimonials: [
      { id: "1", name: "Rina Wijaya", message: "Pasangan yang sempurna! Semoga langgeng hingga akhir hayat.", relationship: "Sahabat" }
    ] as Testimonial[],
    rsvpDeadline: "20 Desember 2025",
    rsvpConfirmationMessage: "Terima kasih atas konfirmasi kehadiran Anda!",
    backgroundMusicUrl: "",
    musicAutoplay: false,
    musicVolume: 50,
    pageTitle: "Undangan Pernikahan Sarah & Ahmad",
    metaDescription: "Kami mengundang Anda untuk merayakan pernikahan kami",
    ogImage: "",
    ogDescription: "Bergabunglah dengan kami di hari istimewa kami",
    showCountdown: true,
    countdownStyle: "elegant",
    countdownText: "Menuju Hari Bahagia",
    customSpacing: "normal",
    enableAnimations: true,
    customCSS: "",
    facebookUrl: "",
    instagramUrl: "",
    twitterUrl: "",
  });

  const [sectionVisibility, setSectionVisibility] = useState({
    hero: true,
    story: true,
    event: true,
    gallery: true,
    giftRegistry: true,
    testimonials: true,
    rsvp: true,
    music: true,
    seo: true,
    countdown: true,
    design: true,
    social: true,
  });

  const fonts = ["Inter", "Playfair Display", "Poppins", "Lora", "Montserrat", "Cormorant Garamond"];

  const weddingColors = [
    { name: "Gold", hex: "#c9a961" },
    { name: "Blush Pink", hex: "#f4c2c2" },
    { name: "Navy Blue", hex: "#1e3a8a" },
    { name: "Sage Green", hex: "#9caf88" },
    { name: "Lavender", hex: "#d4b5e4" },
    { name: "Burgundy", hex: "#800020" },
    { name: "Dusty Rose", hex: "#dcae96" },
    { name: "Emerald", hex: "#50C878" },
  ];

  const deviceWidths = {
    desktop: "100%",
    tablet: "768px",
    mobile: "375px"
  };

  const handlePublish = () => {
    const url = `undangan.id/${websiteData.coupleName.toLowerCase().replace(/\s+/g, '-')}`;
    setPublishedUrl(url);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    console.log('Publishing website...', url);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://${publishedUrl}`);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
    console.log('Link copied!');
  };

  const handleDownloadQR = () => {
    console.log('Download QR code');
  };

  const handlePreview = () => {
    window.open(`https://${publishedUrl}`, '_blank');
    console.log('Opening preview in new window');
  };

  const handleSocialShare = (platform: string) => {
    const url = `https://${publishedUrl}`;
    const text = `Anda diundang ke pernikahan ${websiteData.coupleName}! `;
    
    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(`Undangan - ${websiteData.coupleName}`)}&body=${encodeURIComponent(text + url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
    console.log(`Sharing on ${platform}:`, url);
  };

  const handleSelectAsset = (assetId: string) => {
    console.log('Selected asset:', assetId);
  };

  const addGalleryPhoto = () => {
    const newPhoto: GalleryPhoto = {
      id: Date.now().toString(),
      url: "https://via.placeholder.com/400x300",
      caption: "Photo caption"
    };
    setWebsiteData({ ...websiteData, galleryPhotos: [...websiteData.galleryPhotos, newPhoto] });
  };

  const removeGalleryPhoto = (id: string) => {
    setWebsiteData({
      ...websiteData,
      galleryPhotos: websiteData.galleryPhotos.filter(photo => photo.id !== id)
    });
  };

  const addTestimonial = () => {
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: "",
      message: "",
      relationship: ""
    };
    setWebsiteData({ ...websiteData, testimonials: [...websiteData.testimonials, newTestimonial] });
  };

  const removeTestimonial = (id: string) => {
    setWebsiteData({
      ...websiteData,
      testimonials: websiteData.testimonials.filter(t => t.id !== id)
    });
  };

  const updateTestimonial = (id: string, field: keyof Testimonial, value: string) => {
    setWebsiteData({
      ...websiteData,
      testimonials: websiteData.testimonials.map(t =>
        t.id === id ? { ...t, [field]: value } : t
      )
    });
  };

  const toggleSectionVisibility = (section: keyof typeof sectionVisibility) => {
    setSectionVisibility({ ...sectionVisibility, [section]: !sectionVisibility[section] });
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <nav className="border-b border-border h-16 flex-shrink-0 backdrop-blur-lg bg-background/80 sticky top-0 z-50">
        <div className="h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-serif text-xl font-semibold hover-elevate rounded-md px-2 -ml-2" data-testid="link-home">
              konDangan.id
            </Link>
            <div className="h-6 w-px bg-border" />
            <p className="font-medium text-muted-foreground">Website Undangan</p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild data-testid="button-dashboard">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setAssetLibraryOpen(true)}
              data-testid="button-asset-library"
            >
              <Shapes className="w-4 h-4 mr-2" />
              Asset Library
            </Button>
            <div className="flex items-center gap-1 mr-2">
              <Button 
                variant={device === "desktop" ? "secondary" : "ghost"} 
                size="icon"
                onClick={() => setDevice("desktop")}
                data-testid="button-device-desktop"
              >
                <Monitor className="w-4 h-4" />
              </Button>
              <Button 
                variant={device === "tablet" ? "secondary" : "ghost"} 
                size="icon"
                onClick={() => setDevice("tablet")}
                data-testid="button-device-tablet"
              >
                <Tablet className="w-4 h-4" />
              </Button>
              <Button 
                variant={device === "mobile" ? "secondary" : "ghost"} 
                size="icon"
                onClick={() => setDevice("mobile")}
                data-testid="button-device-mobile"
              >
                <Smartphone className="w-4 h-4" />
              </Button>
            </div>
            <Button variant="outline" data-testid="button-save">
              <Save className="w-4 h-4 mr-2" />
              Simpan
            </Button>
            <Button 
              onClick={() => setPublishModalOpen(true)}
              data-testid="button-publish"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Publikasikan
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-80 border-r border-border overflow-hidden flex-shrink-0 flex flex-col">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <ScrollArea className="border-b border-border">
              <TabsList className="w-full inline-flex h-auto p-4 gap-1">
                <TabsTrigger value="hero" data-testid="tab-hero" className="flex flex-col gap-1 py-2 px-3">
                  <Home className="w-4 h-4" />
                  <span className="text-xs">Hero</span>
                </TabsTrigger>
                <TabsTrigger value="story" data-testid="tab-story" className="flex flex-col gap-1 py-2 px-3">
                  <FileText className="w-4 h-4" />
                  <span className="text-xs">Story</span>
                </TabsTrigger>
                <TabsTrigger value="event" data-testid="tab-event" className="flex flex-col gap-1 py-2 px-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs">Event</span>
                </TabsTrigger>
                <TabsTrigger value="gallery" data-testid="tab-gallery" className="flex flex-col gap-1 py-2 px-3">
                  <Image className="w-4 h-4" />
                  <span className="text-xs">Gallery</span>
                </TabsTrigger>
                <TabsTrigger value="giftRegistry" data-testid="tab-gift-registry" className="flex flex-col gap-1 py-2 px-3">
                  <Gift className="w-4 h-4" />
                  <span className="text-xs">Gift</span>
                </TabsTrigger>
                <TabsTrigger value="testimonials" data-testid="tab-testimonials" className="flex flex-col gap-1 py-2 px-3">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-xs">Testimoni</span>
                </TabsTrigger>
                <TabsTrigger value="rsvp" data-testid="tab-rsvp" className="flex flex-col gap-1 py-2 px-3">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs">RSVP</span>
                </TabsTrigger>
                <TabsTrigger value="music" data-testid="tab-music" className="flex flex-col gap-1 py-2 px-3">
                  <Music2 className="w-4 h-4" />
                  <span className="text-xs">Music</span>
                </TabsTrigger>
                <TabsTrigger value="seo" data-testid="tab-seo" className="flex flex-col gap-1 py-2 px-3">
                  <Search className="w-4 h-4" />
                  <span className="text-xs">SEO</span>
                </TabsTrigger>
                <TabsTrigger value="countdown" data-testid="tab-countdown" className="flex flex-col gap-1 py-2 px-3">
                  <Timer className="w-4 h-4" />
                  <span className="text-xs">Countdown</span>
                </TabsTrigger>
                <TabsTrigger value="design" data-testid="tab-design" className="flex flex-col gap-1 py-2 px-3">
                  <Wand2 className="w-4 h-4" />
                  <span className="text-xs">Design</span>
                </TabsTrigger>
                <TabsTrigger value="social" data-testid="tab-social" className="flex flex-col gap-1 py-2 px-3">
                  <Share2 className="w-4 h-4" />
                  <span className="text-xs">Social</span>
                </TabsTrigger>
              </TabsList>
            </ScrollArea>

            <ScrollArea className="flex-1">
              <div className="p-6">
                <TabsContent value="hero" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Hero Section
                      </h3>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="toggle-hero" className="text-xs text-muted-foreground">
                          {sectionVisibility.hero ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </Label>
                        <Switch
                          id="toggle-hero"
                          checked={sectionVisibility.hero}
                          onCheckedChange={() => toggleSectionVisibility('hero')}
                          data-testid="toggle-visibility-hero"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="couple-name" className="text-sm font-medium mb-2 block">Nama Pasangan</Label>
                      <Input
                        id="couple-name"
                        value={websiteData.coupleName}
                        onChange={(e) => setWebsiteData({ ...websiteData, coupleName: e.target.value })}
                        data-testid="input-couple-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="wedding-date" className="text-sm font-medium mb-2 block">Tanggal</Label>
                      <Input
                        id="wedding-date"
                        value={websiteData.weddingDate}
                        onChange={(e) => setWebsiteData({ ...websiteData, weddingDate: e.target.value })}
                        data-testid="input-wedding-date"
                      />
                    </div>
                    <div>
                      <Label htmlFor="primary-color" className="text-sm font-medium mb-2 block">Warna Utama</Label>
                      <div className="flex gap-2 mb-3">
                        <Input
                          id="primary-color"
                          type="color"
                          value={websiteData.primaryColor}
                          onChange={(e) => setWebsiteData({ ...websiteData, primaryColor: e.target.value })}
                          className="h-10 w-20 cursor-pointer"
                          data-testid="input-primary-color"
                        />
                        <Input
                          value={websiteData.primaryColor}
                          onChange={(e) => setWebsiteData({ ...websiteData, primaryColor: e.target.value })}
                          className="flex-1"
                          data-testid="input-primary-color-hex"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium mb-2 block">Popular Wedding Colors</Label>
                        <div className="grid grid-cols-4 gap-2">
                          {weddingColors.map((color) => (
                            <button
                              key={color.hex}
                              className="w-full aspect-square rounded-lg border-2 transition-all hover:scale-110"
                              style={{ 
                                backgroundColor: color.hex,
                                borderColor: websiteData.primaryColor === color.hex ? '#000' : 'transparent'
                              }}
                              onClick={() => setWebsiteData({ ...websiteData, primaryColor: color.hex })}
                              title={color.name}
                              data-testid={`color-preset-${color.name.toLowerCase().replace(/\s+/g, '-')}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="font-family" className="text-sm font-medium mb-2 block">Font Family</Label>
                      <Select value={websiteData.fontFamily} onValueChange={(value) => setWebsiteData({ ...websiteData, fontFamily: value })}>
                        <SelectTrigger id="font-family" data-testid="select-font-family">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {fonts.map((font) => (
                            <SelectItem key={font} value={font}>
                              {font}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="story" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Cerita Kami
                      </h3>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="toggle-story" className="text-xs text-muted-foreground">
                          {sectionVisibility.story ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </Label>
                        <Switch
                          id="toggle-story"
                          checked={sectionVisibility.story}
                          onCheckedChange={() => toggleSectionVisibility('story')}
                          data-testid="toggle-visibility-story"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="groom-name" className="text-sm font-medium mb-2 block">Nama Mempelai Pria</Label>
                      <Input
                        id="groom-name"
                        value={websiteData.groomName}
                        onChange={(e) => setWebsiteData({ ...websiteData, groomName: e.target.value })}
                        data-testid="input-groom-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bride-name" className="text-sm font-medium mb-2 block">Nama Mempelai Wanita</Label>
                      <Input
                        id="bride-name"
                        value={websiteData.brideName}
                        onChange={(e) => setWebsiteData({ ...websiteData, brideName: e.target.value })}
                        data-testid="input-bride-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="our-story" className="text-sm font-medium mb-2 block">Cerita Pertama Bertemu</Label>
                      <Textarea
                        id="our-story"
                        value={websiteData.ourStory}
                        onChange={(e) => setWebsiteData({ ...websiteData, ourStory: e.target.value })}
                        className="min-h-[120px]"
                        data-testid="textarea-our-story"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Upload Foto</Label>
                      <Button variant="outline" className="w-full" data-testid="button-upload-photo">
                        <Image className="w-4 h-4 mr-2" />
                        Upload Foto Pasangan
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="event" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Detail Acara
                      </h3>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="toggle-event" className="text-xs text-muted-foreground">
                          {sectionVisibility.event ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </Label>
                        <Switch
                          id="toggle-event"
                          checked={sectionVisibility.event}
                          onCheckedChange={() => toggleSectionVisibility('event')}
                          data-testid="toggle-visibility-event"
                        />
                      </div>
                    </div>
                    <div className="border-b border-border pb-6">
                      <h4 className="font-medium mb-4">Akad Nikah</h4>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="ceremony-time" className="text-sm font-medium mb-2 block">Waktu</Label>
                          <Input
                            id="ceremony-time"
                            value={websiteData.ceremonyTime}
                            onChange={(e) => setWebsiteData({ ...websiteData, ceremonyTime: e.target.value })}
                            data-testid="input-ceremony-time"
                          />
                        </div>
                        <div>
                          <Label htmlFor="ceremony-location" className="text-sm font-medium mb-2 block">Lokasi</Label>
                          <Textarea
                            id="ceremony-location"
                            value={websiteData.ceremonyLocation}
                            onChange={(e) => setWebsiteData({ ...websiteData, ceremonyLocation: e.target.value })}
                            data-testid="textarea-ceremony-location"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-4">Resepsi</h4>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="reception-time" className="text-sm font-medium mb-2 block">Waktu</Label>
                          <Input
                            id="reception-time"
                            value={websiteData.receptionTime}
                            onChange={(e) => setWebsiteData({ ...websiteData, receptionTime: e.target.value })}
                            data-testid="input-reception-time"
                          />
                        </div>
                        <div>
                          <Label htmlFor="reception-location" className="text-sm font-medium mb-2 block">Lokasi</Label>
                          <Textarea
                            id="reception-location"
                            value={websiteData.receptionLocation}
                            onChange={(e) => setWebsiteData({ ...websiteData, receptionLocation: e.target.value })}
                            data-testid="textarea-reception-location"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Image className="w-4 h-4" />
                        Photo Gallery
                      </h3>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="toggle-gallery" className="text-xs text-muted-foreground">
                          {sectionVisibility.gallery ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </Label>
                        <Switch
                          id="toggle-gallery"
                          checked={sectionVisibility.gallery}
                          onCheckedChange={() => toggleSectionVisibility('gallery')}
                          data-testid="toggle-visibility-gallery"
                        />
                      </div>
                    </div>
                    <div>
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        onClick={addGalleryPhoto}
                        data-testid="button-add-gallery-photo"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Upload Photo
                      </Button>
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Photos ({websiteData.galleryPhotos.length})</Label>
                      {websiteData.galleryPhotos.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground text-sm" data-testid="text-no-gallery-photos">
                          No photos yet. Click "Upload Photo" to add.
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-3">
                          {websiteData.galleryPhotos.map((photo) => (
                            <div 
                              key={photo.id} 
                              className="relative group aspect-square rounded-lg overflow-hidden border border-border"
                              data-testid={`gallery-photo-${photo.id}`}
                            >
                              <img 
                                src={photo.url} 
                                alt={photo.caption || "Gallery photo"}
                                className="w-full h-full object-cover"
                              />
                              <button
                                onClick={() => removeGalleryPhoto(photo.id)}
                                className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                data-testid={`button-remove-gallery-photo-${photo.id}`}
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="giftRegistry" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Gift className="w-4 h-4" />
                        Gift Registry
                      </h3>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="toggle-gift-registry" className="text-xs text-muted-foreground">
                          {sectionVisibility.giftRegistry ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </Label>
                        <Switch
                          id="toggle-gift-registry"
                          checked={sectionVisibility.giftRegistry}
                          onCheckedChange={() => toggleSectionVisibility('giftRegistry')}
                          data-testid="toggle-visibility-gift-registry"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="bank-name" className="text-sm font-medium mb-2 block">Bank Name</Label>
                      <Input
                        id="bank-name"
                        value={websiteData.bankName}
                        onChange={(e) => setWebsiteData({ ...websiteData, bankName: e.target.value })}
                        placeholder="e.g., Bank Mandiri"
                        data-testid="input-bank-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="account-number" className="text-sm font-medium mb-2 block">Account Number</Label>
                      <Input
                        id="account-number"
                        value={websiteData.accountNumber}
                        onChange={(e) => setWebsiteData({ ...websiteData, accountNumber: e.target.value })}
                        placeholder="e.g., 1234567890"
                        data-testid="input-account-number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="account-holder-name" className="text-sm font-medium mb-2 block">Account Holder Name</Label>
                      <Input
                        id="account-holder-name"
                        value={websiteData.accountHolderName}
                        onChange={(e) => setWebsiteData({ ...websiteData, accountHolderName: e.target.value })}
                        placeholder="e.g., Sarah & Ahmad"
                        data-testid="input-account-holder-name"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="testimonials" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Testimonials
                      </h3>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="toggle-testimonials" className="text-xs text-muted-foreground">
                          {sectionVisibility.testimonials ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </Label>
                        <Switch
                          id="toggle-testimonials"
                          checked={sectionVisibility.testimonials}
                          onCheckedChange={() => toggleSectionVisibility('testimonials')}
                          data-testid="toggle-visibility-testimonials"
                        />
                      </div>
                    </div>
                    <div>
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        onClick={addTestimonial}
                        data-testid="button-add-testimonial"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Testimonial
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {websiteData.testimonials.map((testimonial, index) => (
                        <div 
                          key={testimonial.id} 
                          className="border border-border rounded-lg p-4 space-y-3"
                          data-testid={`testimonial-${testimonial.id}`}
                        >
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium">Testimonial {index + 1}</Label>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeTestimonial(testimonial.id)}
                              data-testid={`button-remove-testimonial-${testimonial.id}`}
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                          <div>
                            <Label htmlFor={`testimonial-name-${testimonial.id}`} className="text-xs text-muted-foreground mb-1 block">Name</Label>
                            <Input
                              id={`testimonial-name-${testimonial.id}`}
                              value={testimonial.name}
                              onChange={(e) => updateTestimonial(testimonial.id, 'name', e.target.value)}
                              placeholder="Guest name"
                              data-testid={`input-testimonial-name-${testimonial.id}`}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`testimonial-relationship-${testimonial.id}`} className="text-xs text-muted-foreground mb-1 block">Relationship</Label>
                            <Input
                              id={`testimonial-relationship-${testimonial.id}`}
                              value={testimonial.relationship}
                              onChange={(e) => updateTestimonial(testimonial.id, 'relationship', e.target.value)}
                              placeholder="e.g., Friend, Family"
                              data-testid={`input-testimonial-relationship-${testimonial.id}`}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`testimonial-message-${testimonial.id}`} className="text-xs text-muted-foreground mb-1 block">Message</Label>
                            <Textarea
                              id={`testimonial-message-${testimonial.id}`}
                              value={testimonial.message}
                              onChange={(e) => updateTestimonial(testimonial.id, 'message', e.target.value)}
                              placeholder="Testimonial message"
                              className="min-h-[80px]"
                              data-testid={`textarea-testimonial-message-${testimonial.id}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="rsvp" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        RSVP Settings
                      </h3>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="toggle-rsvp" className="text-xs text-muted-foreground">
                          {sectionVisibility.rsvp ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </Label>
                        <Switch
                          id="toggle-rsvp"
                          checked={sectionVisibility.rsvp}
                          onCheckedChange={() => toggleSectionVisibility('rsvp')}
                          data-testid="toggle-visibility-rsvp"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="rsvp-deadline" className="text-sm font-medium mb-2 block">RSVP Deadline</Label>
                      <Input
                        id="rsvp-deadline"
                        value={websiteData.rsvpDeadline}
                        onChange={(e) => setWebsiteData({ ...websiteData, rsvpDeadline: e.target.value })}
                        placeholder="e.g., 20 Desember 2025"
                        data-testid="input-rsvp-deadline"
                      />
                    </div>
                    <div>
                      <Label htmlFor="rsvp-confirmation-message" className="text-sm font-medium mb-2 block">Confirmation Message</Label>
                      <Textarea
                        id="rsvp-confirmation-message"
                        value={websiteData.rsvpConfirmationMessage}
                        onChange={(e) => setWebsiteData({ ...websiteData, rsvpConfirmationMessage: e.target.value })}
                        placeholder="Thank you message after RSVP submission"
                        className="min-h-[100px]"
                        data-testid="textarea-rsvp-confirmation-message"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-2 block">RSVP Form Fields</Label>
                      <p className="text-xs text-muted-foreground mb-3">Configure which fields to collect from guests</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <Label htmlFor="rsvp-field-name" className="text-sm">Guest Name</Label>
                          <Switch id="rsvp-field-name" defaultChecked data-testid="toggle-rsvp-field-name" />
                        </div>
                        <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <Label htmlFor="rsvp-field-email" className="text-sm">Email Address</Label>
                          <Switch id="rsvp-field-email" defaultChecked data-testid="toggle-rsvp-field-email" />
                        </div>
                        <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <Label htmlFor="rsvp-field-phone" className="text-sm">Phone Number</Label>
                          <Switch id="rsvp-field-phone" data-testid="toggle-rsvp-field-phone" />
                        </div>
                        <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <Label htmlFor="rsvp-field-guests" className="text-sm">Number of Guests</Label>
                          <Switch id="rsvp-field-guests" defaultChecked data-testid="toggle-rsvp-field-guests" />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="music" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Music2 className="w-4 h-4" />
                        Background Music
                      </h3>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="toggle-music" className="text-xs text-muted-foreground">
                          {sectionVisibility.music ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </Label>
                        <Switch
                          id="toggle-music"
                          checked={sectionVisibility.music}
                          onCheckedChange={() => toggleSectionVisibility('music')}
                          data-testid="toggle-visibility-music"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="background-music-url" className="text-sm font-medium mb-2 block">Music URL</Label>
                      <Input
                        id="background-music-url"
                        value={websiteData.backgroundMusicUrl}
                        onChange={(e) => setWebsiteData({ ...websiteData, backgroundMusicUrl: e.target.value })}
                        placeholder="https://example.com/music.mp3"
                        data-testid="input-background-music-url"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Enter the URL of your background music file</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Upload Music File</Label>
                      <Button variant="outline" className="w-full" data-testid="button-upload-music">
                        <Music2 className="w-4 h-4 mr-2" />
                        Upload Audio File
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <Label htmlFor="music-autoplay" className="text-sm font-medium">Autoplay</Label>
                        <p className="text-xs text-muted-foreground">Play music automatically when page loads</p>
                      </div>
                      <Switch
                        id="music-autoplay"
                        checked={websiteData.musicAutoplay}
                        onCheckedChange={(checked) => setWebsiteData({ ...websiteData, musicAutoplay: checked })}
                        data-testid="toggle-music-autoplay"
                      />
                    </div>
                    <div>
                      <Label htmlFor="music-volume" className="text-sm font-medium mb-2 block">Volume: {websiteData.musicVolume}%</Label>
                      <Input
                        id="music-volume"
                        type="range"
                        min="0"
                        max="100"
                        value={websiteData.musicVolume}
                        onChange={(e) => setWebsiteData({ ...websiteData, musicVolume: parseInt(e.target.value) })}
                        className="w-full"
                        data-testid="slider-music-volume"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="seo" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Search className="w-4 h-4" />
                        SEO Settings
                      </h3>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="toggle-seo" className="text-xs text-muted-foreground">
                          {sectionVisibility.seo ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </Label>
                        <Switch
                          id="toggle-seo"
                          checked={sectionVisibility.seo}
                          onCheckedChange={() => toggleSectionVisibility('seo')}
                          data-testid="toggle-visibility-seo"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="page-title" className="text-sm font-medium mb-2 block">Page Title</Label>
                      <Input
                        id="page-title"
                        value={websiteData.pageTitle}
                        onChange={(e) => setWebsiteData({ ...websiteData, pageTitle: e.target.value })}
                        placeholder="e.g., Wedding of Sarah & Ahmad"
                        data-testid="input-page-title"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Appears in browser tabs and search results</p>
                    </div>
                    <div>
                      <Label htmlFor="meta-description" className="text-sm font-medium mb-2 block">Meta Description</Label>
                      <Textarea
                        id="meta-description"
                        value={websiteData.metaDescription}
                        onChange={(e) => setWebsiteData({ ...websiteData, metaDescription: e.target.value })}
                        placeholder="Brief description for search engines"
                        className="min-h-[80px]"
                        data-testid="textarea-meta-description"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Recommended: 150-160 characters</p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <h4 className="font-medium mb-3">Open Graph Tags</h4>
                      <p className="text-xs text-muted-foreground mb-3">Optimize how your website appears when shared on social media</p>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="og-description" className="text-sm font-medium mb-2 block">OG Description</Label>
                          <Textarea
                            id="og-description"
                            value={websiteData.ogDescription}
                            onChange={(e) => setWebsiteData({ ...websiteData, ogDescription: e.target.value })}
                            placeholder="Description for social media shares"
                            className="min-h-[60px]"
                            data-testid="textarea-og-description"
                          />
                        </div>
                        <div>
                          <Label htmlFor="og-image" className="text-sm font-medium mb-2 block">OG Image URL</Label>
                          <Input
                            id="og-image"
                            value={websiteData.ogImage}
                            onChange={(e) => setWebsiteData({ ...websiteData, ogImage: e.target.value })}
                            placeholder="https://example.com/image.jpg"
                            data-testid="input-og-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="countdown" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Timer className="w-4 h-4" />
                        Countdown Timer
                      </h3>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="toggle-countdown" className="text-xs text-muted-foreground">
                          {sectionVisibility.countdown ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </Label>
                        <Switch
                          id="toggle-countdown"
                          checked={sectionVisibility.countdown}
                          onCheckedChange={() => toggleSectionVisibility('countdown')}
                          data-testid="toggle-visibility-countdown"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <Label htmlFor="show-countdown" className="text-sm font-medium">Show Countdown</Label>
                        <p className="text-xs text-muted-foreground">Display countdown timer on website</p>
                      </div>
                      <Switch
                        id="show-countdown"
                        checked={websiteData.showCountdown}
                        onCheckedChange={(checked) => setWebsiteData({ ...websiteData, showCountdown: checked })}
                        data-testid="toggle-show-countdown"
                      />
                    </div>
                    <div>
                      <Label htmlFor="countdown-text" className="text-sm font-medium mb-2 block">Countdown Text</Label>
                      <Input
                        id="countdown-text"
                        value={websiteData.countdownText}
                        onChange={(e) => setWebsiteData({ ...websiteData, countdownText: e.target.value })}
                        placeholder="e.g., Counting down to our special day"
                        data-testid="input-countdown-text"
                      />
                    </div>
                    <div>
                      <Label htmlFor="countdown-style" className="text-sm font-medium mb-2 block">Countdown Style</Label>
                      <Select value={websiteData.countdownStyle} onValueChange={(value) => setWebsiteData({ ...websiteData, countdownStyle: value })}>
                        <SelectTrigger id="countdown-style" data-testid="select-countdown-style">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="elegant">Elegant</SelectItem>
                          <SelectItem value="modern">Modern</SelectItem>
                          <SelectItem value="minimal">Minimal</SelectItem>
                          <SelectItem value="classic">Classic</SelectItem>
                          <SelectItem value="bold">Bold</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Preview</Label>
                      <div className="p-6 border border-border rounded-lg bg-muted/20 text-center">
                        <p className="text-sm text-muted-foreground mb-3">{websiteData.countdownText}</p>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="p-3 bg-background rounded-lg">
                            <div className="text-2xl font-bold">12</div>
                            <div className="text-xs text-muted-foreground">Days</div>
                          </div>
                          <div className="p-3 bg-background rounded-lg">
                            <div className="text-2xl font-bold">05</div>
                            <div className="text-xs text-muted-foreground">Hours</div>
                          </div>
                          <div className="p-3 bg-background rounded-lg">
                            <div className="text-2xl font-bold">30</div>
                            <div className="text-xs text-muted-foreground">Min</div>
                          </div>
                          <div className="p-3 bg-background rounded-lg">
                            <div className="text-2xl font-bold">45</div>
                            <div className="text-xs text-muted-foreground">Sec</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="design" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Wand2 className="w-4 h-4" />
                        Advanced Design
                      </h3>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="toggle-design" className="text-xs text-muted-foreground">
                          {sectionVisibility.design ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </Label>
                        <Switch
                          id="toggle-design"
                          checked={sectionVisibility.design}
                          onCheckedChange={() => toggleSectionVisibility('design')}
                          data-testid="toggle-visibility-design"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="custom-spacing" className="text-sm font-medium mb-2 block">Section Spacing</Label>
                      <Select value={websiteData.customSpacing} onValueChange={(value) => setWebsiteData({ ...websiteData, customSpacing: value })}>
                        <SelectTrigger id="custom-spacing" data-testid="select-custom-spacing">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="compact">Compact</SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="relaxed">Relaxed</SelectItem>
                          <SelectItem value="spacious">Spacious</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <Label htmlFor="enable-animations" className="text-sm font-medium">Enable Animations</Label>
                        <p className="text-xs text-muted-foreground">Add smooth transitions and effects</p>
                      </div>
                      <Switch
                        id="enable-animations"
                        checked={websiteData.enableAnimations}
                        onCheckedChange={(checked) => setWebsiteData({ ...websiteData, enableAnimations: checked })}
                        data-testid="toggle-enable-animations"
                      />
                    </div>
                    <div>
                      <Label htmlFor="custom-css" className="text-sm font-medium mb-2 block">Custom CSS</Label>
                      <Textarea
                        id="custom-css"
                        value={websiteData.customCSS}
                        onChange={(e) => setWebsiteData({ ...websiteData, customCSS: e.target.value })}
                        placeholder="/* Add your custom CSS here */"
                        className="min-h-[200px] font-mono text-xs"
                        data-testid="textarea-custom-css"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Advanced users only - Add custom CSS to further customize your website</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="social" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Social Media
                      </h3>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="toggle-social" className="text-xs text-muted-foreground">
                          {sectionVisibility.social ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </Label>
                        <Switch
                          id="toggle-social"
                          checked={sectionVisibility.social}
                          onCheckedChange={() => toggleSectionVisibility('social')}
                          data-testid="toggle-visibility-social"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-3 block">Social Media Links</Label>
                      <p className="text-xs text-muted-foreground mb-4">Add your social media profiles to display on your wedding website</p>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="facebook-url" className="text-sm mb-2 flex items-center gap-2">
                            <Facebook className="w-4 h-4 text-blue-600" />
                            Facebook
                          </Label>
                          <Input
                            id="facebook-url"
                            value={websiteData.facebookUrl}
                            onChange={(e) => setWebsiteData({ ...websiteData, facebookUrl: e.target.value })}
                            placeholder="https://facebook.com/yourprofile"
                            data-testid="input-facebook-url"
                          />
                        </div>
                        <div>
                          <Label htmlFor="instagram-url" className="text-sm mb-2 flex items-center gap-2">
                            <Instagram className="w-4 h-4 text-pink-600" />
                            Instagram
                          </Label>
                          <Input
                            id="instagram-url"
                            value={websiteData.instagramUrl}
                            onChange={(e) => setWebsiteData({ ...websiteData, instagramUrl: e.target.value })}
                            placeholder="https://instagram.com/yourprofile"
                            data-testid="input-instagram-url"
                          />
                        </div>
                        <div>
                          <Label htmlFor="twitter-url" className="text-sm mb-2 flex items-center gap-2">
                            <Twitter className="w-4 h-4 text-sky-500" />
                            Twitter
                          </Label>
                          <Input
                            id="twitter-url"
                            value={websiteData.twitterUrl}
                            onChange={(e) => setWebsiteData({ ...websiteData, twitterUrl: e.target.value })}
                            placeholder="https://twitter.com/yourprofile"
                            data-testid="input-twitter-url"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-border pt-4">
                      <Label className="text-sm font-medium mb-3 block">Social Sharing Options</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <Label htmlFor="social-share-buttons" className="text-sm">Show Share Buttons</Label>
                          <Switch id="social-share-buttons" defaultChecked data-testid="toggle-social-share-buttons" />
                        </div>
                        <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <Label htmlFor="social-icons-footer" className="text-sm">Display Icons in Footer</Label>
                          <Switch id="social-icons-footer" defaultChecked data-testid="toggle-social-icons-footer" />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </ScrollArea>
          </Tabs>
        </aside>

        <main className="flex-1 overflow-auto bg-muted/20 flex items-start justify-center p-8">
          <div 
            className="bg-white shadow-2xl transition-all duration-300 overflow-hidden"
            style={{ 
              width: deviceWidths[device],
              maxWidth: "100%"
            }}
          >
            <ScrollArea className="h-[calc(100vh-160px)]">
              <WebsitePreview data={websiteData} />
            </ScrollArea>
          </div>
        </main>

        <aside className="w-80 border-l border-border overflow-hidden flex-shrink-0 flex flex-col bg-muted/10">
          <div className="border-b border-border px-4 py-3">
            <h3 className="font-semibold text-sm">Design Options</h3>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-6 space-y-6">
              {activeTab === "hero" && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Section Layout</Label>
                    <Select defaultValue="centered">
                      <SelectTrigger data-testid="select-hero-layout">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="centered">Centered</SelectItem>
                        <SelectItem value="left">Left Aligned</SelectItem>
                        <SelectItem value="right">Right Aligned</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Background Style</Label>
                    <Select defaultValue="image">
                      <SelectTrigger data-testid="select-hero-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="image">Image</SelectItem>
                        <SelectItem value="gradient">Gradient</SelectItem>
                        <SelectItem value="solid">Solid Color</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              {activeTab === "story" && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Text Alignment</Label>
                    <Select defaultValue="center">
                      <SelectTrigger data-testid="select-story-alignment">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="left">Left</SelectItem>
                        <SelectItem value="center">Center</SelectItem>
                        <SelectItem value="right">Right</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Image Position</Label>
                    <Select defaultValue="top">
                      <SelectTrigger data-testid="select-story-image-position">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="top">Top</SelectItem>
                        <SelectItem value="side">Side</SelectItem>
                        <SelectItem value="background">Background</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              {activeTab === "event" && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Layout Style</Label>
                    <Select defaultValue="two-column">
                      <SelectTrigger data-testid="select-event-layout">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="two-column">Two Column</SelectItem>
                        <SelectItem value="stacked">Stacked</SelectItem>
                        <SelectItem value="timeline">Timeline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              {activeTab === "gallery" && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Grid Columns</Label>
                    <Select defaultValue="3">
                      <SelectTrigger data-testid="select-gallery-columns">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 Columns</SelectItem>
                        <SelectItem value="3">3 Columns</SelectItem>
                        <SelectItem value="4">4 Columns</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Spacing</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger data-testid="select-gallery-spacing">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              {activeTab === "giftRegistry" && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Card Style</Label>
                    <Select defaultValue="elegant">
                      <SelectTrigger data-testid="select-gift-card-style">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="elegant">Elegant</SelectItem>
                        <SelectItem value="modern">Modern</SelectItem>
                        <SelectItem value="simple">Simple</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              {activeTab === "testimonials" && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Display Style</Label>
                    <Select defaultValue="cards">
                      <SelectTrigger data-testid="select-testimonials-style">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cards">Cards</SelectItem>
                        <SelectItem value="carousel">Carousel</SelectItem>
                        <SelectItem value="grid">Grid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Design options for {activeTab} section
                </p>
              </div>
            </div>
          </ScrollArea>
        </aside>
      </div>

      <AssetLibraryModal 
        open={assetLibraryOpen} 
        onOpenChange={setAssetLibraryOpen}
        onSelectAsset={handleSelectAsset}
      />

      <Dialog open={publishModalOpen} onOpenChange={setPublishModalOpen}>
        <DialogContent className="max-w-3xl" data-testid="dialog-publish">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              {publishedUrl && <Check className="w-6 h-6 text-green-500" />}
              {publishedUrl ? "Website Berhasil Dipublikasikan! 🎉" : "Publikasikan Website Undangan"}
            </DialogTitle>
            <DialogDescription>
              {publishedUrl 
                ? "Bagikan website undangan Anda kepada tamu melalui link atau QR code di bawah ini."
                : "Website undangan Anda siap dipublikasikan. Bagikan link ini kepada tamu undangan."}
            </DialogDescription>
          </DialogHeader>
          
          {!publishedUrl ? (
            <div className="space-y-6 py-4">
              <div>
                <Label htmlFor="website-url" className="text-sm font-medium mb-2 block">URL Website</Label>
                <div className="flex gap-2">
                  <Input
                    id="website-url"
                    value={`undangan.id/${websiteData.coupleName.toLowerCase().replace(/\s+/g, '-')}`}
                    readOnly
                    className="flex-1 font-mono"
                    data-testid="input-website-url"
                  />
                </div>
              </div>
              <Button 
                className="w-full h-12 text-base" 
                onClick={handlePublish}
                data-testid="button-confirm-publish"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Publikasikan Sekarang
              </Button>
            </div>
          ) : (
            <div className="space-y-6 py-4">
              {showConfetti && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50" data-testid="confetti-animation">
                  <div className="animate-bounce">
                    <Sparkles className="w-16 h-16 text-yellow-500" />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Link Website</Label>
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border-2 border-primary/20">
                      <p className="font-mono text-sm font-semibold text-primary break-all mb-3" data-testid="text-published-url">
                        https://{publishedUrl}
                      </p>
                      <Button 
                        className="w-full" 
                        onClick={handleCopyLink}
                        variant={linkCopied ? "secondary" : "default"}
                        data-testid="button-copy-link"
                      >
                        {linkCopied ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Link Tersalin!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Salin Link
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-2 block">Aksi Cepat</Label>
                    <Button 
                      className="w-full" 
                      variant="outline"
                      onClick={handlePreview}
                      data-testid="button-preview"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Lihat Preview
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">QR Code</Label>
                    <div className="p-6 bg-white rounded-xl border-2 border-border flex flex-col items-center gap-4">
                      <div 
                        className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border-4 border-gray-300 relative overflow-hidden"
                        data-testid="qr-code-placeholder"
                      >
                        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 p-4 gap-1">
                          {Array.from({ length: 64 }).map((_, i) => (
                            <div
                              key={i}
                              className={`rounded-sm ${
                                Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={handleDownloadQR}
                        data-testid="button-download-qr"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download QR Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <Label className="text-sm font-medium mb-3 block">Bagikan ke Media Sosial</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Button
                    variant="outline"
                    className="h-12 flex items-center justify-center gap-2 hover:bg-green-50 hover:border-green-500 hover:text-green-600 transition-colors"
                    onClick={() => handleSocialShare('whatsapp')}
                    data-testid="button-share-whatsapp"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span className="font-medium">WhatsApp</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 flex items-center justify-center gap-2 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-colors"
                    onClick={() => handleSocialShare('facebook')}
                    data-testid="button-share-facebook"
                  >
                    <FaFacebook className="w-5 h-5" />
                    <span className="font-medium">Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 flex items-center justify-center gap-2 hover:bg-sky-50 hover:border-sky-500 hover:text-sky-600 transition-colors"
                    onClick={() => handleSocialShare('twitter')}
                    data-testid="button-share-twitter"
                  >
                    <FaTwitter className="w-5 h-5" />
                    <span className="font-medium">Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 flex items-center justify-center gap-2 hover:bg-purple-50 hover:border-purple-500 hover:text-purple-600 transition-colors"
                    onClick={() => handleSocialShare('email')}
                    data-testid="button-share-email"
                  >
                    <MdEmail className="w-5 h-5" />
                    <span className="font-medium">Email</span>
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
