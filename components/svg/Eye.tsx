import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#11D2AC">
      <path d="M23.27 9.419C21.72 6.893 18.193 2.655 12 2.655c-6.192 0-9.72 4.238-11.271 6.764a4.908 4.908 0 0 0 0 5.162c1.55 2.526 5.079 6.764 11.27 6.764 6.193 0 9.72-4.238 11.272-6.764a4.908 4.908 0 0 0 0-5.162Zm-1.704 4.115c-1.332 2.166-4.347 5.81-9.566 5.81-5.22 0-8.234-3.644-9.566-5.81a2.918 2.918 0 0 1 0-3.068C3.766 8.3 6.78 4.655 12 4.655s8.234 3.64 9.566 5.81a2.919 2.919 0 0 1 0 3.069Z" />
      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
