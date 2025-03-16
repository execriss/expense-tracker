import { useGLobalState } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useGLobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const isPositive = parseFloat(total) >= 0;

  return (
    <div className="bg-gradient-to-r from-zinc-800 to-zinc-700 p-6 rounded-xl mb-6 shadow-md">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="mb-3 sm:mb-0">
          <h3 className="text-gray-300 text-lg font-medium mb-1">
            Balance Total
          </h3>
          <p className="text-sm text-gray-400">Tu saldo actual</p>
        </div>
        <div
          className={`text-center px-6 py-3 rounded-lg ${
            isPositive ? "bg-green-900/30" : "bg-red-900/30"
          }`}
        >
          <h1
            className={`text-3xl sm:text-4xl font-bold ${
              isPositive ? "text-green-400" : "text-red-400"
            }`}
          >
            ${Math.abs(parseFloat(total)).toFixed(2)}
          </h1>
          <span
            className={`text-xs font-medium ${
              isPositive ? "text-green-300" : "text-red-300"
            }`}
          >
            {isPositive ? "Positivo" : "Negativo"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
