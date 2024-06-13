import styled from "styled-components";
import FormFirstStep from "../components/FormSteps/FormFirstStep/FormFirstStep";
import FormSecondStep from "../components/FormSteps/FormSecondStep/FormSecondStep";
import FormThirdStep from "../components/FormSteps/FormThirdStep/FormThirdStep";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { FormInputs } from "../dto/form";
import { useState } from "react";
import FormFourthStep from "../components/FormSteps/FormFourthStep/FormFourthStep";
import FormFifthStep from "../components/FormSteps/FormFifthStep/FormFifthStep";
import FormStepContext from "../components/FormSteps/FormStepContext";

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
  const methods = useForm<FormInputs>();

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
