// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
import React from "react";
import Select from '@mui/material/Select';
import { Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import useStyle from "./Style";
import { Campus } from "./Campus";

export default function SelectLabels() {
  const [country, setName] = React.useState('');
  const styles=useStyle();
  

  const options=[
    {label:'Tigray',value:'tigray'},
    {label: 'German',value:'german'},
    {label:'France',value:'france'},
    {label:'America', value:'america'}
  ]
  
  const campus=[
    {name:'Adigrat University',country:'tigray',value:'adigrat'},
    {name:'Mekelle University',country:'tigray',value:'mekelle'},
    {name:'buffl University',country:'german',value:'munic'}
  ]
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const [filterdUniversities,setFilteredUniversities]=React.useState([]);
    const handlechange=(Input)=>{
        setFilteredUniversities(Input.target.value);
    }
  
  return (
    <div>
      <div className={styles.userdesgin}>
          <Typography variant='inherit'>Where is your University located?</Typography>
      </div>
      <div className={styles.userdesgin}>
      <FormControl sx={{ m: 1, minWidth: 490 }}>
        <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={country}
          label="Country"
          onChange={handleChange}
        >

{/*           
          <MenuItem value="">
            
          </MenuItem> */}
          {/* <MenuItem value={'Mekelle'}>Mekelle </MenuItem>
          <MenuItem value={'Adigrat'}>Adigrat </MenuItem>
          <MenuItem value={'Axsum'}>Axsum </MenuItem> */}
          {/* <MenuItem value={'Machiew'}>Maichew </MenuItem> */}
          {
            options.map((option) => (
              <MenuItem value={option.value}>{option.label} </MenuItem>
            )
            )
}
        </Select>
        {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </FormControl>
      </div>
      <div className={styles.userdesgin}>
        <Typography variant='inherit'>What is the name of your university</Typography>
      </div>
      <div className={styles.userdesgin}>
      <FormControl sx={{ m: 1, minWidth: 490 }}>
        <Select
          value={country}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {/* <MenuItem value=""> */}
            {/* <em>None</em> */}
          {/* </MenuItem>
          <MenuItem value={'Mekelle'}>Mekelle University</MenuItem>
          <MenuItem value={'Adigrat'}>Adigrat Univrsity</MenuItem>
          <MenuItem value={'Axsum'}>Axsum University</MenuItem>
          <MenuItem value={'Machiew'}>Maichew University</MenuItem> */}
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
    </div>
  )
  }


// const currencies = [
//   {
//     value: 'USD',
//     label: '$',
//   },
//   {
//     value: 'EUR',
//     label: '€',
//   },
//   {
//     value: 'BTC',
//     label: '฿',
//   },
//   {
//     value: 'JPY',
//     label: '¥',
//   },
// ];

// export default function SelectTextFields() {
//   const [currency, setCurrency] = React.useState('EUR');

//   const handleChange = (event) => {
//     setCurrency(event.target.value);
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           id="outlined-select-currency"
//           select
//           label="Select"
//           value={currency}
//           onChange={handleChange}
//           helperText="Please select your currency"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="outlined-select-currency-native"
//           select
//           label="Native select"
//           value={currency}
//           onChange={handleChange}
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Please select your currency"
//         >
//           {currencies.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//       </div>
//       <div>
//         <TextField
//           id="filled-select-currency"
//           select
//           label="Select"
//           value={currency}
//           onChange={handleChange}
//           helperText="Please select your currency"
//           variant="filled"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="filled-select-currency-native"
//           select
//           label="Native select"
//           value={currency}
//           onChange={handleChange}
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Please select your currency"
//           variant="filled"
//         >
//           {currencies.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//       </div>
//       <div>
//         <TextField
//           id="standard-select-currency"
//           select
//           label="Select"
//           value={currency}
//           onChange={handleChange}
//           helperText="Please select your currency"
//           variant="standard"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="standard-select-currency-native"
//           select
//           label="Native select"
//           value={currency}
//           onChange={handleChange}
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Please select your currency"
//           variant="standard"
//         >
//           {currencies.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//       </div>
//     </Box>
//   );
// 
 
// export default function LocationUniversity(){
// return
// (
//     <div>
//       <Select options={options}/>
//     </div>
// );


// }