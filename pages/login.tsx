import React from 'react'
import Main from "../layouts/Main";

const Login: React.FC = (props) => {
	return (
		<Main  title="Login">
			<form className="font-bold"
				  action="/send-data-here" method="post">
				<label>Usuário:</label>
				<input
				className="my-2"
				type="text"
				id="user" name="usuario"
				required
				/>
				<label>Senha:</label>
				<input
				className="my-2"
				type="password"
				id="last" name="senha"
				required
				/>
				<button className="bg-orange-300 p-1 rounded"
						type="submit">
					Enviar
				</button>
			</form>
		</Main>
	);
}

export default Login;
