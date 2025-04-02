
export interface InvestmentData {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface InvestmentYearData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}

export interface InvestmentFormProps {
  handleSetResult: (results: InvestmentYearData[]) => void;
  handleSetInitialInvestment: (value: number) => void;
};


export interface InvestmentResultTableProps {
  results: InvestmentYearData[]; 
  initialInvestment: number;
};