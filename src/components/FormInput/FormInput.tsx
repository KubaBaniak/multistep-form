import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { FormInputs } from "../../dto/form";

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
  formRegisterValue: keyof FormInputs;
  register: UseFormRegister<FormInputs>;
}

export default function FormInput({
  labelName,
  placeholder,
  formRegisterValue,
  register,
}: FormInputProps) {
  return (
    <InputGroup>
      <Label>{labelName}</Label>
      <Input {...register(formRegisterValue)} placeholder={placeholder} />
    </InputGroup>
  );
}
