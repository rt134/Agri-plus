import React, { useState } from 'react';
import Button from '../CustomButtons/Button'
import stopImg from '../../assets/img/stop.jpg'
import processingImg from '../../assets/img/processing.gif';
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    float: "left",
    color : "black",
    '&:hover': {
      color: "green",
    }
  },

};

function Upload() {

  const [image, setImage ] = useState();
  const [proc, setProc] = useState(false);
  const [disease, setDisease] = useState("");

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

  const uploadData = async () => {
    try {
      const uploadData = new FormData();
      uploadData.append('img', image, image.name);
      const res = await fetch('http://127.0.0.1:8000/', {
        method: 'POST',
        body: uploadData,
      })
      const data = await res.json();
      setDisease(data.name);
      toastSuccess("Image processed Successfully")
      setProc(false);
      setImage(null);
    }catch(err){
      toastError("Unable to process");
    }
  }

  return (
    <div>
    
      <div style={{"display": "flex","justify-content": "center", "align-items": "center"}}>
        {proc || image ? <img  alt={"img"} src={processingImg}/> : <img alt={"Img"} src={stopImg}/> }
      </div>
      <br />

      <div style={{"display": "flex","justify-content": "center", "align-items": "center"}}>
        {
          disease ? 
          <div>
            <h4>Disease name : {disease}</h4>
          </div> : 
              
          <div>
            <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
            {image ? <Button color='success' onClick={() => uploadData()}>Upload</Button> : <Button color='success' disabled={true} onClick={() => uploadData()}>Upload</Button>}
          </div>
        }
      </div>


        <div style={{"display" : "flex", "justifyContent" : "center", "alignItems" : "center"}}>
          {
            disease ? 
            
            <div>
              {
                disease === "BrownSpot" ? <h4><Link to={{ pathname: `/client/pesticides` }}>Cure : Spray Mancozeb, Fungisides, captan, carbendazim</Link></h4> : null
              }

              {
                disease === "Hispa" ? <h4><Link to={{ pathname: `/client/pesticides` }}>Cure : diazinon, malathion and phosphamidon</Link></h4> : null
              }

              {
                disease === "LeafBlast" ? <h4><Link to={{ pathname: `/client/pesticides` }}>Cure : Trycyclozole, Contaf Plus, Carbendazim</Link></h4> : null
              }

              {
                disease === "Healthy" ? <h4>No disease detected</h4> : 
                
                null
              }

            </div> : null
          }
        </div>

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

export default withStyles(styles)(Upload);