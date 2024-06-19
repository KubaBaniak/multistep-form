import styled from "styled-components";
import FormSidebar from "../../FormSidebar/FormSidebar";
import BottomButtonsContainer from "../../BottomButtonContainer/BottomButtonContainer";
import FormStepMedata from "../../FormStepMetadata/FormStepMetadata";
import SummaryContent from "../../FormSummary/SummaryContent";

const title = "Finishing up";
const description = "Double-check everything looks OK before confirming.";

const Container = styled.div<{ $active: number }>`
  height: 100%;
  min-height: 600px;
  min-width: 800px;
  display: ${({ $active }) => ($active === 4 ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: hsl(0, 0%, 100%);
  border-radius: 20px;
  box-shadow: hsl(229, 24%, 87%) 0 8px 24px;
  padding: 15px;

  @media only screen and (max-width: 768px) {
    min-width: auto;
    padding: 0;
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 60%;
  height: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  background: white;
  padding: 20px;
  border-radius: 10px;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    width: 90%;
    position: relative;
    margin: 0;
    justify-content: flex-start;
    flex-grow: 1;
  }
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
