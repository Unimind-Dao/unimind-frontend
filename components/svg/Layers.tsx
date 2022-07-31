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
      <path d="M22.485 10.975 12 17.267 1.515 10.975A1 1 0 1 0 .486 12.69l11 6.6a1 1 0 0 0 1.03 0l11-6.6a1 1 0 0 0-1.029-1.715h-.002Z" />
      <path d="M22.485 15.543 12 21.833l-10.485-6.29a.999.999 0 1 0-1.029 1.715l11 6.6a1 1 0 0 0 1.03 0l11-6.6a1 1 0 0 0-1.029-1.715h-.002ZM12 14.773c-.54 0-1.069-.147-1.531-.425L.485 8.358a1 1 0 0 1 0-1.715l9.984-5.99a2.973 2.973 0 0 1 3.062 0l9.984 5.99a1 1 0 0 1 0 1.714l-9.984 5.991a2.976 2.976 0 0 1-1.531.425ZM2.944 7.5l8.556 5.133a.974.974 0 0 0 1 0L21.056 7.5 12.5 2.367a.974.974 0 0 0-1 0L2.944 7.5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
