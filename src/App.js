import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ThemesProvide } from './components/Context/UseContext';
import Header from './components/Header/Header';
import Navbar from './components/Header/Headerlist/Navbar';


function App() {
  const [uname,setUname] = React.useState()
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <ThemesProvide.Provider value={[uname,setUname]}>
          <Header />
        </ThemesProvide.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
