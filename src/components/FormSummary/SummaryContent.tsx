import { useFormContext } from "react-hook-form";
import PlanSummary from "./PlanSummary";
import { FormInputs } from "../../dto/form";
import AddOnSummary from "./AddOnSummary";
import styled from "styled-components";
import SummaryTotal from "./SummaryTotal";

const SummaryContainer = styled.div`
  padding: 20px;
  background: hsl(217, 100%, 97%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function SummaryContent() {
  const { getValues } = useFormContext<FormInputs>();

  const planData = getValues("plan");
  const addOnsData = getValues("addOns");

  const getTotalPrice = () => {
    const totalAddOnsPrice = addOnsData
      .map((addOn) => {
        const numberString = addOn.addOnPrice.replace(/\D+/g, "");
        return Number(numberString);
      })
      .reduce((sum, current) => sum + current);
    const planPrice = Number(planData.planPrice.replace(/\D+/g, ""));

    return totalAddOnsPrice + planPrice;
  };

  return (
    <>
      <SummaryContainer>
        <PlanSummary planData={planData} />
        {addOnsData.map((addOn) => (
          <AddOnSummary addOnData={addOn} />
        ))}
      </SummaryContainer>
      <SummaryTotal totalPrice={getTotalPrice()} />
    </>
  );
}
