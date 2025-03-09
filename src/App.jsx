import { GlobalProvider } from "./context/GlobalState";

// Components
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionsList from "./components/transactions/TransactionsList";
import IncomeExpenses from "./components/incomeExpenses/IncomeExpenses";

export default function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-2/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div className="">
              <h1 className="text-4xl font-bold">Control de Gastos</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="w-full">
              <TransactionsList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}
