import React from 'react'
import Main from "../layouts/Main";
import { Button, Center, Input } from '@chakra-ui/react'

const Login: React.FC = (props) => {
	return (
		<Main title="Login">
			<Center>
				<form action="/send-data-here" method="post">
					<label for="usuario">Usuário:</label>
					<Input m={2} type="text" id="user" name="usuario" />
					<hr/>
					<label for="senha">Senha:</label>
					<Input m={2} type="password" id="last" name="senha" />
					<hr/>
					<Button type="submit" colorScheme='blue'>Enviar</Button>
				</form>
			</Center>
		</Main>
	);
}

export default Login;
