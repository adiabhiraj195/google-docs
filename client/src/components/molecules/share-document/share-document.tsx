import './share-document.css';
import { useContext, useState, useRef, useEffect ,MouseEvent} from 'react';
import { DocumentContext } from '../../../context/document-context';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import TextField from '../../atom/text-field/text-field';

interface ShareDocumentInterface {
    title: string;
}

const ShareDocument = ({
    title,
}: ShareDocumentInterface) => {
    const { shareDocWindow, setShareDocWindow } = useContext(DocumentContext);
    const [shareEmail, setShareEmail] = useState('');

    const onBlurShare = (event: MouseEvent<HTMLDivElement>) => {
        const classList = (event.target as HTMLDivElement).classList;
        if(!classList.contains('share-document-container')){
            setShareDocWindow(false);
        }
    }
    const handleEmailInpute = (value: string)=>{
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
                        <button className='auth-btn blue-bg-btn'>Share</button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareDocument;