import React, { useState } from "react";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
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

const NewContract = props => {
  const [productName, setProductname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [grade, setGrade] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [premium, setPremium] = useState(0);
  const [defaultFine, setDefaultFine] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState("");
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
      axios.post('http://localhost:5000/contract/add',{
        productName,
        grade,
        totalPrice,
        premium,
        defaultFine,
        deliveryDate,
        quantity,
        description,
    },
    { withCredentials: true })
    .then(() => {
      setProductname("");
      setQuantity("");
      setGrade(0);
      setTotalPrice(0);
      setPremium(0);
      setDefaultFine(0);
      setDeliveryDate("");
      setDescription("");
      toastSuccess("Contract Added Successfully")
    })
    }
    catch(err){
      toastError("Unable to add Contract")
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

  const handleChangeTotalPrice = (event) => {
    if(event.target.value >= 0){setTotalPrice(event.target.value);}
  };

  const handleChangePremium = (event) => {
    if(event.target.value >= 0){setPremium(event.target.value);}
  };

  const handleChangeDefaultFine = (event) => {
    if(event.target.value >= 0){setDefaultFine(event.target.value);}
  };

  const handleChangeDeliveryDate = (event) => {
    setDeliveryDate(event.target.value);
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
                      </GridContainer>


                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Total Price"
                          id="totalPrice"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            value: totalPrice,
                            required: true,
                            name: "totalPrice",
                            onChange: handleChangeTotalPrice,
                            type : "number"
                          }}

                        />
                        </GridItem>

                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Premium Price"
                          id="premium"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            value: premium,
                            required: true,
                            name: "premium",
                            onChange: handleChangePremium,
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
                          labelText="Default Fine"
                          id="defaultFine"
                          formControlProps={{
                            fullWidth: true,
                            
                          }}
                          inputProps={{
                            value: defaultFine,
                            type : "number",
                            required: true,
                            name: "defaultFine",
                            onChange: handleChangeDefaultFine
                          }}
                        />
                        </GridItem>
                      </GridContainer>

                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Delivery Date (DD/MM/YYYY)"
                          id="deliverydate"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            value: deliveryDate,
                            required: true,
                            name: "deliveryDate",
                            onChange: handleChangeDeliveryDate
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

export default withStyles(styles)(NewContract)
