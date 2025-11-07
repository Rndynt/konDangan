import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import AssetCard from "./AssetCard";
import floralOrnament from '@assets/generated_images/Gold_floral_ornament_asset_7cc8943d.png';
import geometricFrame from '@assets/generated_images/Geometric_frame_border_asset_e6e4b33f.png';
import watercolorFloral from '@assets/generated_images/Watercolor_floral_decoration_asset_d8f47d51.png';
import iconSet from '@assets/generated_images/Invitation_icon_set_minimal_39de28e1.png';
import artDecoCorner from '@assets/generated_images/Art_deco_corner_ornament_8d0acce0.png';

interface AssetLibraryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectAsset: (assetId: string) => void;
}

const assets = {
  ornamen: [
    { id: "floral-1", imageUrl: floralOrnament, name: "Gold Floral" },
    { id: "watercolor-1", imageUrl: watercolorFloral, name: "Watercolor Floral" },
    { id: "art-deco-1", imageUrl: artDecoCorner, name: "Art Deco Corner" },
  ],
  borders: [
    { id: "geometric-1", imageUrl: geometricFrame, name: "Geometric Frame" },
    { id: "floral-border-1", imageUrl: floralOrnament, name: "Floral Border" },
  ],
  icons: [
    { id: "icon-set-1", imageUrl: iconSet, name: "Minimal Icons" },
  ],
};

export default function AssetLibraryModal({ open, onOpenChange, onSelectAsset }: AssetLibraryModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Library Asset</DialogTitle>
        </DialogHeader>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Cari asset..." 
            className="pl-9"
            data-testid="input-search-assets"
          />
        </div>

        <Tabs defaultValue="ornamen" className="flex-1">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="ornamen" data-testid="tab-ornamen">Ornamen</TabsTrigger>
            <TabsTrigger value="borders" data-testid="tab-borders">Borders</TabsTrigger>
            <TabsTrigger value="icons" data-testid="tab-icons">Icons</TabsTrigger>
          </TabsList>

          <TabsContent value="ornamen" className="mt-4">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-h-[400px] overflow-y-auto pr-2">
              {assets.ornamen.map((asset) => (
                <AssetCard key={asset.id} {...asset} onSelect={onSelectAsset} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="borders" className="mt-4">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-h-[400px] overflow-y-auto pr-2">
              {assets.borders.map((asset) => (
                <AssetCard key={asset.id} {...asset} onSelect={onSelectAsset} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="icons" className="mt-4">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-h-[400px] overflow-y-auto pr-2">
              {assets.icons.map((asset) => (
                <AssetCard key={asset.id} {...asset} onSelect={onSelectAsset} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
