import {v2 as cloudinary} from 'cloudinary';
import { response } from 'express';
import fs from 'fs';

    cloudinary.config({ 
  cloud_name:  process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadoncloudinary = async (localFilepath)=>{
try {
    if(!localFilepath) return null;
    // upload the file to cloudinary
   const res = await cloudinary.uploader.upload
   (localFilepath , {
    resource_type: "auto" 
})
        // file has beed uploaded successfully
        console.log("file is successfully uploaded on cloudinary",
        response.url);

    } catch (error) {
         fs.unlinkSync(localFilepath) // remove the locally saved file as the upload operation failed
        console.log("Error while uploading file on cloudinary",error);
        return null;
    }


}

 export {uploadoncloudinary}