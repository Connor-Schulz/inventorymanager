import styled from "styled-components";
import { ButtonStyle } from "./CommonStyles";

type SubmitProps = {
  text: string;
};

const SubmitStyle = styled.input.attrs({
  type: "submit",
})`
  ${ButtonStyle}
  background: #5563f3;
`;

export function Submit({ text }: SubmitProps) {
  return <SubmitStyle value={text} />;
}
