import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contract from './Components/Contract/Contract';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path={'about'} element={<About></About>}></Route>
        <Route path='contract' element={<Contract></Contract>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
