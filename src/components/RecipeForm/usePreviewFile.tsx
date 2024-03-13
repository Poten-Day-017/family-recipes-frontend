import { useEffect, useState } from "react";

const usePreviewFile = (): [
  previewURL: string | null,
  setPreviewFileURL: (file: File | null) => void,
] => {
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewURL) URL.revokeObjectURL(previewURL);
    };
  });

  const setPreviewFileURL = (file: File | null) => {
    setPreviewURL(file ? URL.createObjectURL(file) : null);
  };

  return [previewURL, setPreviewFileURL];
};

export default usePreviewFile;
