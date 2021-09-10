import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import styles from './Header.module.css';
import countries from '../../data/category';

const Header = ({category,setCategory, setWord,word,setmeanings}) => {
    
    const darkTheme = createTheme({
        palette: {
            primary: {
                main:"#fff",
              },
          type: 'dark',
        },
      });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
        setmeanings([]);
      };

    return (
        <div className={styles.header}>
        <span className={styles.title}>{word ? word : "Web Dictionary"}</span>
        <div className={styles.inputs}>
        <ThemeProvider theme ={darkTheme} >
            <TextField
                className={styles.search}
                id="filled-basic"
                label="Search a Word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
            />
            <TextField
                className={styles.select}
                select
                label="Language"
                value={category}
                onChange={(e) => handleChange(e.target.value)}
                >
           {countries.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
                </TextField>
        </ThemeProvider>
        </div>
        </div>
    )
}

export default Header

