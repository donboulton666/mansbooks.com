import React from "react";
import Image from "next/legacy/image";
import BioTypist from "@components/BioTypest";
import WavingHand from "@components/WavingHand";
import angieImage from "../../public/angie/angelina-jordan-icon.jpg";

const Bio = () => {
  return (
    <>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex flex-shrink-0 items-center justify-center bg-transparent sm:mx-0 sm:h-14 sm:w-14">
          <Image
            className="h-16 w-16 rounded-full"
            width={64}
            height={64}
            loading="lazy"
            src={angieImage}
            alt="Profile picture"
          />
        </div>
        <div className="-mt-1 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <div className="text-base leading-6">
            <WavingHand />{" "}
            <span className="font-medium">
              {" "}
              Developed by Angelina Jordan and the:{" "}
            </span>{" "}
            <span className="font-medium italic">Visualizer</span>
          </div>
          <div className="ml-4 mt-1 inline-flex text-base">
            <BioTypist />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bio;
