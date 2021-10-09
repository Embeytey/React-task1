import React from 'react'
// import Typography from 
import { Typography, Grid,Button} from '@mui/material';
import useStyle from './Style';


export default function ProffessionField({preStep, nextStep}) {
    const styles=useStyle();
    const prevStep=e=>{
        e.preventDefault();
        preStep();
    }
    const nexStep=e=>{
        e.preventDefault();
        nextStep();
    }
    


    return (
        <div>
            <div className={styles.design}>
           <Typography variant='h4'> What do you study</Typography>
           </div>
           <div className={styles.footer}>  
          <Grid item spacing={6}>
          <Button  onClick={prevStep} size='large' variant='contained' style={{marginRight: 50+'em'}}> Back </Button>
          <Button onClick={nexStep} size='large' variant='contained'>Next </Button>
          </Grid>
        </div>
        </div>
    );
}

