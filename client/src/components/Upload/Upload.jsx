import React, { useState } from 'react';
import Button from '../CustomButtons/Button'
import stopImg from '../../assets/img/stop.jpg'
import processingImg from '../../assets/img/processing.gif';


function Upload() {

  const [image, setImage ] = useState();
  const [proc, setProc] = useState(false);
  const [disease, setDisease] = useState("");

  const uploadData = async () => {
    const uploadData = new FormData();
    uploadData.append('img', image, image.name);
    
    fetch('http://127.0.0.1:8000/', {
      method: 'POST',
      body: uploadData,
      
    }).then( 
      res => console.log(res.json()),
      setDisease("Brown Spot"),
      setProc(false),
      setImage(null)
    )
    .catch(
        error => console.log(error)
    );
  }

  return (
    <div>
    
      <div style={{"display": "flex","justify-content": "center", "align-items": "center"}}>
        {proc || image ? <img  alt={"img"} src={processingImg}/> : <img alt={"Img"} src={stopImg}/> }
      </div>
      <br />

      <div style={{"display": "flex","justify-content": "center", "align-items": "center"}}>
        {
          disease ? <h3>{disease}</h3> : 
              <div>
                <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
                {image ? <Button color='success' onClick={() => uploadData()}>Upload</Button> : <Button color='success' disabled={true} onClick={() => uploadData()}>Upload</Button>}
              </div>
        }
      </div>

    </div>
  );
}

export default Upload;