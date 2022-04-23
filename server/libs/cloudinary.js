import cloudinary from "cloudinary";
cloudinary.config({
    cloud_name:"dfukfwxbs",
    api_key:"248873312289698",
    api_secret:"KrfiPXEAq1XiWa6AJ0Gl6zr_8oM"
})

export const uploadImage = async filePath => {
    return await cloudinary.v2.uploader.upload(filePath, {
        folder: "posts"
    })
}

export const deleteImage = async id=>{
    return await cloudinary.uploader.destroy(id);
}
