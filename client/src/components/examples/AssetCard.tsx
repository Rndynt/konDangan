import AssetCard from '../AssetCard';
import floralOrnament from '@assets/generated_images/Gold_floral_ornament_asset_7cc8943d.png';

export default function AssetCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="w-32">
        <AssetCard 
          id="floral-1"
          imageUrl={floralOrnament}
          name="Gold Floral Ornament"
          onSelect={(id) => console.log('Asset selected:', id)}
        />
      </div>
    </div>
  );
}
