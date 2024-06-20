import styled from "styled-components";

import GoBackButton from "./GoBackButton";
import FormSubmitButton from "./FormSubmitButton";
import GoNextButton from "./GoNextButton";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  @media only screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: white;
  }
`;
export default function BottomButtonsContainer({
  nextStep,
  prevStep,
  nextStepText,
}: {
  nextStep?: () => void;
  prevStep?: () => void;
  nextStepText?: string;
}) {
  const buttonText = nextStepText ? nextStepText : "Next Step";
  return (
    <ButtonContainer>
      {prevStep && <GoBackButton text="Go Back" prevStep={prevStep} />}
      {nextStep &&
        (nextStepText !== "Confirm" ? (
          <GoNextButton text={buttonText} nextStep={nextStep} />
        ) : (
          <FormSubmitButton text={buttonText} nextStep={nextStep} />
        ))}
    </ButtonContainer>
  );
}
