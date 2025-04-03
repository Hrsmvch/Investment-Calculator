"use client";
import { useState } from "react";
import { InvestmentYearData } from "@/types/investment";
import InvestmentForm from "@/components/InvestmentForm";
import InvestmentResultTable from "@/components/InvestmentResultTable";

export default function Home() {
  const [results, setResults] = useState<InvestmentYearData[]>([]);
  const [initialInvestment, setInitialInvestment] = useState(0);

  return (
    <main>
      <InvestmentForm
        handleSetResult={setResults}
        handleSetInitialInvestment={setInitialInvestment}
      />
      <InvestmentResultTable
        results={results}
        initialInvestment={initialInvestment}
      />
    </main>
  );
}
