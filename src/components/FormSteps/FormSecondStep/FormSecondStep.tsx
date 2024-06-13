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
  display: ${({ $active }) => ($active === 2 ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  width: 100%;
  max-width: 1000px;
  max-height: 600px;
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
    justify-content: space-between;
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
