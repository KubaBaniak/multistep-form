import { createContext } from "react";

interface FormStepContextType {
  formStep: number;
  setFormStep: React.Dispatch<React.SetStateAction<number>>;
}

const FormStepContext = createContext<FormStepContextType | undefined>(
  undefined,
);

export default FormStepContext;
