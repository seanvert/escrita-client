import React from 'react'
import Main from "../layouts/Main";

const Login: React.FC = (props) => {
	return (
		<Main title="Login">
					<form action="/send-data-here" method="post">
						<label for="usuario">Usuário:</label>
						<input
						m={2} type="text"
						id="user" name="usuario"
						required
						/>
						<label for="senha">Senha:</label>
						<input
						m={2} type="password"
						id="last" name="senha"
						required
						/>
						<button type="submit">
							Enviar
						</button>
					</form>
		</Main>
	);
}

export default Login;
