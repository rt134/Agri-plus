import React, { useState } from 'react';
import Button from '../CustomButtons/Button'


function Upload() {

  const [ image, setImage ] = useState();

  const uploadData = () => {
    const uploadData = new FormData();
    uploadData.append('img', image, image.name);
    
    fetch('http://127.0.0.1:8000/', {
      method: 'POST',
      body: uploadData,
      
    }).then( 
        res => console.log(res.json())
    )
    .catch(
        error => console.log(error)
    );
  }

  return (
    <>
    <input type="file" onChange={(e) => setImage(e.target.files[0])}/>

    {image ? <Button color='rose' onClick={() => uploadData()}>Upload</Button>
    : <Button color='success' disabled={true} onClick={() => uploadData()}>Upload</Button>}
    
    </>
  );
}

export default Upload;