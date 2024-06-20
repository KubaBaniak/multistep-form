import styled from "styled-components";
import PlanOption from "../PlanOption/PlanOption";
import arcadeIcon from "../../../../public/assets/images/icon-arcade.svg";
import advancedIcon from "../../../../public/assets/images/icon-advanced.svg";
import proIcon from "../../../../public/assets/images/icon-pro.svg";
import {
  IPlanFullContent,
  IPlans,
  plansDataMonthly,
  plansDataYearly,
} from "../plans";
import { useFormContext } from "react-hook-form";
import { FormInputs } from "../../../dto/form";
import { useEffect, useState } from "react";

const PlanList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const PlanElement = styled.li`
  width: 31%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default function PlansContainer() {
  const { getValues, watch } = useFormContext<FormInputs>();
  const [plansData, setPlansData] = useState<IPlans>(plansDataMonthly);

  const billing = watch("plan.billing");

  useEffect(() => {
    const plans =
      getValues("plan").billing === "monthly"
        ? plansDataMonthly
        : plansDataYearly;
    setPlansData(plans);
  }, [billing, getValues]);

  const plans: IPlanFullContent[] = [
    { planIcon: arcadeIcon, ...plansData.arcade },
    { planIcon: advancedIcon, ...plansData.advanced },
    { planIcon: proIcon, ...plansData.pro },
  ];

  return (
    <PlanList>
      {plans.map((plan) => (
        <PlanElement key={"key-" + plan.planName}>
          <PlanOption plan={plan} />
        </PlanElement>
      ))}
    </PlanList>
  );
}
