// Represents the data required for investment calculations
export interface InvestmentData {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

// Represents the data for a single year of an investment
export interface InvestmentYearData {
  readonly year: number;
  readonly interest: number;
  readonly valueEndOfYear: number;
  readonly annualInvestment: number;
}

// Props for the `InvestmentForm` component.
export interface InvestmentFormProps {
  handleSetResult: (results: InvestmentYearData[]) => void;
  handleSetInitialInvestment: (value: number) => void;
};

// Props for the `InvestmentResultTable` component.
export interface InvestmentResultTableProps {
  readonly results: InvestmentYearData[]; 
  readonly initialInvestment: number;
};