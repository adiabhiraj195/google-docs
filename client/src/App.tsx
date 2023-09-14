import { FC } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Register from './pages/register/register.page';
import Login from './pages/login/login.page';
import MainPage from './pages/main/main.page';
import DocumentEditor from './components/organism/document-editor/document-editor';
import Create from './pages/document/create';

const App: FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' Component={Register}/>
        <Route path='/login' Component={Login}/>
        <Route path='/main' Component={MainPage}/>
        <Route path='/document-editor' Component={DocumentEditor}/>
        <Route path='document/create' Component={Create}/>
      </Routes>
    </div>
  );
}

export default App;
