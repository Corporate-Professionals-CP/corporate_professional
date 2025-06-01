import heic2any from "heic2any";
import { errorMessage } from "./toastalert";

export async function convertImage(selectedFile: File) {
  try {
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
    // throw error
  }
}
