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
  width: 100%;
  background-color: hsl(0, 0%, 100%);
  border-radius: 20px;
  box-shadow: hsl(229, 24%, 87%) 0 8px 24px;
`;

const Content = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  margin: auto;
  flex-direction: column;
  background: white;
  padding: 20px;
  border-radius: 10px;
  gap: 0;

  @media only screen and (max-width: 768px) {
    height: 100%;
    position: relative;
    margin: 0;
    justify-content: flex-start;
    gap: 5px;
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
