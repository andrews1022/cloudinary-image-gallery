"use client";

import { Heart } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useState, useTransition } from "react";

import { setAsFavouriteAction } from "@/actions/favourite";

import type { CldResource } from "@/types/cloudinary";
import { ImageMenu } from "@/components/image-menu";

type CloudinaryImageProps = {
  image: CldResource;
};

const CloudinaryImage = ({ image }: CloudinaryImageProps) => {
  const [isFavourited, setIsFavourited] = useState(image.tags.includes("favourite"));

  const [transition, startTransition] = useTransition();

  const handleAddOrRemoveFavourite = (flag: boolean) => {
    setIsFavourited((previousState) => !previousState);

    startTransition(() => {
      setAsFavouriteAction(flag, image.public_id);
    });
  };

  return (
    <div className="relative">
      <CldImage
        width={image.width}
        height={image.height}
        src={image.url}
        sizes="100vw"
        alt={image.filename}
        className="w-full h-full object-cover rounded-md"
      />

      <button className="absolute top-2 left-2" type="button">
        {isFavourited ? (
          <Heart
            className="cursor-pointer stroke-red-500 fill-red-500 hover:fill-transparent transition-colors"
            onClick={() => handleAddOrRemoveFavourite(false)}
          />
        ) : (
          <Heart
            className="cursor-pointer stroke-white hover:stroke-red-500 transition-colors"
            onClick={() => handleAddOrRemoveFavourite(true)}
          />
        )}
      </button>

      <ImageMenu image={image} />
    </div>
  );
};

export { CloudinaryImage };
