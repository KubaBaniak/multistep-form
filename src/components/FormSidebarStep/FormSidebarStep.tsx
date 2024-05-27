import styled from "styled-components";

const StepContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: hsl(0, 0%, 100%);
  gap: 20px;
`;

const StepNumber = styled.div<{ $currentStep: number; $stepNumber: number }>`
  ${({ $currentStep, $stepNumber }) =>
    $currentStep === $stepNumber &&
    `
    color: hsl(213, 96%, 18%);
    background-color: hsl(206, 94%, 87%);
    font-weight: 700;
  `};
  width: 30px;
  height: 30px;
  border: solid 1px hsl(206, 94%, 87%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3px;
  flex-grow: 1;
`;

const StepName = styled.p`
  padding: 0;
  margin: 0;
  color: hsl(229, 24%, 87%);
  font-weight: 200;
`;
const StepDescription = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 700;
`;

export default function FormSidebarStep({
  stepNumber,
  currentStep,
  stepDescription,
}: {
  stepNumber: number;
  currentStep: number;
  stepDescription: string;
}) {
  return (
    <StepContainer>
      <StepNumber $currentStep={currentStep} $stepNumber={stepNumber}>
        {stepNumber}
      </StepNumber>
      <StepDescriptionContainer>
        <StepName>Step {stepNumber}</StepName>
        <StepDescription>{stepDescription}</StepDescription>
      </StepDescriptionContainer>
    </StepContainer>
  );
}
