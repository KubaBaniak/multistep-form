import styled from "styled-components";
import FormSidebar from "../../FormSidebar/FormSidebar";
import PlansContainer from "../../Plans/PlansContainer/PlansContainer";
import FormToggleButton from "../../FormToggleButton/FormToggleButton";
import BottomButtonsContainer from "../../BottomButtonContainer/BottomButtonContainer";
import FormStepMedata from "../../FormStepMetadata/FormStepMetadata";

const title = "Select your plan";
const description = "You have the option of monthly or yearly billing.";

const Container = styled.div<{ $active: number }>`
  display: ${({ $active }) => ($active === 2 ? "flex" : "none")};
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
  flex-direction: column;
  margin: auto;
  gap: 20px;
`;

interface FormSecondStepProps {
  nextStep: () => void;
  prevStep: () => void;
  active: number;
}

export default function FormSecondStep({
  nextStep,
  prevStep,
  active,
}: FormSecondStepProps) {
  return (
    <Container $active={active}>
      <FormSidebar currentStep={active} />
      <Content>
        <FormStepMedata title={title} description={description} />
        <PlansContainer />
        <FormToggleButton />
        <BottomButtonsContainer nextStep={nextStep} prevStep={prevStep} />
      </Content>
    </Container>
  );
}
