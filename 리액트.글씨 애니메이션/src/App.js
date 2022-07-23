import './App.css';
import { Routes, Route} from 'react-router-dom';
import Nav from './component/Nav';
import Main from './pages/Main';
import Footer from './component/Footer';
import Coffee from './pages/Coffee';



function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/coffee' element={<Coffee/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
