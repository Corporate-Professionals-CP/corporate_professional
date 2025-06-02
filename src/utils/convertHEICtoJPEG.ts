import { errorMessage } from "./toastalert";

// Dynamic import to avoid SSR issues
const getHeic2any = async () => {
  if (typeof window === "undefined") return null;
  const heic2any = await import("heic2any");
  return heic2any.default;
};

export async function convertImage(selectedFile: File) {
  // Check if we're in browser environment
  if (typeof window === "undefined") {
    console.warn("convertImage called on server side");
    return undefined;
  }

  try {
    const heic2any = await getHeic2any();
    if (!heic2any) return undefined;

    const convertedBlob = await heic2any({
      blob: selectedFile,
      toType: "image/jpeg",
    });

    const jpegFile = new File(
      [convertedBlob as BlobPart],
      selectedFile.name.replace(/\.heic$/, ".jpg"),
      {
        type: "image/jpeg",
      }
    );
    return jpegFile;
  } catch (err) {
    errorMessage(err, "Failed to convert HEIC to JPEG.");
    return undefined;
  }
}
