import React, {useEffect} from "react";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import AddIcon from '@material-ui/icons/Add';
import { Tooltip } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from 'axios';
import { Link } from 'react-router-dom'
import CustomizedTables from "./CustomizedTable.jsx";


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
    color : "white",
    '&:hover': {
      color: "black",
    }
  },

};




const ContractFarming = (props) => {
    const {classes} = props
    const data = [];
    
    useEffect(() => {
      async function fetchMyAPI() {
        await axios.get("http://localhost:5000/contract/getall",{withcredentials : true})
        .then(res =>
          {
            for(let i=0;i<res.data.contracts.length;i++){
              let arr = [];
              arr.push(res.data.contracts[i].productName);
              arr.push(res.data.contracts[i].seller);
              arr.push(res.data.contracts[i].grade);
              arr.push(res.data.contracts[i].quantity);
              if(res.data.contracts[i].status === false){
                arr.push("Pending")
              }else{
                arr.push("Accepted");
              }
              arr.push(<Link to={{ pathname: `/client/viewcontract/${res.data.contracts[i]._id}` }}>
                <button>View</button></Link>)
              data.push(arr);
            }
          }
        );
      }
      fetchMyAPI()
    })


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={10} md={10}>
            <Card>
              <CardHeader color="success">
                  <div style={{ display: "flex" }}>
                        <h4 className={classes.cardTitleWhite} style={{ float: "left", width: "100%" }}>Contract Farming </h4>
                        <Tooltip title='Add Contract'>
                          <Link to={{ pathname: `/client/newcontract` }}>
                            {' '}
                            <AddIcon className={classes.tr} />
                          </Link>
                      </Tooltip>
                    </div>
                </ CardHeader>
                <CardBody>
                  {data ? 
                  <CustomizedTables contracts={data} /> : <div>Loading ....</div>}
                </CardBody>
            </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(ContractFarming);