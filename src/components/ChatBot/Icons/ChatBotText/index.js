import * as React from "react";

const ChatBotText = (props) => (
  <svg
    width={265}
    height={64}
    viewBox="0 0 265 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_55_16)">
      <path
        d="M4 27.8201C4 12.4555 16.4555 0 31.8201 0H228.5C246.449 0 261 14.5508 261 32.5V55.6403H31.8201C16.4555 55.6403 4 43.1848 4 27.8201Z"
        fill="#46B8C8"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_55_16"
        x={0}
        y={0}
        width={265}
        height={63.6403}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.114965 0 0 0 0 0.295496 0 0 0 0 0.320833 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_55_16"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_55_16"
          result="shape"
        />
      </filter>
    </defs>
    <text style={{fontFamily: "Roboto, sans-serif", fontSize: "14px"}}>Several lines:
      <tspan x="25" y="22" fill="white">Hi! I am Patrycja.</tspan>
      <tspan x="25" y="40" fill="white">Would you like to hire me? :)</tspan>
    </text>
  </svg>
);
export default ChatBotText;
