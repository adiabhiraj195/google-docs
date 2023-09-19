import { useContext } from 'react'
import { Editor } from "draft-js";
import { EditorContext } from '../../../context/editor-context';
import './document-editor.css';

const DocumentEditor = () => {
    const { editorState, editorRef, handleEditorChange, focusEditor } = useContext(EditorContext);

    return (

        <div className='document-editor-container'>
            <div className='editor-wrap' onClick={focusEditor}>
                <Editor
                    ref={editorRef}
                    editorState={editorState}
                    onChange={handleEditorChange}
                />
            </div>
        </div>
    )
}
export default DocumentEditor;
