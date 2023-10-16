"use client";

import { CloudinaryImage } from "@/components/cloudinary-image";
import { ImageGrid } from "@/components/image-grid";

import type { CldSearchResults } from "@/types/cloudinary";

type GalleryGridProps = {
  images: CldSearchResults;
};

const GalleryGrid = ({ images }: GalleryGridProps) => {
  return (
    <ImageGrid
      images={images.resources}
      getImage={(image) => {
        return <CloudinaryImage key={image.public_id} image={image} />;
      }}
    />
  );
};

export { GalleryGrid };
