import styled from "styled-components";

const BackButton = styled.input.attrs<{ $text?: string }>((props) => ({
  type: "submit",
  value: props.$text || "Next",
}))`
  cursor: pointer;
  font-size: 16px;
  color: hsl(231, 11%, 63%);
  background: none;
  border: none;
  border-radius: 8px;
  padding: 15px 20px;
  margin: auto auto 20px 0;
  width: 25%;
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
      <BackButton $text={text} onClick={prevStep} />
    </>
  );
}
