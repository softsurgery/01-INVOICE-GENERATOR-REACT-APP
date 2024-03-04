import { cn } from "../../../utils/tailwind";
import { ImageUploader } from "../../Common/ui/ImageUploader";
import { Label } from "../../Common/ui/Label";

interface CorporateDataProps{
    className?: string;
}

export const CorporateData = ({className} : CorporateDataProps) => {
  return (
    <div className={cn(className)}>
      <ImageUploader
        className="w-1/3 mx-auto my-5"
        image="./src/assets/picture.png"
        alt="Add Your Logo"
      />
      <div>
        <Label className="text-white">Who is this invoice from ?</Label>
        <input
          type="text"
          name="name"
          className="sm:text-sm rounded-lg block w-full p-2.5"
          placeholder="Who is this invoice from ?"
        />
        <div className="grid grid-flow-col gap-2 columns-2 mt-2">
          <div>
            <Label className="text-white">Bills to ?</Label>
            <input
              type="text"
              name="name"
              className="sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="Bills to ?"
            />
          </div>
          <div>
            <Label className="text-white">Ships to ?</Label>
            <input
              type="text"
              name="name"
              className="sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="Ships to ?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
