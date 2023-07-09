import { useState, useRef, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import { InputStyles, Label, InputWrapper } from "./CommonStyles";
import Styles from "../../Styles";

const minHeight = 30;

const TextAreaElem = styled.textarea`
  ${InputStyles}
  resize: none;
  overflow-y: hidden;
`;

const TextAreaElemNoResize = styled.textarea`
  ${InputStyles}
  resize: none;
  overflow-y: auto;
  width: auto;
  height: 150px;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background: #282828;
    background-clip: content-box;
    border: 5px solid transparent;
    border-radius: 8px;
  }

  &:focus-visible {
    &::-webkit-scrollbar-thumb {
      background: #201e38;
      background-clip: content-box;
      border: 5px solid transparent;
      border-radius: 8px;
    }
  }
`;

type TextAreaProps = {
  name: string;
  placeholder?: string;
  required?: boolean;
};

export function TextArea({ name, placeholder, required }: TextAreaProps) {
  const [val, setVal] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const initialHeight = useRef(0);

  const resizeTextArea = () => {
    if (textAreaRef?.current !== null) {
      textAreaRef.current.style.height = "auto";
      const scrollHeight = textAreaRef.current.scrollHeight;
      if (initialHeight.current === 0) {
        initialHeight.current = scrollHeight;
      }

      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        scrollHeight !== initialHeight.current
          ? `${scrollHeight}px`
          : `${minHeight}px`;
    }
  };

  useEffect(resizeTextArea, [val]);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setVal(e.target.value);
  };

  return (
    <InputWrapper>
      <Label text={name} required={required} />
      <TextAreaElem
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        required={required}
        ref={textAreaRef}
        value={val}
        onChange={onChange}
        rows={1}
      />
    </InputWrapper>
  );
}

export function TextAreaNoResize({
  name,
  placeholder,
  required,
}: TextAreaProps) {
  return (
    <InputWrapper>
      <Label text={name} required={required} />
      <TextAreaElemNoResize
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        required={required}
        rows={1}
      />
    </InputWrapper>
  );
}
