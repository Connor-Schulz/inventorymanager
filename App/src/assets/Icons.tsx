import styled from "styled-components";
import Styles from "../Styles";

type IconProps = {
  color?: `#${string}`;
  width?: `${string}px`;
  height?: `${string}px`;
  rotate?: number;
};

const Svg = styled.svg`
  transition: transform 0.25s ease;
`;

export const Chevron = ({
  color = Styles.white1,
  width = "25px",
  height = "25px",
  rotate = 0,
}: IconProps) => (
  <Svg
    fill={color}
    width={width}
    height={height}
    transform={`rotate(${rotate})`}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m10.18 8.05-5.66 5.56.87.89 5.71-5.59a1.18 1.18 0 0 0 .39-.86 1.13 1.13 0 0 0-.39-.85L5.4 1.5l-.89.88z" />
  </Svg>
);

export const Hamburger = ({
  color = Styles.white1,
  width = "35px",
  height = "35px",
  rotate = 0,
}: IconProps) => (
  <Svg
    fill={color}
    width={width}
    height={height}
    transform={`rotate(${rotate})`}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.5 7.42h15v1.25H.5zm0 3.6h15v1.25H.5zm0-7.29h15v1.25H.5z" />
  </Svg>
);

export const Settings = ({
  color = Styles.white1,
  width = "35px",
  height = "35px",
  rotate = 0,
}: IconProps) => (
  <Svg
    fill={color}
    width={width}
    height={height}
    transform={`rotate(${rotate})`}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m11.26 12.63 1.83 1.09a7.34 7.34 0 0 0 1-.94 7.48 7.48 0 0 0 1.56-2.86l-1.74-1A5.29 5.29 0 0 0 14 8a5.29 5.29 0 0 0-.08-.9l1.74-1a7.45 7.45 0 0 0-1.33-2.58 7.54 7.54 0 0 0-1.24-1.22l-1.83 1.04a6 6 0 0 0-1.11-.53v-2A8.55 8.55 0 0 0 7.94.53a8.39 8.39 0 0 0-2.26.3v2a7.23 7.23 0 0 0-1.12.54L2.78 2.28A7.46 7.46 0 0 0 .2 6.06l1.72 1a5.29 5.29 0 0 0-.08.9 5.29 5.29 0 0 0 .08.9l-1.73 1a8 8 0 0 0 .43 1.15c.05.1.1.21.16.31v.1l.11.19.12.19v.06a7.69 7.69 0 0 0 1.64 1.78l1.81-1.08a7.23 7.23 0 0 0 1.12.54v2a8.39 8.39 0 0 0 2.26.31 8.56 8.56 0 0 0 2.22-.3v-2a6 6 0 0 0 1.2-.48zm-2.39 1.52a7.57 7.57 0 0 1-.95.06 7.73 7.73 0 0 1-1-.06v-1.69a4.92 4.92 0 0 1-2.53-1.27l-1.54.92a6.22 6.22 0 0 1-1.08-1.61l1.56-.93a4.27 4.27 0 0 1 0-3.17l-1.56-.92a6.11 6.11 0 0 1 1.12-1.62l1.56.93A5 5 0 0 1 7 3.53V1.82a7.73 7.73 0 0 1 1-.06 7.57 7.57 0 0 1 .95.06v1.72a4.9 4.9 0 0 1 2.4 1.26l1.59-.94a6.31 6.31 0 0 1 1.11 1.62l-1.6.94a4.35 4.35 0 0 1 .3 1.58 4.44 4.44 0 0 1-.29 1.55l1.56.93a6.43 6.43 0 0 1-1.11 1.61l-1.58-.93a5 5 0 0 1-2.49 1.28z" />
    <path d="M7.92 5.49A2.59 2.59 0 0 0 5.25 8a2.59 2.59 0 0 0 2.67 2.51A2.6 2.6 0 0 0 10.6 8a2.6 2.6 0 0 0-2.68-2.51zM8 9.2A1.35 1.35 0 0 1 6.55 8 1.35 1.35 0 0 1 8 6.7 1.35 1.35 0 0 1 9.39 8 1.35 1.35 0 0 1 8 9.2z" />
  </Svg>
);

export const Logout = ({
  color = Styles.white1,
  width = "35px",
  height = "35px",
  rotate = 0,
}: IconProps) => (
  <Svg
    fill={color}
    width={width}
    height={height}
    transform={`rotate(${rotate})`}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.3 3.75h5.88V2.5H1.3A1.25 1.25 0 0 0 .05 3.75v8.5A1.25 1.25 0 0 0 1.3 13.5h5.88v-1.25H1.3z" />
    <path d="m15.4 7-4-2.74-.71 1 3.08 2.1H4.71v1.26h9.07l-3.08 2.11.71 1L15.4 9a1.24 1.24 0 0 0 0-2z" />
  </Svg>
);

export const Move = ({
  color = Styles.white1,
  width = "25px",
  height = "25px",
  rotate = 0,
}: IconProps) => (
  <Svg
    fill={color}
    width={width}
    height={height}
    transform={`rotate(${rotate})`}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.25 6.12V4.87h-7l3-2.05-.71-1L.59 4.45A1.29 1.29 0 0 0 0 5.5a1.29 1.29 0 0 0 .59 1l3.93 2.72.71-1-3-2.06zm6.16 3.33-3.93-2.67-.71 1 3 2.06h-7v1.25h7.03l-3 2 .71 1 3.93-2.67a1.23 1.23 0 0 0 0-2.1z" />
  </Svg>
);

export const BoxClosed = ({
  color = Styles.white1,
  width = "25px",
  height = "25px",
  rotate = 0,
}: IconProps) => (
  <Svg
    fill={color}
    width={width}
    height={height}
    transform={`rotate(${rotate})`}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.12 4 8.62.85a1.28 1.28 0 0 0-1.24 0L1.88 4a1.25 1.25 0 0 0-.63 1.09V11a1.25 1.25 0 0 0 .63 1l5.5 3.11a1.28 1.28 0 0 0 1.24 0l5.5-3.11a1.25 1.25 0 0 0 .63-1V5.05A1.25 1.25 0 0 0 14.12 4zm-6.74 9.71-2.13-1.2v-5.3l2.13 1.16zM8 7.29 5.92 6.15l4.81-2.67 2.09 1.18zm0-5.35 1.46.82-4.84 2.69-1.44-.79zM2.5 5.71l1.5.82v5.27L2.5 11zm6.12 8V8.37l4.88-2.66V11z" />
  </Svg>
);

export const Search = ({
  color = Styles.white1,
  width = "25px",
  height = "25px",
  rotate = 0,
}: IconProps) => (
  <Svg
    fill={color}
    width={width}
    height={height}
    transform={`rotate(${rotate})`}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m14.91 13.09-3.68-3.21a4.86 4.86 0 0 0 .86-2.77A5.34 5.34 0 0 0 6.59 2a5.35 5.35 0 0 0-5.5 5.15 5.34 5.34 0 0 0 5.5 5.15 5.71 5.71 0 0 0 3.82-1.44L14.08 14zM6.59 11a4.09 4.09 0 0 1-4.25-3.9 4.09 4.09 0 0 1 4.25-3.9 4.09 4.09 0 0 1 4.25 3.9A4.08 4.08 0 0 1 6.59 11z" />
  </Svg>
);

export const Add = ({
  color = Styles.white1,
  width = "25px",
  height = "25px",
  rotate = 0,
}: IconProps) => (
  <Svg
    fill={color}
    width={width}
    height={height}
    transform={`rotate(${rotate})`}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.64 4.33H7.39v3.05H4.34v1.25h3.05v3.05h1.25V8.63h3.05V7.38H8.64V4.33z" />
    <path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z" />
  </Svg>
);

export const Stats = ({
  color = Styles.white1,
  width = "25px",
  height = "25px",
  rotate = 0,
}: IconProps) => (
  <Svg
    fill={color}
    width={width}
    height={height}
    transform={`rotate(${rotate})`}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.75 13.25V1.5H.5v12a1.24 1.24 0 0 0 1.22 1H15.5v-1.25z" />
    <path d="M3.15 8H4.4v3.9H3.15zm3.26-4h1.26v7.9H6.41zm3.27 2h1.25v5.9H9.68zm3.27-3.5h1.25v9.4h-1.25z" />
  </Svg>
);
