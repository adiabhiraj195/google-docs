import React from 'react'
import DocumentMenuBar from '../../molecules/document-menu-bar/document-menu-bar';
import EditorToolBar from '../../molecules/editor-tool-bar/editor-tool-bar';

const DocumentHeader = () => {
    return (
        <div className='document-page-header'>
            <DocumentMenuBar />
            <EditorToolBar />
        </div>
    )
}

export default DocumentHeader;