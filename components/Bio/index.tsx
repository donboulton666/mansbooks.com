import React from "react";
import Image from "next/legacy/image";
import BioTypist from "@components/BioTypest";
import WavingHand from "@components/WavingHand";
import angieImage from "../../public/angie/angelina-jordan-icon.jpg";

const Bio = () => {
  return (
    <>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
          <Image
            className="bio-avatar rounded-full h-12 w-12 ring ring-blue-400 ring-offset-4"
            loading="lazy"
            src={angieImage}
            width={48}
            height={48}
            quality={95}
            alt="Profile picture"
          />
        </div>
        <div className="-mt-1 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <div className="text-base leading-6">
            <WavingHand />{" "}
            <span className="font-medium"> Developed by Angelina Jordan and the: </span>{" "}
            <span className="font-medium italic">Visualizer</span>
          </div>
          <div className="ml-4 mt-1 text-base">
            <BioTypist />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bio;
