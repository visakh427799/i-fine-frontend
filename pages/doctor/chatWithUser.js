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
import DoctorNavar from '../../Components/doctorNavbar'
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

const chatWithUser = () => {

    const [user, setUser] = useState()
    const [messages,setMessages]= useState([])
    const [message,setMessage]=useState("")
    const [users,setUsers]=useState([])
    const [dt,setDt]=useState({
        name:"",
        url:"",
    })
    const [doctor,setDoctor]=useState("")
    const [load,setLoad]=useState(false)
    
    useEffect(() => {
     

        axios.get('http://localhost:5000/admin/getallUsers').then((resp)=>{
            if(resp.data.data){
                setUsers (resp.data.data)
                console.log(resp.data.data);
            }
       }).catch((err)=>{
           console.log(err);

       })
      
        
        
    
    
  
    },[])

     
    useEffect(() => {
     
      
        
        let d_id=localStorage.getItem("d_id");
  
        if(d_id){
  
          axios.post('http://localhost:5000/doctor/getDoctorDetails',{d_id}).then((resp) => {
            if (resp.data.success) {
              setUser(resp.data.dtr)
              console.log(resp.data.dtr);
            }
    
          }).catch((err) => {
    
          })
        }
        else{
           router.push('/signin')
        }
    
    
  
    },[])

      const handleMessage=(u_id,d_name,d_url)=>{
        let doctor_id=localStorage.getItem("d_id");
       
        let obj={
            name:d_name,
            url:d_url,
        }
        console.log(obj);
        setDt(obj)
        setDoctor(u_id)
        setLoad(true)
        axios.post('http://localhost:5000/getChats',{u_id,doctor_id}).then((resp) => {
            if (resp.data.success) {

                let dat=resp.data.data;
              setMessages(dat.chats)
              console.log(dat.chats);
            }
            else{
                setMessages([])
            }
    
          }).catch((err) => {
    
          })

      }

      const sendMessage =()=>{
        let d_id=localStorage.getItem("d_id");
      
        axios.post('http://localhost:5000/sendMessage-user',{d_id,doctor,message}).then((resp) => {
            if (resp.data.success) {
              
              console.log(resp.data.success);
              handleMessage(doctor,dt.name,dt.url)
              setMessage("")

            }
    
          }).catch((err) => {
    
          })
      }

  const classes = useStyles();

  return (
      <div>
          <DoctorNavar/>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message text-center mt-5">
                <div style={{marginLeft:400}}>
                {
                    load?<ListItem button  key="RemySharp">
                    <ListItemIcon>
                        <Avatar alt="Remy Sharp" src={dt.url} />
                    </ListItemIcon>
                    <ListItemText primary={dt.name}>{dt.name}</ListItemText>
                    <ListItemText secondary="" align="right"></ListItemText>
                </ListItem>:<></>
                }
                </div>
                </Typography>
                
                

            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src={user?user.photo:""} />
                        </ListItemIcon>
                        <ListItemText primary={user?user.name:""}></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <Grid item xs={12} style={{padding: '10px'}}>
                    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                </Grid>
                <Divider />

                <List>
                    {
                        users.length>0? users.map((dat)=>{
                            return(
                                <ListItem button  key="RemySharp" onClick={()=>{handleMessage(dat._id,dat.name,dat.photo)}}>
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
            <List className={classes.messageArea}>
            {
              messages.length>0?
              messages.map((m)=>{
                  if(m.is_user){
                      return(
                        <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="left" color="primary" primary={m.msg_text}></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary={m.msg_time}></ListItemText>
                            </Grid>
                        </Grid>
                      </ListItem>
                      )
                  }
                  else{
                      return(
                        <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary={m.msg_text}></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary={m.msg_time}></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                      )
                  }
              }) :<>Start Messaging</>
               
                    
                    
                    
               
           
              }
              </List>
                <Divider />

               

    {
        load?
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="oulined-basic-email"
                        name="msg"
                        onChange={(e)=>{setMessage(e.target.value)}}
                        value={message}
                        label="Type Something" fullWidth />
                    </Grid>
                    <Grid xs={1} align="right" onClick={sendMessage}>
                        <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                    </Grid>
                </Grid>:<></>
    }




            </Grid>
        </Grid>
      </div>
  );
}

export default chatWithUser;