import React, { useEffect, useState } from 'react';
import { Center, Tooltip } from '@chakra-ui/react'
import { FaPencilAlt, FaRegClock } from 'react-icons/fa'

// FIXME: consertar o contador que está trocando de lugar
// TODO: com opção para esconder o contador
// TODO: colocar alguma coisa para mostrar palavras da atividade
// TODO: ver alguma maneira da caixa de texto sempre estar com o foco do 
// teclado enquanto a aba estiver ativa
// TODO: opção para tirar o backspace e o delete
// FIXME: criar um evento pro backspace e o delete e criar uma função para 
// recalcular a contagem de palavras quando um dos dois forem usados
// FIXME: também colocar uma função dessas pra rodar quando usarem o ctrl z

function inteiroAleatorio(min: number, max: number): number {
	// [min, max[ 
	// max is exclusive and min is inclusive
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

function contaPalavras(texto: string): number {
	return texto.split(/\s+/).length;
}

function calculaPontuacao(texto: string, 
	funcaoValidadora: (arg0: string) => number): number {
		// TODO
	    /* parâmetros: texto a ser avaliado
		funcaoValidadora função que checa as palavras,
		elas trocam conforme mudam as atividades */
		// retorna a pontuação
	return 1;
}

// TODO: pensar em alguma função externa para calcular a pontuação, 
// ela vai envelopar o componente CaixaTexto
// cada uma será diferente de acordo com a atividade

function diferencaTempo(tempo: Date): number {
	return Math.floor((new Date - tempo) / 1000);
}

function Relogio(props) {
	const [tempoDecorrido, setTempoDecorrido] = 
	useState(diferencaTempo(props.tempo));
	useEffect(() => {
		setInterval(() => {
			setTempoDecorrido(diferencaTempo(props.tempo));
		}, 1000)
	});
	return (
		<div><FaRegClock />{tempoDecorrido}</div>
	);
}

function CaixaTextoAtividade(props) {
	// TODO: ver um jeito de separar essas coisas e colocar uma função 
	// específica para validar cada atividade
	const [contagem, setContagem]: [number, any] = useState(0);
	const [texto, setTexto]: [string, any] = useState("");
	const [tempo, setTempo]: [Date, any] = useState(new Date);
	function mudaTexto (e) {
		setTexto(e.target.value);
		setContagem(contaPalavras(texto));
		if (contagem === 0) {
			setTempo(new Date);
		}
	}
	return (
        <Center bg='white' alignContent='flex-end'>
			<textarea placeholder="Escreva aqui"
			onChange={e => mudaTexto(e)}
			className="TextoPrincipal" />
			<Center>
			<Tooltip label='Contagem de palavras'>
            <div><FaPencilAlt /> {contagem}</div>
			</Tooltip>
			<Tooltip label='Tempo'>
				<div>
			<Relogio tempo={tempo} /></div>
			</Tooltip>
			</Center>
        </Center>
	);
}

function Atividade() {
	return (
	    <CaixaTextoAtividade />
	);
}

export default Atividade;
