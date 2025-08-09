import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/common/NotFound';
import Home from './guests/pages/Home';
import Leaderboard from './guests/pages/Leaderboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/leaderboard' element={<Leaderboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;