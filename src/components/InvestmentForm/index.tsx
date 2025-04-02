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
  handleSetInitialInvestment
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
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>
          Initial Investment:
          <input
            type="number"
            {...register("initialInvestment", { valueAsNumber: true })}
          />
          {errors.initialInvestment && (
            <span>{errors.initialInvestment.message}</span>
          )}
        </label>

        <label>
          Annual Investment:
          <input
            type="number"
            {...register("annualInvestment", { valueAsNumber: true })}
          />
          {errors.annualInvestment && (
            <span>{errors.annualInvestment.message}</span>
          )}
        </label>

        <label>
          Expected Return (%):
          <input
            type="number"
            {...register("expectedReturn", { valueAsNumber: true })}
          />
          {errors.expectedReturn && (
            <span>{errors.expectedReturn.message}</span>
          )}
        </label>

        <label>
          Duration (Years):
          <input
            type="number"
            {...register("duration", { valueAsNumber: true })}
          />
          {errors.duration && <span>{errors.duration.message}</span>}
        </label>

        <button type="submit">Calculate</button>
      </form>
    </>
  );
}
