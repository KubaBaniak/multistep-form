import styled from "styled-components";
import FormSidebar from "../../FormSidebar/FormSidebar";
import PlansContainer from "../../Plans/PlansContainer/PlansContainer";
import FormToggleButton from "../../FormToggleButton/FormToggleButton";
import BottomButtonsContainer from "../../BottomButtonContainer/BottomButtonContainer";
import FormStepMedata from "../../FormStepMetadata/FormStepMetadata";
import { useFormContext } from "react-hook-form";
import { FormInputs } from "../../../dto/form";
import InputError from "../../ErrorComponents/InputError";

const title = "Select your plan";
const description = "You have the option of monthly or yearly billing.";

const Container = styled.div<{ $active: number }>`
  height: 100%;
  min-height: 600px;
  min-width: 800px;
  display: ${({ $active }) => ($active === 2 ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  margin: 0 auto;
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
  const { formState } = useFormContext<FormInputs>();

  const inputError = formState.errors["plan"];

  return (
    <Container $active={active}>
      <FormSidebar currentStep={active} />
      <Content>
        <FormStepMedata title={title} description={description} />
        <PlansContainer />
        <FormToggleButton />
        {inputError && inputError.planName && inputError.planName.message && (
          <InputError errorMessage={inputError.planName.message} />
        )}
        <BottomButtonsContainer nextStep={nextStep} prevStep={prevStep} />
      </Content>
    </Container>
  );
}
