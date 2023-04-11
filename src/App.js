import { Route, Routes } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFound from './components/NotFound';
import AuthContext from './store/auth-context';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Suspense fallback={null}>
        <Routes>
        <Route path='/' exact element={authCtx.isLoggedIn ? <HomePage /> : <LoginPage />} />
        <Route path='/login' exact element={<LoginPage />} />
        <Route path='/register' exact element={<RegisterPage/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Suspense>  
  );
}

export default App;
