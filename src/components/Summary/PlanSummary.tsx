import styled from "styled-components";
import { Plan } from "../../dto/form";
import { useContext } from "react";
import FormStepContext from "../Steps/FormStepContext";

const PlanSummaryContainer = styled.div<{ $hasAddOns: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  ${(props) => {
    if (props.$hasAddOns) {
      return `
  margin-bottom: 30px;
  &::before {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: hsl(229, 24%, 87%);
    position: absolute;
    bottom: -15px;
    left: 0;
    z-index: -1;
  }
`;
    }
  }}
`;

const PlanNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  z-index: 3;
`;

const PlanName = styled.p`
  margin: 0;
  color: hsl(213, 96%, 18%);
  font-weight: 500;
`;

const ChangePlanName = styled.p`
  margin: 0;
  cursor: pointer;
  text-decoration: underline;
  align-self: flex-start;
  display: inline-block;
  position: relative;
  font-size: 14px;
  z-index: 3;
  color: hsl(231, 11%, 63%);
`;

const PlanPrice = styled.p`
  color: hsl(213, 96%, 18%);
  font-size: 18px;
  font-weight: bold;
`;

export default function PlanSummary({
  planData,
  hasAddOns,
}: {
  planData: Plan;
  hasAddOns: boolean;
}) {
  const context = useContext(FormStepContext);

  return (
    <PlanSummaryContainer $hasAddOns={hasAddOns}>
      <PlanNameContainer>
        <PlanName>
          {planData.planName} ({planData.billing})
        </PlanName>
        <ChangePlanName onClick={() => context?.setFormStep(2)}>
          Change
        </ChangePlanName>
      </PlanNameContainer>
      <PlanPrice>{planData.planPrice}</PlanPrice>
    </PlanSummaryContainer>
  );
}
