"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculateInvestmentResults } from "@/utils/calculateInvestment";
import { InvestmentFormProps } from "@/types/investment";
import { investmentSchema } from "@/schemas/investmentSchema";
import { z } from "zod";
import styles from "./styles.module.scss";

type InvestmentData = z.infer<typeof investmentSchema>;

export default function InvestmentForm({
  handleSetResult,
  handleSetInitialInvestment,
}: InvestmentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvestmentData>({
    resolver: zodResolver(investmentSchema),
  });

  const onSubmit = (data: InvestmentData) => {
    const investmentResults = calculateInvestmentResults(data);
    handleSetResult(investmentResults);
    handleSetInitialInvestment(data.initialInvestment);
  };

  return (
    <div className={styles.calculator_container}>
      <h1>Investment Calculator</h1>
      <p>
        Calculate your future investment based on current rates, compounding
        frequency, and investment amount.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.group}>
          <label className={styles.withSymbol}>
            <span className={styles.label_value}>Initial Investment:</span>
            <input
              type="number"
              placeholder="10 000"
              min={1}
              inputMode="numeric"
              onInput={(e) => {
                let value = e.currentTarget.value;
                value = value.replace(/[^0-9]/g, "");
                value = value.replace(/^0+/, ""); // Remove leading zeros
                e.currentTarget.value = value;
              }}
              className={errors.initialInvestment ? styles.error : ""}
              {...register("initialInvestment", { valueAsNumber: true })}
            />
            {/* {errors.initialInvestment && (
              <span>{errors.initialInvestment.message}</span>
            )} */}
          </label>

          <label className={styles.withSymbol}>
            <span className={styles.label_value}>Annual Investment:</span>
            <input
              type="number"
              placeholder="1 200"
              min={1}
              inputMode="numeric"
              onInput={(e) => {
                let value = e.currentTarget.value;
                value = value.replace(/[^0-9]/g, "");
                value = value.replace(/^0+/, ""); // Remove leading zeros
                e.currentTarget.value = value;
              }}
              className={errors.annualInvestment ? styles.error : ""}
              {...register("annualInvestment", { valueAsNumber: true })}
            />
            {/* {errors.annualInvestment && (
              <span>{errors.annualInvestment.message}</span>
            )} */}
          </label>
        </div>
        <div className={styles.group}>
          <label>
            <span className={styles.label_value}>Expected Return (%):</span>
            <input
              type="number"
              placeholder="4"
              min={1}
              inputMode="numeric"
              onInput={(e) => {
                let value = e.currentTarget.value;
                value = value.replace(/[^0-9]/g, "");
                value = value.replace(/^0+/, ""); // Remove leading zeros
                e.currentTarget.value = value;
              }}
              className={errors.expectedReturn ? styles.error : ""}
              {...register("expectedReturn", { valueAsNumber: true })}
            />
            {/* {errors.expectedReturn && (
              <span>{errors.expectedReturn.message}</span>
            )} */}
          </label>

          <label>
            <span className={styles.label_value}>Duration (Years):</span>

            <input
              type="number"
              placeholder="12"
              min={1}
              inputMode="numeric"
              onInput={(e) => {
                let value = e.currentTarget.value;
                value = value.replace(/[^0-9]/g, "");
                value = value.replace(/^0+/, ""); // Remove leading zeros
                e.currentTarget.value = value;
              }}
              className={errors.duration ? styles.error : ""}
              {...register("duration", { valueAsNumber: true })}
            />
            {/* {errors.duration && <span>{errors.duration.message}</span>} */}
          </label>
        </div>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}
