"use server";

import cloudinary from "cloudinary";
import type { CldResource } from "@/types/cloudinary";

const addImageToAlbum = async (image: CldResource, album: string) => {
  await cloudinary.v2.api.create_folder(album);

  let parts = image.public_id.split("/");
  if (parts.length > 1) {
    parts = parts.slice(1);
  }
  const publicId = parts.join("/");

  await cloudinary.v2.uploader.rename(image.public_id, `${album}/${publicId}`);
};

export { addImageToAlbum };
