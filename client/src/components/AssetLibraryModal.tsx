import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Upload, Image as ImageIcon } from "lucide-react";
import AssetCard from "./AssetCard";

import floralOrnament from '@assets/generated_images/Gold_floral_ornament_asset_7cc8943d.png';
import geometricFrame from '@assets/generated_images/Geometric_frame_border_asset_e6e4b33f.png';
import watercolorFloral from '@assets/generated_images/Watercolor_floral_decoration_asset_d8f47d51.png';
import iconSet from '@assets/generated_images/Invitation_icon_set_minimal_39de28e1.png';
import artDecoCorner from '@assets/generated_images/Art_deco_corner_ornament_8d0acce0.png';

import coupleFirstDance from '@assets/generated_images/Couple_first_dance_romantic_76675a79.png';
import coupleLaptop from '@assets/generated_images/Couple_using_laptop_together_home_4ee41ca7.png';
import proposalMoment from '@assets/generated_images/Proposal_moment_couple_sunset_178d1bd3.png';
import weddingCouple from '@assets/generated_images/Wedding_couple_portrait_romantic_d63596a0.png';
import weddingVenue from '@assets/generated_images/Wedding_venue_outdoor_garden_52e64c6d.png';

import watercolorBgTexture from '@assets/generated_images/Watercolor_background_texture_gentle_7b44ce43.png';
import watercolorFloralBg from '@assets/generated_images/Watercolor_floral_background_elegant_3a887409.png';
import weddingTemplatePink from '@assets/generated_images/Wedding_website_template_elegant_pink_b3b8566b.png';
import weddingTemplateNavy from '@assets/generated_images/Wedding_website_template_luxury_navy_f1fc892c.png';

import birthdayInvitation from '@assets/generated_images/Birthday_invitation_minimalist_confetti_45dbb0b1.png';
import birthdayTemplate from '@assets/generated_images/Birthday_website_template_colorful_fun_058271e2.png';
import corporateEvent from '@assets/generated_images/Corporate_event_website_professional_e5d86ef7.png';
import formalInvitation from '@assets/generated_images/Formal_event_invitation_corporate_4be24768.png';
import weddingInvitationGeometric from '@assets/generated_images/Wedding_invitation_geometric_modern_2587ca6c.png';
import weddingInvitationFloral from '@assets/generated_images/Wedding_invitation_template_floral_fe55e57a.png';

interface AssetLibraryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectAsset: (assetId: string) => void;
}

const assets = {
  photos: [
    { id: "photo-couple-dance", imageUrl: coupleFirstDance, name: "Couple First Dance" },
    { id: "photo-couple-laptop", imageUrl: coupleLaptop, name: "Couple with Laptop" },
    { id: "photo-proposal", imageUrl: proposalMoment, name: "Proposal Moment" },
    { id: "photo-wedding-couple", imageUrl: weddingCouple, name: "Wedding Portrait" },
    { id: "photo-venue", imageUrl: weddingVenue, name: "Wedding Venue" },
    { id: "photo-couple-dance-2", imageUrl: coupleFirstDance, name: "Romantic Dance" },
    { id: "photo-couple-laptop-2", imageUrl: coupleLaptop, name: "Planning Together" },
    { id: "photo-proposal-2", imageUrl: proposalMoment, name: "Special Moment" },
    { id: "photo-wedding-couple-2", imageUrl: weddingCouple, name: "Happy Couple" },
    { id: "photo-venue-2", imageUrl: weddingVenue, name: "Garden Venue" },
  ],
  backgrounds: [
    { id: "bg-watercolor-texture", imageUrl: watercolorBgTexture, name: "Watercolor Texture" },
    { id: "bg-watercolor-floral", imageUrl: watercolorFloralBg, name: "Floral Watercolor" },
    { id: "bg-pink-template", imageUrl: weddingTemplatePink, name: "Elegant Pink" },
    { id: "bg-navy-template", imageUrl: weddingTemplateNavy, name: "Luxury Navy" },
    { id: "bg-watercolor-texture-2", imageUrl: watercolorBgTexture, name: "Gentle Texture" },
    { id: "bg-watercolor-floral-2", imageUrl: watercolorFloralBg, name: "Elegant Floral" },
    { id: "bg-pink-template-2", imageUrl: weddingTemplatePink, name: "Soft Pink" },
    { id: "bg-navy-template-2", imageUrl: weddingTemplateNavy, name: "Deep Navy" },
  ],
  patterns: [
    { id: "pattern-birthday-confetti", imageUrl: birthdayInvitation, name: "Birthday Confetti" },
    { id: "pattern-birthday-template", imageUrl: birthdayTemplate, name: "Colorful Birthday" },
    { id: "pattern-corporate", imageUrl: corporateEvent, name: "Corporate Event" },
    { id: "pattern-formal", imageUrl: formalInvitation, name: "Formal Invitation" },
    { id: "pattern-geometric", imageUrl: weddingInvitationGeometric, name: "Geometric Modern" },
    { id: "pattern-floral-invite", imageUrl: weddingInvitationFloral, name: "Floral Invitation" },
    { id: "pattern-birthday-confetti-2", imageUrl: birthdayInvitation, name: "Minimalist Confetti" },
    { id: "pattern-birthday-template-2", imageUrl: birthdayTemplate, name: "Fun Birthday" },
    { id: "pattern-corporate-2", imageUrl: corporateEvent, name: "Professional Event" },
    { id: "pattern-formal-2", imageUrl: formalInvitation, name: "Elegant Formal" },
  ],
  ornamen: [
    { id: "ornament-floral-1", imageUrl: floralOrnament, name: "Gold Floral" },
    { id: "ornament-watercolor-1", imageUrl: watercolorFloral, name: "Watercolor Floral" },
    { id: "ornament-art-deco-1", imageUrl: artDecoCorner, name: "Art Deco Corner" },
    { id: "ornament-floral-2", imageUrl: floralOrnament, name: "Golden Ornament" },
    { id: "ornament-watercolor-2", imageUrl: watercolorFloral, name: "Floral Decoration" },
    { id: "ornament-art-deco-2", imageUrl: artDecoCorner, name: "Corner Ornament" },
    { id: "ornament-floral-3", imageUrl: floralOrnament, name: "Elegant Floral" },
    { id: "ornament-watercolor-3", imageUrl: watercolorFloral, name: "Watercolor Art" },
  ],
  borders: [
    { id: "border-geometric-1", imageUrl: geometricFrame, name: "Geometric Frame" },
    { id: "border-floral-1", imageUrl: floralOrnament, name: "Floral Border" },
    { id: "border-art-deco-1", imageUrl: artDecoCorner, name: "Art Deco Border" },
    { id: "border-geometric-2", imageUrl: geometricFrame, name: "Modern Frame" },
    { id: "border-floral-2", imageUrl: floralOrnament, name: "Golden Border" },
    { id: "border-art-deco-2", imageUrl: artDecoCorner, name: "Decorative Border" },
    { id: "border-geometric-3", imageUrl: geometricFrame, name: "Clean Frame" },
    { id: "border-floral-3", imageUrl: floralOrnament, name: "Elegant Border" },
  ],
  icons: [
    { id: "icon-set-1", imageUrl: iconSet, name: "Minimal Icons" },
    { id: "icon-set-2", imageUrl: iconSet, name: "Clean Icons" },
    { id: "icon-set-3", imageUrl: iconSet, name: "Modern Icons" },
    { id: "icon-set-4", imageUrl: iconSet, name: "Simple Icons" },
    { id: "icon-set-5", imageUrl: iconSet, name: "Elegant Icons" },
    { id: "icon-set-6", imageUrl: iconSet, name: "Basic Icons" },
    { id: "icon-set-7", imageUrl: iconSet, name: "Essential Icons" },
    { id: "icon-set-8", imageUrl: iconSet, name: "Core Icons" },
  ],
};

export default function AssetLibraryModal({ open, onOpenChange, onSelectAsset }: AssetLibraryModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle data-testid="title-asset-library">Asset Library</DialogTitle>
        </DialogHeader>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search assets..." 
            className="pl-9"
            data-testid="input-search-assets"
          />
        </div>

        <Tabs defaultValue="photos" className="flex-1">
          <TabsList className="w-full justify-start grid grid-cols-7 h-auto">
            <TabsTrigger value="photos" data-testid="tab-photos" className="gap-2">
              <ImageIcon className="w-4 h-4" />
              Photos
            </TabsTrigger>
            <TabsTrigger value="backgrounds" data-testid="tab-backgrounds">Backgrounds</TabsTrigger>
            <TabsTrigger value="patterns" data-testid="tab-patterns">Patterns</TabsTrigger>
            <TabsTrigger value="ornamen" data-testid="tab-ornamen">Ornaments</TabsTrigger>
            <TabsTrigger value="borders" data-testid="tab-borders">Borders</TabsTrigger>
            <TabsTrigger value="icons" data-testid="tab-icons">Icons</TabsTrigger>
            <TabsTrigger value="upload" data-testid="tab-upload" className="gap-2">
              <Upload className="w-4 h-4" />
              Upload
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="mt-6">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-h-[480px] overflow-y-auto pr-2">
              {assets.photos.map((asset) => (
                <AssetCard key={asset.id} {...asset} onSelect={onSelectAsset} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="backgrounds" className="mt-6">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-h-[480px] overflow-y-auto pr-2">
              {assets.backgrounds.map((asset) => (
                <AssetCard key={asset.id} {...asset} onSelect={onSelectAsset} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="patterns" className="mt-6">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-h-[480px] overflow-y-auto pr-2">
              {assets.patterns.map((asset) => (
                <AssetCard key={asset.id} {...asset} onSelect={onSelectAsset} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ornamen" className="mt-6">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-h-[480px] overflow-y-auto pr-2">
              {assets.ornamen.map((asset) => (
                <AssetCard key={asset.id} {...asset} onSelect={onSelectAsset} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="borders" className="mt-6">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-h-[480px] overflow-y-auto pr-2">
              {assets.borders.map((asset) => (
                <AssetCard key={asset.id} {...asset} onSelect={onSelectAsset} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="icons" className="mt-6">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-h-[480px] overflow-y-auto pr-2">
              {assets.icons.map((asset) => (
                <AssetCard key={asset.id} {...asset} onSelect={onSelectAsset} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upload" className="mt-6">
            <div className="max-h-[480px] overflow-y-auto pr-2">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer bg-muted/10"
                   data-testid="upload-drop-zone">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className="w-10 h-10 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold" data-testid="text-upload-title">
                      Upload Your Assets
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto" data-testid="text-upload-description">
                      Drag and drop your images here, or click to browse
                    </p>
                  </div>
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span data-testid="text-supported-formats">Supported formats: PNG, JPG, SVG</span>
                    <span>•</span>
                    <span data-testid="text-max-size">Max size: 5MB</span>
                  </div>
                  <button 
                    className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    data-testid="button-browse-files"
                  >
                    Browse Files
                  </button>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <h4 className="text-sm font-semibold text-muted-foreground" data-testid="text-recent-uploads-title">
                  Recent Uploads
                </h4>
                <div className="text-center py-12 text-muted-foreground" data-testid="text-no-uploads">
                  No uploads yet. Start by uploading your first asset!
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
