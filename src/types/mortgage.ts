import type React from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type InputFieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  error?: FieldError;
};

export type RadioOptionProps = {
  value: "repayment" | "interestOnly";
  children: React.ReactNode;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export type FormValue = {
  amount: number;
  term: number;
  intrestRate: number;
  mortgageType: "repayment" | "interestOnly";
};

export type MortgageResult = {
  monthlyRepayment: number;
  totalRepayment: number;
};

export type ResultProp = {
  result: MortgageResult | null;
};
