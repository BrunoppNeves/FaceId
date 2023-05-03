import React, { useState, useEffect } from "react";
import icon from "../../assets/images/Logo.svg";
import emailIcon from "../../assets/images/LogoEmail.svg";
import senhaIcon from "../../assets/images/LogoSenha.png";
import {
  BackgroundContainer,
  WorkspaceContainer,
  FundoLoginContainer,
  IconContainer,
  InputContainer,
  ButtonContainer,
} from "./style";

import api from "../../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  function logged() {
    if (token) {
      window.location.href = "/dashboard";
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { email: email, password: senha };
    const response = await api.post("/auth/login", user);
    setUser(response.data);
    localStorage.setItem("token", response.data.token);
    if (response.data.token) {
      window.location.href = "/dashboard";
    }
  };

  useEffect(() => {
    logged();
  }, []);

  return (
    <BackgroundContainer>
      <WorkspaceContainer>
        <IconContainer>
          <img src={icon} alt="icon" />
        </IconContainer>
        <form onSubmit={handleLogin}>
          <FundoLoginContainer>
            <h2>Login</h2>
            <InputContainer>
              <img src={emailIcon} alt="icon" />
              <input type="text" value={email} placeholder="Email" onChange={({ target }) => setEmail(target.value)} />
            </InputContainer>
            <InputContainer>
              <img src={senhaIcon} alt="icon" />
              {<input type="password" value={senha} placeholder="Senha" onChange={({ target }) => setSenha(target.value)} />}
            </InputContainer>
            <ButtonContainer>
              <button type="submit">Entrar</button>
            </ButtonContainer>
          </FundoLoginContainer>
        </form>
      </WorkspaceContainer>
    </BackgroundContainer>
  );
}
