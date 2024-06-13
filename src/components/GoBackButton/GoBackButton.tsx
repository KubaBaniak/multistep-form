import styled from "styled-components";

const BackButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  color: hsl(231, 11%, 63%);
  background: none;
  border: none;
  border-radius: 8px;
  padding: 15px 20px;
  margin: auto;
  width: 25%;

  @media only screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

export default function GoBackButton({
  text,
  prevStep,
}: {
  text: string;
  prevStep: () => void;
}) {
  return (
    <>
      <BackButton onClick={prevStep}>{text}</BackButton>
    </>
  );
}
