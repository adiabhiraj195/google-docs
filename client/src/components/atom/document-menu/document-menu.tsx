import { useState, FocusEvent } from 'react'
import { CiMenuKebab } from 'react-icons/ci';
import useAuth from '../../../hooks/useAuth';
import DocumentService from '../../../service/document-service';
import useDocuments from '../../../hooks/useDocuments';
import DocumentInterface from '../../../types/interface/document-interface';
import './document-menu.css';

interface DocumentMenuInterface {
  documentId: number;
}
const DocumentMenu = ({
  documentId,
}: DocumentMenuInterface) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { accessToken } = useAuth();
  const { setDocuments, setLoading } = useDocuments();
  const localAT = localStorage.getItem('Token');

  // const handleOnBlurBtn = (event: FocusEvent<HTMLDivElement>) => {
  //   const classList = (event.target as HTMLDivElement).classList;
  //   console.log(classList)
  //   if (!classList.contains("document-menu") || !classList.contains("delete-card-btn")) {
  //     setToggleMenu(false);
  //   }
  // }
  const deleteDocument = async () => {
    // if (accessToken === null) return;
    console.log('delete clicked')
    if(localAT === null) return;
    setLoading(true);
    try {
      // await DocumentService.deleteDoc(accessToken, documentId);
      await DocumentService.deleteDoc(localAT, documentId);
      setDocuments((allDocuments: Array<DocumentInterface>) =>
        allDocuments.filter(document => document.id !== documentId)
      )
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
  }
  return (
    <>
      <div className='document-card-menu-container' 
      onClick={() => setToggleMenu(!toggleMenu)} 
      // onBlur={handleOnBlurBtn}
      >
        <button onClick={() => setToggleMenu(!toggleMenu)} className='menu-logo-container' >
        <CiMenuKebab className='card-menu-logo' />
        </button>
        {toggleMenu &&
          <div className='document-menu'>
            <button className='delete-card-btn' onClick={deleteDocument}>Delete</button>
          </div>}
      </div>
    </>
  )
}

export default DocumentMenu