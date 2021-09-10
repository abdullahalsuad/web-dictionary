/* eslint-disable no-unused-vars */
import { Container } from '@material-ui/core';
import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';

function App() {
  const [word, setWord] = useState('')
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");

  const dictionaryApi = async() => {
    try{
      const data = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/h");
        setMeaning(data.data)
    } catch (error){
      console.log(error);
    }
    }
  console.log(meaning)  
  useEffect(() =>{
    dictionaryApi()
  }, [])


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
     <Header/>
     </Container>
    
    </div>
  );
}

export default App;
