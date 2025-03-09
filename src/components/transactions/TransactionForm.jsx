import { useState } from "react";
import { useGLobalState } from "../../context/GlobalState";

const TransactionForm = () => {
    const {addTransaction} = useGLobalState();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount: +amount

        });
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Ingresa una descripción" 
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="00.00" 
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button>Agregar transacción</button>
            </form>
        </div>
    )
}

export default TransactionForm;