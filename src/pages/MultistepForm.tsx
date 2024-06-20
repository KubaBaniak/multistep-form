import styled from "styled-components";
import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import FormFirstStep from "../components/Steps/FormFirstStep";
import FormSecondStep from "../components/Steps/FormSecondStep";
import FormThirdStep from "../components/Steps/FormThirdStep";
import FormFourthStep from "../components/Steps/FormFourthStep";
import FormFifthStep from "../components/Steps/FormFifthStep/FormFifthStep";
import { FormInputs } from "../dto/form";
import FormStepContext from "../components/Steps/FormStepContext";
import { plansData, plansDataMonthly } from "../components/Plans/plans";

const Window = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(231, 100%, 99%);
  box-sizing: border-box;
`;

export default function MultistepForm() {
  const methods = useForm<FormInputs>({
    defaultValues: {
      plan: plansDataMonthly.arcade,
    },
  });

  const [formStep, setFormStep] = useState(1);

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
  return (
    <Window>
      <FormStepContext.Provider value={{ formStep, setFormStep }}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormFirstStep
              active={formStep}
              nextStep={() => setFormStep((prevState) => prevState + 1)}
            />
            <FormSecondStep
              active={formStep}
              nextStep={() => setFormStep((prevState) => prevState + 1)}
              prevStep={() => setFormStep((prevState) => prevState - 1)}
            />
            <FormThirdStep
              active={formStep}
              nextStep={() => setFormStep((prevState) => prevState + 1)}
              prevStep={() => setFormStep((prevState) => prevState - 1)}
            />
            <FormFourthStep
              active={formStep}
              nextStep={() => setFormStep((prevState) => prevState + 1)}
              prevStep={() => setFormStep((prevState) => prevState - 1)}
            />
          </form>
          <FormFifthStep active={formStep} />
        </FormProvider>
      </FormStepContext.Provider>
    </Window>
  );
}
