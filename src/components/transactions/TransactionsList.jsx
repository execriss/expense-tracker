import { useGLobalState } from "../../context/GlobalState";

const TransactionsList = () => {
    const {transactions, deleteTransaction} = useGLobalState();

    return (
        <div>
            {transactions.map((transaction) => (
                <div key={transaction.id}>
                    <p>{transaction.description}</p>
                    <span>{transaction.amount}</span>
                    <button onClick={() => deleteTransaction(transaction.id)}>X</button>
                </div>
            ))}
        </div>
    )
}

export default TransactionsList;
