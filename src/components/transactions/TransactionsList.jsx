import { useGLobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

const TransactionsList = () => {
  const { transactions } = useGLobalState();

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold block">Historial</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};

export default TransactionsList;
