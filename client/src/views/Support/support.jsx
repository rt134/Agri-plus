import React from 'react'
import PropTypes from 'prop-types'
// react plugin for creating charts
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";


import Card from '../../components/Card/Card.js'
import CardHeader from '../../components/Card/CardHeader.js'
import CardBody from '../../components/Card/CardBody.js'

// import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import ChatIcon from '@material-ui/icons/Chat';
import Email from '@material-ui/icons/Email';
import Button from '../../components/CustomButtons/Button'
// import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';

import dashboardStyle from '../../assets/jss/material-dashboard-react/views/dashboardStyle.js'

import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

class Support extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div >
        <GridContainer>
          <GridItem xs={10} sm={10} md={10}>
            <Card>
              <CardHeader color='success'>
                <h4 className={classes.cardTitleWhite}>Support</h4>
              </CardHeader>
              <CardBody Style={{ textAlign: "center" }}>
                <br />
                <Grid container spacing={2} style={{ textAlign: 'center', padding: '0 10px', margin: '30px 0px' }}>
                  <Grid item xs style={{ margin: 10 }}>
                    <a href="mailto:rishabh.tripathi134@gmail.com">
                      <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <MailOutlineIcon style={{ fontSize: 70, color: '#E53371' }} />
                        <p style={{ marginBottom: 0 }}>Email</p>
                        <p>Write us anytime for you queries</p>
                        <Button startIcon={<Email />} variant="contained" color="primary" style={{ marginBottom: 20 }}>Email Support</Button>
                      </Paper>
                    </a>
                  </Grid>

                  <Grid item xs style={{ margin: 10 }}>
                    <a href="mailto:rishabh.tripathi134@gmail.com">
                      <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <ChatIcon style={{ fontSize: 70, color: '#E53371' }} />
                        <p style={{ marginBottom: 0 }}>Chat Support</p>
                        <p>Talk to our chatbot to resolve your trivial queries</p>
                        <Button startIcon={<ChatIcon />} color="primary" style={{ marginBottom: 20 }} >Chat Support</Button>
                      </Paper>
                    </a>
                  </Grid>

                  <Grid item xs style={{ margin: 10 }}>
                    <a href="tel:9721000028">
                      <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <PhoneIcon style={{ fontSize: 70, color: '#E53371' }} />
                        <p style={{ marginBottom: 0 }}>Call Us</p>
                        <p>Call our customer executives</p>
                        <Button color="primary" style={{ marginBottom: 20 }} >Phone Support</Button>
                      </Paper>
                    </a>
                  </Grid>

                </Grid>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

Support.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Support)
