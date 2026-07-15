import EmptyImage from "../../assets/images/illustration-empty.svg";
export default function EmptyResult() {
  return (
    <div className="flex h-full flex-col justify-center items-center gap-6 bg-slate-950 px-8 py-16 text-center">
      <img src={EmptyImage} alt="Calculator illustration" className="w-48" />
      <h2 className="text-2xl fonr-bold text-slate-100"> Results shown here</h2>
      <p className="max-w-[35ch] text-slate-300">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
