import { GlobalProvider } from "./context/GlobalState";

// Components
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionsList from "./components/transactions/TransactionsList";
import IncomeExpenses from "./components/incomeExpenses/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";

export default function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white min-h-screen">
        <div className="container mx-auto sm:px-6 py-6 sm:py-8 max-w-4xl">
          <Header />

          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
            {/* Sección de Balance - Visible en todas las pantallas */}
            <div className="p-6 sm:p-8 bg-zinc-900 border-b border-zinc-700">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-300">
                Resumen
              </h1>
              <Balance />
              <IncomeExpenses />
            </div>

            {/* Contenido principal - Reorganizado para móviles */}
            <div className="p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Columna izquierda en desktop, arriba en móvil */}
              <div className="w-full lg:w-2/5 order-2 lg:order-1">
                <TransactionForm />
              </div>

              {/* Columna derecha en desktop, abajo en móvil */}
              <div className="w-full lg:w-3/5 order-1 lg:order-2">
                <ExpenseChart />
                <TransactionsList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}
