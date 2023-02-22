import { Image } from "react-datocms";

export default function Avatar({ name, picture }) {
  return (
    <div>
      <div className="mr-4 h-12 w-12">
        <Image
          alt={name}
          data={picture.responsiveImage}
          className="rounded-full bio-avatar mb-4 ring ring-purple-500 ring-offset-4"
        />
      </div>
    </div>
  );
}
