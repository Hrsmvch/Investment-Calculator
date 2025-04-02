import { z } from "zod";

export const investmentSchema = z.object({
  initialInvestment: z.number().min(100, "Minimum amount is 100"),
  annualInvestment: z.number().min(50, "Minimum amount is 50"),
  expectedReturn: z.number().min(1, "Minimum return is 1"),
  duration: z.number().min(1, "Minimum duration is 1 year"),
});