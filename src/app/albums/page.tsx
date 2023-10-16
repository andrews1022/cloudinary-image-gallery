import cloudinary from "cloudinary";

import { AlbumCard } from "@/components/album-card";

import type { CldFolderResults } from "@/types/cloudinary";

const getFolders = async () => {
  const results: Promise<CldFolderResults> = await cloudinary.v2.api.root_folders();

  return results;
};

export default async function AlbumsPage() {
  const { folders } = await getFolders();

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Albums</h1>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {folders.map((folder) => (
            <AlbumCard key={folder.path} folder={folder} />
          ))}
        </div>
      </div>
    </section>
  );
}
