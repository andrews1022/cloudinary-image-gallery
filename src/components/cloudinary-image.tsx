"use client";

import { Heart } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useState, useTransition } from "react";

import { setAsFavouriteAction } from "@/actions/favourite";

import type { CldResource } from "@/types/cloudinary";

type CloudinaryImageProps = {
  image: CldResource;
};

const CloudinaryImage = ({ image }: CloudinaryImageProps) => {
  const [isFavourited, setIsFavourited] = useState(image.tags.includes("favourite"));
  const [transition, startTransition] = useTransition();

  return (
    <div className="relative">
      <CldImage
        width={image.width}
        height={image.height}
        src={image.url}
        sizes="100vw"
        alt={image.filename}
      />

      <button className="absolute top-2 right-2" type="button">
        {isFavourited ? (
          <Heart
            className="cursor-pointer stroke-red-500 fill-red-500 hover:fill-transparent transition-colors"
            onClick={() => {
              // remove favourite tag from this cloudinary image
              setIsFavourited((previousState) => !previousState);

              startTransition(() => {
                setAsFavouriteAction(false, image.public_id);
              });
            }}
          />
        ) : (
          <Heart
            className="cursor-pointer stroke-white hover:stroke-red-500 transition-colors"
            onClick={() => {
              // add favourite tag to this cloudinary image
              setIsFavourited((previousState) => !previousState);

              startTransition(() => {
                setAsFavouriteAction(true, image.public_id);
              });
            }}
          />
        )}
      </button>
    </div>
  );
};

export { CloudinaryImage };
