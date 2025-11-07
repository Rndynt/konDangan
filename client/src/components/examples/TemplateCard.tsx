import TemplateCard from '../TemplateCard';
import weddingPink from '@assets/generated_images/Wedding_website_template_elegant_pink_b3b8566b.png';

export default function TemplateCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="max-w-xs">
        <TemplateCard 
          id="elegant-pink"
          title="Elegant Blush"
          category="Pernikahan"
          imageUrl={weddingPink}
          onPreview={(id) => console.log('Preview template:', id)}
          onUse={(id) => console.log('Use template:', id)}
        />
      </div>
    </div>
  );
}
