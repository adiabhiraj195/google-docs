import { useState, FocusEvent } from 'react'
import { CiMenuKebab } from 'react-icons/ci';
import useAuth from '../../../hooks/useAuth';
import DocumentService from '../../../service/document-service';
import useDocuments from '../../../hooks/useDocuments';
import DocumentInterface from '../../../types/interface/document-interface';

interface DocumentMenuInterface {
  documentId: number;
}
const DocumentMenu = ({
  documentId,
}: DocumentMenuInterface) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { accessToken } = useAuth();
  const { setDocuments } = useDocuments();
  const localAT = localStorage.getItem('Token');

  const handleOnBlurBtn = (event: FocusEvent<HTMLButtonElement>) => {
    const classList = (event.target as HTMLButtonElement).classList;
    if (!classList.contains("document-menu")) {
      setToggleMenu(false);
    }
  }
  const deleteDocument = async () => {
    if (accessToken === null) return;

    try {
      await DocumentService.deleteDoc(accessToken, documentId);
      setDocuments((allDocuments: Array<DocumentInterface>) =>
        allDocuments.filter(document => document.id !== documentId)
      )
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='document-card-menu-container' onClick={() => setToggleMenu(!toggleMenu)} onBlur={() => handleOnBlurBtn}>
      {/* <button onClick={() => setToggleMenu(!toggleMenu)} onBlur={handleOnBlurBtn}> */}
      <CiMenuKebab className='card-menu-logo' />
      {/* </button> */}
      {toggleMenu &&
        <div className='document-menu'>
          <button onClick={deleteDocument}>Delete</button>
        </div>}
    </div>
  )
}

export default DocumentMenu