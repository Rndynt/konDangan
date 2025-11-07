import { useState } from "react";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Download, Save, Eye, Type, Image as ImageIcon, Sparkles, Palette, Hash } from "lucide-react";
import AssetLibraryModal from "@/components/AssetLibraryModal";
import weddingFloral from '@assets/generated_images/Wedding_invitation_template_floral_fe55e57a.png';

export default function EditorPage() {
  const [, params] = useRoute("/editor/:templateId");
  const [templateName, setTemplateName] = useState("Undangan Pernikahan");
  const [assetLibraryOpen, setAssetLibraryOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Inter");
  const [fontSize, setFontSize] = useState([16]);
  const [mainText, setMainText] = useState("Sarah & Ahmad");
  const [dateText, setDateText] = useState("25 Desember 2025");
  const [primaryColor, setPrimaryColor] = useState("#c9a961");

  const fonts = ["Inter", "Playfair Display", "Poppins", "Lora", "Montserrat"];

  const handleSelectAsset = (assetId: string) => {
    console.log('Asset added to canvas:', assetId);
    setAssetLibraryOpen(false);
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <nav className="border-b border-border h-16 flex-shrink-0">
        <div className="h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/templates" className="font-serif text-xl font-semibold hover-elevate rounded-md px-2 -ml-2" data-testid="link-home">
              Undangan.id
            </Link>
            <div className="h-6 w-px bg-border" />
            <Input
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              className="max-w-xs border-0 focus-visible:ring-0 px-2 font-medium"
              data-testid="input-template-name"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" data-testid="button-preview">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button variant="outline" data-testid="button-save">
              <Save className="w-4 h-4 mr-2" />
              Simpan
            </Button>
            <Button data-testid="button-download">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-80 border-r border-border overflow-y-auto flex-shrink-0">
          <div className="p-6">
            <Accordion type="single" collapsible defaultValue="text">
              <AccordionItem value="text">
                <AccordionTrigger data-testid="accordion-trigger-text">
                  <div className="flex items-center gap-2">
                    <Type className="w-4 h-4" />
                    <span>Teks</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    <div>
                      <Label htmlFor="main-text" className="text-sm font-medium mb-2 block">Teks Utama</Label>
                      <Input
                        id="main-text"
                        value={mainText}
                        onChange={(e) => setMainText(e.target.value)}
                        data-testid="input-main-text"
                      />
                    </div>
                    <div>
                      <Label htmlFor="date-text" className="text-sm font-medium mb-2 block">Tanggal</Label>
                      <Input
                        id="date-text"
                        value={dateText}
                        onChange={(e) => setDateText(e.target.value)}
                        data-testid="input-date-text"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="photo">
                <AccordionTrigger data-testid="accordion-trigger-photo">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    <span>Foto</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2">
                    <Button variant="outline" className="w-full" data-testid="button-upload-photo">
                      Upload Foto
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="assets">
                <AccordionTrigger data-testid="accordion-trigger-assets">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Asset</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setAssetLibraryOpen(true)}
                      data-testid="button-open-assets"
                    >
                      Buka Library Asset
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="colors">
                <AccordionTrigger data-testid="accordion-trigger-colors">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    <span>Warna</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    <div>
                      <Label htmlFor="primary-color" className="text-sm font-medium mb-2 block">Warna Utama</Label>
                      <div className="flex gap-2">
                        <Input
                          id="primary-color"
                          type="color"
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="h-10 w-20 cursor-pointer"
                          data-testid="input-primary-color"
                        />
                        <Input
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="flex-1"
                          data-testid="input-primary-color-hex"
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="font">
                <AccordionTrigger data-testid="accordion-trigger-font">
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4" />
                    <span>Font</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    <div>
                      <Label htmlFor="font-family" className="text-sm font-medium mb-2 block">Font Family</Label>
                      <Select value={selectedFont} onValueChange={setSelectedFont}>
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
                    <div>
                      <Label htmlFor="font-size" className="text-sm font-medium mb-2 block">
                        Font Size: {fontSize[0]}px
                      </Label>
                      <Slider
                        id="font-size"
                        value={fontSize}
                        onValueChange={setFontSize}
                        min={12}
                        max={72}
                        step={1}
                        data-testid="slider-font-size"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </aside>

        <main className="flex-1 overflow-auto bg-muted/20">
          <div className="min-h-full p-12 flex items-center justify-center">
            <Card className="w-full max-w-2xl aspect-[3/4] shadow-lg overflow-hidden">
              <div 
                className="w-full h-full relative bg-cover bg-center p-12 flex flex-col items-center justify-center text-center"
                style={{ 
                  backgroundImage: `url(${weddingFloral})`,
                  fontFamily: selectedFont
                }}
              >
                <div 
                  className="text-4xl font-serif mb-4"
                  style={{ 
                    color: primaryColor,
                    fontSize: `${fontSize[0] * 2}px`
                  }}
                  data-testid="preview-main-text"
                >
                  {mainText}
                </div>
                <div 
                  className="text-lg"
                  style={{ 
                    color: primaryColor,
                    fontSize: `${fontSize[0]}px`
                  }}
                  data-testid="preview-date-text"
                >
                  {dateText}
                </div>
              </div>
            </Card>
          </div>
        </main>

        <aside className="w-72 border-l border-border overflow-y-auto flex-shrink-0 hidden xl:block">
          <div className="p-6">
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Properties</h3>
            <p className="text-sm text-muted-foreground">
              Pilih elemen untuk mengedit properties
            </p>
          </div>
        </aside>
      </div>

      <AssetLibraryModal
        open={assetLibraryOpen}
        onOpenChange={setAssetLibraryOpen}
        onSelectAsset={handleSelectAsset}
      />
    </div>
  );
}
