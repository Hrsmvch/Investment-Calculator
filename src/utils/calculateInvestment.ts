import { InvestmentData, InvestmentYearData } from "@/types/investment";

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}: InvestmentData): InvestmentYearData[] {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // Year identifier
      interest: interestEarnedInYear, // The amount of interest earned in this year
      valueEndOfYear: investmentValue, // Investment value at end of year
      annualInvestment: annualInvestment, // Investment added in this year
    });
  }

  return annualData;
}


