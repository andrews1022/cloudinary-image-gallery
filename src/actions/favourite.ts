"use server";

import cloudinary from "cloudinary";

const setAsFavouriteAction = async (isFavourite: boolean, publicId: string) => {
  if (isFavourite) {
    await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
  }
};

export { setAsFavouriteAction };
