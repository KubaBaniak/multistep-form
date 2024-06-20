enum PlanNames {
  Arcade = "Arcade",
  Advanced = "Advanced",
  Pro = "Pro",
}

interface IPlanData {
  planName: PlanNames;
  price: string;
  additionalText?: string;
}

export interface IPlans {
  arcade: IPlanData;
  advanced: IPlanData;
  pro: IPlanData;
}

export interface IPlanFullContent extends IPlanData {
  planIcon: string;
}

export const plansDataMonthly: IPlans = {
  arcade: { planName: PlanNames.Arcade, price: "$9/mo" },
  advanced: { planName: PlanNames.Advanced, price: "$12/mo" },
  pro: { planName: PlanNames.Pro, price: "$15/mo" },
};

const additionalText = "2 months free";
export const plansDataYearly: IPlans = {
  arcade: { planName: PlanNames.Arcade, price: "$90/yr", additionalText },
  advanced: { planName: PlanNames.Advanced, price: "$120/yr", additionalText },
  pro: { planName: PlanNames.Pro, price: "$150/yr", additionalText },
};
