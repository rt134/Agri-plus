import React, { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import url from 'url'
const AuthContext = createContext();

function AuthContextProvider(props) {

  let history = useHistory();
  const [loggedIn, setLoggedIn] = useState(undefined);
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



  async function getLoggedIn() {
    try{
      await axios.get("http://localhost:5000/auth/loggedIn")
      .then(res => {
        if(res.data.loggedIn){
          const message = "Hello! " + res.data.username + ", Welcome to Agri+"
          toastSuccess(message);
          setLoggedIn(res.data);
        }else{
          console.log("Here")
        }
      })

    }catch(err){
      history.push("/client/login");
      toastError("User Not Logged In")
    }
    
  }
  useEffect(() => {
    getLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
      <ToastContainer position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
    </AuthContext.Provider>
  );
}
export default AuthContext;
export { AuthContextProvider };
