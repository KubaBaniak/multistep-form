enum PlanNames {
  Arcade = "Arcade",
  Advanced = "Advanced",
  Pro = "Pro",
}

interface IPlanData {
  planName: PlanNames;
  price: string;
}

interface IPlans {
  arcade: IPlanData;
  advanced: IPlanData;
  pro: IPlanData;
}

export const plansData: IPlans = {
  arcade: { planName: PlanNames.Arcade, price: "$90/mo" },
  advanced: { planName: PlanNames.Advanced, price: "$120/mo" },
  pro: { planName: PlanNames.Pro, price: "$150/mo" },
};
