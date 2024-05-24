import styled from "styled-components";

const Label = styled.label`
  color: hsl(213, 96%, 18%);
`;

const Input = styled.input`
  color: hsl(213, 96%, 18%);
  padding: 18px;
  border-radius: 10px;
  border: solid 1px hsl(231, 11%, 63%);
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 8px;
`;

interface FormInputProps {
  labelName: string;
  placeholder: string;
}

export default function FormInput({ labelName, placeholder }: FormInputProps) {
  return (
    <InputGroup>
      <Label>{labelName}</Label>
      <Input placeholder={placeholder} />
    </InputGroup>
  );
}
