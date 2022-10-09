import React from 'react'
import Main from "../layouts/Main";

const Login: React.FC = (props) => {
	return (
		<Main  title="Login">
			<form class="font-bold"
				  action="/send-data-here" method="post">
				<label for="usuario">Usuário:</label>
				<input
				className="my-2"
				type="text"
				id="user" name="usuario"
				required
				/>
				<label for="senha">Senha:</label>
				<input
				className="my-2"
				type="password"
				id="last" name="senha"
				required
				/>
				<button class="bg-orange-300 p-1 rounded"
						type="submit">
					Enviar
				</button>
			</form>
		</Main>
	);
}

export default Login;
