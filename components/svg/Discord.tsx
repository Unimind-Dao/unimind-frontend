import React from "react";

function Discord() {
  return (
    <svg width={32} height={30} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#a)">
        <path
          d="M24.33 4.228a19.547 19.547 0 0 0-4.951-1.556c-.213.385-.463.904-.634 1.317a18.18 18.18 0 0 0-5.488 0 14.082 14.082 0 0 0-.642-1.317c-1.738.3-3.401.83-4.955 1.56-3.133 4.735-3.983 9.352-3.558 13.905a19.798 19.798 0 0 0 6.073 3.111c.489-.673.925-1.388 1.3-2.142a12.79 12.79 0 0 1-2.048-.997c.172-.127.34-.26.502-.397 3.95 1.847 8.24 1.847 12.142 0 .164.137.332.27.502.398-.65.39-1.337.726-2.052.998.376.752.81 1.47 1.3 2.142a19.755 19.755 0 0 0 6.077-3.113c.498-5.277-.851-9.853-3.568-13.91ZM12.013 15.337c-1.185 0-2.157-1.107-2.157-2.454 0-1.348.951-2.457 2.157-2.457s2.179 1.107 2.158 2.457c.002 1.347-.952 2.454-2.158 2.454Zm7.974 0c-1.186 0-2.158-1.107-2.158-2.454 0-1.348.951-2.457 2.158-2.457 1.206 0 2.178 1.107 2.157 2.457 0 1.347-.951 2.454-2.157 2.454Z"
          fill="#fff"
        />
      </g>
      <defs>
        <filter
          id="a"
          x={0}
          y={0}
          width={32}
          height={32}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_229_239"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_229_239"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Discord;
