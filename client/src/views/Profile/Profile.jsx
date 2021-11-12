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

const Profile = props => {
  const [isEditable, setEditable] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const { classes } = props;

  useEffect(() => {
    try{
      axios.get('http://localhost:5000/auth/getuser',{withCredentials : true})
      .then(res => {
        setName(res.data.user.name);
        setEmail(res.data.user.email);
        setAddress(res.data.user.address);
        setContact(res.data.user.contact);
        setPincode(res.data.user.pincode);
        setCountry(res.data.user.country);
        setDistrict(res.data.user.district);
        setState(res.data.user.state);
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

  const update = (event) => {
    event.preventDefault();

    try{
      axios.post('http://localhost:5000/auth/update',{
      contact,
      address,
      district,
      state,
      pincode,
      country,
    },
    { withCredentials: true })
    .then(() => {
      toastSuccess("Profile Updated Successfully")
      setEditable(true);
    })
    }catch(err){
      toastError("Error in updating profile");
    }
  }

  const handleChangeContact = (event) => {
    setContact(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value);
  };

  const handleChangeState = (event) => {
    setState(event.target.value);
  };

  const handleChangePincode = (event) => {
    setPincode(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={10} md={10}>
          <form onSubmit={update}>
            <Card>
              <CardHeader color="success">
                <div style={{ display: "flex" }}>
                      <h4 className={classes.cardTitleWhite} style={{ float: "left", width: "100%" }}>Profile </h4>
                      <Tooltip title="Edit">
                        <EditIcon onClick={() => setEditable(!isEditable )} className={classes.tr} />
                      </Tooltip>
                  </div>
              </ CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>

                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Name"
                          id="name"
                          formControlProps={{
                            fullWidth: true,
                            disabled: true,
                          }}
                          inputProps={{
                            value: name,
                            required: true,
                            name: "name",
                          }}

                        />
                        </GridItem>

                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Email Id"
                          id="emailId"
                          formControlProps={{
                            fullWidth: true,
                            disabled: true,
                          }}
                          inputProps={{
                            value: email,
                            required: true,
                            name: "emailId",
                          }}
                        />
                        </GridItem>
                      </GridContainer>


                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Contact"
                          id="contact"
                          formControlProps={{
                            fullWidth: true,
                            disabled: isEditable,
                          }}
                          inputProps={{
                            value: contact,
                            required: true,
                            name: "contact",
                            onChange: handleChangeContact
                          }}

                        />
                        </GridItem>

                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Address"
                          id="address"
                          formControlProps={{
                            fullWidth: true,
                            disabled: isEditable,
                          }}
                          inputProps={{
                            value: address,
                            required: true,
                            name: "address",
                            onChange: handleChangeAddress
                          }}
                        />
                        </GridItem>
                      </GridContainer>


                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="District"
                          id="district"
                          formControlProps={{
                            fullWidth: true,
                            disabled: isEditable,
                          }}
                          inputProps={{
                            value: district,
                            required: true,
                            name: "district",
                            onChange: handleChangeDistrict
                          }}

                        />
                        </GridItem>

                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="State"
                          id="state"
                          formControlProps={{
                            fullWidth: true,
                            disabled: isEditable,
                          }}
                          inputProps={{
                            value: state,
                            required: true,
                            name: "state",
                            onChange: handleChangeState
                          }}
                        />
                        </GridItem>
                      </GridContainer>

                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Pincode"
                          id="pincode"
                          formControlProps={{
                            fullWidth: true,
                            disabled: isEditable,
                          }}
                          inputProps={{
                            value: pincode,
                            required: true,
                            name: "pincode",
                            onChange: handleChangePincode
                          }}

                        />
                        </GridItem>

                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                          labelText="Country"
                          id="country"
                          formControlProps={{
                            fullWidth: true,
                            disabled: isEditable,
                          }}
                          inputProps={{
                            value: country,
                            required: true,
                            name: "country",
                            onChange: handleChangeCountry
                          }}
                        />
                        </GridItem>
                      </GridContainer>


                  </GridItem>
                </GridContainer>
                
              </CardBody>
              <CardFooter>
                {isEditable ? <Button type="submit" color="success" disabled>Update Profile</Button> : <Button type="submit" color="success">Update Profile</Button>}
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

export default withStyles(styles)(Profile)
