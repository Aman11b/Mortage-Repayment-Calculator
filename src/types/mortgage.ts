import type React from "react";
import type { FieldError } from "react-hook-form";

export type InputFieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  error?: FieldError;
};

export type RadioOptionProps = {
  name: string;
  value: string;
  children: React.ReactNode;
};

export type FormValue = {
  amount: number;
};
