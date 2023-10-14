"use client";

import { Upload } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

import { Button } from "@/components/shadcn/ui/button";

const UploadButton = () => {
  const router = useRouter();

  const handleUpload = () => {
    setTimeout(() => {
      router.refresh();
    }, 2000);
  };

  return (
    <Button asChild>
      <CldUploadButton
        className="flex items-center gap-2"
        onUpload={handleUpload}
        uploadPreset="qjumxp87u3"
      >
        <Upload />
        Upload
      </CldUploadButton>
    </Button>
  );
};

export { UploadButton };
