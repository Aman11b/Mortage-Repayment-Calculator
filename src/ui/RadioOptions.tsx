import type { RadioOptionProps } from "../types/mortgage";

export default function RadioOptions({
  name,
  value,
  children,
}: RadioOptionProps) {
  return (
    <label className="group flex cursor-pointer items-center gap-4 rounded-md border border-slate-300 p-4 transition has-checked:border-lime has-checked:bg-lime-100">
      <input type="radio" name={name} value={value} className="peer sr-only" />
      <div className="flex h-5 aspect-square items-center justify-center rounded-full border-2 border-slate-500 transition group-has-checked:border-lime group-has-checked:bg-lime-100">
        <div className="h-2.5 w-2.5 rounded-full bg-lime opacity-0 transition-opacity group-has-checked:opacity-100"></div>
      </div>
      <span className="font-medium">{children}</span>
    </label>
  );
}
