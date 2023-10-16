"use client";

import type { ReactNode } from "react";
import type { CldResource } from "@/types/cloudinary";

const MAX_COLUMNS = 4;

type ImageGridProps = {
  getImage: (imageData: CldResource) => ReactNode;
  images: CldResource[];
};

const ImageGrid = ({ images, getImage }: ImageGridProps) => {
  const getColumns = (colIndex: number) => {
    return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map((column, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          {column.map(getImage)}
        </div>
      ))}
    </div>
  );
};

export { ImageGrid };
