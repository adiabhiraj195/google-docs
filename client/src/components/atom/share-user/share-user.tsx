import './share-user.css';
import { useState } from 'react';
import useRandomBg from '../../../hooks/useRandomBg';

interface SharedUserInterface {
    id: number;
    email: string;
}
const ShareUser = ({
    id,
    email
}: SharedUserInterface) => {
    const { randomBg } = useRandomBg();
    const [userPopup, setUserPopup] = useState(false);
    return (
        <>
            <div className='shared-user-wrap'>

                <div
                    key={id}
                    className='shared-user'
                    style={{ backgroundColor: `${randomBg}` }}
                    onClick={() => { setUserPopup(!userPopup) }}
                >
                    {email.slice(0, 1).toUpperCase()}
                </div>
                {userPopup &&
                    <div className='shared-user-popup'>
                        <p>{email}</p>
                        <button>
                            Remove
                        </button>
                    </div>}
            </div>
        </>
    )
}

export default ShareUser;