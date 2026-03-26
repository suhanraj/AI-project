import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
function Login() {
const [username, setUsername] = useState("");
const [password, setpassword] = useState("");
const Navigate=useNavigate();
 function refresh() {  
 window.location.reload();
  }
  function handlelogin() {
    if (username === "suhan"&& password==="1234") {
      console.log("login successfull")
      Navigate("/home"); 
     }
     else{
      console.log("wrong username or paasword")
      alert("wrong username or password");
  } 
}
  
  return (
    <div class="box">
    <div>
      <div><h1>Login</h1></div>
      <input onChange={(e) => setUsername(e.target.value)} type="text" value={username} placeholder="Enter the Username" />
      <br/>
      <input onChange={(e) => setpassword(e.target.value)} type="password" value={password} placeholder="Password" />
      <br />
      <button onClick={handlelogin}>Login</button>
      <button onClick={refresh}>reset</button>
    </div>
    </div>
  );
}
export default Login;