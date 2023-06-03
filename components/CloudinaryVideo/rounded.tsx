import { Cloudinary } from "@cloudinary/url-gen";
import { Transformation } from "@cloudinary/url-gen";
import { max } from "@cloudinary/url-gen/actions/roundCorners";

function Rounded() {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "mansbooks",
    },
    url: {
      analytics: false,
    },
  });

  // Use the video with public ID, 'ski_jump'.
  const myVideo = cld.video(
    "videos/Angelina_Jordan_-_Love_Dont_Let_Me_Go_-Visualizer-"
  );

  // Apply the transformation.
  myVideo
    .roundCorners(max());

  return myVideo;
}

export default Rounded