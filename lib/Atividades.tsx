import React, { useState } from 'react';

// TODO: pensar em outras maneiras de calcular uma "pontuação"
// TODO: também ver se faz algum sentido validar as palavras
// FIXME: consertar o contador que está trocando de lugar
// TODO: com opção para esconder o contador
// TODO: colocar um cronometro
// TODO: colocar alguma coisa para mostrar palavras da atividade
// TODO: ver alguma maneira da caixa de texto sempre estar com o foco do teclado enquanto a aba estiver ativa
// TODO: opção para tirar o backspace e o delete
// FIXME: criar um evento pro backspace e o delete e criar uma função para recalcular a contagem de palavras quando um dos dois forem usados
// FIXME: também colocar uma função dessas pra rodar quando usarem o ctrl z

function contaPalavras(texto: string) {
	return texto.split(' ').length;
}

// TODO: pensar em alguma função externa para calcular a pontuação, ela vai envelopar o componente CaixaTexto
// cada uma será diferente de acordo com a atividade

function CaixaTextoAtividade (props) {
	// TODO: ver um jeito de separar essas coisas e colocar uma função específica para validar cada atividade
	const [contagem, setContagem]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);
	const [texto, setTexto]: [string, React.Dispatch<React.SetStateAction<string>>] = useState("");
	function mudaTexto (e) {
		setTexto(e.target.value);
		setContagem(contaPalavras(texto));
	}
	return (
		<label for="">
			Contagem de palavras: {contagem}
			<textarea placeholder="Escreva aqui"
			onChange={e => mudaTexto(e)}
			className="TextoPrincipal" />
		</label>
	);
}

function Escrita() {
	return (
		<div className="App">
			<CaixaTextoAtividade />
		</div>
	);
}

export default Escrita;
