import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
  chat: {
    alignItems: "center",
    width: "100%",
    margin: 5,
  },
};

function Signup(props) {
  const { classes } = props;
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVerify, setPasswordVerify] = useState();
  let history = useHistory();
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangePasswordVerify = (event) => {
    setPasswordVerify(event.target.value);
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
          "http://localhost:5000/auth/",
          {
            name: name,
            email: email,
            password: password,
            passwordVerify: passwordVerify,
          },
          { withCredentials: true }
        )
        .then((res) => {
          toastSuccess("SignedUp Successfully")
          history.push("/client/dashboard");
        });
    } catch (err) {
      toastError("Error Signing In")
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
              <h5 className={classes.cardTitleWhite}>SignUp</h5>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <CustomInput
                  labelText="Name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: name,
                    required: true,
                    name: "name",
                    onChange: handleChangeName,
                  }}
                />
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
                <CustomInput
                  labelText="Confirm Password"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: passwordVerify,
                    required: true,
                    name: "passwordVerify",
                    onChange: handleChangePasswordVerify,
                    type: "password",
                  }}
                />

                <div style={{ alignItems: "center", display: "flex" }}>
                  <Button
                    color="success"
                    style={{ float: "left" }}
                    type="submit"
                  >
                    Signup
                  </Button>
                  <br />
                  <Link to={{ pathname: `/client/login` }}>
                    <Button>Login Page</Button>
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

// export default Signup

export default withStyles(styles)(Signup);
