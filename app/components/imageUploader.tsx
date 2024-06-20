'use client'
import { UploadButton } from "@/app/utils/uploadthing";
import { useCallback, useState } from "react";
import {setImage} from "@/app/components/functions/setProfileImage"
import { useSession } from "next-auth/react";
import { Uploader, useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { useUploadThing } from "@/app/utils/uploadthing";
import { Button } from "@/components/ui/button";




const ImageUpload = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const session = useSession()
    
    const email = session.data?.user?.email as string
    const [files, setFiles] = useState<File[]>([]);
    const onDrop = useCallback((acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    }, []);

    
    const { startUpload, permittedFileInfo } = useUploadThing(
        "imageUploader",
        {
          onClientUploadComplete: () => {
            alert("uploaded successfully!");
          },
          onUploadError: () => {
            alert("error occurred while uploading");
          },
          onUploadBegin: () => {
            alert("upload has begun");
          },
        },
      );

      const fileTypes = permittedFileInfo?.config
      ? Object.keys(permittedFileInfo?.config)
      : [];
   
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
    });
 
      
    return (
        <div className="mt-6">
            {/* <UploadButton endpoint="imageUploader"
                appearance={{
                    button:{
                        background: 'green',
                        height:'25px',
                        width:'5vw',
                        
                    }
                }}
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    setImageUrl(res[0].url);
                    setImage(email,res[0].url);
                    
                    
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            /> */}
           
           <div className="cursor-pointer" {...getRootProps()}>
      <input {...getInputProps()} />
      <div >
        {files.length > 0 && (
          <button onClick={() => startUpload(files)}>
            Upload {files.length} files
          </button>
        )}
      </div>
    <Button variant={'outline'}> Upload image </Button>
    </div>

            <h1>{imageUrl}</h1>
        </div>
    )
}

export default ImageUpload;