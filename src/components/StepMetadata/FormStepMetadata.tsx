import styled from "styled-components";
import FormStepDescription from "./FormStepDescription/FormStepDescription";
import FormStepTitle from "./FormStepTitle/FormStepTitle";

const MetadataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function FormStepMedata({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <MetadataContainer>
      <FormStepTitle title={title} />
      <FormStepDescription description={description} />
    </MetadataContainer>
  );
}
