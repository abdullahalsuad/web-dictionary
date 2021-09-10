import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import styles from './Header.module.css'
import category from '../../data/category';

const Header = () => {
    
    const darkTheme = createTheme({
        palette: {
            primary: {
                main:"#fff",
              },
          type: 'dark',
        },
      });
    return (
        <div className={styles.header}>
        <span className={styles.title}>Web Dictionary</span>
        <div className={styles.inputs}>
            <ThemeProvider theme ={darkTheme} >
                <TextField id="standard-basic" label="Standard" />
                <TextField
                    select
                    label="Language"
                    value={category}
                    // onChange={(e) => handleChange(e)}
                    className="select"
                >
           {category.map((option) => (
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

