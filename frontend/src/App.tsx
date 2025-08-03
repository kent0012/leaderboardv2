import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/common/NotFound';
import Dashboard from './guests/pages/Dashboard';
import Home from './guests/pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/leaderboard' element={<Dashboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;