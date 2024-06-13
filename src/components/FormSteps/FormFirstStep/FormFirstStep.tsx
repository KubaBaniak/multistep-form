import styled from "styled-components";
import FormInput from "../../FormInput/FormInput";
import FormSidebar from "../../FormSidebar/FormSidebar";
import BottomButtonsContainer from "../../BottomButtonContainer/BottomButtonContainer";
import FormStepMedata from "../../FormStepMetadata/FormStepMetadata";

const title = "Personal info";
const description =
  "Please provide your name, email address, and phone number.";

const Container = styled.div<{ $active: number }>`
  display: ${({ $active }) => ($active === 1 ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  width: 100%;
  max-width: 1200px;
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
