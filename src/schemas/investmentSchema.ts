import { z } from "zod";

export const investmentSchema = z.object({
  initialInvestment: z.number().min(1, "Initial investment must be at least 1."),
  annualInvestment: z.number().min(0, "Annual investment cannot be negative."),
  expectedReturn: z.number().min(0).max(100, "Expected return must be between 0 and 100."),
  duration: z.number().min(1, "Duration must be at least 1 year."),
});

export type InvestmentData = z.infer<typeof investmentSchema>;