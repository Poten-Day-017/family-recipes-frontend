import { useCallback, useEffect, useState } from "react";

const usePreviewFile = (): [
  previewURL: string | null,
  setPreviewFileURL: (file: File | null) => void,
] => {
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const setPreviewFileURL = useCallback((file: File | null) => {
    setPreviewURL(file ? URL.createObjectURL(file) : null);
  }, []);

  useEffect(() => {
    return () => {
      if (previewURL) URL.revokeObjectURL(previewURL);
    };
  }, [previewURL]);

  return [previewURL, setPreviewFileURL];
};

export default usePreviewFile;
