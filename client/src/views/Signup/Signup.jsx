import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
import axios from 'axios'
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CustomInput from "../../components/CustomInput/CustomInput"
import Button from "../../components/CustomButtons/Button"
// import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
// import CardFooter from "../../components/Card/CardFooter.js";



const styles = {
  chat : {
    alignItems: 'center',
    width : '100%',
    margin : 5,
  }
}

class Signup extends Component{
  constructor(props){
    super(props);

    this.state = {
      name : "rishabh",
      email : "rt@gmail.com",
      password : "1234",
      confirmPassword : "1234",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    try{
      axios.post('http://localhost:8000/api/user/register',{
        name : this.state.name,
        email : this.state.email,
        password : this.state.password,
      }).then(res => {
        console.log(res);
      })
    }catch(err){
      console.log(err);
    }

  } 


  render(){
  const { classes } = this.props;
  return (
    <div>
      <GridContainer container alignItems="center" justifyContent="center" style={{ minHeight: '80vh' }}>
        <GridItem xs={10} sm={6} md={4}>
            <Card>
                <CardHeader color="success">
                  <h5 className={classes.cardTitleWhite}>SignUp</h5>
                </CardHeader>
                <CardBody>
                  <form onSubmit={this.handleSubmit}>
                  <CustomInput
                      labelText="Name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: this.state.name,
                        required: true,
                        name: "name",
                        onChange: this.handleChange
                      }}

                    />
                    <CustomInput
                      labelText="Email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: this.state.email,
                        required: true,
                        name: "email",
                        onChange: this.handleChange
                      }}

                    />
                    <CustomInput
                      labelText="Password"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: this.state.password,
                        required: true,
                        name: "password",
                        onChange: this.handleChange,
                        type: "password"
                      }}
                    />
                    <CustomInput
                      labelText="Confirm Password"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: this.state.confirmPassword,
                        required: true,
                        name: "confirmPassword",
                        onChange: this.handleChange,
                        type: "password"
                      }}

                    />

                    <div style={{alignItems : "center", display:"flex"}}>
                      <Button color="success" style={{ float: "left" }} type="submit">Signup</Button><br />
                      <Link to={{ pathname: `/client/login`}}><Button>Login Page</Button></Link>
                    </div>
                  </form>
                </CardBody>
            </Card>
        </GridItem>
        </GridContainer>
    </div>
  );
}

}

export default withStyles(styles)(Signup);
