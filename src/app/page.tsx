"use client";

import { CldUploadButton } from "next-cloudinary";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>

      <CldUploadButton uploadPreset="qjumxp87u3" />
    </div>
  );
};

export default HomePage;
