import { Routes, Route } from 'react-router-dom';
import  CharacterInformation  from './components/CharacterInformation';
import Home from './components/Home';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character-info/:slug" element={<CharacterInformation />} />
    </Routes>
    </div>
  );
}

export default App;
