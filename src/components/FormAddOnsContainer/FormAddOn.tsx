import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { FormInputs } from "../../dto/form";

interface AddOnProps {
  register: UseFormRegister<FormInputs>;
  active: boolean;
  title: string;
  description: string;
  price: string;
  handleCheckboxSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddOnContainer = styled.label<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  border: solid 1px hsl(229, 24%, 87%);
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
  ${({ $active }) =>
    $active &&
    `
      background-color: hsl(217, 100%, 97%);
      border: solid 1px hsl(213, 96%, 18%);
  `};

  &:hover {
    border: solid 1px hsl(213, 96%, 18%);
  }
`;

const CheckboxWrapper = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 12px;
`;

const CheckboxContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid black;

  &:after {
    content: "";
    position: absolute;
    left: 35%;
    top: 10%;
    width: 3px;
    height: 10px;
    border-bottom: 3px solid white;
    border-right: 3px solid white;
    transform: rotate(45deg);
    display: none;
  }
`;

const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  visibility: hidden;

  &:checked + ${CheckboxContainer} {
    background-color: hsl(243, 100%, 62%);
  }

  &:checked + ${CheckboxContainer}:after {
    display: block;
  }
`;

const AddOnMetaData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const AddOnTitle = styled.span`
  font-weight: 700;
  color: hsl(213, 96%, 18%);
`;

const AddOnDescription = styled.span`
  font-weight: 400;
  color: hsl(231, 11%, 63%);
`;

const AddOnPrice = styled.div`
  margin-left: auto;
  font-size: 14px;
  color: hsl(243, 100%, 62%);
`;

export default function AddOn({
  register,
  title,
  description,
  price,
  active,
  handleCheckboxSelect,
}: AddOnProps) {
  return (
    <AddOnContainer $active={active}>
      <CheckboxWrapper htmlFor={"plan-" + title}>
        <Checkbox
          {...register("addOns")}
          id={"plan-" + title}
          onChange={handleCheckboxSelect}
        />
        <CheckboxContainer />
      </CheckboxWrapper>
      <AddOnMetaData>
        <AddOnTitle>{title}</AddOnTitle>
        <AddOnDescription>{description}</AddOnDescription>
      </AddOnMetaData>
      <AddOnPrice>{price}</AddOnPrice>
    </AddOnContainer>
  );
}
