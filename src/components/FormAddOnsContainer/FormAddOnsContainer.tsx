import styled from "styled-components";
import AddOn from "./FormAddOn";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
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

export default function AddOnsContainer() {
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);

  const { register, setValue } = useFormContext<FormInputs>();

  const handleCheckboxSelect = (item: number) => {
    setSelectedAddOns((prevState) => {
      const isSelected = prevState.includes(item);
      const updated = isSelected
        ? prevState.filter((i) => i !== item)
        : [...prevState, item];

      const addOnsData = updated.map((index) => {
        const addOn = addOns[index];
        return {
          addOnName: addOn.title,
          addOnPrice: addOn.price,
        };
      });

      setValue("addOns", addOnsData);
      return updated;
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
