import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { makeStyles } from "@material-ui/core/styles";
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

class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      email : "",
      password : "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  componentDidMount = () => {
    axios.get('http://localhost:8000/api/user/checkauth',{withCredentials: true})
    .then(res => {
        console.log(res);
    })
  }

  handleSubmit = async(event) => {
    event.preventDefault();

    console.log(this.state);
    try{
      axios.post('http://localhost:8000/api/user/login',{
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
      <GridContainer container alignItems="center" justifyContent="center" style={{ minHeight: '70vh' }}>
        <GridItem xs={10} sm={6} md={4}>
            <Card>
                <CardHeader color="success">
                  <h5 className={classes.cardTitleWhite}>LogIn</h5>
                </CardHeader>
                <CardBody>
                  <form onSubmit={this.handleSubmit}>
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
                      labelText="password"
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
                    <div style={{alignItems : "center", display:"flex"}}>
                      <Button color="success" style={{ float: "left" }} type="submit">Login</Button>
                      <Link to={{ pathname: `/client/signup`}}><Button>Signup Page</Button></Link>
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

export default withStyles(styles)(Login);
