import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js"

import Card from '../../../components/Card/Card.js'
import CardHeader from '../../../components/Card/CardHeader.js'
import CardBody from '../../../components/Card/CardBody.js'
import Button from '../../../components/CustomButtons/Button'
// import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

const styles = {
  images: {
    height: '200px',
    width: '200px',
  }

};

class Foodgrains extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div >
        <GridContainer>
          <GridItem xs={10} sm={10} md={10}>
            <Card>
              <CardHeader color='success'>
              Food Grains
              </CardHeader>
              <CardBody Style={{ textAlign: "center" }}>
                <br />
                <Grid container spacing={2} style={{ textAlign: 'center', padding: '0 10px', margin: '30px 0px' }}>
                  

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Rice" className={classes.images} src="https://isthisthatfood.com/wp-content/uploads/2019/02/RICE-GRAIN-FB.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Rice</p>
                      <p><small>20 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Wheat" className={classes.images} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFfW0PI4PmyVJoA9ymi9w068uwHr6x-JvQw&usqp=CAU"></img>
                      <p style={{ marginBottom: 0 }}>Wheat</p>
                      <p><small>18 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Ragi" className={classes.images} src="https://wp-public-fs.s3.ap-south-1.amazonaws.com/tasks/15eedefc8d62433fb64914ea2b87e6d5a56c26c9dddc60/images/nx889zdyxi-5ef7fecfab862.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Ragi</p>
                      <p><small>300 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Maize" className={classes.images} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CZ1OcaofVh9aW2JcGu9Qw51cVt15RR-ztBJEKL260lRwJkg-iWkSevDM3ds8yYeVi7w&usqp=CAU"></img>
                      <p style={{ marginBottom: 0 }}>Maize</p>
                      <p><small>60 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Barley" className={classes.images} src="https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295268/barley-grains-in-a-wooden-bowl.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Barley</p>
                      <p><small>140 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Jowar" className={classes.images} src="https://5.imimg.com/data5/YX/XN/MY-64547957/hybrid-jowar-seeds-500x500.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Jowar</p>
                      <p><small>50 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Bajra" className={classes.images} src="https://www.bigbasket.com/media/uploads/p/l/20000499-3_1-bb-royal-bajra.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Bajra</p>
                      <p><small>70 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Kidney beans" className={classes.images} src="https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kidney-beans-8496667.jpg?quality=45&resize=504,458"></img>
                      <p style={{ marginBottom: 0 }}>kidney Beans</p>
                      <p><small>60 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Masoor" className={classes.images} src="https://5.imimg.com/data5/BL/XH/MY-49530431/masoor-dal-500x500.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Masoor Dal</p>
                      <p><small>110 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Moong Dal" className={classes.images} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvF5eHFVMP6qHZPL1No9BfjyllvsM-mGL1dg&usqp=CAU"></img>
                      <p style={{ marginBottom: 0 }}>Moong Dal</p>
                      <p><small>140 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Chana" className={classes.images} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgUFBUZGRgZGyAeGxsbHB0jHhsiJB0bGiIaIiUbIy0kHiIsIBodJTclKS4wNDQ0HiQ5PzkyPi0yNDABCwsLEA8QHhISHjIpJCkyMjI0MjUyMjI1MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABQQGBwMCAQj/xAA7EAACAQIFAgQEBAUEAgIDAAABAhEAAwQFEiExQVEGImFxEzKBkUKhscEUUmLR8AcjcuEWM5LxFVOC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAJhEAAgICAgICAwADAQAAAAAAAAECEQMhEjEEEyJBMlFhUnGhFP/aAAwDAQACEQMRAD8A2aiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPleC44mvRNZ74yuutxmTXsoJ0gmPXapynSKY4cnRoQNBrIvD3jO4l1UlnVmAKnf6jsa1dcQhIGpZPSRP2ojkTCeNxZ3r7XyvtUJnyiuOIvhFLMYApDZ8XWC2lm0gtpDE7E/sPWkc0nTY0YSatIstFfAa+04pxv3QiljwKT4fxNYdiusAidpB45mOKZ5hZLW2VeSDHv0rKLWTvaJtrPxrjEGegng/rUMspRaro6sGKE4u+zWMJjEurqRgRUTF55ZtuEdgJ2noD2NZ3hrH8FeQjFksdnTSdMHnrtztTLGZnhriEIiMo5LdT333qcvIpf0deJv+GiivtVjJc8X+FVoaVWAD+KOIPWqr/5wVxaHzaSQrqexPQdxzVfatEV48t/w1Givmraaq+b+KltOUVG25dgQu3aef0qkpqKtk4Y5SdItNFVLw94uGIvGyV5UlWHpyCK95/4oFpiqEEqYO079qR5YpWMsEnLj9lqopB4a8RpigV4dRJHccSKf08ZKStCSi4umfaKKKYUKKKKAPlL8yzNLQ8x37VGy/wAQWrkAsFLGFk/N7VXvF2RXWY3kcsCd0iCB2B4qcpXG4lIQXKpEnDeMQ9wp8JyonzKJiq74h8TTc027gU8FGEfrS18beeVsoAAYEDgce31pFngDn4dwFbq9e/oY5Fczk3pnb64x2jq2Ee3iv4gjSi+Zivynr02mpWX57cvYpAG0lnHm/lA3muuOzcLbS3bOkBQCI42ggVAy/LyztfT8I3UbSSOR2rKt/wCh7pf7NZu+KbVvSGlp5I/WKf2boZQymQwBB9DWB3Hd+SQQd63HIkC4ayB0tr+g/er4pSd8jk8jHGNOIu8ZBv4fZtI1DUey7zWaXbdm5AUlAPxMdvqIrRvG+XPesLofRpbUxPEREkdYms8x+XWUkLddnjnSNM+221Sz/lZfxX8KNbw2MtC2hDgqVGkzyI5pD4y8RthkQWiup5IY7gAR/eswxHiJ1HwnIGgALG20c0/yS7bFr4l2CzqSNQkKvGwPU/pRLO6qqCHixu7v+D/w54mxBDXMTp+CQNLEBXPqANiPep2OxNvEJcvYUarlsRxvuOR32qgX8Sbz6bVslF+VCYCgD5jPCgU7XOEwqMltXLMBqZeCe4jgb0scr6l0UlhV3HT/AOCe7keLa58S6AAxlvMCwHMR3rnfxSybagAARogTPYRuTUvAY+7iLjm5fKW0AJEgSD+Hfj1mvF5LFpnxFp/MV0gqwbT/AFQy7VFlrZIs4QsgGIZ7Yb5EDAQOOOntSvGZfhziE+HcbSrAMWMlo7Hv0pOmKFy4TcvNAMluWY9h/erTZxOFUfEWyCVPkLA7tzPO5FPdGceRbMy8UNbQ/wC2yqB82kz9e1VvCNdxlp3ZNKNIBZtM+omeD1pZjc5uOxDMdxxXXOb157NtLZRVHTUqxHbeT7UNuXZixqHR3zHOBg7a27YGsKJdRue/mqu/AxV6b1sgI5/G0EmYkdT71ZcHcw2HtAFRdeJZiAd+wnYCoOYNiAA4swhjSAB5QeJA45/Ot5fQMbZLjLWFtEDzX+H6Ek9Aei028PZ5euXxLgpMMoJYKO5J4quYfw5Zdg9/EHUo3W2RtPQnfepGOwjJZ0YN9KDdp/Ee5bmfcVik4vsWUIyTTRqN/GIqa5BHSDzSA+L7YuC2w8p2LA8Gs7w2Gx11NQhEB3DtpDeo/vXjCZbdN8WyQAd2YGVUd5HX0qrzNtNEI+PFJ3s28V9qm4vxQthFQMHKgAz2HU1OyfxVavEK0KzfLvsew9DV45ot0c0vHnFXRkOGxJuXkUsdKwdvTfb1q35n4yZv9uTocQ0bEDuDHNdP/BHtAvbl2HtvVdfI8YzkGyY6T0qLjJPReM4SWxjZzG3ZRksuXAaQxAk+pPpxVdtXPi3gx3fV8x706TwXiuAo35ParH4f8Bm263LjSR0AgVihK7NlljxoqWL8L4osTbtlge1WvwH4fxFprgv29KMBE9/8NaIlsKAAOK91dY0nZzPLJxoSXfDWGLa2tiR1qVhcfZBFtWE8KDtPoJ5qJ4nxDpahDBJgn0gmszzgXlUuvJadRcAiOI3/AEpJ5OMqSK48POPJs1vNLeuzcURup544rI87xVm2FVgzMZkhoHuBWhZHmj38vFy55XZWUmOSJUH68/es8vZOVvi9cuWXKDZTI3HHOxjmkzyjor4qatf0Wp4ZvYm38SFVZ8rsCDHrMTVmwrWLVsC4dYsqFJI+YxEDpFKl/icaWIcBEMEkmJ7ALzUVsuuWnVrjpctCZUTu0bbEb7n8qg53pnVGHF3+xhiscrJ8URLidK87bAnso7dTSnFeJmthbdshVjzR1PqaaYDLw1sm4ERHkzPK9IgCJJNTcuy+1bVXNpIPyyoJb1kyaXS7Hq+hfawt6/bR2QBHYB7nlDRuZ3O49TUrN8LgwhtqpVtMBlIme8E+aalZnicM6i27NC7gA6QPtSO1hE1m4jfFVB5bZPmnrPGoDbbYn9WMquywWrlpbCf7abgQSgJcjYmOi7VXPEWtkUWiJXcJp0DuQsEgz611wha/cRbdzTrnVChdAHICmY4296a5jbwyyotu2kbsXaduvb8qTk07Y3FNUjPhh8SygvKbwAQQT6ipr5JfSNTIrHcBmMn8oX2Jqw385t2EQW7evUeXg6TyOk+0QK5PmwuKfjMJ6ALEfsaq5v6JqCXbDKUuWv8AcxFoaNtILKRPdgD09al47xE7NKXNKxEdNqU31ttbIe9CkiNAkj3DEH9a64PJ8Jphrt1ieN1j7QaWVds2Ojx/5RoOgKukjcRzO8+9cbmcIwlQyb7iZpNn+AZIKtrSYUgbg9iBxXrAeGMbcCs1sohjzOQsDvDEE1T1xauyXskpVRZL2eK1tLetyQJhB9jtS7AZjee8LdoO4gyoBn69qsdvNLWFRbNuRoABIAl26sxB3rlhvEjhpO6nmIn0qdpfQ7Te7Ft7D3rmJFoqUJXUdWwCiAWnr7Vb7+DwyJEFto1Mxk+2nj6UoaxfxRDoVtIhZSz7kzEwBG3Hao2LdLanViA7Dshj7ztQ2C+7ZtYFEV9or0jxwooooAqPi/xA1iEQEbSWHTnb8qz+z4lxly8q2LzqXYKoJkSSBuGBH5VdP9Q8puXVW5bBYKIZRyOSG255iqd4Oy50xSXblttCEncEbwY57HeuaV8tnbDh69LZa/8AUo3ks2XWSBIuMo4JAM+gJB/KswzTHPc0mZAArVMx8ZqGKK9s8jSwYj6kCqPdwFjEXXcf7IHzAHyE9ljvzFJkcW7RTFGcY00WLLL14ZZhQAILuCeo3JVfrLb+gqLew9m2QtyXuMd5+VZ6AcH3NWPLb9p8GtsSFttszCOJMrPUTE0lxtiQSlxWAMjUIJP/ACE1HK03r9FcFpNNfbIVwWUQhW0KrSwtnQSevEg1yzUWHSbRdGA8pBmf+QPP0qmY3F3WuNZVG1lyNC+Yk9gFmdt6tGV5Be0TcV1fkguihR7bn70rg0rZVSi3RCV72IZbdv5tjck+VQByT0H61Os3bqK9u4VJRYtlWkHzDbjbaa54fEm1rw1s6nfzDaC8+WB3iI/Op2IyPFtZJOhJg6WYyI76VI6961voE6K9j3eCQB3pflWICXQbm6nYgGJ3nntTHNcmuou9wQPxRsfbrUPw1kL3b/mbyKpNx/5R2Hqen17VRVXYs226LFfxVi2VuKqI/cTO4iCSaivdNyFtku7nZRue8U9xmFwukr8NAqjbUAWJ925rrkGBsWdWIVVBZTuABCzECOpI59KjafY65LoQ4jwxiyPMyWl23Lam+y7fciq7mFrEWn0NbL7wrgbN67SAfQmrdmWeXHJPCg7KOB/eoOIzRCoOykRJ5B+nftTxn9UJKL7sr2Owty3h9NxQD8wiJ6ckHnjY0uw+Z7CSwPpTXG5kHJDDUrSCP3pNjcsKEQGUtupmVb/uqwpqpEJuUXcS1eE2a5ce4ql9IiOgPOpvarBnykhGW9q08rxq9t/yquZRmLWbfwlOkKNwPxN1JP3rg+MDDURJkzPv6UklvRWL1sW53jizq6qVEEH13mT96iWs0bqJ96dJh9cyRuSQTv8ArUG+oLrbCh2B6CmTj1ROSkt2MLD4q6o+Gh0R5jIVT0/ERNTMpyW5fuaLsogGokQS/opG316VMTMWs2wlwaduGGx9N69ZTdxmJuarOgIgIJ4CyPzNL9jvo3KiiqjnPiL4ZbzREgDuZgcV2TmorZ5kMbm6RbpqHmONW0uo89B3qg2vG1y3DXIYTuu8n78V0/1KZz8FlMKymD67H9CKT23FuJVYGpqMiRjvGhtXF3DLPmXbjrFO86uC/hPiYcB9UERAJHBHuO3pWJYhoaNWqrrlWcrawaDdSSzdTvPTp0qPsaT5bOmWFOScdFczrK71osDbDRzpIJHuBXfw2Xe2qAEs7sVP8u0T7Ab0xwedmXugFnYEKFBJA77Ux8LYZGsfF1hWdmDNPmG8FRPHf61Lla2X2mqDH5g1hBafcBdiDOr3nr1pDmuNf4XxGkGdt+lO85y2wo1aS8CJLNt67Hes+8RWvIGR2KD8JMx02nn61kIqToac3GN0OfDWeILzXSgN0JpDenX77D6VOvZ4bmvWTqPY7e53pT4M8JG6P4i5cZFBgKsAt3ktwPp9qmZ1lFkSLdx7bA7l4YEdeADTZIxbqxcc3xtx2PfCQEtdIk/LbLAbHfWUJ4AGxjuan5k1x7nmuQgG6gwP+6pmJzG/YRFF3UiAAaRGwHbsTv71AuZ095guv5iBJ43NReOT66KxnFd9jTPMckaUMnV8nM+0dfSueX5t/D67d5Gtl4YagRIgjrTvK7+Fwywrl3gktAljB2H8oB/eqpm2Ka6SzxM6hO/+dqpBL8RJ3+Q3s4XEYuXtINH/AOxzC/Tq30Brp8e5YVLN24CwUgEE6WXUSIJAPXiuuW56Ww6jy6okkxG/TfbpSDPbj3AS/mjiI29orat8Rm2lyPeMzRTI3nsP2irJ4d8O60d8Sq6SAFRllhyeeh443rPMhuomJQ3PlDCfof7xWpYrNlaGk+UDYeu/6xW5I8NITE3lTs4jI8DYZHVCxjzBzr/JuDSbNrVi4jPb8rBpVOnsO1eMRjCXJB5PWq9fxTKxjc6iAO+9YuUthNRjoYnJ7zW/ii4oZgPJ6dJ9YpULN5AZtz601t5g4UargjqP2G1SrmYm4AlpS7xwo3j6U3OS7RnBV2LMDfYwgUk9gN6m2i9m78RrZVSI1Ee/965WEuWDD22Vm4jk9+Km3Dfvj4ajkQF7f1MenuaH2Yto64nFfGXQFZx1VFJj1PNNMPmKWcOnw/IPh79DMbk+s0+8N5OuFsi2zEu3mYrtJjpO8DuYqveLMKGuQyhtbBQ6nSyknSNQ3BE9fyrNdG2+zaVIIkcVj/itWt4h1YMPMSscEEyPyNa/bWBFJ8/8P28UBq2YcHrXZkhyR5mKfCRjeGw/xbioW0qx+Y9K2DNcPbuYQW5BXSAC8dBEz39aUWPCNvDg3GOrTvJpffzFnLKWtsEWQokx2G3Nc7l61VdnUo+52npFeu+C3JkMI6QZ2qVY8OFiFuvpS2uwG2ok8egHpvXPH58bDKLZJutBYngf0x022imuOzEX7Sll0OonUjdY2EHv2NLy5R2UUZRlraI2bZmuGsLatKqF+SoA9Dx6yN6rmV49i0PqVCxcGD5jA1Ad+PzrhZxLYzGKlzYQSdoGlRJAHAJO31q7YnEWrK6LegbdBJUVJxrstF70UrEZx8TUSwiePTpSL+EuXtRtgBJ+ZjAJHQd/0qb4gw9lbouEEI3zKNhMbGAeO8f3qel9Utq4RwjCFYqQhnsYinVRVoxtybiz3hr4FpLYJGhRJ6Fuo9qXZtmB0wWn9qXYjFXGuLbs+bUwVVA5JNXvLPD9mzaW5eVL15uNYm2DMbKdoH8x3PSKJJL5SNUr+MSl5SzYi4mH20Nu7fyqBJ39hVixNrC3CLdu3bVEIAYAAj+rUIJ++9dc6xCo2m0VBiDpACk9gB0pFir6LbCEDUxJb844rHNy/EaMVH8tnrxBYtWxNm4xJB2Okj7jio3hDCJednu+ZV2CTsxPf0A6dZ+8VsPdu2y1u07qPxKjEfcCKj5bcew8GQGbfoR/nFVjH4tfZKUqmv0XrHYkAfDtoSDxpUaFHoBsKSZhYBixat6rtwiCPwR8zHrEfTmvWY5zoXTbI1Hk9qRZfnFxL8oSXYaQQJMkjYe/FJji3sfJOPQ6xvg+xaUm5fYv/TpgmJ2EEx9aW2c20tockjgMY9t/+q44+7cDkXdWrsaUYtuvXpVEnPUiUpLHuOiyISzEAgADf/qvS4S2U06YccNJkehnpUPB4xDb22brTDL8rv3gXRYT+ZiAD7TzU2miiakr7PpyO4wkhJIkAOsn2E0ZVmy2LRtgEOTLEbGeIM77dqk4jHXbAFq5bhgIHBkSdwRzUbIMPb1fHugOCxhW3UE9SOpnoaE3Tsx6ao93sWzidY1HYe52Bin+GxgtWxatgkiS7n8R5kxSfODbuLsih5BVlABWN+nNe8qwGIvoS17Qh2HJJ6EwOnrRpo3aY1fxIGPnnUO/FLbmP1vt333rjjcge2CEuEju6/pG/wCdKEw2IVlVQpnqp/WaFFfTCU6+j9MmoGZ5kllQzSZ4A/fsK+YvN7Fo6XuKp7dfyrP/ABtn0OzI+pYULHE7kj712ymkjy8eNye+h+/iq1cW6lxDoAILLvyO1ZpibxQagYZxH0mkmJzi4W2cwTx0n2HNW3w9kyXrbXMUroRGk8FhvOx46VzzTl2deP4XxK9gcQnx0FzzbyT69BUrF4x3uBLauxJhVUEx7AfrV1s+EsO6E2WkjmfmB9aXre/gZtR5i2tm7zwPballGo2h8eTk3F9i9PDOLQi6LlvWFOq2SdpHEhYn6x60qzbMLtpQLgWG2lSCP+PcH3ppmmd3XWNZg1zybw3/ABafFxBYWifIo5ciRq23C9Ok+1TXfy6LbS09kbwn8N9eKvorJbMIrCVL8loOxjYD1J7U4xviFsQGtrb1jqoUtI9RvtSXPsouYeyEw76ralm0fjBM/wDyj7+/NWbKMVasYfY+RQNZA3d4BMn/AD8qXIr2noaDrtbKdhML8PHB1tlAqsVU6tmKEA+bfqdqc4zENduaeFQCT0EDf85qDnXiZrkJbtKCTtyWn3FJmzC4iNbfykmYmT67jY//AHWuMpJMyEoxbJd218W5otKzuTtp346+gr5jMnu2n+JetSNtmgqPcKY++1Xbwxh7OFwyOCut1Du34mJEhR2AmI9zUazmdrW1xwSQZAnb/Pal5cXoZrltnFMcTaADosgbKAoUDpAH5UgzpEuWjuusfKZEn0jmDS3xJjmZviKugEkEKIBHQn+9M/D3gt8VaF+7eNsNuihZJHRjJEA9KeMaXJsSc2/jRVjkWKPm+GxH0n9atHhDJ1tuuIvbMnmVOq8jW3qd4H1qdmWSuLZKYklraQFYESBJ2MneekUtbOyTo0wCADOx2ERvTvI5R0LDHGL2TM0w9rEyANLEkqdvKf7VSczwDWzu09D6VYsTi2aAoVQOo5pNml8Ovff79aMTknRnkRi1ZHyrLbl1gE21GBWq3cXbt20RdiiKoAAjYRNUTLGvWkS4SqgEFQQdRA337cUxxWYrd80QT0kxRlbk6GwRUUNcXjhBKuSed+aS4zMQ6naDH1+tcWvMQe0V6bAklWDBiCCykRIG5Hr+9TSrsebJOQZJcxA1s2i30JHmb/iO39R/OrDawwwlu41q4XYb+eCI7CAKiWc+MmIngjf7H0pT4mzO7oIAAUjeOnv/AHopyZmkiz3cFcxCLct3CqkAy4Gk9wNIkceoNJP4HEYd2uBkuJAkLOod4BHrTjKMcbtpEVtCIigkbxt+sfSntjKbI5lyd92PH/8AMAVnQVeyr3Slx/iG7HUjrSnF41PMjLqU9STv2NRMa+/l29KW4p/XmrKLs53PRdvD1qzYs/EABuPuXPIB3CieNvua54jPpbQG3iq/kzXntsoR3VYiASY42HYV5fAXZ1/CcDvob9xRJV2NCSrRbvBWYkY5EJkOGRh32LD7FRVl/wBQcja4FuWgC8wVkAsPSe0/nVK/0/ZLeLa7dmLSNH/IiPyGr7inue+J1UO4ZXdvlgyEHp7VtpRr9k0nLJyWqKHine2xt3EZdRAnoBMH0P3q23L+go1tz8NV0oBwoiAPtVaOPN2VIkSTMV2tLdaQiFhOx4UjtJge4qcto6Y2mT7eMLXCxmF53rxkmRXLyuzuUsFiUAA1OxO8Twvr9qgZBlt2/iGt3JREhnHoeFWNiTHPaas+bY5rYNtIhRC6eg4A+napSfDSKRXPf6KdmmTNacMra1B32IYDvHUeorthcIhUm55geDXd83ueYd+4ph4VyjVbNzUGLMdKmNKAEjcdTtTRk3HZjilIUYvMTrgHYbD2qJdxrAED8XWmOZ5DbUtuwbkHVt9hVQxvxFMaiVOw/tVIQjLoTJllFbRYcixC3LxRyNJEb8QNyPyFXXMPESBNFvmInpArNMPhLmjUTGntzUhcceGENWThb0GOf+Q8/imPlJMdaSeIcKAfiW5K8OOx712GKCqSajYTEG44TUBrMeY7CetZji4uwytSVHfIMgxOJTXbUskwdwo+5In2FSMfkVyx5mt6Y4IIZfrBMVoGVYq3YsJaRl0ounbknqTHc71yx+MDJA0sOx/SpyzNy10NHx6j8jP7WNIhLoLLOxH6UnzG4BcJQkBjMHpV4ybEW0Lrbt+ZW/XcCeYExFRfEuhrWhiGflTtKnnY881eEkpdE5xfHsVZPavOwsoFYv1Kie/zH5RFWrEeHLlsgLdtlmHUEemxg0q8EBkJvuQNioQ+kEk+5ERTl8UzuzaiCexiOwpcj+VD44txshX8mvWNPxNOlpMoZH12Bmo+JdVOmNQ6zx2j1psk3VKOWIjvvtv161KwuHQ+S3aRRHmLgMQO5J5+9Tuzfx0V7K8QbaNatGBrJPB5AgT2inNnHXQmiTH+de1LMTlqW7r3LdzyNEgDYEbbelc0xg1yDtTuN7QsZ/TLHnd+1euazbtNqP8AISxHHtShMuwyPqe24kwqtG/oC371wxyKpJGrUPXalLYh7jKrHkgeY7b7faqLleiElHiXa7mAtJpteRSRImCY6bcxSHE53cnZz967Zzl723ZLwhk47MOjjuD/ANdKrOJHY0slb2Vi4qPxLLkWJFx3tlILqZccSREt2pRj8mddRN20DPGpv2WpuSY1bWGbQCXcks/PoAPaP1pFiLjXGiST2Ek1lu6GUYpcv2MfD2G1XwlwKVRS7EHYjoPqe/ant7Es+pwgO3lH4fpG0flVVsZhdw6uBaMv87Mpgr0T2kkmuTeIbpBBPPAAAA7ARwPStlBvYimlod3XuKPiagrjYgcFf5SZpDdzNy2oH0INaJl/ha2iB8R/utGpgf8A1p10wD5vdp9hS7N8Jh8QpC20Rx8ulApgew3+tInG9j/KtFHv4wssnamvhlWW2zq/mYmFnj3/AFqRY8PWwup7ggft6UwTKbCpIUuT1OoAew2+5qj4qNIlCUpSuhPj8UROppY+tKjZZyAokzIA3JPammY4K0QQpKt6EkD6E028F5eAhuE6nOrfoo1EAD3iT9qxVFWVa5PixeLFy1bHxLZAmeh/Q1W81XUDcOxPAq553jZYWw0wZ/bb6VW8xwLNeQoC+ojyjqZ6VmN1LYuZapHfKcstm2rXJLHcydh2Fe83wQCeQDuKsmD8M3Ck3X0Twoifuf2qPd8LXIb4d4Fx+B1gN6Bgdj9KVzuV2OopRqiqYHNNgC0e/wCtOsQ91VBNu4FI50Pv7bVL8IZTZCF7qoLgusIb8GkgR9wT9RV1v5yqLJaTOwB4rMiipaQQlNx2Y6XuKxJDoXMgMCpI7781Jy/Am9c0l9Kj5m7em+01bM1zD+MPwSoJcwP6Tzq9I/Saa5V4Ys4e3oZ9bHzMxAAJ9BuY2qnsjVk1jldPoSWcHbtoVtl9R4LGQfXYQPpXkO9uA6EagCeD+Y/emecWLsB7DqyjgKIYe2+/5VTke5cueZiSZG8ySdutYkpjynwLFmObratxbj4jCP8AiDtP9qiZTjCPKTAPevuA8LXHBJ56GefSrBl/g29/TBqnqpHM/ITYvw+GN1xbBnXI/XerrkP+nlm3D3j8Q9ulTfD/AITW0dTGT+ntVtCwIFWx46Wzny5W3oxjxHgHQliIjr3qu4HLLl+4FQSBGo9B6VvGOyWzeUq6yD/nSlWLyyzhUVbShAT/AJvWTjxuQ0JuVREX/wCKL6TiHN10WFU8KANp7niq14hyRXuKyEAsBtt7DinWLzUorsOWMCqliMWxlmYmuXk3K2dqglGjyuBFsfDuXPhjnygknf8AzvT7Knw1q0YcCdyY8zdpMTx02prmnh44zBYe/KrdKqZOwYEbzG+/zD/ull3wYwtjRe1N20GPp5pqmSoslik5Ig4vMsNJks5O3oBxHQUiteH/AI1xbllCUVvN0EjcCTsd44qLnWAu4dwLgBn5SpkN6dwfQ1a8Fj2s2Ldtdjplh6xv9ZmltpWilJumQ8W+OUQEcp6EEfrSbE+IrySjBlMbhlIP570+fOEdgbhbbgT/AIKR56yX2EMQQQFnsek1kUm9oabaVpiW1jbrXNal943WfyirRfzg6QtyePxAj670z8OpawlttSjWTu/WI2XuBzxXTGeI7fIk7/X862ct0kLjTq2ypX8TbMhQN+xqR4dzK6A+HtozvJIgTz36Ae9Rs4AxNwG1bh25Cg+YfzEDrxvVyyALZsfDt+VzvcYiCx9zRKlE1cnLX0VjG5NiQSZRm6gOJHpvA/Ouvh+xeXE2zeRkXfzHiY6ESOn50/vXVd9OjUe4qPneFY2yEuQwXZe555+gpIzvTQ8ofaY7xOGBb/3LP50lzfFtag27mreP8n1pNluYsySTuNiOxqVZwXx7yqWgDzNv0BG33I+k0vCns3natDNsstCLl68+v8WgAD8wZ96ith1k/DuBh0V9m+/B/KvmZSsgmRPNIsXiYBNMosy6LT4Sw413LnwyzaigLfgHUcck9ukUxzJ9JJWCRyOQK6pbZLagsFRVG087fmaTjFLrJPFSu2VS0eVzZInQAR1X9xXrJMGl6+bgA1Hcj9TS3H2UE3E2BO49e4pv4Ht3GvoVtmJ8xgxp6710Yo07RzZpJxaZo2VZWABsKdpZA6V6RQBAr3XclR5QUUUVoHykPiyyWs6h+EyfY7f2p9XO5bDAgiQRBFLKPJUNCXGSZjONctCRuKTY5IGnua1XMfBNq42pCVPoeKiYfwQqNrMuRxNcvpaZ2PyU0QXzF1s2LagKEtIsc8CJ39BXNca6W2uXG8x4ntXTN00XQoOyDzfsKSYvFm60fh6Vz5E3JnXiSUUV3xDca5FwkkIwYfSvKYs6dU7x1qZmmHdhoVagYHCutxEuKYLD7TVoRfEjKcedImZf4euXh8S4fh2+dR5b2H7muuJyjDIvzXHg7NqA+wAqxYy5rEDtVazN5hVGw2pOTZZRVbFuZu+rZif3pfatPduLbT5naBv3rpmJZQhPqDXDCYr4dxLi8qwP7fvVUnVnPKSUqNTyvLLOGt/Dt7ORu/4mIG5J7elQcdiB8M27ZJOqW9qWYvOT05Ij71Cs3vPJPNRps6Wq6B8U1tgAY1c+ldF1N6zUgZQ2IYadoMz9KuGSeEtMFyTVIY7ObJnSbRRl8L3QSybTvXO1lV61cFzckCD6g8itrs5aoERX25lFtuRXR67ORZWjHMbaJMgbdBSTMbQ08Qa2rH+EbVwRMUrT/Tmwf/Zcdh2nak9LT0X/APSmtlCyjMRfthSwVkHm7n1HcV4tRuZ2k9a1XC+DMFbEC0D6k1LteGcIplbKg0Px/wBM1eY6poovhfI1v73QdMyBH0mtJweCt2l0ooAr3Zw6L8qge1dqrjhxRy5Mjk7PtFFFUJhRRRQAUUUUAFFFFAFdzPw1aulnhtTGTDbT3qDh/CIB3MVb6KThHuintlVWILfhy2vA3rli/DasNgJ6VZKK3ihOT7MwzvDmy4DiAOvQ1XcbdUEnb0NbPi8FbuiLihh6ilg8KYSZ+EJqLwb0dUfKaVNGW4DKBf3ZTHSaYv4EBEqtajYyu0nyoBUtVA2iqRhSo55TbdmB4/Dm3cZGG67fWu+XYO5cYaEY/TatnuZPYZzca0hY8tG5qTbwqL8qqPYUnpLvyn9Fe8PZKUUFxv1qyogHFexRVYxSOZu3Z9ooopjAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z"></img>
                      <p style={{ marginBottom: 0 }}>Chickpeas</p>
                      <p><small>120 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Urad" className={classes.images} src="data:image/jpeg;base64,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"></img>
                      <p style={{ marginBottom: 0 }}>Urad dal</p>
                      <p><small>160 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "soyabean" className={classes.images} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UefKxsXAXRYrty81C_1zmjPaSuReuew3qQ&usqp=CAU"></img>
                      <p style={{ marginBottom: 0 }}>Soyabean</p>
                      <p><small>150 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>

                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "Quinoa" className={classes.images} src="https://img.etimg.com/thumb/msid-44870142,width-650,imgsize-91413,,resizemode-4,quality-100/.jpg"></img>
                      <p style={{ marginBottom: 0 }}>Quinoa</p>
                      <p><small>100 Rs/kg</small></p>
                      <Button color="rose">Add to cart</Button>
                    </Paper>
                </Grid>


                <Grid item xs style={{ margin: 10 }}>
                    <Paper className={classes.paper} style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <img alt = "BuckWheat" className={classes.images} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0MJ0VQ5DI9X1LssqICMxeaDDig54kJXktdQ&usqp=CAU"></img>
                      <p style={{ marginBottom: 0 }}>Buckwheat</p>
                      <p><small>40 Rs/kg</small></p>
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

Foodgrains.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Foodgrains)
