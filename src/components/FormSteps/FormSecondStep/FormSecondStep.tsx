import styled from "styled-components";
import FormSidebar from "../../FormSidebar/FormSidebar";
import PlansContainer from "../../Plans/PlansContainer/PlansContainer";
import FormToggleButton from "../../FormToggleButton/FormToggleButton";
import BottomButtonsContainer from "../../BottomButtonContainer/BottomButtonContainer";
import FormStepMedata from "../../FormStepMetadata/FormStepMetadata";

const title = "Select your plan"
const description = "You have the option of monthly or yearly billing.";

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

export default function FormSecondStep() {
  return (
    <Container>
      <FormSidebar />
      <FormCointainer>
        <FormStepMedata title={title} description={description} />
        <PlansContainer />
        <FormToggleButton />
        <BottomButtonsContainer/>
      </FormCointainer>
    </Container>
  );
}
