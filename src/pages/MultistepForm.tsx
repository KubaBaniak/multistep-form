import styled from "styled-components";
import FormFirstStep from "../components/FormSteps/FormFirstStep/FormFirstStep";
import FormSecondStep from "../components/FormSteps/FormSecondStep/FormSecondStep";
import FormThirdStep from "../components/FormSteps/FormThirdStep/FormThirdStep";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputs } from "../dto/form";
import { useState } from "react";

const Window = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(229, 24%, 87%);
`;

export default function MultistepForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const [formStep, setFormStep] = useState(1);

  console.log(formStep);
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
  return (
    <Window>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFirstStep
          active={formStep}
          register={register}
          nextStep={() => setFormStep((prevState) => prevState + 1)}
        />
        <FormSecondStep
          active={formStep}
          register={register}
          nextStep={() => setFormStep((prevState) => prevState + 1)}
          prevStep={() => setFormStep((prevState) => prevState - 1)}
        />
        <FormThirdStep
          active={formStep}
          register={register}
          nextStep={() => setFormStep((prevState) => prevState + 1)}
          prevStep={() => setFormStep((prevState) => prevState - 1)}
        />
      </form>
    </Window>
  );
}
