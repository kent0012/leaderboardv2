import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/common/NotFound';
import Dashboard from './guests/pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;