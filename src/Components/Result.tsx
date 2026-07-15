export default function Result() {
  return (
    <div className="bg-slate-950 py-16 px-8 h-full flex  flex-col gap-6">
      <h2 className="text-2xl font-bold text-slate-100"> Your results</h2>
      <p className="max-w-[35ch] text-slate-300 ">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="rounded-2xl border-t-4 border-t-lime ">
        <div className="bg-slate-800 p-8 flex flex-col gap-3 rounded-2xl">
          <h3 className="font-bold text-slate-400">Your monthly repayments</h3>
          <p className="text-lime font-extrabold text-6xl pb-4">$1,797.79</p>
          <hr className="border-slate-50 pb-4" />
          <h3 className="font-bold text-slate-400">
            Total you'll repay over the term
          </h3>
          <p className="text-slate-100 font-bold text-2xl">$593,394.34</p>
        </div>
      </div>
    </div>
  );
}
