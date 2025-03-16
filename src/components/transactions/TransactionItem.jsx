import { useGLobalState } from "../../context/GlobalState";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGLobalState();
  const isIncome = transaction.amount > 0;

  return (
    <li className="bg-zinc-900/50 rounded-xl overflow-hidden shadow-sm">
      <div className="p-3 sm:p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
              isIncome ? "bg-green-900/30" : "bg-red-900/30"
            }`}
          >
            {isIncome ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            )}
          </div>
          <div>
            <p className="text-sm sm:text-base font-medium text-gray-200 truncate max-w-[120px] sm:max-w-[200px]">
              {transaction.description}
            </p>
            <span className="text-xs text-gray-500">
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <span
            className={`text-sm sm:text-base font-medium ${
              isIncome ? "text-green-400" : "text-red-400"
            } mr-3`}
          >
            {isIncome ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
          </span>
          <button
            onClick={() => deleteTransaction(transaction.id)}
            className="bg-zinc-800 hover:bg-red-900/50 text-gray-400 hover:text-white rounded-lg w-8 h-8 flex items-center justify-center text-xs transition-colors"
            aria-label="Eliminar transacción"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}

export default TransactionItem;
