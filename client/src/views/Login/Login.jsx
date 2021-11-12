import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Button";
import CardBody from "../../components/Card/CardBody.js";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
  chat: {
    alignItems: "center",
    width: "100%",
    margin: 5,
  },
};


function Login (props) {
  const { classes } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let history = useHistory();
  
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

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
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      axios
        .post(
          "http://localhost:5000/auth/login",
          {
            email: email,
            password: password,
          },
          { withCredentials: true }
        )
        .then(() => {
          history.push("/client/dashboard");
          toastSuccess("Logged In Successfully")
        });
    } catch (err) {
      toastError("Error Logging In")
    }
  };

  return (
    <div>
      <GridContainer
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}
      >
        <GridItem xs={10} sm={6} md={4}>
          <Card>
            <CardHeader color="success">
              <h5 className={classes.cardTitleWhite}>Login</h5>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <CustomInput
                  labelText="Email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: email,
                    required: true,
                    name: "email",
                    onChange: handleChangeEmail,
                  }}
                />
                <CustomInput
                  labelText="Password"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: password,
                    required: true,
                    name: "password",
                    onChange: handleChangePassword,
                    type: "password",
                  }}
                />

                <div style={{ alignItems: "center", display: "flex" }}>
                  <Button
                    color="success"
                    style={{ float: "left" }}
                    type="submit"
                  >
                    Login
                  </Button>
                  <br />
                  <Link to={{ pathname: `/client/signup` }}>
                    <Button>Signup Page</Button>
                  </Link>
                </div>
              </form>
            </CardBody>
          </Card>
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


export default withStyles(styles)(Login);
