import styled from "styled-components";
import FormSidebar from "../../FormSidebar/FormSidebar";
import BottomButtonsContainer from "../../BottomButtonContainer/BottomButtonContainer";
import FormStepMedata from "../../FormStepMetadata/FormStepMetadata";
import AddOnsContainer from "../../FormAddOnsContainer/FormAddOnsContainer";

const title = "Pick add-ons"
const description = "Add-ons help enhance your gaming experience.";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  width: 70%;
  max-width: 900px;
  max-height: 600px;
  background-color: hsl(0, 0%, 100%);
  padding: 20px;
  border-radius: 20px;
  box-shadow: hsl(229, 24%, 87%) 0 8px 24px;
  gap: 20px;
`;

const FormCointainer = styled.form`
  margin-right: 60px;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function FormThirdStep() {
  return (
    <Container>
      <FormSidebar />
      <FormCointainer>
        <FormStepMedata title={title} description={description} />
        <AddOnsContainer />
        <BottomButtonsContainer/>
      </FormCointainer>
    </Container>
  );
}
