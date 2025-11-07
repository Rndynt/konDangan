import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TemplateCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  onSelect: (id: string) => void;
}

export default function TemplateCard({ id, title, category, imageUrl, onSelect }: TemplateCardProps) {
  return (
    <Card className="group overflow-hidden hover-elevate" data-testid={`card-template-${id}`}>
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <Button 
            className="w-full backdrop-blur-md bg-white/90 text-foreground hover:bg-white"
            onClick={() => onSelect(id)}
            data-testid={`button-select-template-${id}`}
          >
            Gunakan Template
          </Button>
        </div>
        <Badge className="absolute top-3 right-3" data-testid={`badge-category-${id}`}>
          {category}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="font-medium" data-testid={`text-template-title-${id}`}>{title}</h3>
      </div>
    </Card>
  );
}
