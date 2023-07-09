import styled, { css } from "styled-components";
import Styles from "../../Styles";

export const FormStyles = css`
  font-family: "Poppins", Arial, sans-serif;
  border: none;
  color: ${Styles.white1};
  border-radius: 4px;
  font-size: 1em;
  transition: background 0.15s linear;
  display: block;
  line-height: 30px;
`;

export const InputStyles = css`
  ${FormStyles}
  padding: 5px 10px;

  caret-color: ${Styles.white1};
  background: #3f3f3f;
  height: 30px;

  &:hover:not(:focus-visible) {
    filter: brightness(75%);
  }

  &:focus-visible {
    outline: none;
    background: #36334c;
  }

  &::placeholder {
    text-transform: capitalize;
    color: #8b8b8b;
    user-select: none;
  }

  &:focus-visible::placeholder {
    color: #9492a1;
  }
`;

export const InputWrapper = styled.div`
  padding: 10px 20px 10px 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 1 45%;
`;

export const ButtonStyle = css`
  ${FormStyles}
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.5em 1em;
  margin: 2.5em 0.8em;

  &:hover {
    filter: brightness(85%);
  }

  &:active {
    filter: brightness(70%);
  }
`;

const LabelStyle = styled.label<{ required?: boolean }>`
  text-transform: capitalize;
  color: ${Styles.white1};
  font-size: 1.2em;
  display: block;

  ${(props) =>
    props.required
      ? `
      &::after {
        padding-left: 5px;
        content: "*";
        color: red;
      `
      : ``}
`;

type LabelProps = {
  text: string;
  required?: boolean;
};

export const Label = ({ text, required }: LabelProps) => {
  return <LabelStyle required={required}>{text}</LabelStyle>;
};
