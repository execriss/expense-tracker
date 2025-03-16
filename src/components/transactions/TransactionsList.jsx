import { useGLobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

const TransactionsList = () => {
  const { transactions } = useGLobalState();

  return (
    <div className="mt-6 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-xl overflow-hidden shadow-md">
      <div className="bg-zinc-900/50 border-b border-zinc-700 p-[24px] flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-200">Historial</h3>
        <span className="bg-indigo-900/50 text-indigo-300 text-xs font-medium px-2.5 py-1 rounded-full">
          {transactions.length}{" "}
          {transactions.length === 1 ? "transacción" : "transacciones"}
        </span>
      </div>

      <div className="p-5">
        {transactions.length === 0 ? (
          <div className="text-center py-8 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-gray-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <p className="text-gray-400 mb-2">
              No hay transacciones registradas
            </p>
            <p className="text-sm text-gray-500">
              Agrega una nueva transacción para comenzar a llevar tu control de
              gastos
            </p>
          </div>
        ) : (
          <div className="max-h-[350px] overflow-y-auto pr-2">
            <ul className="space-y-3">
              {transactions.map((transaction) => (
                <TransactionItem
                  transaction={transaction}
                  key={transaction.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsList;
