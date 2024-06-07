export type AddOn = {
  addOnName: string;
  addOnPrice: string;
};

export type Plan = {
  planName: "Arcade" | "Advanced" | "Pro";
  planPrice: string;
  billing: "yearly" | "monthly";
};

export type FormInputs = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: Plan;
  addOns: AddOn[];
};
