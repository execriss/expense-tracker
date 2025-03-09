import { GlobalProvider } from './context/GlobalState';

// Components
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionsList from './components/transactions/TransactionsList';

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <TransactionsList />
    </GlobalProvider>
  );
}