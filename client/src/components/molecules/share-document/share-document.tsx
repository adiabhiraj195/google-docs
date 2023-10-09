import './share-document.css';
import { useContext, useState, MouseEvent } from 'react';
import { DocumentContext } from '../../../context/document-context';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import TextField from '../../atom/text-field/text-field';
import PermissionEnum from '../../../types/enums/permission-enum';
import validator from 'validator';
import useAuth from '../../../hooks/useAuth';
import DocumentUserService from '../../../service/document-user-service';
import DocumentUserInterface from '../../../types/interface/document-user-interface';
import DocumentInterface from '../../../types/interface/document-interface';
import useToast from '../../../hooks/useToast';
import axios from 'axios';

interface ShareDocumentInterface {
    title: string;
}

const ShareDocument = ({
    title,
}: ShareDocumentInterface) => {
    const { setShareDocWindow, document, setSaving, setDocument } = useContext(DocumentContext);
    const [shareEmail, setShareEmail] = useState('');
    const { accessToken } = useAuth();
    const { toastError, toastSuccess } = useToast();

    const shareDocument = async () => {
        if (shareEmail === '' ||
            !validator.isEmail(shareEmail) ||
            accessToken === null ||
            document === null
        ) return;

        const payload = {
            email: shareEmail,
            documentId: document.id,
            permission: PermissionEnum.EDIT,
        };

        setSaving(true);
        try {
            const response = await DocumentUserService.create(accessToken, payload);
            const documentUser = response.data as DocumentUserInterface;
            // todo - set tost 
            console.log(documentUser, 'doc user from server');
            toastSuccess(`Document is shared to ${shareEmail}`);
            setDocument({
                ...document,
                // users: document.users?.push(documentUser)
                users: [...document.users, documentUser as DocumentUserInterface],
                // } as unknown as DocumentInterface);
            } as DocumentInterface);
        } catch (error) {
            console.log(error);
            if (axios.isAxiosError(error)) {
                const { response } = error;
                console.log(response)
                if (response?.data.errors?.length > 0) {
                    toastError(response?.data.errors[0].msg);
                }
                else {
                    toastError("An unknown error has occured. Please try again.");
                }
            }
        } finally {
            console.log(document);
            setSaving(false);
        }
    }

    const onBlurShare = (event: MouseEvent<HTMLDivElement>) => {
        const classList = (event.target as HTMLDivElement).classList;
        if (!classList.contains('share-document-container')) {
            setShareDocWindow(false);
        }
    }

    const handleEmailInpute = (value: string) => {
        setShareEmail(value);
    }
    return (
        <div className='share-document-bg'>
            <div className='share-document-container' >
                <div className='close-share-window' onClick={onBlurShare}>
                    <AiOutlineClose />
                </div>
                <div className='share-documnet-wrap'>
                    <div className='share-window-title-wrap'>
                        <h3 className='share-window-title'>Share "{title}"</h3>
                        <div className='share-setting'>
                            <FiSettings />
                        </div>
                    </div>
                    <TextField
                        placeholder='Share to Email'
                        value={shareEmail}
                        onInput={handleEmailInpute}
                        type='email'
                    />
                    <div className='people-with-doc-access-wrap'>
                        <p>People with Access</p>
                        <div className='people-with-access'>

                        </div>
                    </div>
                    <div className='share-btn-wrap'>
                        <button className='auth-btn base-bg-btn'>Copy link</button>
                        <button className='auth-btn blue-bg-btn' onClick={shareDocument}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareDocument;