import { InvestmentData, InvestmentYearData } from "@/types/investment";
import { calculateInvestmentResults } from "@/utils/calculateInvestment";

describe("calculateInvestmentResults", () => {
  // Standard case with positive values.
  it("should calculate the correct results for a standard investment", () => {
    const investmentData: InvestmentData = {
      initialInvestment: 1000,
      annualInvestment: 100,
      expectedReturn: 5,
      duration: 5,
    };

    const result: InvestmentYearData[] = calculateInvestmentResults(investmentData);

    expect(result).toHaveLength(5);
    expect(result[0]).toEqual({
      year: 1,
      interest: 50,
      valueEndOfYear: 1150, 
      annualInvestment: 100,
    });

    expect(result[4].interest).toBeCloseTo(82.3259375, 5);
    expect(result[4].valueEndOfYear).toBeCloseTo(1828.8446875, 5); 
  });

  // Duration of 0 years (the investment shouldn't grow).
  it("should return an empty array for a duration of 0 years", () => {
    const investmentData: InvestmentData = {
      initialInvestment: 1000,
      annualInvestment: 100,
      expectedReturn: 5,
      duration: 0,
    };

    const result: InvestmentYearData[] = calculateInvestmentResults(investmentData);

    expect(result).toEqual([]);
  });

  // No annual investment (the only growth comes from interest).
  it("should calculate correctly when there is no annual investment", () => {
    const investmentData: InvestmentData = {
      initialInvestment: 1000,
      annualInvestment: 0,
      expectedReturn: 5,
      duration: 3,
    };

    const result: InvestmentYearData[] = calculateInvestmentResults(investmentData);

    expect(result[0].interest).toBeCloseTo(50, 5);
    expect(result[0].valueEndOfYear).toBeCloseTo(1050, 5); 

    expect(result[1].interest).toBeCloseTo(52.5, 5); 
    expect(result[1].valueEndOfYear).toBeCloseTo(1102.5, 5);

    expect(result[2].interest).toBeCloseTo(55.125, 5); 
    expect(result[2].valueEndOfYear).toBeCloseTo(1157.625, 5); 
  });

  // Initial investment is 0 (no growth).
  it("should calculate correctly when the initial investment is 0", () => {
    const investmentData: InvestmentData = {
      initialInvestment: 0,
      annualInvestment: 100,
      expectedReturn: 5,
      duration: 5,
    };

    const result: InvestmentYearData[] = calculateInvestmentResults(investmentData);

    expect(result[0].interest).toBeCloseTo(0, 5); 
    expect(result[0].valueEndOfYear).toBeCloseTo(100, 5); 

    expect(result[1].interest).toBeCloseTo(5, 5); 
    expect(result[1].valueEndOfYear).toBeCloseTo(205, 5); 

    expect(result[4].interest).toBeCloseTo(21.550625, 5); 
    expect(result[4].valueEndOfYear).toBeCloseTo(552.563125, 5); 
  });

  // Ensure correct rounding or float operations in the calculation. 
  it("should handle large initial investments correctly", () => {
    const investmentData: InvestmentData = {
      initialInvestment: 1000000,
      annualInvestment: 100000,
      expectedReturn: 10,
      duration: 3,
    };

    const result: InvestmentYearData[] = calculateInvestmentResults(investmentData);

    expect(result[0].interest).toBeCloseTo(100000, 5); 
    expect(result[0].valueEndOfYear).toBeCloseTo(1200000, 5); 
  
    expect(result[1].interest).toBeCloseTo(120000, 5); 
    expect(result[1].valueEndOfYear).toBeCloseTo(1420000, 5); 
  
    expect(result[2].interest).toBeCloseTo(142000, 5); 
    expect(result[2].valueEndOfYear).toBeCloseTo(1662000, 5);
  });
 
});
