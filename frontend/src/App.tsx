import React, { useEffect } from 'react';
import { Home, About, Author, Predict } from './pages';
import { ThemeProvider } from '@mui/material';
import {DarkTheme, LightTheme} from './Styles/Theme';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export const ThemeContext = createContext<object>({})

function App() {
  const [isLightTheme, setTheme] = useState<boolean>(true)
  

  const store = {
    theme: [isLightTheme, setTheme]
  }
  
  return (
    <ThemeContext.Provider value={store}>
      <ThemeProvider theme={isLightTheme ? LightTheme : DarkTheme}>
        <Router>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/predict' element={<Predict></Predict>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/author' element={<Author></Author>}></Route>
          </Routes>
        </Router>    
      </ThemeProvider>
    </ThemeContext.Provider>
    
  );
}

export default App;
