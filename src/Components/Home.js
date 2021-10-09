import React, { useContext } from 'react';
import { Typography, Button,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container } from '@mui/material';
// import { PhotoCamera } from '@mui/icons-material';
import useStyle from './Style';
import { useState } from 'react';
import Proffession from './Proffession';
import proffessionField from './ProffessionField';
import University from './University';
import UserName from './UserName';
import Work from './Work';
// import { multiStepContext } from '../StepContext';


export default function Home({nextStep}) {
 
    const next=e=>{
        nextStep();
    }
    const classes=useStyle();
    
    return (
        <div>
        <main>
        <container>
            <div className={classes.container}>
            <Grid container spacing={2}>
                <Grid item spacing={2} xs={6} >

                    <card classNames={classes.card}>
                        <CardMedia className={classes.CardMedia}
                            component='img'
                            image='buffl.jpg'>
                        </CardMedia>
                    </card>
                    <card className={classes.Card}>


                    </card>
                    </Grid>
                    
                    <Grid item spacing={2} xs={6}>
                    <card classNames={classes.card}>
                        <Typography  variant='h3' alignItems="center"  gutterBottom> Welcome to Buffl </Typography>
                        <Typography variant='inherit'> Glad to have you join us! Please note that we are currently still in a beta phase. If something is not running smoothly yet or you have any suggestions let us know. Just write us an email to captain@buffl.co</Typography>
                    </card>
                    <card className={classes.Card}>


                    </card>

                </Grid>

            </Grid>
            </div>
        </container>
    </main>
        <footer className={classes.footer} >
        <Grid item spacing={6}>
        <Button variant='contained' size='large' style={{marginRight: 50+'em'}}>Skip</Button>
        <Button onClick={nextStep} variant='contained' size='large'>Next</Button>
        </Grid>
        </footer>
    </div>
    )
}


