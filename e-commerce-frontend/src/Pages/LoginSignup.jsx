import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({username:"",email:"",password:""});

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
    }

  const login = async () => {
    let dataObj;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});
      console.log(dataObj);
      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
  }

  const signup = async () => {
    let dataObj;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});

      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input type="text" placeholder="Nome" name="username" value={formData.username} onChange={changeHandler}/>:<></>}
          <input type="email" placeholder="Email" name="email" value={formData.email} onChange={changeHandler}/>
          <input type="password" placeholder="Senha" name="password" value={formData.password} onChange={changeHandler}/>
        </div>

        <button onClick={()=>{state==="Login"?login():signup()}}>Continuar</button>

        {state==="Login"?
        <p className="loginsignup-login">Criar uma conta? <span onClick={()=>{setState("Sign Up")}}>Clique aqui</span></p>
        :<p className="loginsignup-login">Já possui uma conta? <span onClick={()=>{setState("Login")}}>Faça Login</span></p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Concordo com os termos de política & privacidade</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
