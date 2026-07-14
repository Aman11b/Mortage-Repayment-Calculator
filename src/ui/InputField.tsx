import type { InputFieldProps } from "../types/mortgage";

export default function InputField({
  label,
  htmlFor,
  children,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-slate-500">
        {label}
      </label>
      <div className="flex overflow-hidden rounded-md border border-slate-300 focus-within:border-lime-500">
        {children}
      </div>
    </div>
  );
}
