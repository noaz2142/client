import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link,Grid,Box} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function SignIn() {
    const [inputFiels, setInputFiels]= React.useState([
        {
            name:"idPartDevice",
            label:"enter id for part for device"     ,      
            id:"idPartDevice"  ,
            type:"number"        
        },
        {
            name:"partStatus",
            label:"enter status for part",
            type:"text",
            id:"partStatus"

        },
        {
            name:"idPartDevice",
            label:"enter id for part for device"     ,      
            id:"idPartDevice"  ,
            type:"number"
        },
        {
          name:"dateTaken",
          label:"enter date of taken",
          id:"dateTaken",
          type:"date"
        },
        {
          name:"partPrice",
          label:"enter price of part",
          id:"partPrice",
          type:"number"
        }
   ] )
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            על מנת להכניס חלק למאגר יש למלאות את הטופס
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {/* <MDBInput label='Form control lg' name={item.name} labell={item.label} type={item.type} placeholder={item.placeholder} /> */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="idPartDevice"
              label="enter id for part for device"           
              id="idPartDevice"  
              type="number"
            
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="partStatus"
              label="enter status for part"
              type="text"
              id="partStatus"
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="userId"
              label="enter user id"
              type="number"
              id="userId"
              autoComplete="number"
            />
                        <TextField
              margin="normal"
              required
              fullWidth
              name="dateTaken"
              label="enter date of taken"
              type="date"
              id="dateTaken"
              autoComplete="date"
            />
                        <TextField
              margin="normal"
              required
              fullWidth
              name="partPrice"
              label="enter price of part"
              type="number"
              id="partPrice"
              autoComplete="number"
            /> 
            {/* כפתור שמכניס את החלק */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                להכניס את החלק            
            </Button>
        
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}