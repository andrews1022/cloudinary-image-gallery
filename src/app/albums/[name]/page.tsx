import cloudinary from "cloudinary";

import { AlbumGrid } from "@/components/album-grid";
import { ForceRefresh } from "@/components/force-refresh";

import type { CldSearchResults } from "@/types/cloudinary";

const getImagesFromSingleAlbum = async (albumName: string) => {
  const results: Promise<CldSearchResults> = await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute();

  return results;
};

type SingleAlbumPageProps = {
  params: {
    name: string;
  };
};

const SingleAlbumPage = async ({ params }: SingleAlbumPageProps) => {
  const images = await getImagesFromSingleAlbum(params.name);

  return (
    <section>
      <ForceRefresh />

      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Album {params.name}</h1>
        </div>

        <AlbumGrid images={images} />
      </div>
    </section>
  );
};

export default SingleAlbumPage;
