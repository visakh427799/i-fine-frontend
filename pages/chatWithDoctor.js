import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import UserNavbar from '../Components/userNavbar'
import {useState,useEffect} from 'react'
import axios from 'axios'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
});

const chatWithDoctor = () => {

    const [user, setUser] = useState()
    const [messages,setMessages]= useState([])
    const [message,setMessage]=useState("")
    const [doctors,setDoctors]=useState([])
    const [doctor,setDoctor]=useState("")
    const [load,setLoad]=useState(false)
    
    useEffect(() => {
     

        axios.get('http://localhost:5000/admin/getallDoctors').then((resp)=>{
            if(resp.data.data){
                setDoctors(resp.data.data)
                console.log(resp.data.data);
            }
       }).catch((err)=>{
           console.log(err);

       })
      
        
        // let u_id=localStorage.getItem("user_id");
  
        // if(u_id){
  
        //   axios.post('http://localhost:5000/admin/getUserDetails',{u_id}).then((resp) => {
        //     if (resp.data.success) {
        //       setUser(resp.data.data)
        //       console.log(resp.data.data);
        //     }
    
        //   }).catch((err) => {
    
        //   })
        // }
        // else{
           
        // }
    
    
  
    },[])

      const handleMessage=(doctor_id)=>{
        let u_id=localStorage.getItem("user_id");
        console.log(doctor_id,u_id);
        setDoctor(doctor_id)
        setLoad(true)
        axios.post('http://localhost:5000/getChats',{u_id,doctor_id}).then((resp) => {
            if (resp.data.success) {
            //   setMessages(resp.data.data)
              console.log(resp.data.data);
            }
    
          }).catch((err) => {
    
          })

      }

      const sendMessage =()=>{
        let u_id=localStorage.getItem("user_id");
      
        axios.post('http://localhost:5000/sendMessage',{u_id,doctor,message}).then((resp) => {
            if (resp.data.success) {
              
              console.log(resp.data.data);

            }
    
          }).catch((err) => {
    
          })
      }

  const classes = useStyles();

  return (
      <div>
          <UserNavbar/>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message text-center mt-5">Chat With doctor</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src={user?user.dat2.photo:""} />
                        </ListItemIcon>
                        <ListItemText primary={user?user.dat1.name:""}></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <Grid item xs={12} style={{padding: '10px'}}>
                    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                </Grid>
                <Divider />

                <List>
                    {
                        doctors.length>0? doctors.map((dat)=>{
                            return(
                                <ListItem button key="RemySharp" onClick={()=>{handleMessage(dat._id)}}>
                                <ListItemIcon>
                                    <Avatar alt="Remy Sharp" src={dat.photo} />
                                </ListItemIcon>
                                <ListItemText primary={dat.name}>{dat.name}</ListItemText>
                                <ListItemText secondary="" align="right"></ListItemText>
                            </ListItem>

                            )
                        }):<></>
                    }
                    
                    
                </List>
            </Grid>
            <Grid item xs={9}>
            {
              messages.length>0?
                <List className={classes.messageArea}>
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary="09:31"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    
                </List>:<>Start Messaging</>
           
              }
                <Divider />

               

    {
        load?
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="oulined-basic-email"
                        name="msg"
                        onChange={(e)=>{setMessage(e.target.value)}}
                        
                        label="Type Something" fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add"><SendIcon onClick={sendMessage}/></Fab>
                    </Grid>
                </Grid>:<></>
    }




            </Grid>
        </Grid>
      </div>
  );
}

export default chatWithDoctor;