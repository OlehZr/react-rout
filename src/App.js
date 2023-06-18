import { Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/home/Home';
import Contacts from './components/pages/contacts/Contacts';
import Publications from './components/pages/publications/Publications';
import Pictures from './components/pages/pictures/Pictures';

function App() {
  return (
    <div className="App">
        <NavBar/>

        <Routes>
          <Route index element={<Home/>}/>
          <Route path='contacts' element={<Contacts/>}/>
          <Route path='pictures' element={<Pictures/>} />
          <Route path='publications' element={<Publications/>} />
        </Routes>
    </div>
  );
}

export default App;
