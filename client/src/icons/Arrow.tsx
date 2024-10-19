import React from "react";

type ArrowProps = {
  isDark: boolean;
  w: number;
  h: number;
  style?: string;
};

const Arrow: React.FC<ArrowProps> = ({ isDark, w, h, style }) => (
  <div className={`${style}`}>
    <svg
      fill={isDark ? "#000" : "#fff"}
      height={`${h}`}
      width={`${w}`}
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 242.133 242.133'
      transform='rotate(-90)'
    >
      <g id='SVGRepo_bgCarrier' stroke-width='0' />

      <g
        id='SVGRepo_tracerCarrier'
        stroke-linecap='round'
        stroke-linejoin='round'
      />

      <g id='SVGRepo_iconCarrier'>
        {" "}
        <path
          id='XMLID_24_'
          d='M190.919,212.133h-69.853c-8.284,0-15,6.716-15,15s6.716,15,15,15h106.065c8.284,0,15-6.716,15-15V121.066 c0-8.284-6.716-15-15-15s-15,6.716-15,15v69.854L25.607,4.394c-5.858-5.858-15.356-5.858-21.213,0 c-5.858,5.858-5.858,15.356,0,21.213L190.919,212.133z'
        />{" "}
      </g>
    </svg>
  </div>
);

export default Arrow;