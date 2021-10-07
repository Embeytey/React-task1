
import React from 'react'
import ReactDom from 'react-dom';
import Home from './Components/Home';
// import Page from './components/Page';
// import Page from './components/Page';
import Page from './Components/Page'


// const cards=[1,2,3,4,5,6,7,8];
function App() {

    // const classes =useStyle()
    return (
        // <>
        //  <CssBaseline/>
        //  <AppBar position="relative">
        //  <Toolbar> 
        //      <PhotoCamera className={classes.icon} />
        //          <Typography variant='h6'> Photo Album</Typography>
        //      </Toolbar>
        //  </AppBar>
        //  <main>
        //      <div className={classes.container}> 
        //      <Container maxWidth="sm">
        //          <Typography variant="h2" align="center" color="textPrimary" gutterBottom> Photo Album</Typography>
        //          <Typography variant="h6" align="center" color="textSecondary" paragraph> Hello family and friends that are part of me, who are the reason for me to be who i am</Typography>
        //          <div className={classes.button}>
        //              <Grid Container spacing={2} >
        //                 <Grid item >
        //                     <Button variant="contained" color="primary">
        //                         see my photo
        //                     </Button>
        //                     <Button variant="outlined" color="primary">
        //                         see my photo
        //                     </Button>
        //                 </Grid>
                        
        //              </Grid>
        //          </div>

        //      </Container>

        //      </div>
        //      <Container className={classes.cardGrid}   maxWidth="md">
                 
        //          <Grid container spacing={4}>
        //              {cards.map(()=>(
        //                 <Grid item spacing xs={12} sm={6} md={4}> 
        //                 <card className={classes.card}>
        //                     <CardMedia
        //                         className={classes.CardMedia} 
        //                         height='140'
        //                         component='img'
        //                         alt='imageee'
        //                         // src={}
        //                         image="meskel.jpg"
        //                         //image="https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/"
        //                         // title="Image random"
                                
        //                     />
        //                     {console.log("image dispaly")}
        //                     <CardContent className={classes.CardContent}>
        //                         <Typography gutterBottom variant="h5">heading</Typography>
        //                         <Typography> this is media card session you can use</Typography>
        //                     </CardContent>  
        //                     <CardActions>
        //                       <Button size="small">View </Button>
        //                       <Button size="medium">Edit</Button>
        //                     </CardActions>                                          
        //                 </card>
        //             </Grid>
        //              ))}
                
        //         </Grid>
        //      </Container>
        //  </main>
        //  <footer className={classes.footer}>
        //     <Typography variant='h6' align="center" gutterBottom> footer  </Typography>
        //     <Typography variant='subtitle1' align='center' color='textSecondary'> something has to give the foote a purpose </Typography>
        //  </footer>
        // </>
    //     <>
        
    //     <main>
    //     <container>
    //         <div className={classes.container}>
    //         <Grid container spacing={2}>
    //             <Grid item spacing={2} xs={6} >

    //                 <card classNames={classes.card}>
    //                     <CardMedia className={classes.CardMedia}
    //                         component='img'
    //                         image='buffl.jpg'>
    //                     </CardMedia>
    //                 </card>
    //                 <card className={classes.Card}>


    //                 </card>
    //                 </Grid>
                    
    //                 <Grid item spacing={2} xs={6}>
    //                 <card classNames={classes.card}>
    //                     <Typography variant='h3' alignItems="center"  gutterBottom> Welcome to Buffl </Typography>
    //                     <Typography variant='inherit'> Glad to have you join us! Please note that we are currently still in a beta phase. If something is not running smoothly yet or you have any suggestions let us know. Just write us an email to captain@buffl.co</Typography>
    //                 </card>
    //                 <card className={classes.Card}>


    //                 </card>

    //             </Grid>

    //         </Grid>
    //         </div>
    //     </container>
    // </main>
    // <footer className={classes.footer} >
    //     <Grid item spacing={6}>
    //   <Button variant='contained' size='large' style={{marginRight: 50+'em'}}>Skip</Button>
    //   <Button variant='contained' size='large'>Next</Button>
    //   </Grid>
    // </footer>
    // </>
    <div>
        {/* <Home /> */}
        <Page/> 
    </div>
    
    )
}

export default App;