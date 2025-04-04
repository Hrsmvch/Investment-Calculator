"use client";

import AnimatedText from "../shared/AnimatedText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculateInvestmentResults } from "@/utils/calculateInvestment";
import { InvestmentFormProps } from "@/types/investment";
import { investmentSchema } from "@/schemas/investmentSchema";
import { sanitizeNumericInput } from "@/utils/sanitizeInput";
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
      <h1>
        <AnimatedText text="Investment Calculator" duration={0.5} />
      </h1>
      <p>
        <AnimatedText text="Calculate your investment growth over time with our easy-to-use calculator." />
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.group}>
          <label className={styles.withSymbol} htmlFor="initialInvestment">
            <span className={styles.label_value}>Initial Investment:</span>
            <input
              id="initialInvestment"
              type="number"
              placeholder="10 000"
              min={1}
              inputMode="numeric"
              onInput={sanitizeNumericInput}
              className={errors.initialInvestment ? styles.error : ""}
              aria-invalid={!!errors.initialInvestment}
              aria-describedby="initialInvestmentError"
              aria-required="true"
              {...register("initialInvestment", { valueAsNumber: true })}
            />
          </label>

          <label className={styles.withSymbol} htmlFor="annualInvestment">
            <span className={styles.label_value}>Annual Investment:</span>
            <input
              id="annualInvestment"
              type="number"
              placeholder="1 200"
              min={1}
              inputMode="numeric"
              onInput={sanitizeNumericInput}
              className={errors.annualInvestment ? styles.error : ""}
              aria-invalid={!!errors.annualInvestment}
              aria-describedby="annualInvestmentError"
              aria-required="true"
              {...register("annualInvestment", { valueAsNumber: true })}
            />
          </label>
        </div>
        <div className={styles.group}>
          <label htmlFor="expectedReturn">
            <span className={styles.label_value}>Expected Return (%):</span>
            <input
              id="expectedReturn"
              type="number"
              placeholder="4"
              min={1}
              inputMode="numeric"
              onInput={sanitizeNumericInput}
              className={errors.expectedReturn ? styles.error : ""}
              aria-invalid={!!errors.expectedReturn}
              aria-describedby="expectedReturnError"
              aria-required="true"
              {...register("expectedReturn", { valueAsNumber: true })}
            />
          </label>

          <label htmlFor="duration">
            <span className={styles.label_value}>Duration (Years):</span>

            <input
              id="duration"
              type="number"
              placeholder="12"
              min={1}
              inputMode="numeric"
              onInput={sanitizeNumericInput}
              className={errors.duration ? styles.error : ""}
              aria-invalid={!!errors.duration}
              aria-describedby="durationError"
              aria-required="true"
              {...register("duration", { valueAsNumber: true })}
            />
          </label>
        </div>

        <button type="submit" aria-label="Calculate investment results">
          Calculate
        </button>
      </form>
    </div>
  );
}
