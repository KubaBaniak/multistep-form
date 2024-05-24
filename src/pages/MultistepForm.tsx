import styled from "styled-components";
import FormFirstStep from "../components/FormSteps/FormFirstStep/FormFirstStep";
import FormSecondStep from "../components/FormSteps/FormSecondStep/FormSecondStep";


const Window = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(229, 24%, 87%);
`;

export default function MultistepForm() {
  return (
    <Window>
      <FormFirstStep />
      <FormSecondStep />
    </Window>
  );
}
