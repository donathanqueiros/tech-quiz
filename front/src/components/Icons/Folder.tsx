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
      className={className}
      width="79"
      height="62"
      viewBox="0 0 79 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_di_269_1557)">
        <path
          d="M42.6132 3.84576C39.6125 -0.0260517 36.6838 -0.0080645 34.5334 0.000929251L7.86454 0.149326C5.71862 0.162817 3.98658 1.9121 4.00008 4.05711L4.02257 7.94241L4.04507 12.4663L4.24751 49.5745C4.26101 51.7195 6.01104 53.4508 8.15696 53.4373L71.1356 53.091C73.2815 53.0775 75.0135 51.3282 75 49.1832L74.7931 11.441C74.7796 9.29597 73.0296 7.56467 70.8836 7.57816L46.5182 7.71307C44.3768 7.72206 43.9269 5.54108 42.6132 3.84576Z"
          fill={color || theme.colors.primary}
        />
      </g>
      <defs>
        <filter
          id="filter0_di_269_1557"
          x="0"
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
            result="effect1_dropShadow_269_1557"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_269_1557"
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
            result="effect2_innerShadow_269_1557"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default styled(Folder)``;
