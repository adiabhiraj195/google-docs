import './document-list.css';
import DocumentInterface from '../../../types/interface/document-interface';
import DocumentCard from '../../molecules/document-card/document-card';

interface DocumentListInterface {
    listName: string;
    documents: Array<DocumentInterface>
}
const DocumentList = ({
    listName,
    documents
}: DocumentListInterface) => {
    return (
        <div className='document-list-container'>
            <h2 className='doc-list-title'>{listName}</h2>
            <div className='doc-list-cards-wrap'>
                {documents?.map((document) => {
                    return (
                        <DocumentCard
                            document={document}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default DocumentList;