import React from 'react'
import DocumentCreateHeader from '../../components/organism/document-create-header/documet-create-header';
import CreateDocumentBtn from '../../components/atom/create-document-btn/create-document-btn';

const Create = () => {
  return (
    <div className='document-create-container'>
      <DocumentCreateHeader />
      <CreateDocumentBtn/>
    </div>
  )
}

export default Create;
