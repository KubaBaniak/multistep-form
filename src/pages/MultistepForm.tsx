import styled from "styled-components";
import FirstFormStep from "../components/FormFirstStep/FirstFormStep";

const Window = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: hsl(229, 24%, 87%);
`;

export default function MultistepForm() {
  return (
    <Window>
      <FirstFormStep />
    </Window>
  );
}
