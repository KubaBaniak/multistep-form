import styled from "styled-components";
import AddOn from "./FormAddOn";
import { useCallback, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormInputs } from "../../dto/form";
import { addOnsMonthly, addOnsYearly } from "./addOns";

const AddOnsSection = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function AddOnsContainer() {
  const { register, setValue, watch } = useFormContext<FormInputs>();

  const billing = watch("plan.billing");
  const getCorrectAddOns = useCallback(
    () => (billing === "monthly" ? addOnsMonthly : addOnsYearly),
    [billing],
  );

  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);
  const [addOns, setAddOns] = useState(getCorrectAddOns());

  useEffect(() => {
    const addOns = getCorrectAddOns();
    setAddOns(addOns);
  }, [billing, getCorrectAddOns]);

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
