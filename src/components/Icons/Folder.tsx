import { FC } from "react";
import styled, { useTheme } from "styled-components";

interface Props {
  color?: string;
  className?: string;
}

const Folder: FC<Props> = ({ color, className }) => {
  const theme = useTheme();

  return (
    <svg
      width="81"
      height="64"
      viewBox="0 0 81 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_di_269_2)">
        <path
          d="M44.6132 3.84576C41.6125 -0.0260517 38.6838 -0.0080645 36.5334 0.000929251L9.86454 0.149326C7.71862 0.162817 5.98658 1.9121 6.00008 4.05711L6.02257 7.94241L6.04507 12.4663L6.24751 49.5745C6.26101 51.7195 8.01104 53.4508 10.157 53.4373L73.1356 53.091C75.2815 53.0775 77.0135 51.3282 77 49.1832L76.7931 11.441C76.7796 9.29597 75.0296 7.56467 72.8836 7.57816L48.5182 7.71307C46.3768 7.72206 45.9269 5.54108 44.6132 3.84576Z"
          fill="url(#paint0_linear_269_2)"
          shape-rendering="crispEdges"
        />
      </g>
      <g filter="url(#filter1_di_269_2)">
        <path
          d="M42.6132 5.84576C39.6125 1.97395 36.6838 1.99194 34.5334 2.00093L7.86454 2.14933C5.71862 2.16282 3.98658 3.9121 4.00008 6.05711L4.02257 9.94241L4.04507 14.4663L4.24751 51.5745C4.26101 53.7195 6.01104 55.4508 8.15696 55.4373L71.1356 55.091C73.2815 55.0775 75.0135 53.3282 75 51.1832L74.7931 13.441C74.7796 11.296 73.0296 9.56467 70.8836 9.57816L46.5182 9.71307C44.3768 9.72206 43.9269 7.54108 42.6132 5.84576Z"
          fill={color || theme.colors.primary}
        />
      </g>
      <defs>
        <filter
          id="filter0_di_269_2"
          x="2"
          y="0"
          width="79"
          height="61.4374"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_269_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_269_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_269_2"
          />
        </filter>
        <filter
          id="filter1_di_269_2"
          x="0"
          y="2"
          width="79"
          height="61.4374"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_269_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_269_2"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_269_2"
          />
        </filter>
        <linearGradient
          id="paint0_linear_269_2"
          x1="41.5001"
          y1="0"
          x2="60"
          y2="60.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#4D4C4F" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default styled(Folder)``;
