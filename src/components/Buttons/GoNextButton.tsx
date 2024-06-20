import styled from "styled-components";
import { FormInputs } from "../../dto/form";
import { useFormContext } from "react-hook-form";
import { useContext } from "react";

import FormStepContext from "../Steps/FormStepContext";

const NextButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(213, 96%, 18%);
  border: none;
  border-radius: 8px;
  padding: 15px 20px;
  margin: 10px 0 0 auto;
  width: auto;

  transition: all 0.1s ease;

  &:hover {
    filter: brightness(150%);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: hsl(213, 96%, 50%);
  }

  @media only screen and (max-width: 768px) {
    margin: auto 20px auto auto;
  }
`;

export default function GoNextButton({
  text,
  nextStep,
}: {
  text: string;
  nextStep: () => void;
}) {
  const { trigger } = useFormContext<FormInputs>();
  const context = useContext(FormStepContext);

  const handleClick = async () => {
    const result =
      context?.formStep === 1
        ? await trigger(["name", "email", "phoneNumber"])
        : await trigger("plan");
    if (result) {
      nextStep();
    }
  };

  return <NextButton onClick={handleClick}>{text}</NextButton>;
}
