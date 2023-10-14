import { GalleryGrid } from "@/components/gallery-grid";
import { SearchForm } from "@/components/search-form";
import { UploadButton } from "@/components/upload-button";

const GalleryPage = () => {
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">Gallery</h1>

          <UploadButton />
        </div>

        <SearchForm />

        <GalleryGrid />
      </div>
    </section>
  );
};

export default GalleryPage;
