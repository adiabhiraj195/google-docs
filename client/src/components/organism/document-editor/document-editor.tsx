import './document-editor.css';
import { useContext, useRef } from 'react'
import { EditorContext } from '../../../context/editor-context';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const DocumentEditor = () => {
    const {
        editorState,
        handleEditorChange,
        focusEditor
    } = useContext(EditorContext);
    // const [editorValue, setEditorValue] = useState("");

    const editorRef = useRef(null);
    return (

        <div className='document-editor-container'>
            {/* <div className='editor-wrap' > */}
            <ReactQuill
                value={editorState}
                onChange={handleEditorChange}
                className='editor'
                ref={focusEditor}
            />
            {/* </div> */}
        </div>
    )
}
export default DocumentEditor;
