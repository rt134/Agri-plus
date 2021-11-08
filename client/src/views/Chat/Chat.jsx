import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import ChildFriendlySharpIcon from '@material-ui/icons/ChildFriendlySharp';

// core components
import './Style.css';
import ChatScreen from "./ChatScreen.jsx";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
    height: 33,
    width: 33,
    marginTop: 0,
  },
  sideRow: {
    height: 600
  },
  gridList: {
    width: "100%",
    height: 'auto',
    padding: 0,
  },


};

function Chat(props) {

  const { classes } = props;
  const SERVER_PATH = 'http://localhost:5000'

  const [conversation, setConversation] = useState(null);
  const [othername, setOthername] = useState('');
  const [otheremail, setOtheremail] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [frndList, setFrndList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const load = true;


  useEffect(() => {
    try {
      axios.get(`${SERVER_PATH}/auth/loggedIn`, { withCredentials: true })
        .then((res) => {
          setLoginEmail(res.data.emailId);
        })
    } catch (err) {
      console.log(err);
    }

  }, [])

  useEffect(() => {
    try {
      axios.get(`${SERVER_PATH}/auth/getusers`, { withCredentials: true })
        .then((res) => {
          setFrndList(res.data.users);
          setLoading(false);
        })
    } catch (err) {
      console.log(err);
    }
  }, [])


  // Geting conversation Id of selected
  const updateSelected = (otherUser) => {
    axios.get(`${SERVER_PATH}/conversation/get/?from=${loginEmail}&to=${otherUser.email}`,
      { withCredentials: true })
      .then(res => {
        console.log("Converation ",res.data);
        setConversation(res.data._id);
        setOtheremail(otherUser.email);
        setOthername(otherUser.name);
      })
  }



  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4} lg={4} xl={4}>
        <Card className={classes.sideRow}>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Clients Chat</h4>
          </CardHeader>
          {
            isLoading ? <CircularProgress style={{ margin: "48%", alignSelf: "center", verticalAlign: "middle" }} /> :

              <CardBody>

                {frndList.length === 0 ?
                  <div>

                    <ChildFriendlySharpIcon style={{
                      fontWeight: '',
                      opacity: '.5',
                      color: 'green',
                      textAlign: 'center',
                      margin: 'auto',
                      width: '100%',
                      fontSize: '15vw',
                      padding: '52px'
                    }} />
                    <h2 className="h2-size" style={styles.chatPlaceholder}>No chats yet</h2>
                  </div>
                  :

                  <GridList cellHeight='auto' spacing={1} className={classes.gridList} id="grid">
                    {
                      frndList.map((client, index) => {
                        return (
                          <GridListTile key={index} cols={2} className={classes.gridListItem} >
                            <ListItem button wrap="nowrap" spacing={2} onClick={() => updateSelected(client)}>
                              <ListItemIcon>
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                  {client.name.charAt(0).toUpperCase()}
                                </Avatar>
                              </ListItemIcon>
                              <ListItemText primary={client.name} />
                            </ListItem>
                          </GridListTile>
                        )
                      })
                    }
                  </GridList>}
              </CardBody>
          }
        </Card>
      </Grid>
      <Grid item xs={12} sm={8} lg={8} xl={8}>
        <ChatScreen
          otheremail={otheremail}
          loginEmail={loginEmail}
          conversation={conversation}
          othername={othername}
          loading={load}
        />
      </Grid>
    </Grid>
  )
}


export default withStyles(styles)(Chat);
