import {React,useState }from 'react'
import { Typography,Grid,Button } from '@mui/material'
import useStyle from './Style';

export default function Proffession({preStep,nextStep}) {
    const styles=useStyle();

    const previous=e=>{
        e.preventDefault();
        preStep();
    }
    const next=e=>{
        e.preventDefault();
        nextStep();
    }
    return (
        <div>
            <div className={styles.design}>
            <Typography variant='h4'> Tell us about your self</Typography>
            
            <div className={styles.userdesgin}>
                <Typography variant='inherit'> what describes the best of what you use buffl for?</Typography>
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
