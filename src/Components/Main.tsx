import InputField from "../ui/InputField";
import RadioOptions from "../ui/RadioOptions";
import calculatorIcon from "../../assets/images/icon-calculator.svg";
import Result from "./Result";
import { useForm } from "react-hook-form";

import { useState } from "react";

import EmptyResult from "./EmptyResult";
import type { FormValue, MortgageResult } from "../types/mortgage";
import {
  calculateInterestOnlyMortgage,
  calculateRepaymentMortgage,
} from "../utils/mortgage";

export default function Main() {
  const [result, setResult] = useState<MortgageResult | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      mortgageType: "repayment",
    },
  });

  const handleClear = () => {
    reset();
    setResult(null);
  };
  const onSubmit = (data: FormValue) => {
    if (data.mortgageType === "repayment") {
      setResult(
        calculateRepaymentMortgage(data.amount, data.term, data.interestRate),
      );
    } else {
      setResult(
        calculateInterestOnlyMortgage(
          data.amount,
          data.term,
          data.interestRate,
        ),
      );
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center md:p-8">
      <article className="max-w-300 flex flex-col md:flex-row bg-slate-50  md:rounded-4xl w-full overflow-hidden">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col px-6 py-8 md:px-8 md:py-10 gap-2 md:w-1/2"
        >
          {/* heading */}
          <div className="flex flex-col gap-2 items-start md:flex-row md:justify-between md:items-center py-4">
            <h1 className="text-2xl font-bold text-slate-800">
              Mortgage Calculator
            </h1>
            <button
              type="button"
              onClick={handleClear}
              className="cursor-pointer underline text-slate-500 "
            >
              Clear All
            </button>
          </div>
          {/* Mortgagte Amount */}
          <InputField
            label="Mortgage Amount"
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
              placeholder="300,000"
              autoFocus
              onWheel={(e) => e.currentTarget.blur()}
              className="w-full px-4 py-3 outline-none"
              {...register("amount", {
                required: "This field is required",
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: "Amount must be greater than zero",
                },
              })}
            />
          </InputField>
          {/* Mortgagte Term & Interest */}
          <div className="flex flex-col md:flex-row gap-4 py-2">
            <InputField
              label="Mortgage Term"
              htmlFor="term"
              error={errors.term}
            >
              <input
                id="term"
                type="number"
                placeholder="25"
                onWheel={(e) => e.currentTarget.blur()}
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
              error={errors.interestRate}
            >
              <input
                id="rate"
                type="number"
                step="0.01"
                placeholder="5.53"
                onWheel={(e) => e.currentTarget.blur()}
                className="w-full px-4 py-3 outline-none"
                {...register("interestRate", {
                  required: "This field is required",
                  valueAsNumber: true,
                  min: {
                    value: 0.01,
                    message: "Interest rate must be greater than 0",
                  },
                  max: {
                    value: 50,
                    message: "Interest rate is invalid",
                  },
                })}
              />
              <span
                className={`flex items-center px-4 font-semibold   ${errors.interestRate ? "bg-red text-slate-50" : "bg-slate-100 group-focus-within:bg-lime text-slate-600"} `}
              >
                %
              </span>
            </InputField>
          </div>
          {/* radio button */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-medium text-slate-500">
              Mortgagte Type
            </h2>
            <RadioOptions
              value="repayment"
              register={register("mortgageType", {
                required: "Please select a mortgage type",
              })}
            >
              Repayment
            </RadioOptions>
            <RadioOptions
              value="interestOnly"
              register={register("mortgageType")}
            >
              Interest Only
            </RadioOptions>

            <p className=" h-5 text-sm text-red font-semibold">
              {errors?.mortgageType?.message}
            </p>
          </div>
          {/* calculate button */}
          <button
            type="submit"
            className="mt-8 flex flex-row w-full md:w-fit items-center gap-3 rounded-full bg-lime px-8 py-4 font-bold text-slate-900 transition hover:opacity-90 hover:bg-lime-200"
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
        <section className="flex flex-col gap-2 md:rounded-r-4xl overflow-hidden md:rounded-bl-[4rem] md:w-1/2">
          {result ? <Result result={result} /> : <EmptyResult />}
        </section>
      </article>
    </main>
  );
}
