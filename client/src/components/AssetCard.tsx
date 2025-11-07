import { Card } from "@/components/ui/card";

interface AssetCardProps {
  id: string;
  imageUrl: string;
  name: string;
  onSelect: (id: string) => void;
}

export default function AssetCard({ id, imageUrl, name, onSelect }: AssetCardProps) {
  return (
    <Card 
      className="aspect-square overflow-hidden cursor-pointer hover-elevate active-elevate-2"
      onClick={() => onSelect(id)}
      data-testid={`card-asset-${id}`}
    >
      <div className="w-full h-full p-4 flex items-center justify-center bg-muted/30">
        <img 
          src={imageUrl} 
          alt={name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </Card>
  );
}
