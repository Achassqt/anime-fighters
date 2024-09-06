import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import FighterPage from './pages/FighterPage';
import AddFighterPage from './pages/AddFighterPage';
import AddAnimePage from './pages/AddAnimePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fighters" element={<FighterPage />} />
        <Route path="/add-anime" element={<AddAnimePage />} />
        <Route path="/add-fighter" element={<AddFighterPage />} />
        {/* <Route path="/fights" element={<FightPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
