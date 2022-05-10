import React from 'react'
import UserNavbar from '../Components/userNavbar'
import Sp from '.././utils/splsns'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {useRouter} from 'next/router'
let Specializations=Sp()
function Consultations() {
const router =useRouter();
     let arr=[]
     Specializations.map((d)=>{
       arr.push({spec:d.title.text})
     })
     console.log(arr);
 const handleSpec=(val)=>{
    alert(val)
    router.push(`/doctorsSpecialized?category=${val}`)

 }
 
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 140,
        width:200,
        lineHeight: '90px',
      }));
      
      const darkTheme = createTheme({ palette: { mode: 'dark' } });
      const lightTheme = createTheme({ palette: { mode: 'light' } });
    console.log(Specializations);
  return (
    <div>
        <UserNavbar/>
            <h2 className='text-center'>Choose specialization</h2>
        <Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={12} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'primary',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr 1fr 1fr 1fr' },
                gap: 2,
              }}
            >
              {Specializations.map((s,k) => (
                <div onClick={()=>handleSpec(s.title.text)}>
                <Item key={k} elevation={10}>
              <div className=" ml-5 pt-5">


                <Avatar
                    alt="Remy Sharp"
                    src={s.image.url}
                    sx={{ width: 56, height: 56}}
                />
              </div>
                    
                 <h6>{s.title.text}</h6> 
                </Item>
                </div>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>


    </div>
  )
}

export default Consultations