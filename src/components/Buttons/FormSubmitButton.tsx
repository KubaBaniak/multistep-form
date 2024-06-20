import styled from "styled-components";

const SubmitButton = styled.input.attrs<{ $text?: string }>((props) => ({
  type: "submit",
  value: props.$text || "Next",
}))`
  cursor: pointer;
  font-size: 16px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(243, 100%, 62%);
  border: none;
  border-radius: 8px;
  padding: 15px 20px;
  margin: auto 0 20px auto;
  width: 25%;

  transition: all 0.1s ease;

  &:hover {
    filter: brightness(150%);
  }
`;

export default function FormSubmitButton({ text }: { text?: string }) {
  return (
    <>
      <SubmitButton $text={text} />
    </>
  );
}
