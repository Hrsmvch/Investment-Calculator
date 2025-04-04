"use client";

import { useState } from "react";
import { InvestmentYearData } from "@/types/investment";
import InvestmentForm from "@/components/InvestmentForm";
import InvestmentResultTable from "@/components/InvestmentResultTable";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

export default function Home() {
  const [results, setResults] = useState<InvestmentYearData[]>([]);
  const [initialInvestment, setInitialInvestment] = useState<number>(0);

  return (
    <main role="main">
      <AnimatedWrapper>
        <InvestmentForm
          handleSetResult={setResults}
          handleSetInitialInvestment={setInitialInvestment}
        />
      </AnimatedWrapper>
      <AnimatedWrapper>
        <InvestmentResultTable
          results={results}
          initialInvestment={initialInvestment}
        />
      </AnimatedWrapper>
    </main>
  );
}
