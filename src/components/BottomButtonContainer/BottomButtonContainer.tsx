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
}: {
  nextStep?: () => void;
  prevStep?: () => void;
}) {
  return (
    <ButtonContainer>
      {prevStep && <GoBackButton text="Go Back" prevStep={prevStep} />}
      {nextStep ? (
        <GoNextButton text="Next Step" nextStep={nextStep} />
      ) : (
        <FormSubmitButton text="Next Step" />
      )}
    </ButtonContainer>
  );
}
