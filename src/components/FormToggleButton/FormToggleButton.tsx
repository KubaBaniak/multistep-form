import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  cursor: pointer;
  background: hsl(217, 100%, 97%);
  padding: 10px;
  border-radius: 10px;
`;

const Switch = styled.div`
  width: 60px;
  height: 24px;
  background: hsl(213, 96%, 18%);
  border-radius: 32px;
  position: relative;
  padding: 4px;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    top: 50%;
    left: 4px;
    background: hsl(0, 0%, 100%);
    transform: translateY(-50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  display: none;
  &:checked + ${Switch} {
    &:before {
      transform: translate(36px, -50%);
    }
  }
`;

const PlanType = styled.span<{$yearlyActive: boolean}>`
  transition: 300ms all;
  color: ${props => props.$yearlyActive ? 'hsl(213, 96%, 18%)' : 'hsl(231, 11%, 63%)'};
  font-weight: 600;
`;

export default function FormToggleButton() {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked);

  return (
    <Label>
      <PlanType $yearlyActive={!checked}>Monthly</PlanType>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
      <PlanType $yearlyActive={checked}>Yearly</PlanType>
    </Label>
  );
}

