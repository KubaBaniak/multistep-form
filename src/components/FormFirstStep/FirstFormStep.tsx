import styled from "styled-components";
import FormInput from "../FormInput/FormInput";
import FormSidebar from "../FormSidebar/FormSidebar";
import FormStepDescription from "../FormStepDescription/FormStepDescription";
import FormStepTitle from "../FormStepTitle/FormStepTitle";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";

const description = "Please provide your name, email address, and phone number";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  width: 70%;
  max-width: 1200px;
  max-height: 900px;
  background-color: hsl(0, 0%, 100%);
  padding: 20px;
  border-radius: 20px;
  box-shadow: hsl(229, 24%, 87%) 0 8px 24px;
  gap: 20px;
`;

const FormCointainer = styled.form`
  margin-right: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function FirstFormStep() {
  return (
    <Container>
      <FormSidebar />
      <FormCointainer>
        <FormStepTitle title="Personal info" />
        <FormStepDescription description={description} />
        <FormInput labelName="Name" placeholder="e.g. Stephen King" />
        <FormInput
          labelName="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <FormInput labelName="Phone Number" placeholder="e.g. +1 234 567 890" />
        <FormSubmitButton text="Next Step" />
      </FormCointainer>
    </Container>
  );
}
