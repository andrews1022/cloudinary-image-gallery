"use client";

import { CldImage } from "next-cloudinary";
import type { CldResource } from "@/types/cloudinary";

type CloudinaryImageProps = {
  image: CldResource;
};

const CloudinaryImage = ({ image }: CloudinaryImageProps) => {
  return (
    <CldImage
      width={image.width}
      height={image.height}
      src={image.url}
      sizes="100vw"
      alt={image.filename}
    />
  );
};

export { CloudinaryImage };
