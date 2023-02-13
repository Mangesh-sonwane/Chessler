import './App.css';
import { Routes, Route } from 'react-router-dom';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Loading from './Components/Loading/Loading';
import Dashboard from './Components/Pages/Dashboard';
import Auth from './Components/Loading/Auth';
import ProtectedRoutes from './Components/ProtectedRoutes';
// import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='App bg-image'>
      <Routes>
        <Route path='/' element={<Loading />} />
        <Route exact path='/leaderboard' element={<Leaderboard />}></Route>
        <Route path='/auth' element={<Auth />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
