import { FC } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Register from './pages/register/register.page';
import Login from './pages/login/login.page';

const App: FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' Component={Register}/>
        <Route path='/login' Component={Login}/>
      </Routes>
    </div>
  );
}

export default App;
