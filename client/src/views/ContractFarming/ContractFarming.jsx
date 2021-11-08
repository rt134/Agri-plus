import React, {useEffect, useState} from "react";
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
    const [data, setData] = useState([]);
    
    useEffect(() => {
      async function fetchMyAPI() {
        await axios.get("http://localhost:5000/contract/getall",{withcredentials : true})
        .then(res =>
          {
            setData(res.data.contracts)
          }
        );
      }
      fetchMyAPI()
    },[])


  return (
    <div>
      {console.log("Data", data)}

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
                  {data.length > 0 ? 
                  <CustomizedTables contracts={data} /> : <div>Loading ....</div>}
                </CardBody>
            </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(ContractFarming);