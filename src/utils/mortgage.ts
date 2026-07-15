import type { MortgageResult } from "../types/mortgage";

export function calculateRepaymentMortgagte(
  amount: number,
  years: number,
  annualRate: number,
): MortgageResult {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;

  const monthlyRepayment =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  const totalRepayment = monthlyRepayment * numberOfPayments;

  return {
    monthlyRepayment,
    totalRepayment,
  };
}
export function calculateIntrestOnlyMortgagte(
  amount: number,
  years: number,
  annualRate: number,
): MortgageResult {
  const monthlyRate = annualRate / 100 / 12;
  const monthlyRepayment = amount * monthlyRate;
  const totalRepayment = monthlyRepayment * years * 12;
  return {
    monthlyRepayment,
    totalRepayment,
  };
}
