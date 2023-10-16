import cloudinary from "cloudinary";

import { ForceRefresh } from "@/components/force-refresh";
import { GalleryGrid } from "@/components/gallery-grid";
import { SearchForm } from "@/components/search-form";

import type { CldSearchResults } from "@/types/cloudinary";

const getAllImages = async () => {
  const results: Promise<CldSearchResults> = await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(5)
    .execute();

  return results;
};

const FavouritesPage = async () => {
  const images = await getAllImages();

  return (
    <section>
      <ForceRefresh />

      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-4xl">Favourites</h1>

        <SearchForm />

        <GalleryGrid images={images} />
      </div>
    </section>
  );
};

export default FavouritesPage;
