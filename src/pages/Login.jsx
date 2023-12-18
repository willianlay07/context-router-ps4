import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const InputStyled = styled.input`
  width: 200px;
  height: auto;
  padding: 10px 10px;
  border: 1px solid #000;
  outline: 0px;
  border-radius: 7px;
`;

const ButtonStyle = styled.button`
  width: 150px;
  height: auto;
  padding: 10px 10px;
  outline: 0px;
  border-radius: 7px;
  border: 1px solid #000;
  cursor: pointer;
`;

const Login = () => {
  const { isAuth, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  function handleForm(e) {
    e.preventDefault();

    handleLogin(email, password);
    navigate("/", {
      replace: true,
    });
  }

  useEffect(() => {
    if (isAuth) {
      navigate("/auth/profile", {
        replace: true,
      });
    }
  }, [isAuth, navigate]);

  return (
    <div>
      <form onSubmit={handleForm}>
        <h1>Log In</h1>
        Email:{" "}
        <InputStyled
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        Password:{" "}
        <InputStyled
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <ButtonStyle>Sign In</ButtonStyle>
      </form>
    </div>
  );
};

export default Login;
