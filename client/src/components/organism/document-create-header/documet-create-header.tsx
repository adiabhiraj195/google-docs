import './document-create-header.css';
import Logo from '../../atom/logo/logo';
import DocumentSearchbar from '../../atom/document-search-bar/document-search-bar';
import UserDropDown from '../../atom/user-drop-down/user-drop-down';

const DocumentCreateHeader = () => {
  return (
    <div className='document-create-header'>
      <div className='create-logo-container'>
        <Logo />
        <h3>Docs</h3>
      </div>
      <DocumentSearchbar />
      <UserDropDown />
    </div>
  )
}

export default DocumentCreateHeader;