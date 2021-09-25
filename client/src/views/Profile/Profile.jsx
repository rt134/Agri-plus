import React, { useContext, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CustomInput from "../../components/CustomInput/CustomInput";
import { Tooltip } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import Button from "../../components/CustomButtons/Button";
// import CardIcon from "../../components/Card/CardIcon.js";
import withStyles from "@material-ui/core/styles/withStyles";
import CardBody from "../../components/Card/CardBody.js";
import AuthConext from "../../context/AuthContext";
import CardFooter from "../../components/Card/CardFooter.js";

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
  const loggedIn = useContext(AuthConext);
  const [isEditable, setEditable] = useState(true);
  const { classes } = props;

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={10} md={10}>
          <form>
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
                            value: "RISHABH TRIPATHI",
                            required: true,
                            name: "name",
                            // onChange: this.handleChange
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
                            value: "rt134@gmail.com",
                            required: true,
                            name: "emailId",
                            // onChange: this.handleChange
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
                            value: "9721000028",
                            required: true,
                            name: "contact",
                            // onChange: this.handleChange
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
                            value: "House no 1, Vashishtapuram",
                            required: true,
                            name: "address",
                            // onChange: this.handleChange
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
                            value: "Basti",
                            required: true,
                            name: "district",
                            // onChange: this.handleChange
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
                            value: "Uttar pradesh",
                            required: true,
                            name: "state",
                            // onChange: this.handleChange
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
                            value: "272301",
                            required: true,
                            name: "pincode",
                            // onChange: this.handleChange
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
                            value: "India",
                            required: true,
                            name: "country",
                            // onChange: this.handleChange
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
    </div>
  );
}

export default withStyles(styles)(Profile)
