import { useGLobalState } from '../context/GlobalState';

const Balance = () => {

    const data = useGLobalState();

    return (
        <div>
            <h1>Balance</h1>
        </div>
    )
}

export default Balance;