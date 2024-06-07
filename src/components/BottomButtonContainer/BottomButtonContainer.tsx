import styled from "styled-components";
import GoBackButton from "../GoBackButton/GoBackButton";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";
import GoNextButton from "../GoNextButton/GoNextButton";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
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
      {nextStep ? (
        <GoNextButton text={buttonText} nextStep={nextStep} />
      ) : (
        <FormSubmitButton text={buttonText} />
      )}
    </ButtonContainer>
  );
}
