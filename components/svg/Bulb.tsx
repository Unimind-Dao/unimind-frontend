import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M17.994 2.286A9 9 0 0 0 3.075 7.822a8.938 8.938 0 0 0 2.793 7.761A6.265 6.265 0 0 1 8 20.15v.161A3.694 3.694 0 0 0 11.69 24h.62A3.694 3.694 0 0 0 16 20.31v-.549a5.324 5.324 0 0 1 1.932-4 8.993 8.993 0 0 0 .062-13.477v.002ZM12.31 22h-.62A1.692 1.692 0 0 1 10 20.31L9.992 20H14v.31A1.692 1.692 0 0 1 12.31 22Zm4.3-7.74A7.668 7.668 0 0 0 14.246 18H13v-7.184A3 3 0 0 0 15 8a1 1 0 1 0-2 0 1 1 0 1 1-2 0 1 1 0 1 0-2 0 3 3 0 0 0 2 2.816V18H9.678a8.634 8.634 0 0 0-2.448-3.88A7 7 0 0 1 12.01 2a6.921 6.921 0 0 1 4.651 1.778 6.993 6.993 0 0 1-.048 10.481h-.003Z"
        fill="#11D2AC"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
