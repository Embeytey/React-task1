import { useState } from "react";
import React from 'react'
import {Typography,TextField,Grid,Button} from '@mui/material'
import useStyle from "./Style";

export default function Work({nextStep,preStep}) {
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
         
          <Typography variant='h4'>Company</Typography>
          <div className={styles.userdesgin}>
          <Typography variant='inherit'>what is the name os the company you work for?</Typography>
          </div>
          <div className={styles.subdesign}>  
          <TextField id="outlined-basic" fullWidth label="fullwidth" label="company-username"  variant="outlined" onChange={handleChange} /> 
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
