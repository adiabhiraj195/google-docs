import DocumentCreateHeader from '../../components/organism/document-create-header/documet-create-header';
import CreateDocumentBtn from '../../components/atom/create-document-btn/create-document-btn';
import Spinner from '../../components/atom/spinner/spinner';
import useDocuments from '../../hooks/useDocuments';
import useAuth from '../../hooks/useAuth';
import DocumentList from '../../components/organism/document-list/document-list';

const Create = () => {
  const { loading, documents, setDocuments } = useDocuments();
  const { userId } = useAuth();
  console.log(userId, 'userId');
  // console.log(documents, 'documents');
  // documents.map(document => console.log(document?.users))
  const recentDocuments = documents === null ? [] : documents.filter((document) => document.userId === userId);
  const sharedDocuments = documents === null ? [] : documents.filter((document) => document.userId !== userId);
  return (
    <div className='document-create-container'>
      <DocumentCreateHeader />
      <CreateDocumentBtn />
      {
        loading ?
          <Spinner /> :
          <>
            <DocumentList
              listName='Recent Document'
              documents={recentDocuments}
              setDocuments={setDocuments}
            />
            <DocumentList
              listName='Shared Document'
              documents={sharedDocuments}
              setDocuments={setDocuments}
            />
          </>
        //fetch document 
        //handle them as shared and owne
      }
    </div>
  )
}

export default Create;
