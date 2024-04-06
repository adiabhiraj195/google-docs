import './document-card.css';
import DocumentInterface from '../../../types/interface/document-interface';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import DocumentMenu from '../../atom/document-menu/document-menu';

interface DocumentCardInterface {
    document: DocumentInterface;
    setDocuments: Function;
}
const DocumentCard = ({
    document,
    setDocuments
}: DocumentCardInterface) => {

    const { userId } = useAuth();
    const navigate = useNavigate();
    const skeleton = (
        <>
            {Array.from({ length: 18 }, (x, i) => i).map((i) => {
                return (
                    <div
                        key={i}
                        style={{
                            width: `${Math.floor(Math.random() * 100)}%`,
                        }}
                        className="skeletion-line"
                    ></div>
                );
            })}
        </>
    );

    const clickDocumentCard = (event: MouseEvent<HTMLDivElement>, documentId: number) => {
        const classList = (event.target as HTMLDivElement).classList;

        if (!classList.contains('document-card-menu-btn') && !classList.contains('card-menu-logo')) {
            navigate(`/document/${documentId}`);
        }
    }
    const clickDocumentTitle = () => {
        navigate(`/document/${document.id}`);
    }
    return (
        <div className='document-card'
            // onClick={(event) => clickDocumentCard(event, document.id)}
            key={document.id}
        >
            <div className='skeletion-wrap'>
                {skeleton}
            </div>
            <div className='document-card-info-wrap'>
                <p className='doc-card-title' onClick={clickDocumentTitle}>{document.title}</p>
                <div className='card-detail-wrap'>
                    <div className='logo-date-wrap'>
                        <div className='card-logo'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#3b82f6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </div>
                        <p className='document-date'>{new Date(document.updatedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        })}</p>
                    </div>
                    {document.userId === userId &&
                        <div className='document-card-menu-btn'>
                            <DocumentMenu
                                documentId={document.id}
                                setDocuments={setDocuments}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default DocumentCard;