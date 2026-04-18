import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const Navigate = useNavigate();

  useEffect(() => {
    // Redirect to home immediately
    Navigate("/home");
  }, [Navigate]);

  return null;
}

export default Login;