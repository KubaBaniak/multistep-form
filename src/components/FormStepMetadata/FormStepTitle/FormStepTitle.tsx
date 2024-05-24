import styled from "styled-components";

const Title = styled.h1`
  font-size: 32px;
  color: hsl(213, 96%, 18%);
  margin: 30px 0 0 0;
`;

export default function FormStepTitle({ title }: { title: string }) {
  return <Title>{title}</Title>;
}
