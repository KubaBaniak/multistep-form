import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { FormInputs } from "../../dto/form";
import InputError from "../Errors/InputError";

const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
  margin-bottom: 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: solid 1px hsl(243, 100%, 62%);
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 8px;
`;

interface FormInputProps {
  labelName: string;
  placeholder: string;
  formRegisterValue: keyof FormInputs;
}

export default function FormInput({
  labelName,
  placeholder,
  formRegisterValue,
}: FormInputProps) {
  const { register, formState } = useFormContext<FormInputs>();

  const inputError = formState.errors[formRegisterValue];

  return (
    <>
      <InputGroup>
        <LabelWrapper>
          <Label>{labelName}</Label>
          {inputError && inputError.message && (
            <InputError errorMessage={inputError.message} />
          )}
        </LabelWrapper>
        <Input
          {...register(formRegisterValue, {
            required: "This field is required",
          })}
          placeholder={placeholder}
        />
      </InputGroup>
    </>
  );
}
