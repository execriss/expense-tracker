import { useGLobalState } from '../context/GlobalState';

const Balance = () => {

    const data = useGLobalState();

    return (
        <div>
            <h1>Balance</h1>
            <h5>{JSON.stringify(data)}</h5>
        </div>
    )
}

export default Balance;