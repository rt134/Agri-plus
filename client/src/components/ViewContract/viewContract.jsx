import React, { useState, useEffect } from "react";
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

const ViewContract = props => {
  const contractId = props.location.pathname.split('/')[3]
  const [productName, setProductname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [grade, setGrade] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [premium, setPremium] = useState("");
  const [defaultFine, setDefaultFine] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [description, setDescription] = useState("");
  const [buyer, setBuyer] = useState("");
  const [seller, setSeller] = useState("");
  const [status, setStatus] = useState(false);
  const { classes } = props;

  useEffect(() => {
    try{
        axios.get(`http://localhost:5000/contract/getbyid/${contractId}`,
        { withCredentials: true })
        .then((res) => {
            setProductname(res.data.contract.productName);
            setQuantity(res.data.contract.quantity);
            setGrade(res.data.contract.grade);
            setTotalPrice(res.data.contract.totalPrice);
            setPremium(res.data.contract.premium);
            setDefaultFine(res.data.contract.defaultFine);
            setDeliveryDate(res.data.contract.deliveryDate);
            setDescription(res.data.contract.description);
            setBuyer(res.data.contract.buyer);
            setSeller(res.data.contract.seller);
            setStatus(res.data.contract.status);
        })
        }catch(err){
            console.log(err);
        }
  })

  const Accept = event => {
    event.preventDefault();

    try{
      axios.post(`http://localhost:5000/contract/accept/${contractId}`,
      {withCredentials: true })
    }catch(err){
      console.log(err);
    }
  }
  


  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={10} md={10}>
          <form onSubmit={Accept}>
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
                          labelText="Seller"
                          id="seller"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            value: seller,
                            required: true,
                            name: "seller",
                          }}

                        />
                        </GridItem>

                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Buyer"
                          id="buyer"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            value: buyer,
                            name: "buyer",
                            
                          }}
                        />
                        </GridItem>
                      </GridContainer>

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
                            required: true,
                            name: "defaultFine",
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
                          }}

                        />
                        </GridItem>

                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Status"
                          id="status"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            value: status,
                            required: true,
                            name: "status",
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
                            multiline : true,
                            rows : 4,

                          }}

                        />
                        </GridItem>

                      </GridContainer>

                  </GridItem>
                </GridContainer>
                {status ? <Button disabled color="success">Buy Contract</Button> : <Button type="submit" color="success">Buy Contract</Button>}
                <Button color="rose">Back</Button>

                
              </CardBody>

              <CardFooter>
                
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(ViewContract)
