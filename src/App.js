import './App.css';
import Image from './components/Image/Image';
import React from 'react';

export const ThemeContext = React.createContext();
export const themes = {
  white: {
    name: "White",
    background: "#FFF",
    
  },
  color: {
    name: "Color",
    background: "linear-gradient(90deg, rgba(61,247,5,1) 0%, rgba(246,62,4,1) 27%, rgba(0,212,255,1) 51%, rgba(188,108,251,1) 75%, rgba(251,108,206,1) 98%)"
  }
}

function App() {

  const [themeState, setThemeState] = React.useState(themes.color);

  return (
    <ThemeContext.Provider value={{themeState, setThemeState}}>
    <div className="App" >

      <Image></Image>

    </div>
    </ThemeContext.Provider>
  );
}

export default App;


//linear-gradient(90deg, rgba(61,247,5,1) 0%, rgba(246,62,4,1) 27%, rgba(0,212,255,1) 51%, rgba(188,108,251,1) 75%, rgba(251,108,206,1) 98%);