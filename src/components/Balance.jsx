import { useGLobalState } from '../context/GlobalState';

const Balance = () => {
    const {transactions} = useGLobalState();

    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    

    
    return (
        <div>
            <h3 className='text-3xl font-bold underline text-center text-red-500'>Tu Balance</h3>
            <h1>${total}</h1>
        </div>
    )
}

export default Balance;