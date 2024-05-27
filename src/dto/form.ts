type Plan = {
  planName: "Arcade" | "Advanced" | "Pro";
};

type AddOn = {
  addOnName: string;
  addOnPrice: string;
};

type FirstStep = {
  name: string;
  email: string;
  phoneNumber: string;
};

type SecondStep = {
  plan: Plan;
};

type ThirdStep = {
  addOns: AddOn[];
};

export type FormInputs = FirstStep & SecondStep & ThirdStep;
