import StyledModal from "components/Modal";
import { FC } from "react";
import styled from "styled-components";
import bg from "assets/bg.png";

interface Props {
  open?: boolean;
  onCancel?: () => void;
  className?: string;
}

const ModalSelectLevel: FC<Props> = ({ className, open, onCancel }) => {
  return (
    <StyledModal open={open}>
      <div className={className}>
        {/* <Image src={folderIcon.src} /> */}

        <span className="question-icon">
          <svg
            width="81"
            height="64"
            viewBox="0 0 81 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_di_159_598)">
              <path
                d="M44.6132 3.84576C41.6125 -0.0260517 38.6838 -0.0080645 36.5334 0.000929251L9.86454 0.149326C7.71862 0.162817 5.98658 1.9121 6.00008 4.05711L6.02257 7.94241L6.04507 12.4663L6.24751 49.5745C6.26101 51.7195 8.01104 53.4508 10.157 53.4373L73.1356 53.091C75.2815 53.0775 77.0135 51.3282 77 49.1832L76.7931 11.441C76.7796 9.29597 75.0296 7.56467 72.8836 7.57816L48.5182 7.71307C46.3768 7.72206 45.9269 5.54108 44.6132 3.84576Z"
                fill="url(#paint0_linear_159_598)"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter1_di_159_598)">
              <path
                d="M42.6132 5.84576C39.6125 1.97395 36.6838 1.99194 34.5334 2.00093L7.86454 2.14933C5.71862 2.16282 3.98658 3.9121 4.00008 6.05711L4.02257 9.94241L4.04507 14.4663L4.24751 51.5745C4.26101 53.7195 6.01104 55.4508 8.15696 55.4373L71.1356 55.091C73.2815 55.0775 75.0135 53.3282 75 51.1832L74.7931 13.441C74.7796 11.296 73.0296 9.56467 70.8836 9.57816L46.5182 9.71307C44.3768 9.72206 43.9269 7.54108 42.6132 5.84576Z"
                fill="#770CF2"
              />
            </g>
            <path
              d="M36.4398 35.152L36.2958 29.212H37.9518C39.1758 29.212 40.2918 29.104 41.2998 28.888C42.3078 28.672 43.1118 28.252 43.7118 27.628C44.3118 27.004 44.6118 26.092 44.6118 24.892C44.6118 23.74 44.2638 22.84 43.5678 22.192C42.8718 21.52 41.9478 21.184 40.7958 21.184C39.5958 21.184 38.6598 21.52 37.9878 22.192C37.3158 22.84 36.9798 23.728 36.9798 24.856H32.6238C32.5998 23.416 32.9118 22.132 33.5598 21.004C34.2078 19.876 35.1438 18.988 36.3678 18.34C37.6158 17.692 39.1038 17.368 40.8318 17.368C42.4398 17.368 43.8558 17.668 45.0798 18.268C46.3278 18.868 47.2998 19.732 47.9958 20.86C48.7158 21.964 49.0758 23.32 49.0758 24.928C49.0758 26.584 48.7038 27.952 47.9598 29.032C47.2398 30.112 46.2438 30.916 44.9718 31.444C43.7238 31.972 42.2718 32.248 40.6158 32.272L40.5078 35.152H36.4398ZM38.4918 43.252C37.6518 43.252 36.9558 42.988 36.4038 42.46C35.8758 41.932 35.6118 41.296 35.6118 40.552C35.6118 39.784 35.8758 39.136 36.4038 38.608C36.9558 38.08 37.6518 37.816 38.4918 37.816C39.3318 37.816 40.0158 38.08 40.5438 38.608C41.0718 39.136 41.3358 39.784 41.3358 40.552C41.3358 41.296 41.0718 41.932 40.5438 42.46C40.0158 42.988 39.3318 43.252 38.4918 43.252Z"
              fill="#B2B2B2"
            />
            <path
              d="M35.4398 36.152L35.2958 30.212H36.9518C38.1758 30.212 39.2918 30.104 40.2998 29.888C41.3078 29.672 42.1118 29.252 42.7118 28.628C43.3118 28.004 43.6118 27.092 43.6118 25.892C43.6118 24.74 43.2638 23.84 42.5678 23.192C41.8718 22.52 40.9478 22.184 39.7958 22.184C38.5958 22.184 37.6598 22.52 36.9878 23.192C36.3158 23.84 35.9798 24.728 35.9798 25.856H31.6238C31.5998 24.416 31.9118 23.132 32.5598 22.004C33.2078 20.876 34.1438 19.988 35.3678 19.34C36.6158 18.692 38.1038 18.368 39.8318 18.368C41.4398 18.368 42.8558 18.668 44.0798 19.268C45.3278 19.868 46.2998 20.732 46.9958 21.86C47.7158 22.964 48.0758 24.32 48.0758 25.928C48.0758 27.584 47.7038 28.952 46.9598 30.032C46.2398 31.112 45.2438 31.916 43.9718 32.444C42.7238 32.972 41.2718 33.248 39.6158 33.272L39.5078 36.152H35.4398ZM37.4918 44.252C36.6518 44.252 35.9558 43.988 35.4038 43.46C34.8758 42.932 34.6118 42.296 34.6118 41.552C34.6118 40.784 34.8758 40.136 35.4038 39.608C35.9558 39.08 36.6518 38.816 37.4918 38.816C38.3318 38.816 39.0158 39.08 39.5438 39.608C40.0718 40.136 40.3358 40.784 40.3358 41.552C40.3358 42.296 40.0718 42.932 39.5438 43.46C39.0158 43.988 38.3318 44.252 37.4918 44.252Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_di_159_598"
                x="2"
                y="0"
                width="79"
                height="61.4373"
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
                  result="effect1_dropShadow_159_598"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_159_598"
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
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_159_598"
                />
              </filter>
              <filter
                id="filter1_di_159_598"
                x="0"
                y="2"
                width="79"
                height="61.4373"
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
                  result="effect1_dropShadow_159_598"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_159_598"
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
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_159_598"
                />
              </filter>
              <linearGradient
                id="paint0_linear_159_598"
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
        </span>

        <h1>Selecione o nível</h1>

        <div className="levels">
          <button onClick={onCancel}>Iniciante</button>
          <button onClick={onCancel}>Intermediário</button>
          <button onClick={onCancel}>Avançado</button>
          <button onClick={onCancel}>Todos</button>
        </div>

        <button className="close-select-level-button" onClick={onCancel}>
          x
        </button>
      </div>
    </StyledModal>
  );
};

const StyledModalSelectLevel = styled(ModalSelectLevel)`
  background-image: url(${bg.src});
  background-size: 250%;
  background-repeat: no-repeat;
  background-position-x: 60%;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  border-radius: 8px;
  border-top: 8px solid ${({ theme }) => theme.colors.primary};
  width: 333px;
  padding-bottom: 40px;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    margin-top: 48px;
    margin-bottom: 24px;
  }
  .levels {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    button {
      width: 200px;
      height: 49px;
      background: rgba(53, 11, 102, 0.9);
      border-radius: 50px;
      cursor: pointer;

      font-weight: 400;
      font-size: 18px;
      text-align: center;
      border: none;

      &:hover {
        background: rgba(53, 11, 102, 0.8);
      }
    }
  }

  .question-icon {
    position: absolute;
    top: -50px;
    margin: 16px;
    cursor: pointer;
  }

  .close-select-level-button {
    position: absolute;
    top: 24px;
    right: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    color: #5d5656;
    border: none;
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
    width: 24px;
    height: 24px;
    border-radius: 50px;
  }
`;

export default StyledModalSelectLevel;
