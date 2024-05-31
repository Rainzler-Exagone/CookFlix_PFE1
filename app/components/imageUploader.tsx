'use client'
import { UploadButton } from "@/app/utils/uploadthing";
import { useState } from "react";

const ImageUpload = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
    return (
        <div>
            <UploadButton endpoint="imageUploader"
                appearance={{
                    button:{
                        background: 'green',
                        
                    }
                }}
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    setImageUrl(res[0].url)
                    
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />

            <h1>{imageUrl}</h1>
        </div>
    )
}

export default ImageUpload;