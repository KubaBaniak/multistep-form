import styled from "styled-components";

const Description = styled.p`
  color: hsl(231, 11%, 63%);
  font-size: 18px;
  margin-bottom: 50px;
`;

export default function FormStepDescription({
  description,
}: {
  description: string;
}) {
  return <Description>{description}</Description>;
}
