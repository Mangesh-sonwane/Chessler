import './App.css';
import { Routes, Route } from 'react-router-dom';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Loading from './Components/Loading/Loading';

function App() {
  return (
    <div className='App bg-image'>
      <Routes>
        <Route path='/' element={<Loading />} />
        <Route exact path='/leaderboard' element={<Leaderboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
