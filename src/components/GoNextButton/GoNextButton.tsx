import styled from "styled-components";

const NextButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(213, 96%, 18%);
  border: none;
  border-radius: 8px;
  padding: 15px 20px;
  margin: auto 0 20px auto;
  width: auto;
`;

export default function GoNextButton({
  text,
  nextStep,
}: {
  text: string;
  nextStep: () => void;
}) {
  return (
    <>
      <NextButton onClick={nextStep}>{text}</NextButton>
    </>
  );
}
