import { Menu, Pencil } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { AddToAlbumDialog } from "@/components/add-to-album-dialog";

import { Button } from "@/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/shadcn/ui/dropdown-menu";

import type { CldResource } from "@/types/cloudinary";

type ImageMenuProps = {
  image: CldResource;
};

const ImageMenu = ({ image }: ImageMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-40">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Button className="cursor-pointer flex justify-start pl-4" asChild variant="ghost">
              <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
                <Pencil className="mr-2 w-4 h-4" />
                Edit
              </Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export { ImageMenu };
