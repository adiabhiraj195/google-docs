import './user-drop-down.css';
import { useRef, useState } from 'react'
import useAuth from '../../../hooks/useAuth';

const UserDropDown = () => {
    const [userDropDown, setUserDropDown] = useState(false);
    const { email, logout } = useAuth();
    const dropdownRef = useRef(null);


    //design user dropdown and logout function
    return (
        <div className='user-detail-container'>
            <div className='user-logo' onClick={() => { setUserDropDown(!userDropDown) }}>
                {email?.slice(0, 1).toUpperCase()}
            </div>
            {userDropDown && <div className='user-drop-down-container'ref={dropdownRef}
>
                <button onClick={logout}>logout</button>
            </div>}
        </div>
    )
}

export default UserDropDown;