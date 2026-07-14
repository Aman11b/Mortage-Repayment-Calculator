import type React from "react";

export type InputFieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
};

export type RadioOptionProps = {
  name: string;
  value: string;
  children: React.ReactNode;
};
