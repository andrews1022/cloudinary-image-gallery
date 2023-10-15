import cloudinary from "cloudinary";

import { GalleryGrid } from "@/components/gallery-grid";
import { SearchForm } from "@/components/search-form";
import { UploadButton } from "@/components/upload-button";

import type { CldSearchResults } from "@/types/cloudinary";
import { CloudinaryImage } from "@/components/cloudinary-image";

const getImages = async () => {
  const results: Promise<CldSearchResults> = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(5)
    .execute();

  return results;
};

const GalleryPage = async () => {
  const images = await getImages();

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">Gallery</h1>

          <UploadButton />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {images.resources.map((image) => (
            <CloudinaryImage key={image.public_id} image={image} />
          ))}
        </div>

        <SearchForm />

        <GalleryGrid />
      </div>
    </section>
  );
};

export default GalleryPage;
