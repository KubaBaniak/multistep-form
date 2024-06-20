export interface IAddOn {
  title: string;
  description: string;
  price: string;
}

export const addOnsMonthly: IAddOn[] = [
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

export const addOnsYearly: IAddOn[] = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    price: "+10$/yr",
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: "+20$/yr",
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: "+20$/yr",
  },
];
