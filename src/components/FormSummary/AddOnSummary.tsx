import styled from "styled-components";
import { AddOn } from "../../dto/form";

const AddOnSummaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddOnName = styled.p`
  margin: 0;
  color: hsl(231, 11%, 63%);
`;
const AddOnPrice = styled.p`
  margin: 0;
  color: hsl(213, 96%, 18%);
`;
export default function AddOnSummary({ addOnData }: { addOnData: AddOn }) {
  return (
    <AddOnSummaryContainer>
      <AddOnName>{addOnData.addOnName}</AddOnName>
      <AddOnPrice>{addOnData.addOnPrice}</AddOnPrice>
    </AddOnSummaryContainer>
  );
}
