import type { InputFieldProps } from "../types/mortgage";

export default function InputField({
  label,
  htmlFor,
  children,
  error,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <label htmlFor={htmlFor} className="text-sm font-medium text-slate-500">
        {label}
      </label>
      <div
        className={`group flex overflow-hidden rounded-md border  ${
          error
            ? "border-red "
            : "bg-slate-50 border-slate-300 focus-within:border-lime "
        } `}
      >
        {children}
      </div>
      <p className=" h-5 text-sm text-red font-semibold">{error?.message}</p>
    </div>
  );
}
