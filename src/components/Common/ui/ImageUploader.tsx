import { ChangeEvent, useRef } from "react";
import { cn } from "../../../utils/tailwind";

interface ImageUploaderProps {
  className?: string;
  image?: string;
  alt?: string;
  callback?: (file: File) => void;
}

export const ImageUploader = ({
  className,
  image,
  alt,
  callback,
}: ImageUploaderProps) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      callback?.(e.target.files[0]);
    }
  };

  return (
    <div className={cn(className)}>
      <div className="flex flex-col justify-center items-center">
        {" "}
        <img
          className="mt-5"
          src={image}
          alt={alt}
          onClick={() => {
            imageInputRef.current && imageInputRef.current.click();
          }}
        />
        <span className="text-white text-center">{alt}</span>
      </div>

      <input
        className="hidden"
        type="file"
        ref={imageInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};
