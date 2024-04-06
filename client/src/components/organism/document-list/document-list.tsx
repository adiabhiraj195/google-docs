import './document-list.css';
import DocumentInterface from '../../../types/interface/document-interface';
import DocumentCard from '../../molecules/document-card/document-card';

interface DocumentListInterface {
    listName: string;
    documents: Array<DocumentInterface>;
    setDocuments: Function;
}
const DocumentList = ({
    listName,
    documents,
    setDocuments
}: DocumentListInterface) => {
    return (
        <div className='document-list-container'>
            <h2 className='doc-list-title'>{listName}</h2>
            <div className='doc-list-cards-wrap'>
                {documents?.map((document) => {
                    return (
                        <DocumentCard
                            document={document}
                            setDocuments={setDocuments}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default DocumentList;