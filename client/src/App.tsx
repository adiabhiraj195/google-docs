import './App.css';
import { Route, Routes } from 'react-router-dom';

import Register from './pages/register/register.page';
import Login from './pages/login/login.page';
import Create from './pages/document/create';
import Document from './pages/document/document';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/register' Component={Register} />
        <Route path='/' Component={Login} />
        <Route path='document/create' Component={Create} />
        <Route path='document/:id' Component={Document} />
      </Routes>
    </div>
  );
}

export default App;
