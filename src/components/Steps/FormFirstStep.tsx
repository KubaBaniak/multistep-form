import styled from "styled-components";
import FormInput from "../Inputs/FormInput";
import FormSidebar from "../Sidebar/FormSidebar";
import BottomButtonsContainer from "../Buttons/BottomButtonContainer";
import FormStepMedata from "../StepMetadata/FormStepMetadata";

const title = "Personal info";
const description =
  "Please provide your name, email address, and phone number.";

const Container = styled.div<{ $active: number }>`
  height: 100%;
  min-height: 600px;
  min-width: 800px;
  display: ${({ $active }) => ($active === 1 ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
    width: 90%;
    position: relative;
    margin: 0;
    justify-content: flex-start;
    flex-grow: 1;
  }
`;

interface FormFirstStepProps {
  nextStep: () => void;
  active: number;
}

export default function FormFirstStep({
  nextStep,
  active,
}: FormFirstStepProps) {
  return (
    <Container $active={active}>
      <FormSidebar currentStep={active} />
      <Content>
        <FormStepMedata title={title} description={description} />
        <FormInput
          formRegisterValue={"name"}
          labelName="Name"
          placeholder="e.g. Stephen King"
        />
        <FormInput
          formRegisterValue={"email"}
          labelName="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <FormInput
          formRegisterValue={"phoneNumber"}
          labelName="Phone Number"
          placeholder="e.g. +1 234 567 890"
        />
        <BottomButtonsContainer nextStep={nextStep} />
      </Content>
    </Container>
  );
}
