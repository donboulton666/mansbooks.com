import React from "react";
import { SVGProps } from "react";

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      stroke="currentColor"
      strokeWidth={1.5}
      xmlns="http://www.w3.org/2000/svg"
      style="fillRule:evenodd;clipRule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
      {...props}
    >
      <g transform="matrix(4.16667,0,0,4.16667,-340.721,-1717.09)">
        <path
          d="M109.066,466.688C94.016,466.688 81.773,454.444 81.773,439.395C81.773,424.346 94.016,412.102 109.066,412.102C124.115,412.102 136.358,424.346 136.358,439.395C136.358,454.444 124.115,466.688 109.066,466.688Z"
          style="fill:rgb(27,98,163);fillRule:nonzero;"
        />
      </g>
      <g transform="matrix(4.16667,0,0,4.16667,-340.721,-1717.09)">
        <path
          d="M104.786,439.266L104.786,455.342C104.786,455.57 104.971,455.754 105.198,455.754L111.072,455.754C111.3,455.754 111.484,455.57 111.484,455.342L111.484,439.266L115.743,439.266C115.957,439.266 116.136,439.102 116.153,438.889L116.563,434.045C116.583,433.805 116.394,433.598 116.152,433.598L111.484,433.598L111.484,430.161C111.484,429.357 112.137,428.703 112.942,428.703L116.225,428.703C116.452,428.703 116.637,428.519 116.637,428.291L116.637,423.448C116.637,423.22 116.452,423.035 116.225,423.035L110.679,423.035C107.424,423.035 104.786,425.674 104.786,428.929L104.786,433.598L101.849,433.598C101.621,433.598 101.437,433.783 101.437,434.01L101.437,438.854C101.437,439.081 101.621,439.266 101.849,439.266L104.786,439.266Z"
          style="fill:white;"
        />
      </g>
    </svg>
  );
};

export default InstagramIcon;
