import InputField from "../ui/InputField";
import RadioOptions from "../ui/RadioOptions";
import calculatorIcon from "../../assets/images/icon-calculator.svg";
import Result from "./Result";
import { useForm } from "react-hook-form";
import type { FormValue } from "../types/mortgage";

export default function Main() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit = (data: FormValue) => {
    console.log(data);
  };
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center ">
      <article className="max-w-300 flex flex-row bg-slate-50  rounded-4xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col py-10 px-8 gap-2"
        >
          {/* heading */}
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-slate-800">
              Mortgage Calculator
            </h1>
            <a className="underline text-slate-500 cursor-pointer">Clear All</a>
          </div>
          {/* Mortgage Amount */}
          <InputField
            label=" Mortgame Amount"
            htmlFor="amount"
            error={errors.amount}
          >
            <span
              className={`flex items-center px-4 font-semibold  ${errors.amount ? "bg-red" : "bg-slate-100 group-focus-within:bg-lime"} `}
            >
              $
            </span>
            <input
              id="amount"
              type="number"
              placeholder="0"
              className="w-full px-4 py-3 outline-none"
              {...register("amount", {
                required: "This fied is required",
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "Amount should be positive",
                },
              })}
            />
          </InputField>
          {/* Mortgage Term & Interest */}
          <div className="flex flex-row gap-4 py-2">
            <InputField label=" Mortgage Term" htmlFor="term">
              <input
                id="term"
                type="number"
                placeholder="0"
                className="w-full px-4 py-3 outline-none"
              />
              <span className="flex items-center bg-slate-100 px-4 font-semibold text-slate-600">
                Years
              </span>
            </InputField>
            <InputField label=" Interest Rate" htmlFor="rate">
              <input
                id="rate"
                type="number"
                placeholder="0 %"
                className="w-full px-4 py-3 outline-none"
              />
              <span className="flex items-center bg-slate-100 px-4 font-semibold text-slate-600">
                %
              </span>
            </InputField>
          </div>
          {/* radio button */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-medium text-slate-500">
              Mortgage Type
            </h2>
            <RadioOptions name="mortgageType" value="repayment">
              Repayment
            </RadioOptions>
            <RadioOptions name="mortgageType" value="interestOnly">
              Interest Only
            </RadioOptions>
          </div>
          {/* calculate button */}
          <button
            type="submit"
            className="mt-8 flex flex-row w-fit items-center gap-3 rounded-full bg-lime px-8 py-4 font-bold text-slate-900 transition hover:opacity-90"
          >
            <span>
              <img
                src={calculatorIcon}
                alt=""
                aria-label="true"
                className="h-5 w-5"
              />
            </span>
            Calculate Repayments
          </button>
        </form>
        <section className="flex flex-col gap-2 rounded-r-4xl overflow-hidden rounded-bl-[4rem]">
          <Result />
        </section>
      </article>
    </main>
  );
}
