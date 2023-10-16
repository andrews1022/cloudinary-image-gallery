"use client";

import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "@/components/cloudinary-image";

import type { CldSearchResults } from "@/types/cloudinary";

type AlbumGridProps = {
  images: CldSearchResults;
};

const AlbumGrid = ({ images }: AlbumGridProps) => {
  return (
    <ImageGrid
      images={images.resources}
      getImage={(imageData) => {
        return <CloudinaryImage key={imageData.public_id} image={imageData} />;
      }}
    />
  );
};

export { AlbumGrid };
