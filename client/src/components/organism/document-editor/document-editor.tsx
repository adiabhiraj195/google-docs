import { useContext } from 'react'
import { Editor } from "draft-js";
import { EditorContext } from '../../../context/editor-context';

const DocumentEditor = () => {
    const { editorState, editorRef, handleEditorChange, focusEditor } = useContext(EditorContext);

    return (
        <div className='editor-wrap' onClick={focusEditor}>
            <Editor
                ref={editorRef}
                editorState={editorState}
                onChange={handleEditorChange}
            />
        </div>
    )
}
export default DocumentEditor;
