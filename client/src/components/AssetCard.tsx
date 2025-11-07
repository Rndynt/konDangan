import { Card } from "@/components/ui/card";
import { useState } from "react";

interface AssetCardProps {
  id: string;
  imageUrl: string;
  name: string;
  onSelect: (id: string) => void;
}

export default function AssetCard({ id, imageUrl, name, onSelect }: AssetCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative aspect-square overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:z-10"
      onClick={() => onSelect(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-asset-${id}`}
    >
      <div className="w-full h-full p-4 flex items-center justify-center bg-muted/30">
        <img 
          src={imageUrl} 
          alt={name}
          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {isHovered && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-200">
          <div className="text-center px-2">
            <p className="text-white font-medium text-sm" data-testid={`text-asset-name-${id}`}>
              {name}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
