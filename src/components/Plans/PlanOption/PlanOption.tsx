import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { FormInputs } from "../../../dto/form";

interface PlanOptionProps {
  planIcon: string;
  planName: string;
  price: string;
  additionalInfo?: string;
  register: UseFormRegister<FormInputs>;
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
`;

const RadioInput = styled.input.attrs<{ $planName: string }>((props) => ({
  type: "radio",
  name: "plan",
  value: props.$planName,
}))`
  display: none;

  &:checked + ${Label} {
    background: hsl(217, 100%, 97%);
    border: solid 1px hsl(213, 96%, 18%);
  }
`;

const RadioContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
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
`;

const RadioContentDataTitle = styled.h2`
  font-size: 18px;
  color: hsl(213, 96%, 18%);
  margin: 0;
`;

const RadioContentDataPrice = styled.span`
  color: hsl(231, 11%, 63%);
`;

const RadioContentDataAdditionalInfo = styled.span``;

export default function PlanOption({
  planIcon,
  planName,
  price,
  additionalInfo,
  register,
}: PlanOptionProps) {
  const id = `plan-${planName.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <>
      <RadioInput
        {...register("planName", { required: true })}
        id={id}
        $planName={planName}
      />
      <Label htmlFor={id}>
        <RadioContent>
          <RadioContentIcon $planicon={planIcon} />
          <RadioContentData>
            <RadioContentDataTitle>{planName}</RadioContentDataTitle>
            <RadioContentDataPrice>{price}</RadioContentDataPrice>
            {additionalInfo && (
              <RadioContentDataAdditionalInfo>
                {additionalInfo}
              </RadioContentDataAdditionalInfo>
            )}
          </RadioContentData>
        </RadioContent>
      </Label>
    </>
  );
}
