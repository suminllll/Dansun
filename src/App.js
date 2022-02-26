import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Writing from './pages/Writing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Writing" element={<Writing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
