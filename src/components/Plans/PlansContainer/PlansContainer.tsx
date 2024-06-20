import styled from "styled-components";
import PlanOption from "../PlanOption/PlanOption";
import arcadeIcon from "../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../assets/images/icon-advanced.svg";
import proIcon from "../../../assets/images/icon-pro.svg";
import { plansData } from "../plans";

type PlanContent = {
  planIcon: string;
  planName: "Arcade" | "Advanced" | "Pro";
  price: string;
};

const plans: PlanContent[] = [
  { planIcon: arcadeIcon, ...plansData.arcade },
  { planIcon: advancedIcon, ...plansData.advanced },
  { planIcon: proIcon, ...plansData.pro },
];

const PlanList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const PlanElement = styled.li`
  width: 31%;
`;

export default function PlansContainer() {
  return (
    <PlanList>
      {plans.map((plan) => (
        <PlanElement key={"key-" + plan.planName}>
          <PlanOption
            planIcon={plan.planIcon}
            planName={plan.planName}
            price={plan.price}
          />
        </PlanElement>
      ))}
    </PlanList>
  );
}
