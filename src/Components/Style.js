import { Style } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';


 const useStyle=makeStyles(()=>({
    container:{
        // width:'610px',
        height:'420px',
        marginTop:'70px',
        marginRight:'100px',
        marginLeft:'100px',
       
        
        // marginTop:'70px',
        // marginRight:'20px',
        // marginLeft:'144',
        
        // padding:'45px 0'   
    },
    design:{
        width:'500px',
        height:'420px',
        marginTop:'70px',
        marginRight:'100px',
        marginLeft:'400px',
        align:'center',
        justifyContent:'center'

    },
    userdesgin:{
     marginTop:'25px',
    },

    subdesign:{
        marginTop:'25px',
    },

//     button:{
//         margintop:'40px',
//         marginBottom:'50px',
//         display:'flex',
//         // flexDirection:
//     },
//     icon:{
//         marginRight:'20px'
//     },
//     cardGrid:{
//         // backgroundColor:'green',
//         padding:'20px',
//     },
//     card:{
//         // height:'100%',
//         display:'flex',
//         marginTop:'100%',
//         flexDirection:'column',
//         backgroundColor:'red'
//     },
//     cardMedia:{
//         marginTop:'400px',
//         marginBottom:'50px',
//         backgroundColor:'green',
//         // paddingTop:'56.25%'
//     },
    cardContent:{
      flexGrow:1,
    },
    footer:{
        // backgroundColor:'blue',
        align:'center',
        display:'flex',
        justifyContent:'center',
        marginRight:'100px',
        padding:'20px 0'
    }

}));

export default useStyle;