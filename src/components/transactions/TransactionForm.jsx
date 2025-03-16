import { useState } from "react";
import { useGLobalState } from "../../context/GlobalState";

const TransactionForm = () => {
  const { addTransaction } = useGLobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    setAmount(0);
    setDescription("");
  };

  return (
    <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-xl overflow-hidden shadow-md">
      <div className="bg-indigo-900/30 border-b border-zinc-700 p-4">
        <h3 className="text-xl font-bold text-indigo-300">Nueva Transacción</h3>
      </div>

      <div className="p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Descripción
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <input
                id="description"
                type="text"
                placeholder="Ingreso / Gasto"
                onChange={(e) => setDescription(e.target.value)}
                className="bg-zinc-900 text-white pl-10 pr-4 py-3 rounded-lg block w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                value={description}
                required
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Monto
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                id="amount"
                type="number"
                step="0.01"
                placeholder="0.00"
                onChange={(e) => setAmount(e.target.value)}
                className="bg-zinc-900 text-white pl-10 pr-4 py-3 rounded-lg block w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                value={amount}
                required
              />
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Usa valores negativos (-) para gastos y positivos para ingresos
            </p>
          </div>

          <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-4 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-indigo-900 transition-all duration-200 shadow-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Agregar transacción
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
