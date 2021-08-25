import React, { useContext } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
// import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import AuthConext from "../../context/AuthContext";
// import CardFooter from "../../components/Card/CardFooter.js";

// const styles = {

// }

export default function Profile(props) {
  // const {classes} = props
  const loggedIn = useContext(AuthConext);
  console.log(loggedIn.loggedIn)
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={10} md={10}>
          <Card>
            <CardHeader color="info">Profile</CardHeader>
            <CardBody>
              {loggedIn.loggedIn && (
                <div>
                  <h4>Name: {loggedIn.loggedIn.username}</h4>
                  <h4>Email: {loggedIn.loggedIn.emailId}</h4>
                </div>
              )}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
