import InputField from "../ui/InputField";
import RadioOptions from "../ui/RadioOptions";
import calculatorIcon from "../../assets/images/icon-calculator.svg";
import Result from "./Result";
import { useForm } from "react-hook-form";
import { type MortgageResult, type FormValue } from "../types/mortgage";
import { useState } from "react";
import {
  calculateIntrestOnlyMortgage,
  calculateRepaymentMortgage,
} from "../utils/mortgage";
import EmptyResult from "./EmptyResult";

export default function Main() {
  const [result, setResult] = useState<MortgageResult | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValue>();

  const handleClear = () => {
    reset();
    setResult(null);
  };
  const onSubmit = (data: FormValue) => {
    if (data.mortgagteType === "repayment") {
      setResult(
        calculateRepaymentMortgage(data.amount, data.term, data.intrestRate),
      );
    } else {
      setResult(
        calculateIntrestOnlyMortgage(data.amount, data.term, data.intrestRate),
      );
    }
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
            <button
              type="button"
              onClick={handleClear}
              className="cursor-pointer underline text-slate-500"
            >
              Clear All
            </button>
          </div>
          {/* Mortgage Amount */}
          <InputField
            label=" Mortgame Amount"
            htmlFor="amount"
            error={errors.amount}
          >
            <span
              className={`flex items-center px-4 font-semibold  ${errors.amount ? "bg-red text-slate-50" : "bg-slate-100 group-focus-within:bg-lime text-slate-600"} `}
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
            <InputField
              label=" Mortgage Term"
              htmlFor="term"
              error={errors.term}
            >
              <input
                id="term"
                type="number"
                placeholder="0"
                className="w-full px-4 py-3 outline-none"
                {...register("term", {
                  required: "This field is required",
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: "Minimum year should be 1",
                  },
                  max: {
                    value: 40,
                    message: "Maximum term is 40 years",
                  },
                })}
              />
              <span
                className={`flex items-center px-4 font-semibold   ${errors.term ? "bg-red text-slate-50" : "bg-slate-100 group-focus-within:bg-lime text-slate-600"} `}
              >
                Years
              </span>
            </InputField>
            <InputField
              label=" Interest Rate"
              htmlFor="rate"
              error={errors.intrestRate}
            >
              <input
                id="rate"
                type="number"
                placeholder="0 %"
                className="w-full px-4 py-3 outline-none"
                {...register("intrestRate", {
                  required: "This filed is required",
                  valueAsNumber: true,
                  min: {
                    value: 0,
                    message: "Interest reate cannot be nagative",
                  },
                  max: {
                    value: 100,
                    message: "Interest rate is invalid",
                  },
                })}
              />
              <span
                className={`flex items-center px-4 font-semibold   ${errors.intrestRate ? "bg-red text-slate-50" : "bg-slate-100 group-focus-within:bg-lime text-slate-600"} `}
              >
                %
              </span>
            </InputField>
          </div>
          {/* radio button */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-medium text-slate-500">
              Mortgage Type
            </h2>
            <RadioOptions
              value="repayment"
              register={register("mortgagteType", {
                required: "Please select a mortgage Type",
              })}
            >
              Repayment
            </RadioOptions>
            <RadioOptions
              value="interestOnly"
              register={register("mortgagteType")}
            >
              Interest Only
            </RadioOptions>

            <p className=" h-5 text-sm text-red font-semibold">
              {errors?.mortgagteType?.message}
            </p>
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
          {result ? <Result result={result} /> : <EmptyResult />}
        </section>
      </article>
    </main>
  );
}
