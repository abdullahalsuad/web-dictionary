/* eslint-disable no-unused-vars */
import { Container } from '@material-ui/core';
import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';
import Definitions from './Component/Definitions/Definitions';
import Header from './Component/Header/Header';

function App() {
  const [word, setWord] = useState('')
  const [meanings, setmeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const dictionaryApi = async() => {
    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
        setmeanings(data.data)
    } catch (error){
      console.log(error);
    }
    }

  useEffect(() =>{
    dictionaryApi()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word, category])


  return (
    <div 
      style={{
        height: "100vh",
        backgroundColor: "#282c34",
        color: 'white',
        // backgroundColor: LightTheme ? "#fff" : "#282c34",
        // color: LightTheme ? "black" : "white",
        // transition: "all 0.5s linear",
    }}>
     <Container maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          // justifyContent: "space-evenly",
    }}
     >
     <Header 
        category={category}
        setCategory={setCategory}
        setWord={setWord}
        word={word}
        setmeanings={setmeanings}
        // LightTheme={LightTheme}
     />
      {meanings && (
          <Definitions
            meanings={meanings}
            word={word}
            // LightTheme={LightTheme}
            category={category}
          />
        )}
     </Container>
    </div>
  );
}

export default App;
