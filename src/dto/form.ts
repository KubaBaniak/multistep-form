type AddOn = {
  addOnName: string;
  addOnPrice: string;
};

export type FormInputs = {
  name: string;
  email: string;
  phoneNumber: string;
  planName: "Arcade" | "Advanced" | "Pro";
  yearlyBilling: boolean;
  addOns: AddOn[];
};
