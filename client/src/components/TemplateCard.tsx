import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

interface TemplateCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  onPreview: (id: string) => void;
  onUse: (id: string) => void;
}

export default function TemplateCard({ id, title, category, imageUrl, onPreview, onUse }: TemplateCardProps) {
  return (
    <Card className="group overflow-hidden hover-elevate" data-testid={`card-template-${id}`}>
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 gap-2">
          <Button 
            className="flex-1 backdrop-blur-md bg-white/90 text-foreground hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              onUse(id);
            }}
            data-testid={`button-use-template-${id}`}
          >
            Gunakan Template
          </Button>
          <Button 
            variant="outline"
            size="icon"
            className="backdrop-blur-md bg-white/90 hover:bg-white border-white/20"
            onClick={(e) => {
              e.stopPropagation();
              onPreview(id);
            }}
            data-testid={`button-preview-template-${id}`}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
        <Badge className="absolute top-4 right-4" data-testid={`badge-category-${id}`}>
          {category}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="font-medium" data-testid={`text-template-title-${id}`}>{title}</h3>
      </div>
    </Card>
  );
}
