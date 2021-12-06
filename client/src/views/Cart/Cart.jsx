import React, { useState, useEffect } from "react";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import Button from "../../components/CustomButtons/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import CardBody from "../../components/Card/CardBody.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardFooter from "../../components/Card/CardFooter.js";
import axios from 'axios'
import Paper from '@material-ui/core/Paper';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import Grid from '@material-ui/core/Grid';

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
  images: {
    height: '200px',
    width: '200px',
  }

};

const Cart = props => {
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const { classes } = props;

  useEffect(() => {
    try{
      axios.get('http://localhost:5000/cart/get',{withCredentials : true})
      .then(res => {
        if(res.data.cart){
        setProduct(res.data.cart[0].products);
      }})
    }catch(err){
      console.log(err);
    }

  }, [])

  useEffect(() => {
    let total = 0;
    for(let i=0;i<product.length;i++){
      total += product[i].productId.price*product[i].quantity;
    }
    setTotal(total);
  }, [product])

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


  const updateProduct = () =>{
    try{
      axios.get('http://localhost:5000/cart/get',{withCredentials : true})
      .then(res => {
        setProduct(res.data.cart[0].products);
      })
    }catch(err){
      console.log(err);
    }
  }

  const removeFromCart = (prod) => {
    
    try{
      axios.post(`http://localhost:5000/cart/del`,{
        productId : prod.productId._id
      },{withCredentials:true})
      .then(res => {
        updateProduct();
        let message = prod.productId.productName + " removed";
        toastSuccess(message);
        
      })
    }catch(err){
      toastError("Unable to remove");
    }

  }

  const addToCart = (prod) => {

    try{
      axios.post(`http://localhost:5000/cart/add`,{
        productId : prod.productId._id
      },{withCredentials:true})
      .then(res => {
        updateProduct();
        let message = prod.productId.productName + " added to cart";
        toastSuccess(message);
      })
    }catch(err){
      toastError("Unable to add");
    }

  }


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
              <CardBody Style={{ textAlign: "center" }}>
                <br />
                <Grid container spacing={2} style={{ textAlign: 'center', padding: '0 10px', margin: '30px 0px' }}>

                {
                  product.map(prod => 
                    
                    <Grid item xs style={{ margin: 10 }}>
                      <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <img alt = {prod.productId.image} className={classes.images} src={prod.productId.image}></img>
                        <p style={{ marginBottom: 0 }}>{prod.productId.productName}</p>
                        <p><small>{prod.productId.price} Rs/Unit(Kg)</small></p>
                        <p><small>Quantity : {prod.quantity}</small></p>
                        <p><small>Total Price : {prod.quantity*prod.productId.price}</small></p>
                        <Button color="rose" onClick={() => removeFromCart(prod)}><RemoveIcon /></Button>
                        <Button color="rose" onClick={() => addToCart(prod)}><AddIcon /></Button>
                      </Paper>
                    </Grid>
                    
                  )
                }

                </Grid>
              </CardBody>
              <CardFooter>
                <h3>Total payable amount : {total}</h3>
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
