import styled from "styled-components";
import FormSidebar from "../../FormSidebar/FormSidebar";
import BottomButtonsContainer from "../../BottomButtonContainer/BottomButtonContainer";
import FormStepMedata from "../../FormStepMetadata/FormStepMetadata";
import SummaryContent from "../../FormSummary/SummaryContent";

const title = "Finishing up";
const description = "Double-check everything looks OK before confirming.";

const Container = styled.div<{ $active: number }>`
  display: ${({ $active }) => ($active === 4 ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  width: 100%;
  max-width: 1000px;
  max-height: 600px;
  background-color: hsl(0, 0%, 100%);
  padding: 20px;
  border-radius: 20px;
  box-shadow: hsl(229, 24%, 87%) 0 8px 24px;
  gap: 20px;
`;

const Content = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 20px;
`;

interface FormFourthStepProps {
  nextStep: () => void;
  prevStep: () => void;
  active: number;
}

export default function FormFourthStep({
  nextStep,
  prevStep,
  active,
}: FormFourthStepProps) {
  return (
    <Container $active={active}>
      <FormSidebar currentStep={active} />
      <Content>
        <FormStepMedata title={title} description={description} />
        {active === 4 && <SummaryContent />}
        <BottomButtonsContainer
          nextStepText="Confirm"
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </Content>
    </Container>
  );
}
