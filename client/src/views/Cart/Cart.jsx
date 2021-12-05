import React, { useState, useEffect } from "react";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CustomInput from "../../components/CustomInput/CustomInput";
import { Tooltip } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import Button from "../../components/CustomButtons/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import CardBody from "../../components/Card/CardBody.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardFooter from "../../components/Card/CardFooter.js";
import axios from 'axios'

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  tr: {
    float: "right",
    cursor: "pointer",
    '&:hover': {
      color: "black",
    }
  },

};

const Cart = props => {
  const { classes } = props;

  useEffect(() => {
    try{
      axios.get('http://localhost:5000/cart/get',{withCredentials : true})
      .then(res => {
        console.log(res.data)
      })
    }catch(err){
      console.log(err);
    }

  }, [])

  const toastSuccess = (message) => toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })

  const toastError = (message) => toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })

  

  

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={10} md={10}>
          <form>
            <Card>
              <CardHeader color="success">
                <div style={{ display: "flex" }}>
                      <h4 className={classes.cardTitleWhite} style={{ float: "left", width: "100%" }}>Cart </h4>
                  </div>
              </ CardHeader>
              <CardBody>
                
              </CardBody>
              <CardFooter>
                <Button type="submit" color="success">Checkout</Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
      <ToastContainer position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
    </div>
  );
}

export default withStyles(styles)(Cart)
