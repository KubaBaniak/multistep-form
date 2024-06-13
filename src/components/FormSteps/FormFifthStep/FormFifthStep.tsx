import styled from "styled-components";
import FormSidebar from "../../FormSidebar/FormSidebar";
import FormStepMedata from "../../FormStepMetadata/FormStepMetadata";
import ThankYouIcon from "./ThankYouIcon";

const title = "Thank you!";
const description =
  "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need suuport, please feel free to email us at support@loremgaming.com.";

const Container = styled.div<{ $active: number }>`
  display: ${({ $active }) => ($active === 5 ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  width: 100%;
  max-width: 1000px;
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