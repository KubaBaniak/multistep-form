import styled from "styled-components";
import FormStepDescription from "./FormStepDescription/FormStepDescription";
import FormStepTitle from "./FormStepTitle/FormStepTitle";

const MetadataCotnainer = styled.div`
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
    <MetadataCotnainer>
      <FormStepTitle title={title} />
      <FormStepDescription description={description} />
    </MetadataCotnainer>
  );
}
