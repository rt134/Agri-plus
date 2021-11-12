import React, { useState } from "react";
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../CustomButtons/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const NewProduct = props => {
  const category = props.location.pathname.split('/')[3]
  const [productName, setProductname] = useState("");
  const [quantity, setQuantity] = useState();
  const [grade, setGrade] = useState();
  const [price, setPrice] = useState();
  const [image, setImageUrl] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [description, setDescription] = useState("");
  const { classes } = props;

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

  const Submit = (event) => {
    event.preventDefault();

    try{
      axios.post('http://localhost:5000/product/add',{
        productName,
        category,
        grade,
        price,
        expiryDate,
        quantity,
        image,
        description,
    },
    { withCredentials: true })
    .then((res) => {
        toastSuccess("Product Added successfully");
    })
    }
    catch(err){
      toastError("Unable to add Product");
    }
    
  }

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeProductName = (event) => {
    setProductname(event.target.value);
  };

  const handleChangeGrade = (event) => {
    if(event.target.value >= 0 && event.target.value <= 10){setGrade(event.target.value);}
  };

  const handleChangePrice = (event) => {
    if(event.target.value >= 0){setPrice(event.target.value);}
  };

  const handleChangeImageUrl = (event) => {
    setImageUrl(event.target.value);
  };

  const handleChangeExpiryDate = (event) => {
    setExpiryDate(event.target.value);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={10} md={10}>
          <form onSubmit={Submit}>
            <Card>
              <CardHeader color="success">
                <div style={{ display: "flex" }}>
                      <h4 className={classes.cardTitleWhite} style={{ float: "left", width: "100%" }}>Create Contract </h4>
                  </div>
              </ CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>

                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Product Name"
                          id="productName"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            value: productName,
                            required: true,
                            name: "productName",
                            onChange : handleChangeProductName
                          }}

                        />
                        </GridItem>

                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Category"
                          id="category"
                          formControlProps={{
                            fullWidth: true,
                            disabled : true,
                          }}
                          inputProps={{
                            value: category,
                            required: true,
                          }}
                        />
                        </GridItem>

                        
                      </GridContainer>


                      <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Quantity"
                          id="quantity"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            value: quantity,
                            required: true,
                            name: "quantity",
                            onChange : handleChangeQuantity,
                            
                          }}
                        />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Price {Per Unit}"
                          id="Price"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            value: price,
                            required: true,
                            name: "price",
                            onChange: handleChangePrice,
                            type : "number"
                          }}

                        />
                        </GridItem>

                        
                      </GridContainer>


                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Grade"
                          id="grade"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            value: grade,
                            required: true,
                            name: "grade",
                            type : "number",
                            onChange: handleChangeGrade
                          }}

                        />
                        </GridItem>

                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                            labelText="Expiry Date (DD/MM/YYYY)"
                            id="epirydate"
                            formControlProps={{
                              fullWidth: true,
                            }}
                            inputProps={{
                              value: expiryDate,
                              required: true,
                              name: "expiryDate",
                              onChange: handleChangeExpiryDate
                            }}

                          />
                        </GridItem>
                      </GridContainer>

                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                
                        <CustomInput
                          labelText="Image URL (Optional)"
                          id="imageUrl"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            value: image,
                            name: "imageUrl",
                            onChange: handleChangeImageUrl
                          }}
                        />
                        </GridItem>

                      </GridContainer>

                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                          labelText="Description"
                          id="description"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            value: description,
                            required: true,
                            name: "description",
                            onChange: handleChangeDescription,
                            multiline : true,
                            rows : 4,

                          }}

                        />
                        </GridItem>

                      </GridContainer>

                  </GridItem>
                </GridContainer>
                
              </CardBody>
              <CardFooter>
                <Button type="submit" color="success">Submit</Button>
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

export default withStyles(styles)(NewProduct)
