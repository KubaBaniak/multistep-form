import styled from "styled-components";
import GoBackButton from "../GoBackButton/GoBackButton";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";

const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: auto;
`
export default function BottomButtonsContainer({hideGoBack = false}: {hideGoBack?: boolean}) {
 return (
    <ButtonContainer>
      {!hideGoBack && <GoBackButton text="Go Back"/>}
      <FormSubmitButton text="Next Step" />
    </ButtonContainer>
 )
}
