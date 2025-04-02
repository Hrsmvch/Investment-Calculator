import { InvestmentResultTableProps } from "@/types/investment";
import { formatCurrency } from "@/utils/formatCurrency";
import React from "react";

export default function InvestmentResultTable({
  results,
  initialInvestment,
}: InvestmentResultTableProps) {
  if (!results?.length) return;

  return (
    <div>
      <h2>Investment Results</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results?.map((result) => {
            const totalInterest =
              result.valueEndOfYear -
              result.annualInvestment * result.year -
              initialInvestment;
            const totalAmountInvestment = result.valueEndOfYear - totalInterest;

            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatCurrency(result.valueEndOfYear)}</td>
                <td>{formatCurrency(result.interest)}</td>
                <td>{formatCurrency(totalInterest)}</td>
                <td>{formatCurrency(totalAmountInvestment)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
