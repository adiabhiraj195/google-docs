import { Vortex } from 'react-loader-spinner';
import './spinner.css';

const Spinner = () => {
    return (
        <div className='spinner-container'>
            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    )
}

export default Spinner;