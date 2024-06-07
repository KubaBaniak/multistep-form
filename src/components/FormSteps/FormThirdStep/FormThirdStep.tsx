import styled from "styled-components";
import FormSidebar from "../../FormSidebar/FormSidebar";
import BottomButtonsContainer from "../../BottomButtonContainer/BottomButtonContainer";
import FormStepMedata from "../../FormStepMetadata/FormStepMetadata";
import AddOnsContainer from "../../FormAddOnsContainer/FormAddOnsContainer";

const title = "Pick add-ons";
const description = "Add-ons help enhance your gaming experience.";

const Container = styled.div<{ $active: number }>`
  display: ${({ $active }) => ($active === 3 ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  width: 100%;
  max-width: 900px;
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
  margin: auto;
  flex-direction: column;
  gap: 20px;
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
