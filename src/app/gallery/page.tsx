import cloudinary from "cloudinary";

import { GalleryGrid } from "@/components/gallery-grid";
import { SearchForm } from "@/components/search-form";
import { UploadButton } from "@/components/upload-button";

import type { CldSearchResults } from "@/types/cloudinary";

const getFavouritedImages = async () => {
  const results: Promise<CldSearchResults> = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(10)
    .execute();

  return results;
};

const GalleryPage = async () => {
  const images = await getFavouritedImages();

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">Gallery</h1>

          <UploadButton />
        </div>

        <SearchForm />

        <GalleryGrid images={images} />
      </div>
    </section>
  );
};

export default GalleryPage;
