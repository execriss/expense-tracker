import { GlobalProvider } from './context/GlobalState';

// Components
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <div>
        <h1>Hello World</h1>
      </div>
    </GlobalProvider>
  );
}