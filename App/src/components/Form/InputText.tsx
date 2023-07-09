import styled from "styled-components";
import { InputStyles, Label, InputWrapper } from "./CommonStyles";

const TextInput = styled.input.attrs({
  type: "text",
})<{ backText?: string }>`
  ${InputStyles}
`;

type InputTextProps = {
  name: string;
  placeholder?: string;
  required?: boolean;
};

export function InputText({ name, placeholder, required }: InputTextProps) {
  return (
    <InputWrapper>
      <Label text={name} required={required} />
      <TextInput
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        required={required}
      />
    </InputWrapper>
  );
}
