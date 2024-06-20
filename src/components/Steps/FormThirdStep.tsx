import styled from "styled-components";

import FormSidebar from "../Sidebar/FormSidebar";
import BottomButtonsContainer from "../Buttons/BottomButtonContainer";
import FormStepMedata from "../StepMetadata/FormStepMetadata";
import AddOnsContainer from "../AddOns/FormAddOnsContainer";

const title = "Pick add-ons";
const description = "Add-ons help enhance your gaming experience.";

const Container = styled.div<{ $active: number }>`
  height: 100%;
  min-height: 600px;
  min-width: 800px;
  display: ${({ $active }) => ($active === 3 ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: hsl(0, 0%, 100%);
  border-radius: 20px;
  box-shadow: hsl(229, 24%, 87%) 10px 8px 24px;
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
    height: 100%;
    position: relative;
    margin: 0;
    justify-content: flex-start;
    flex-grow: 1;
  }
`;

interface FormThirdStepProps {
  nextStep: () => void;
  prevStep: () => void;
  active: number;
}

export default function FormThirdStep({
  nextStep,
  prevStep,
  active,
}: FormThirdStepProps) {
  return (
    <Container $active={active}>
      <FormSidebar currentStep={active} />
      <Content>
        <FormStepMedata title={title} description={description} />
        <AddOnsContainer />
        <BottomButtonsContainer nextStep={nextStep} prevStep={prevStep} />
      </Content>
    </Container>
  );
}
