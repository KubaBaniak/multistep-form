import styled from "styled-components";

const ErrorMessage = styled.p`
  color: hsl(354, 84%, 57%);
  font-weight: bold;
  margin: 0;
`;
export default function InputError({ errorMessage }: { errorMessage: string }) {
  return <ErrorMessage>{errorMessage}</ErrorMessage>;
}
