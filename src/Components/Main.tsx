import InputField from "../ui/InputField";
import RadioOptions from "../ui/RadioOptions";
import calculatorIcon from "../../assets/images/icon-calculator.svg";
export default function Main() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center ">
      <article className="w-fit bg-slate-50 py-10 px-8 rounded-4xl">
        <section className="flex flex-col gap-2">
          {/* heading */}
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold"> Mortgage Calculator</h1>
            <a className="underline text-slate-500 cursor-pointer">Clear All</a>
          </div>
          {/* Mortgage Amount */}
          <InputField label=" Mortgame Amount" htmlFor="amount">
            <span className="flex items-center bg-slate-100 px-4 font-semibold text-slate-600">
              $
            </span>
            <input
              id="amount"
              type="number"
              placeholder="0"
              className="w-full px-4 py-3 outline-none"
            />
          </InputField>
          {/* Mortgage Term & Interest */}
          <div className="flex flex-row gap-4 py-4">
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
        </section>

        <section></section>
      </article>
    </main>
  );
}
