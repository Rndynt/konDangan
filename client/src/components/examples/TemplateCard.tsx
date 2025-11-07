import TemplateCard from '../TemplateCard';
import weddingFloral from '@assets/generated_images/Wedding_invitation_template_floral_fe55e57a.png';

export default function TemplateCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="max-w-xs">
        <TemplateCard 
          id="wedding-floral"
          title="Elegant Floral"
          category="Pernikahan"
          imageUrl={weddingFloral}
          onSelect={(id) => console.log('Template selected:', id)}
        />
      </div>
    </div>
  );
}
