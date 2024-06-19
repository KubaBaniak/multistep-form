import styled from "styled-components";
import { Plan } from "../../dto/form";
import { useContext } from "react";
import FormStepContext from "../Steps/FormStepContext";

const PlanSummaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 3;
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
  align-self: flex-start;
  display: inline-block;
  position: relative;
  font-size: 14px;
  z-index: 3;
  color: hsl(231, 11%, 63%);
  &::before {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background-color: hsl(231, 11%, 63%);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

const LetterWithoutBorder = styled.span`
  z-index: 42;
  background: hsl(217, 100%, 97%);
  display: inline-block;
`;

const PlanPrice = styled.p`
  color: hsl(213, 96%, 18%);
  font-size: 18px;
  font-weight: bold;
`;

export default function PlanSummary({ planData }: { planData: Plan }) {
  const context = useContext(FormStepContext);

  return (
    <PlanSummaryContainer>
      <PlanNameContainer>
        <PlanName>
          {planData.planName} ({planData.billing})
        </PlanName>
        <ChangePlanName onClick={() => context?.setFormStep(2)}>
          Chan<LetterWithoutBorder>g</LetterWithoutBorder>e
        </ChangePlanName>
      </PlanNameContainer>
      <PlanPrice>{planData.planPrice}</PlanPrice>
    </PlanSummaryContainer>
  );
}
