import './editor-tool-bar.css';
import { useContext } from 'react';
import { EditorContext } from '../../../context/editor-context';
import { BiUndo, BiRedo } from 'react-icons/bi';
import { EditorState } from 'draft-js';
import { MdLockOutline } from 'react-icons/md';
import { DocumentContext } from '../../../context/document-context';
// import SharedUsers from '../shared-users/shared-users';
import ShareUser from '../../atom/share-user/share-user';
import useAuth from '../../../hooks/useAuth';

const EditorToolBar = () => {
  const { editorState, setEditorState } = useContext(EditorContext);
  const { setShareDocWindow, document } = useContext(DocumentContext);
  const { userId } = useAuth();

  const handleUndo = () => {
    setEditorState(EditorState.undo(editorState));
    console.log("undo")
  }
  const handleRedo = () => {
    setEditorState(EditorState.redo(editorState));
  }
  const handleShareBtn = () => {
    setShareDocWindow(true);
  }
  // console.log(document)
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
        <div className='shared-user-container'>
          {document?.users?.map((user) => {
            return (
              <ShareUser
                key={user?.id}
                id={user?.id as number}
                email={user?.email as string}
              />)
          })}
        </div>
        <button
          className='share-document-window-btn'
          onClick={handleShareBtn}
          disabled={userId === document?.userId ? false : true}
        >
          <MdLockOutline />
          <p>Share</p>
        </button>
      </div>
    </div>
  )
}

export default EditorToolBar;