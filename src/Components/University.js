import React from 'react'
import { useState } from 'react';
import useStyle from './Style';
import { Button,Typography,Grid,TextField } from '@mui/material';
import LocationUniversity from './LocationUniversity';

export default function University({preStep,nextStep}) {
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
         
          <Typography variant='h4'>University</Typography>
          <LocationUniversity />
      
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
