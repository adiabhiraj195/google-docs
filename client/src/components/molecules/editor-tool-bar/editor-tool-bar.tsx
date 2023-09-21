import './editor-tool-bar.css';
import { useContext } from 'react';
import { EditorContext } from '../../../context/editor-context';
import { BiUndo, BiRedo } from 'react-icons/bi';
import { EditorState } from 'draft-js';
import { MdLockOutline } from 'react-icons/md';
import { DocumentContext } from '../../../context/document-context';

const EditorToolBar = () => {
  const { editorState, setEditorState } = useContext(EditorContext);
  const { setShareDocWindow } = useContext(DocumentContext);

  const handleUndo = () => {
    setEditorState(EditorState.undo(editorState));
    console.log("undo")
  }
  const handleRedo = () => {
    setEditorState(EditorState.redo(editorState));
  }
  const handleShareBtn = ()=>{
    setShareDocWindow(true);
  }
  return (
    <div className='editor-tool-bar'>
      <div className='undo-redo-wrap'>
        <div className='undo undo-redo' onClick={handleUndo}>
          <BiUndo />
        </div>
        <div className='redo undo-redo' onClick={handleRedo} >
          <BiRedo />
        </div>
      </div>
      <div className='tool-bar-operation-wrap'>
        <div className='share-document-window-btn' onClick={handleShareBtn}>
          <MdLockOutline />
          <p>Share</p>
        </div>
      </div>
    </div>
  )
}

export default EditorToolBar;