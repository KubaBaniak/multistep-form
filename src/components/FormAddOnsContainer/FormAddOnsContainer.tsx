import styled from "styled-components";
import AddOn from "./FormAddOn";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormInputs } from "../../dto/form";

const addOns = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    price: "+1$/mo",
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: "+2$/mo",
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: "+2$/mo",
  },
];

const AddOnsSection = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function AddOnsContainer({
  register,
}: {
  register: UseFormRegister<FormInputs>;
}) {
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);

  const handleCheckboxSelect = (item: number) => {
    setSelectedAddOns((prevState) => {
      if (prevState.includes(item)) {
        return prevState.filter((i) => i !== item);
      }
      return [...prevState, item];
    });
  };

  return (
    <AddOnsSection>
      {addOns.map((addOn, index) => (
        <AddOn
          register={register}
          key={addOn.title}
          active={selectedAddOns?.includes(index)}
          title={addOn.title}
          description={addOn.description}
          price={addOn.price}
          handleCheckboxSelect={() => handleCheckboxSelect(index)}
        />
      ))}
    </AddOnsSection>
  );
}
