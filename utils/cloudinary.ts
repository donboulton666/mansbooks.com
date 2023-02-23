import cloudinary from "cloudinary";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;
