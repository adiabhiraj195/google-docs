import './shared-user.css';
import { useContext } from 'react';
import { DocumentContext } from '../../../context/document-context';
import ShareUser from '../../atom/share-user/share-user';

interface SharedUsersInterface {
    id: number;
    email: string;
}

const SharedUsers = ({
    id,
    email,
}: SharedUsersInterface) => {
    const { document } = useContext(DocumentContext);
    return (
        <div className='shared-user-container'>
            {document?.users?.map((user) => {
                console.log(user?.email)
                return (
                    <ShareUser
                        id={user?.id as number}
                        email={user?.email as string}
                    />
                )
            })}
        </div>
    )
}

export default SharedUsers;