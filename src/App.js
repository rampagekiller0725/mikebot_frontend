import Nav from '../src/components/Navigation/nav';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Cards from './components/exchange/Exchange';
import MineRoute from './components/mine/MineRoute';
import FriendRoute from './components/friends/FriendRoute';
import EarnRoute from './components/earn/EarnRoute';

function App() {
  return (
    <div className="App">
      <div className='bg-black'>
        <BrowserRouter>
          <Routes>
            <Route path='/:username' element={<Cards />} />
            <Route path='/mine/:username' element={<MineRoute/>} />
            <Route path='/friends/:username' element={<FriendRoute/>} />
            <Route path='/earn/:username' element={<EarnRoute />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
