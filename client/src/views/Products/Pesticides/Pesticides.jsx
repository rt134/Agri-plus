import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js"
import { Tooltip } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Card from '../../../components/Card/Card.js'
import CardHeader from '../../../components/Card/CardHeader.js'
import CardBody from '../../../components/Card/CardBody.js'
import Button from '../../../components/CustomButtons/Button'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import axios from 'axios'

import Grid from '@material-ui/core/Grid';

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
  images: {
    height: '200px',
    width: '200px',
  }

};

const Pesticides = props => {

  const [product, setProduct] = useState([]);
  const [category] = useState("PEST");

  useEffect(() => {
    try{
      axios.get(`http://localhost:5000/product/getbycat/${category}`,{withCredentials:true})
      .then(res => {
        setProduct(res.data.products)
      })
    }catch(err){
      console.log(err);
    }
  },[]);
  
    const { classes } = props
    return (
      <div >
        <GridContainer>
          <GridItem xs={10} sm={10} md={10}>
            <Card>
              <CardHeader color='success'>
              <div style={{ display: "flex" }}>
                        <h4 className={classes.cardTitleWhite} style={{ float: "left", width: "100%" }}>Pesticides </h4>
                        <Tooltip title='Add Pesticides'>
                          <Link to={{ pathname: `/client/addproduct/PEST` }}>
                            {' '}
                            <AddIcon className={classes.tr} />
                          </Link>
                      </Tooltip>
                    </div>
              </CardHeader>
              <CardBody Style={{ textAlign: "center" }}>
                <br />
                <Grid container spacing={2} style={{ textAlign: 'center', padding: '0 10px', margin: '30px 0px' }}>

                {
                  product.map(prod => 

                    <Grid item xs style={{ margin: 10 }}>
                      <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <img alt = {prod.image} className={classes.images} src={prod.image}></img>
                        <p style={{ marginBottom: 0 }}>{prod.productName}</p>
                        <p><small>{prod.price} Rs/Unit(Kg/Lit)</small></p>
                        <Button color="rose">Add to cart</Button>
                      </Paper>
                    </Grid>
                    
                  )
                }
                </Grid>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  
}

Pesticides.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Pesticides)
