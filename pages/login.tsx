import React from 'react'
import Main from "../layouts/Main";

const Login: React.FC = (props) => {
	return (
		<Main title="Login">
			<div className="grow grid">
				<div className="self-center text-center">
					<form className="font-bold bg-orange-800"
						  action="/send-data-here" method="post">
						<div className="flex-col">
							<div>
								<label>Usuário:</label>
								<input
								className="my-2"
								type="text"
								id="user" name="usuario"
								required
								/>
							</div>
							<div>
								<label>Senha:</label>
								<input
								className="my-2"
								type="password"
								id="last" name="senha"
								required
								/>
							</div>
							<button className="bg-orange-300 p-1 rounded"
								type="submit">
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
		</Main>
	);
}

export default Login;
