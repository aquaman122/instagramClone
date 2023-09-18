import './App.css';
import Auth from './component/Auth/Auth';
import MainPage from './component/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import SignUp from './component/Auth/SignUp/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Auth />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
