import styled from "styled-components";
import FormSidebar from "../../Sidebar/FormSidebar";
import FormStepMedata from "../../StepMetadata/FormStepMetadata";
import ThankYouIcon from "./ThankYouIcon";

const title = "Thank you!";
const description =
  "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need suuport, please feel free to email us at support@loremgaming.com.";

const Container = styled.div<{ $active: number }>`
  height: 100%;
  max-height: 600px;
  max-width: 800px;
  display: ${({ $active }) => ($active === 5 ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  background-color: hsl(0, 0%, 100%);
  padding: 20px;
  border-radius: 20px;
  box-shadow: hsl(229, 24%, 87%) 0 8px 24px;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    max-height: 450px;
  }
`;

const Content = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

interface FormFifthStepProps {
  active: number;
}

export default function FormFifthStep({ active }: FormFifthStepProps) {
  return (
    <Container $active={active}>
      <FormSidebar currentStep={active} />
      <Content>
        <ThankYouIcon />
        <FormStepMedata title={title} description={description} />
      </Content>
    </Container>
  );
}
