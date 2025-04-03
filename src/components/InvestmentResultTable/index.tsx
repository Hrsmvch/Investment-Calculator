import React from "react";
import { InvestmentResultTableProps } from "@/types/investment";
import { formatCurrency } from "@/utils/formatCurrency";
import styles from "./styles.module.scss";

export default function InvestmentResultTable({
  results,
  initialInvestment,
}: InvestmentResultTableProps) {
  if (!results?.length) return;

  return (
    <div className={styles.results_container}>
      <h2>Investment Results</h2>
      <table className={styles.results_table}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Invested Capital</th>
            <th>Yearly Earnings</th>
            <th>Total Profit</th>
            <th>Total Balance</th>
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
                <td data-label="Year">{new Date().getFullYear() + result.year}</td>
                <td data-label="Invested Capital">{formatCurrency(totalAmountInvestment)}</td>
                <td data-label="Yearly Earnings">{formatCurrency(result.interest)}</td>
                <td data-label="Total Profit">{formatCurrency(totalInterest)}</td>
                <td data-label="Total Balance">{formatCurrency(result.valueEndOfYear)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
