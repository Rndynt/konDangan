import { useState } from 'react';
import AssetLibraryModal from '../AssetLibraryModal';
import { Button } from '@/components/ui/button';

export default function AssetLibraryModalExample() {
  const [open, setOpen] = useState(true);

  return (
    <div className="p-8 bg-background">
      <Button onClick={() => setOpen(true)}>Open Asset Library</Button>
      <AssetLibraryModal 
        open={open}
        onOpenChange={setOpen}
        onSelectAsset={(id) => console.log('Asset selected:', id)}
      />
    </div>
  );
}
