import styled from "styled-components";
import { InputStyles, Label, InputWrapper } from "./CommonStyles";
import { ChangeEvent, useState } from "react";

const NumberInput = styled.input.attrs({
  type: "text",
})<{ backText?: string }>`
  ${InputStyles}
`;

type InputNumberProps = {
  name: string;
  placeholder?: string;
  required?: boolean;
  allowDecimals?: boolean;
  allowNegative?: boolean;
};

export function InputNumber({
  name,
  placeholder,
  required,
  allowDecimals,
  allowNegative,
}: InputNumberProps) {
  const [val, setVal] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    alert("hello");
    if (!/^-?\d*\.?\d*$/g.test(event.target.value)) return;
    if (!allowNegative && /^-\d*\.?\d*$/g.test(event.target.value)) return;
    if (!allowDecimals && /^-?\d*\.\d*$/g.test(event.target.value)) return;
    setVal(event.target.value);
  };

  return (
    <InputWrapper>
      <Label text={name} required={required} />
      <NumberInput
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        required={required}
        value={val}
        onChange={handleChange}
      />
    </InputWrapper>
  );
}
