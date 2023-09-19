import { useContext, useEffect } from 'react'
import DocumentHeader from '../../../components/organism/document-header/document-header';
import DocumentEditor from '../../../components/organism/document-editor/document-editor';
import useDocument from '../../../hooks/useDocumnet';
import { useParams } from 'react-router-dom';
import { DocumentContext } from '../../../context/document-context';
import Spinner from '../../../components/atom/spinner/spinner';

const Document = () => {
  const { id: documentId } = useParams();
  // console.log(documentId);
  const { document, loading } = useDocument(parseInt(documentId as string));
  const { setDocument } = useContext(DocumentContext);

  useEffect(() => {
    if (document !== null) setDocument(document);

  }, [document])
  return (
    <div className='document-page-container'>
      <DocumentHeader />

      <DocumentEditor />
      {loading && <Spinner />}
    </div>
  )
}

export default Document; 