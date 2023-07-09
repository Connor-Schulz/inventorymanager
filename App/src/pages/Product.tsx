import { TextAreaNoResize } from "../components/Form/TextArea";
import { InputNumber } from "../components/Form/InputNumber";
import styled from "styled-components";
import { InputText } from "../components/Form/InputText";
import { Submit } from "../components/Form/Submit";
import Styles from "../Styles";

const Title = styled.h1`
  color: #a09bf9;
  font-size: 3em;
`;

const SubTitle = styled.h2`
  color: ${Styles.white1};
  font-size: 1.8em;
  margin: 0;
`;

const Button = styled.input<{ isSecondary?: boolean }>`
  text-transform: capitalize;
  font-family: Poppins, Arial, sans-serif;
  font-size: 1em;
  padding: 0.5em 1em;
  background: ${(props) => (props.isSecondary ? "#36334c" : "#5563f3")};
  color: ${Styles.white1};
  border: none;
  margin: 2.5em 0.8em;
  border-radius: 4px;

  &:hover {
    filter: brightness(85%);
  }

  &:active {
    filter: brightness(70%);
  }
`;

const Form = styled.form`
  max-width: 800px;
  margin-right: 50px;

  &::before {
    text-align: right;
    content: "* Required Fields";
    color: red;
    font-size: 0.9em;
    display: block;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 49%;
`;

const Divider = styled.hr`
  margin: 40px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export function Product() {
  return (
    <>
      <Title>Define a new Product</Title>
      <Form>
        <SubTitle>General</SubTitle>
        <InputGroup style={{ flexDirection: "column" }}>
          <InputText name="Name" placeholder="Product Name" required={true} />
          <TextAreaNoResize
            name="Description"
            placeholder="Product Description"
          />
        </InputGroup>

        <Divider />

        <SubTitle>Product Info</SubTitle>

        <InputGroup>
          <InputNumber
            name="Length"
            placeholder="Long side of the box"
            required={true}
            allowDecimals={true}
          />

          <InputNumber
            name="Width"
            placeholder="Short side of the box"
            required={true}
            allowDecimals={true}
          />

          <InputNumber name="Height" placeholder="Box Height" required={true} />

          <InputNumber
            name="Mass"
            placeholder="Weight of a single box"
            required={true}
            allowDecimals={true}
          />
        </InputGroup>

        <Divider />

        <SubTitle>Pallet Info</SubTitle>

        <InputGroup>
          <InputNumber
            name="tie"
            placeholder="# of Cases Per Layer"
            required={true}
          />

          <InputNumber
            name="tier"
            placeholder="# of Cases Per Pallet"
            required={true}
          />
        </InputGroup>

        <ButtonWrapper>
          <Button type="reset" value="Reset" isSecondary={true} />
          <Submit text="Create Product" />
        </ButtonWrapper>
      </Form>
    </>
  );
}
