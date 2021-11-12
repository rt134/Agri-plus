import React from 'react'
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

class Pesticides extends React.Component {
  render() {
    const { classes } = this.props
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

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Compost" className={classes.images} src="https://5.imimg.com/data5/TM/DY/MY-36879504/compost-organic-manure-500x500.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Compost</p>
                      <p><small>150 Rs/10kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Vermipost" className={classes.images} src="https://www.utkarshagro.com/wp-content/uploads/2019/08/Vermicompost-utkarsh-neem-oil-plant-growth-neem-oil-plant-bio-neem-oil-plant-fertilizer-organic-compost-utkarsh-fertilizer-3.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Vermipost</p>
                      <p><small>200 Rs/10kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Paultry manure" className={classes.images} src="https://bachatkart.in/image/cache/catalog/product/gardening/poultry-700x700.png"></img>
                      <p style={{ marginBottom: 0 }}>Paultry manure</p>
                      <p><small>300 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Quinolphos" className={classes.images} src="https://5.imimg.com/data5/NH/KG/FQ/SELLER-4046740/quinalphos-25-ec-insecticide-500x500.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Quinolphos</p>
                      <p><small>110 Rs/L</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Thuricide" className={classes.images} src="https://images-na.ssl-images-amazon.com/images/I/516D8Jd4ukL.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Thuricide</p>
                      <p><small>120 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "phorate" className={classes.images} src="https://facilitycart.in/staging/img/p/9/7/0/970-large_default.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Forate 10G</p>
                      <p><small>250 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Triazaphose" className={classes.images} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGc2-ws7k845Z972FL3WD0HKBYnsrc4b7oQ&usqp=CAU"></img>
                      <p style={{ marginBottom: 0 }}>Triazaphose 40 EC</p>
                      <p><small>50 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Chlorpyriphos 20 EC" className={classes.images} src="https://agrijunction.s3.ap-south-1.amazonaws.com/uploads/products/meta/5TeD5jPanfcW5JkhZDMa1pwbBBcxGnUjBGEFKwZe.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Chlorpyriphos 20 EC</p>
                      <p><small>60 Rs/L</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Tricyclazole 75 WP" className={classes.images} src="https://5.imimg.com/data5/QA/NK/MY-4089734/tricyclazole-75-25-wp-500x500.jpeg"></img>
                      <p style={{ marginBottom: 0 }}>Tricyclazole 75 WP</p>
                      <p><small>40 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Carbendazim" className={classes.images} src="https://4.imimg.com/data4/JB/MX/MY-9739155/carbendazim-wp-500x500.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Carbendazim</p>
                      <p><small>140 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "mancozeb" className={classes.images} src="https://5.imimg.com/data5/VZ/HB/KK/SELLER-3391448/mancozeb-75-wp-fungicide-500x500.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Mancozeb</p>
                      <p><small>400 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Urea" className={classes.images} src="https://images-na.ssl-images-amazon.com/images/I/71yg6hRnpTL.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Urea</p>
                      <p><small>400 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Potassium sulphate" className={classes.images} src="https://cdn.shopify.com/s/files/1/0850/0900/products/PotassiumSulfateFertilizer0-0-53Front_800x.jpg?v=1608767429"></img>
                      <p style={{ marginBottom: 0 }}>Potassium sulphate</p>
                      <p><small>150 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Ammonium Nitrate" className={classes.images} src="https://www.achema.lt/uploads/images/Produktai/Amonio%20salietra%20N34,4/500kgAmonio%20salietra_3D_foto.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Ammonium Nitrate</p>
                      <p><small>440 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>


                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Cow dung" className={classes.images} src="https://www.greensofkerala.com/wp-content/uploads/2021/03/cow-manure-2.gif"></img>
                      <p style={{ marginBottom: 0 }}>Cow Dung Manure</p>
                      <p><small>15 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                

                </Grid>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

Pesticides.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Pesticides)
