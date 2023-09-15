import React from 'react'
import DocumentCreateHeader from '../../components/organism/document-create-header/documet-create-header';
import CreateDocumentBtn from '../../components/atom/create-document-btn/create-document-btn';
import Spinner from '../../components/atom/spinner/spinner';
import useDocument from '../../hooks/useDocument';

const Create = () => {
  const {loading, documents} = useDocument();
  return (
    <div className='document-create-container'>
      <DocumentCreateHeader />
      <CreateDocumentBtn/>
      {
        loading ? 
        <Spinner/>:
        <div> document</div>
        //fetch document 
        //handle them as shared and owne
      }
    </div>
  )
}

export default Create;
