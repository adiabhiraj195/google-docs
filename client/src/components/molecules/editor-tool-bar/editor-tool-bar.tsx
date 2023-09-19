import './editor-tool-bar.css';
import { useContext } from 'react';
import { EditorContext } from '../../../context/editor-context';
import { BiUndo, BiRedo } from 'react-icons/bi';
import { EditorState } from 'draft-js';

const EditorToolBar = () => {
  const { editorState, setEditorState } = useContext(EditorContext);

  const handleUndo = () => {
    setEditorState(EditorState.undo(editorState));
    console.log("undo")
  }
  const handleRedo = () => {
    setEditorState(EditorState.redo(editorState));
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
      </div>
    </div>
  )
}

export default EditorToolBar;