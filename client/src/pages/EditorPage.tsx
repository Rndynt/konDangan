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
import { Monitor, Tablet, Smartphone, Eye, Save, Share2, Home, FileText, Image, Calendar, Users, Mail } from "lucide-react";
import WebsitePreview from "@/components/WebsitePreview";

type DeviceType = "desktop" | "tablet" | "mobile";

export default function EditorPage() {
  const [, params] = useRoute("/editor/:templateId");
  const [device, setDevice] = useState<DeviceType>("desktop");
  const [publishModalOpen, setPublishModalOpen] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState("");

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
    fontFamily: "Inter"
  });

  const fonts = ["Inter", "Playfair Display", "Poppins", "Lora", "Montserrat", "Cormorant Garamond"];

  const deviceWidths = {
    desktop: "100%",
    tablet: "768px",
    mobile: "375px"
  };

  const handlePublish = () => {
    const url = `undangan.id/${websiteData.coupleName.toLowerCase().replace(/\s+/g, '-')}`;
    setPublishedUrl(url);
    console.log('Publishing website...', url);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://${publishedUrl}`);
    console.log('Link copied!');
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <nav className="border-b border-border h-16 flex-shrink-0 backdrop-blur-lg bg-background/80 sticky top-0 z-50">
        <div className="h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/templates" className="font-serif text-xl font-semibold hover-elevate rounded-md px-2 -ml-2" data-testid="link-home">
              Undangan.id
            </Link>
            <div className="h-6 w-px bg-border" />
            <p className="font-medium text-muted-foreground">Website Undangan</p>
          </div>

          <div className="flex items-center gap-2">
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
          <Tabs defaultValue="hero" className="flex-1 flex flex-col">
            <div className="border-b border-border px-4 py-3">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="hero" data-testid="tab-hero">
                  <Home className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="story" data-testid="tab-story">
                  <FileText className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="event" data-testid="tab-event">
                  <Calendar className="w-4 h-4" />
                </TabsTrigger>
              </TabsList>
            </div>

            <ScrollArea className="flex-1">
              <div className="p-6">
                <TabsContent value="hero" className="mt-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Hero Section
                      </h3>
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
                      <div className="flex gap-2">
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
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Cerita Kami
                      </h3>
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
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Detail Acara
                      </h3>
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
      </div>

      <Dialog open={publishModalOpen} onOpenChange={setPublishModalOpen}>
        <DialogContent data-testid="dialog-publish">
          <DialogHeader>
            <DialogTitle>Publikasikan Website Undangan</DialogTitle>
            <DialogDescription>
              Website undangan Anda siap dipublikasikan. Bagikan link ini kepada tamu undangan.
            </DialogDescription>
          </DialogHeader>
          
          {!publishedUrl ? (
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="website-url" className="text-sm font-medium mb-2 block">URL Website</Label>
                <div className="flex gap-2">
                  <Input
                    id="website-url"
                    value={`undangan.id/${websiteData.coupleName.toLowerCase().replace(/\s+/g, '-')}`}
                    readOnly
                    className="flex-1"
                    data-testid="input-website-url"
                  />
                </div>
              </div>
              <Button 
                className="w-full" 
                onClick={handlePublish}
                data-testid="button-confirm-publish"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Publikasikan Sekarang
              </Button>
            </div>
          ) : (
            <div className="space-y-4 py-4">
              <div className="p-4 bg-muted/50 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">Website Anda telah dipublikasikan!</p>
                <p className="font-mono font-semibold text-primary" data-testid="text-published-url">
                  {publishedUrl}
                </p>
              </div>
              <Button 
                className="w-full" 
                onClick={handleCopyLink}
                data-testid="button-copy-link"
              >
                Salin Link
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
