import { Button } from "../ui/button";
import { RiFolderImageLine } from "@remixicon/react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import MediaSlider from "../MediaSlider";

export default function ProjectGallery({ gallery }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" size="icon" className="shrink-0">
          <RiFolderImageLine />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full! xs:w-96">
        <MediaSlider media={gallery} />
      </PopoverContent>
    </Popover>
  );
}
