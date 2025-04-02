"use client";
import { useState } from "react";
import { InvestmentYearData } from "@/types/investment";
import InvestmentForm from "@/components/InvestmentForm";
import InvestmentResultTable from "@/components/InvestmentResultTable";

export default function Home() {
  const [results, setResults] = useState<InvestmentYearData[]>([]);
  const [initialInvestment, setInitialInvestment] = useState(0);

  return (
    <>
      <header>
        <h1>Investment Calculator</h1>
        <p>
          Calculate your future investment based on current rates, compounding
          frequency, and investment amount.
        </p>
      </header>

      <main>
        <InvestmentForm handleSetResult={setResults} handleSetInitialInvestment={setInitialInvestment} />
        <InvestmentResultTable results={results} initialInvestment={initialInvestment} />
      </main>
    </>
  );
}
