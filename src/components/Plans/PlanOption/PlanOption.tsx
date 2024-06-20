import { useEffect } from "react";
import styled from "styled-components";
import { FormInputs } from "../../../dto/form";
import { useFormContext } from "react-hook-form";
import { IPlanFullContent } from "../plans";

interface PlanOptionProps {
  plan: IPlanFullContent;
}

const Label = styled.label`
  display: block;
  height: 200px;
  width: 100%;
  border: solid 1px hsl(229, 24%, 87%);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    border: solid 1px hsl(213, 96%, 18%);
  }

  @media only screen and (max-width: 768px) {
    height: 100px;
  }
`;

const RadioInput = styled.input.attrs<{ $planName: string }>((props) => ({
  type: "radio",
  name: "plan.planName",
  value: props.$planName,
}))`
  display: none;

  &:checked + ${Label} {
    background: hsl(217, 100%, 97%);
    border: solid 1px hsl(243, 100%, 62%);
  }
`;

const RadioContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

const RadioContentIcon = styled.img.attrs<{ $planicon: string }>((props) => ({
  src: props.$planicon || "",
}))`
  width: 40px;
  height: 40px;
  user-select: none;
`;

const RadioContentData = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const RadioContentDataTitle = styled.h2`
  font-size: 18px;
  color: hsl(213, 96%, 18%);
  margin: 0;
`;

const RadioContentDataPrice = styled.span`
  color: hsl(231, 11%, 63%);
`;

const RadioContentDataAdditionalInfo = styled.span`
  color: hsl(213, 96%, 18%);
  font-size: 14px;
`;

export default function PlanOption({ plan }: PlanOptionProps) {
  const id = `plan-${plan.planName.replace(/\s+/g, "-").toLowerCase()}`;
  const { register, setValue, watch } = useFormContext<FormInputs>();

  const selectedPlanName = watch("plan.planName");

  useEffect(() => {
    if (selectedPlanName === plan.planName) {
      setValue("plan.planPrice", plan.price);
    }
  }, [selectedPlanName, plan.planName, plan.price, setValue]);

  return (
    <>
      <RadioInput
        {...register("plan.planName", {
          required: "Please select your desired plan",
        })}
        id={id}
        $planName={plan.planName}
      />
      <Label htmlFor={id}>
        <RadioContent>
          <RadioContentIcon $planicon={plan.planIcon} />
          <RadioContentData>
            <RadioContentDataTitle>{plan.planName}</RadioContentDataTitle>
            <RadioContentDataPrice>{plan.price}</RadioContentDataPrice>
            {plan.additionalText && (
              <RadioContentDataAdditionalInfo>
                {plan.additionalText}
              </RadioContentDataAdditionalInfo>
            )}
          </RadioContentData>
        </RadioContent>
      </Label>
    </>
  );
}
