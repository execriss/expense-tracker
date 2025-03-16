import { useGLobalState } from "../../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useGLobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-xl overflow-hidden shadow-md">
        <div className="px-4 py-3 bg-green-900/20 border-b border-zinc-700">
          <h4 className="text-gray-200 font-medium">Ingresos Totales</h4>
        </div>
        <div className="p-5 flex items-center justify-between">
          <div className="bg-green-900/30 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <div className="text-right">
            <p className="text-green-400 font-bold text-2xl sm:text-3xl">
              ${income}
            </p>
            <span className="text-xs text-gray-400">Entradas de dinero</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-xl overflow-hidden shadow-md">
        <div className="px-4 py-3 bg-red-900/20 border-b border-zinc-700">
          <h4 className="text-gray-200 font-medium">Gastos Totales</h4>
        </div>
        <div className="p-5 flex items-center justify-between">
          <div className="bg-red-900/30 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </div>
          <div className="text-right">
            <p className="text-red-400 font-bold text-2xl sm:text-3xl">
              ${expense.toFixed(2)}
            </p>
            <span className="text-xs text-gray-400">Salidas de dinero</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
