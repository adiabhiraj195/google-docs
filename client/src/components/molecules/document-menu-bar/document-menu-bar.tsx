import './document-menu-bar.css';
import { useContext } from 'react'
import Logo from '../../atom/logo/logo';
import { DocumentContext } from '../../../context/document-context';
import useAuth from '../../../hooks/useAuth';
import DocumentService from '../../../service/document-service';
// import { useParams } from 'react-router-dom';
import UserDropDown from '../../atom/user-drop-down/user-drop-down';
import useToast from '../../../hooks/useToast';

const DocumentMenuBar = () => {
    // const { accessToken, userId } = useAuth();
    const {
        document,
        setDocumentTitle,
        saving,
        setSaving,
        // setDocument,
    } = useContext(DocumentContext);
    const { toastError } = useToast();

    const localAT = localStorage.getItem('Token');
    // const { id: docId } = useParams();

    const handleTitleOnBlur = async () => {
        // if (accessToken == null || document == null) return;
        if (localAT == null || document == null) return;
        // if (docId === undefined) return;
        setSaving(true);

        try {
            // setDocument({ ...document, id: parseInt(docId) })
            // await DocumentService.update(accessToken, document);
            await DocumentService.update(localAT, document);
        } catch (error) {
            toastError('Something went wrong with document.')
        } finally {
            setSaving(false);
        }
        console.log(document);
    }
    return (
        <div className='document-menu-container'>
            <div>
                <Logo />
                <div className='menu-title-container'>
                    <input
                        type='text'
                        maxLength={25}
                        onInput={(value) => setDocumentTitle((value.target as HTMLTextAreaElement).value)}
                        onBlur={handleTitleOnBlur}
                        value={document?.title ? document?.title : ''}
                        placeholder='Untitled Documnet'
                        className='title-input'
                    />
                    <div className='document-management-btn-container'>
                        <button className='management-btn'>File</button>
                        <button className='management-btn'>Edit</button>
                        <button className='management-btn'>View</button>
                        <button className='management-btn'>Insert</button>
                        <button className='management-btn'>Formate</button>
                        <button className='management-btn'>Tools</button>
                        <button className='management-btn'>Add-ons</button>
                        <button className='management-btn'>Help</button>
                        {saving && <p className='saving-prop'>Saving...</p>}
                    </div>
                </div>
            </div>
            <div className='document-user-container'>
                {/* add share users logo  */}
                {/* add functionalty to share doc to registered user  */}
                <UserDropDown />
            </div>
        </div>
    )
}

export default DocumentMenuBar;