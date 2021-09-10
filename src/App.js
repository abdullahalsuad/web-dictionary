/* eslint-disable no-unused-vars */
import { Container,Switch, withStyles } from '@material-ui/core';
import { grey } from "@material-ui/core/colors";
import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';
import Definitions from './Component/Definitions/Definitions';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

function App() {
  const [word, setWord] = useState('')
  const [meanings, setmeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [lightTheme, setlightTheme] = useState(false);

  const dictionaryApi = async() => {
    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
        setmeanings(data.data)
    } catch (error){}
    }

  useEffect(() =>{
    dictionaryApi()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word, category])

  const DarkMode = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  
  return (
    <div 
      style={{
        height: "100vh",
        backgroundColor: lightTheme ? "#fff" : "#282c34",
        color: lightTheme ? "black" : "white",
        transition: "all 0.5s linear",
    }}>
     <Container maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
    }}
     >
      <div style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}>
      <span>{lightTheme ?  "Dark Mode" :"Light Mode"}</span>
        <DarkMode   
          checked={lightTheme}
          onChange={() => setlightTheme(!lightTheme)} 
        />
      </div> 
     <Header 
        category={category}
        setCategory={setCategory}
        setWord={setWord}
        word={word}
        setmeanings={setmeanings}
        lightTheme={lightTheme}
     />
      {meanings && (
          <Definitions
            meanings={meanings}
            word={word}
            lightTheme={lightTheme}
            category={category}
          />
        )}
        <Footer />
     </Container>
    </div>
  );
}

export default App;
