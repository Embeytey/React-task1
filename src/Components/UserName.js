import React from 'react'
import {Button,Grid,Typography,TextField} from '@mui/material';
import useStyle from './Style';
import { useState } from 'react';


export default function UserName({preStep,nextStep}) {

    const styles=useStyle();

    const previous=e=>{
        e.preventDefault();
        preStep();
    }
    const next=e=>{
        e.preventDefault();
        nextStep();
    }
    const [user,setUser]=useState();

    const handleChange=e=>{
        setUser(e.target.value);
    }
    return (
        <div>
        <div className={styles.design} >
         
          <Typography variant='h4'>How would you like to be called</Typography>
          <div className={styles.userdesgin}>
          <Typography variant='inherit'>Choose user name</Typography>
          </div>
          <div className={styles.subdesign}>  
          <TextField id="outlined-basic" fullWidth label="fullwidth" label="choose-username"  variant="outlined" onChange={handleChange} /> 
          </div>

        </div>
 
        <div className={styles.footer}>  
        <Grid item spacing={6}>
          <Button  onClick={previous} size='large' variant='contained' style={{marginRight: 50+'em'}}> Back </Button>
          <Button onClick={next} size='large' variant='contained'>Next </Button>
          </Grid>
        </div>
        </div>
    )
}
