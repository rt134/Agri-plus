import React, { useEffect, useRef, useState } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Chat from '@material-ui/icons/ChatBubbleOutline'
// core components
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import './Style.css'
import Typography from "@material-ui/core/Typography"

import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {format} from 'timeago.js'
import InputBase from '@material-ui/core/InputBase';
import SendIcon from '@material-ui/icons/Send';
import axios from "axios";

import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  avatar: {
    backgroundColor: "#532DA6",
  },
  sideRow : {
      height : 598
  },
  chatBottom : {
    display: 'flex',
    backgroundColor : '#932AAD'
  },
  messageBar : {
    display: 'flex',
    alignItems: 'center',
    width : '100%',
    margin : 5,
  },
  iconButton: {
    padding: 7,
    margin : 3
  },
  input: {
    marginLeft: 2,
    flex: 1,
    paddingLeft : 10,
    color : 'black',
    fontSize : 15,
    fontWeight : 500
  },
  gridList: {
    width: "100%",
    height: 470,
    padding : 0,
  },
  small : { 
    height : 33,
    width  : 33,
    marginTop : 0,
    backgroundColor: "#532DA6"
  },


  allProfileR : {
    backgroundColor : "#e6e6e6",
    display : "flex",
    float : "right",
    width : "100%",
    padding : 7,
    borderRadius : 4,
    marginBottom : 5,
    maxWidth :350
  },

  allProfileL : {
    backgroundColor : "#e6e6e6",
    display : "flex",
    float : "left",
    width : "100%",
    padding : 7,
    borderRadius : 4,
    marginBottom : 5,
    maxWidth :350
},
chatPlaceholder:{
  color:'purple',
  opacity:'.5',
  fontSize:'3vh',
  width:'100%',
  textAlign:'center',
  margin:'auto',
}
  
};

function ChatScreen(props) {
  const {classes, othername, otheremail, loginEmail, conversation} = props
  const SERVER_PATH = 'http://localhost:5000'
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [newMessage] = useState(null);
  const scrollRef = useRef();
  // const socket = useRef();
  
  // const isLoading = props.loading;
  const [isLoading, setLoading] = useState(props.loading);

  useEffect(() => {
    setLoading(props.loading);
  },[props])


  // Check if the message received is of current current open chat
  useEffect(() => {
    newMessage && otheremail === newMessage.sender &&
    setChat(prev => [...prev, newMessage]);
  },[newMessage,otheremail])


  // fetching messages from DB
  useEffect(() => {
    try{
      axios.get(`${SERVER_PATH}/conversation/message/${conversation}`, 
      {withCredentials : true})
      .then(res => {
        setChat(res.data);
        setLoading(false);
      });
    }catch(err){
      console.log(err);
    }
  },[conversation])


  // sending message
  const handleSubmit = (event) => {
    event.preventDefault();
    
    try {
      const node = {
        connversationId : conversation,
        sender : loginEmail,
        text : message
      }

      setChat([...chat, node]);

      axios.post(`${SERVER_PATH}/conversation/message`, 
      {
        connversationId : conversation,
        sender : loginEmail,
        text : message
      },{withCredentials : true})
      
    }catch (err) {
      console.log(err);
    }
    setMessage('');
  }

  return (

      <Card className={classes.sideRow}>
        <CardHeader color="success">
          <h4 className={classes.cardTitleWhite}>{othername ? othername : 'Select a conversation'}</h4>
        </CardHeader>
        {othername ?
        <div>
          {
            isLoading ? <CircularProgress style={{marginTop : "30%", marginLeft : "50%"}} /> :

          <CardBody>  
              <GridList cellHeight='auto' spacing={1} className={classes.gridList} id="maingrid" style={{width: '100%'}}> 
              
                {
                  chat.map((data,index)=>{
                    return(
                      <GridListTile key={index} cols={2} className={classes.gridListItem}>
                        <div>
                          <Grid container spacing={2} key={index} className={ data.sender === loginEmail ? classes.allProfileR : classes.allProfileL} >
                            <Grid item xs style={{ paddingLeft : 4 ,marginBottom : 4 }} ref={scrollRef}>
                                <Typography style={{fontWeight : 400 , fontSize : 13.5, color : 'black'}}>
                                    {data.text}
                                </Typography>
                                <Typography style={{fontWeight : 400 , fontSize : 13 , color : 'gray'}}>
                                    {format(data.createdAt)}
                                </Typography>
                            </Grid>
                          </Grid> 
                        </div>
                      </GridListTile>
                    )
                  })
                }      
              </GridList> 
          
          <form onSubmit={handleSubmit}>
            <Paper className={classes.chatBottom}> 
              <Paper className={classes.messageBar}>
                <InputBase
                    className={classes.input}
                    placeholder="Type your message here"
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    inputProps={{ 'aria-label': 'search google maps' }}
                    required
                  />
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton type="submit" className={classes.iconButton}>
                  <SendIcon/>
                </IconButton>
              </Paper>
            </Paper>
          </form>
        </CardBody>}
      </div>
       : <div>
        <Chat style={{fontWeight:'',
        opacity:'.5',
        color:'purple',
        textAlign:'center',
        margin:'auto',
        width:'100%',
        fontSize:'15vw',
        padding:'52px'}}/>
        <h2 style={styles.chatPlaceholder}>Select a conversation to get started</h2>
        </div>}
    </Card>
   
  );

}

export default withStyles(styles)(ChatScreen);
