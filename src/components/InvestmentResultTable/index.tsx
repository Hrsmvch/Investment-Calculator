import React from "react";
import AnimatedTableRow from "../shared/AnimatedTableRow";
import { InvestmentResultTableProps } from "@/types/investment";
import { formatCurrency } from "@/utils/formatCurrency";
import styles from "./styles.module.scss";
import AnimatedText from "../shared/AnimatedText";

export default function InvestmentResultTable({
  results,
  initialInvestment,
}: InvestmentResultTableProps) {
  if (!results?.length) return;

  return (
    <div className={styles.results_container}>
      <h2>
        <AnimatedText text="Investment Results" duration={0.5} />
      </h2>

      <table
        className={styles.results_table}
        role="table"
        aria-describedby="resultsDescription"
      >
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Invested Capital</th>
            <th scope="col">Yearly Earnings</th>
            <th scope="col">Total Profit</th>
            <th scope="col">Total Balance</th>
          </tr>
        </thead>
        <tbody>
          {results?.map((result, index) => {
            const totalInterest =
              result.valueEndOfYear -
              result.annualInvestment * result.year -
              initialInvestment;
            const totalAmountInvestment = result.valueEndOfYear - totalInterest;

            return (
              <AnimatedTableRow
                key={result.year}
                index={index}
                rowKey={result.year}
              >
                <td data-label="Year">
                  {new Date().getFullYear() + result.year}
                </td>
                <td data-label="Invested Capital">
                  {formatCurrency(totalAmountInvestment)}
                </td>
                <td data-label="Yearly Earnings">
                  {formatCurrency(result.interest)}
                </td>
                <td data-label="Total Profit">
                  {formatCurrency(totalInterest)}
                </td>
                <td data-label="Total Balance">
                  {formatCurrency(result.valueEndOfYear)}
                </td>
              </AnimatedTableRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
