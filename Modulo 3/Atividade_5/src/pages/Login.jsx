import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user, login, logout } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameSubscribe, setUsernameSubscribe] = useState("");
  const [passwordSubscribe, setPasswordSubscribe] = useState("");
  const [nameSubscribe, setNameSubscribe] = useState("");
  const [passwordSubscribeConfirmation, setPasswordSubscribeConfirmation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    if (username === "admin" && password === "1234") {
       navigate("/");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  }

  const subscribe = (e) => {
    e.preventDefault();
    console.log(usernameSubscribe)
    console.log(nameSubscribe)
    console.log(passwordSubscribe)
    console.log(passwordSubscribeConfirmation)
  }

  return (
    <div className="flex-col">
      {user ? (
        <>
          <p>Bem-vindo, {user}!</p>
          <button onClick={logout}>Sair</button>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <form className="flex-col" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">
              Entrar
            </button>
          </form>
          <h2>Cadastrar</h2>
          <form className="flex-col" onSubmit={subscribe}>
            <div>
              <input
                type="text"
                placeholder="Nome Completo"
                value={nameSubscribe}
                onChange={(e) => setNameSubscribe(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Usuário"
                value={usernameSubscribe}
                onChange={(e) => setUsernameSubscribe(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Senha"
                value={passwordSubscribe}
                onChange={(e) => setPasswordSubscribe(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Senha"
                value={passwordSubscribeConfirmation}
                onChange={(e) => setPasswordSubscribeConfirmation(e.target.value)}
                required
              />
            </div>
            <button type="submit">
              Cadastrar
            </button>
          </form>
        </>
      )}
    </div>
  );
}