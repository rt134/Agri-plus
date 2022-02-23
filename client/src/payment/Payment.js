import React, {useState,useContext} from "react";
import Button from "../components/CustomButtons/Button";
import Logo from '../assets/img/logo.png'
import AuthContext from '../context/AuthContext'

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Payment = (props) => {

  const auth = useContext(AuthContext);

  async function displayRazorPay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("RazorPay failed to load");
      return;
    }
    

    const data = await fetch(`http://localhost:5000/razorpay`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a : props.amount})
    }).then((t) => t.json());
  
    var options = {
      key: "rzp_test_AwGXBFJdSSKBsJ",
      amount: data.amount,
      currency: data.currency,
      name: "Agri +",
      description: "Transaction",
      image: Logo,
      order_id: data.id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name:  auth.loggedIn.username,
        email: auth.loggedIn.emailId,
        contact: "9721000028",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div>
      <Button onClick={displayRazorPay} color="success">Checkout</Button>
    </div>
  );
}

export default Payment;
