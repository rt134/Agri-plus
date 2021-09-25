import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Button";
// import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
// import CardFooter from "../../components/Card/CardFooter.js";
import { useHistory } from "react-router-dom";

const styles = {
  chat: {
    alignItems: "center",
    width: "100%",
    margin: 5,
  },
};

// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };
//   componentDidMount = () => {
//     axios
//       .get("http://localhost:8000/api/user/checkauth", {
//         withCredentials: true,
//       })
//       .then((res) => {
//         console.log(res);
//       });
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault();

//     console.log(this.state);
//     try {
//       axios
//         .post("http://localhost:8000/api/user/login", {
//           email: this.state.email,
//           password: this.state.password,
//         })
//         .then((res) => {
//           console.log(res);
//         });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   render() {
//     const { classes } = this.props;
//     return (
//       <div>
//         <GridContainer
//           container
//           alignItems="center"
//           justifyContent="center"
//           style={{ minHeight: "70vh" }}
//         >
//           <GridItem xs={10} sm={6} md={4}>
//             <Card>
//               <CardHeader color="success">
//                 <h5 className={classes.cardTitleWhite}>LogIn</h5>
//               </CardHeader>
//               <CardBody>
//                 <form onSubmit={this.handleSubmit}>
//                   <CustomInput
//                     labelText="Email"
//                     formControlProps={{
//                       fullWidth: true,
//                     }}
//                     inputProps={{
//                       value: this.state.email,
//                       required: true,
//                       name: "email",
//                       onChange: this.handleChange,
//                     }}
//                   />
//                   <CustomInput
//                     labelText="password"
//                     formControlProps={{
//                       fullWidth: true,
//                     }}
//                     inputProps={{
//                       value: this.state.password,
//                       required: true,
//                       name: "password",
//                       onChange: this.handleChange,
//                       type: "password",
//                     }}
//                   />
//                   <div style={{ alignItems: "center", display: "flex" }}>
//                     <Button
//                       color="success"
//                       style={{ float: "left" }}
//                       type="submit"
//                     >
//                       Login
//                     </Button>
//                     <Link to={{ pathname: `/client/signup` }}>
//                       <Button>Signup Page</Button>
//                     </Link>
//                   </div>
//                 </form>
//               </CardBody>
//             </Card>
//           </GridItem>
//         </GridContainer>
//       </div>
//     );
//   }
// }


function Login (props) {
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
        .then((res) => {
          // console.log(res);
          history.push("/client/dashboard");
        });
    } catch (err) {
      console.log(err);
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
    </div>
  );
}


export default withStyles(styles)(Login);
