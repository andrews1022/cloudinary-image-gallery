"use client";

import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";

type UploadedImage = {
  event: string;
  info: {
    id: string;
    batchId: string;
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: string;
    tags: string[];
    bytes: number;
    type: string;
    etag: string;
    placeholder: boolean;
    url: string;
    secure_url: string;
    folder: string;
    access_mode: string;
    original_filename: string;
    path: string;
    thumbnail_url: string;
  };
};

const HomePage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <div>
      <h1>HomePage</h1>

      <CldUploadButton
        onUpload={(result) => {
          const res = result as UploadedImage;

          setPublicId(res.info.public_id);
        }}
        className="border-sky-600 border-solid border-2"
        uploadPreset="qjumxp87u3"
      />

      {publicId ? (
        <CldImage
          width="960"
          height="600"
          src={publicId}
          sizes="100vw"
          alt="Description of my image"
        />
      ) : null}
    </div>
  );
};

export default HomePage;
