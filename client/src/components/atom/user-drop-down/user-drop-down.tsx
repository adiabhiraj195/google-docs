import './user-drop-down.css';
import { useRef, useState } from 'react'
import useAuth from '../../../hooks/useAuth';
import { AiOutlineClose } from 'react-icons/ai';

const UserDropDown = () => {
    const [userDropDown, setUserDropDown] = useState(false);
    const { email, logout, userName } = useAuth();
    const dropdownRef = useRef(null);


    //design user dropdown and logout function
    return (
        <div className='user-detail-container'>
            <div className='user-logo' onClick={() => { setUserDropDown(!userDropDown) }}>
                {email?.slice(0, 1).toUpperCase()}
            </div>
            {userDropDown &&
                <div className='user-drop-down-container' ref={dropdownRef} onBlur={() => setUserDropDown(false)}>
                    <div className='close-profile-dropdown-wrap' onClick={()=> setUserDropDown(false)}>
                        <AiOutlineClose />
                    </div>
                    <div className='profile-dropdown-content-wrap'>
                        <p className='dropdown-user-email'>{email}</p>
                        <div className='dropdown-profile-img'>
                            {email?.slice(0, 1).toUpperCase()}
                        </div>
                        <h3 className='dropdown-user-name'> Hi <span>{userName}!</span></h3>
                        <button className='signout-btn' onClick={logout}>Sign out</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default UserDropDown;