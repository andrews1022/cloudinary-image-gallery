"use client";

import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";

import type { CldUploadedImage } from "@/types/cloudinary";

const HomePage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <div>
      <h1>HomePage</h1>

      <CldUploadButton
        onUpload={(result) => {
          const res = result as CldUploadedImage;

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
