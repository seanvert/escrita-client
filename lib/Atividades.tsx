import React, { useState } from 'react';
import { Box } from '@chakra-ui/react'
import { FaPencilAlt, FaRegClock } from 'react-icons/fa'

// TODO: pensar em outras maneiras de calcular uma "pontuação"
// TODO: também ver se faz algum sentido validar as palavras
// FIXME: consertar o contador que está trocando de lugar
// TODO: com opção para esconder o contador
// TODO: colocar alguma coisa para mostrar palavras da atividade
// TODO: ver alguma maneira da caixa de texto sempre estar com o foco do teclado enquanto a aba estiver ativa
// TODO: opção para tirar o backspace e o delete
// FIXME: criar um evento pro backspace e o delete e criar uma função para recalcular a contagem de palavras quando um dos dois forem usados
// FIXME: também colocar uma função dessas pra rodar quando usarem o ctrl z

function inteiroAleatorio(min: number, max: number): number {
	// max is exclusive and min is inclusive
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

function contaPalavras(texto: string): number {
	return texto.split(/\s+/).length;
}

// TODO: pensar em alguma função externa para calcular a pontuação, 
// ela vai envelopar o componente CaixaTexto
// cada uma será diferente de acordo com a atividade

function diferencaTempo(tempo: Date): number {
	return Math.floor((new Date - tempo) / 1000);
}

function CaixaTextoAtividade(props) {
	// TODO: ver um jeito de separar essas coisas e colocar uma função específica para validar cada atividade
	const [contagem, setContagem]: [number, any] = useState(0);
	const [texto, setTexto]: [string, any] = useState("");
	const [tempo, setTempo]: [any, any] = useState(new Date);
	function mudaTexto (e) {
		setTexto(e.target.value);
		setContagem(contaPalavras(texto));
		if (contagem === 0) {
			setTempo(new Date);
		}
	}
	return (
        <Box verticalAlign='true' bg='white' justifyContent='center'>
			<textarea placeholder="Escreva aqui"
			onChange={e => mudaTexto(e)}
			className="TextoPrincipal" />
            <p><FaPencilAlt display="inline" /> {contagem}</p>
			<p><FaRegClock /> {diferencaTempo(tempo)}</p> 
        </Box>
	);
}

function Atividade() {
	return (
	    <CaixaTextoAtividade />
	);
}

export default Atividade;
