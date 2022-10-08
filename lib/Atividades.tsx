import React, { useEffect, useState, useRef } from 'react';
import { Center, Tooltip, Flex, Spacer } from '@chakra-ui/react'
import { FaRegClock, FaPencilAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'

// FIXME: arrumar o inicio da contagem do relógio para aparecer
// somente quando o usuário digitar algo
// TODO: com opção para esconder o contador
// TODO: colocar alguma coisa para mostrar palavras da atividade
// TODO: ver alguma maneira da caixa de texto sempre estar com o foco do 
// teclado enquanto a aba estiver ativa
// TODO: opção para tirar o backspace e o delete

interface Tempo {
	tempo: number
}

interface ContagemDePalavras {
	contagem: number
}

export function inteiroAleatorio(min: number, max: number): number {
	// [min, max[ 
	// max is exclusive and min is inclusive
	var min = Math.ceil(min);
	var max = Math.floor(max);
	var r_int = Math.floor(Math.random() * (max - min) + min);
	return r_int;
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

function Relogio (props: Tempo) {
	console.log("adf")
	console.log(typeof(props));
	console.log("adf")
	return (
		<Tooltip hasArrow label='Tempo'>
			<div><FaRegClock /> {props.tempo}</div>
		</Tooltip>
	);
}

function CaixaContadorDePalavras(props: ContagemDePalavras) {
	return (
		<Tooltip hasArrow label='Contagem de palavras'>
			<p><FaPencilAlt /> {props.contagem}</p>
		</Tooltip>
	);
}

function CaixaTextoAtividade(props: object) {
	const router = useRouter();
	const [ativo, setAtivo] = useState(false);
	const [tempoRestante, setTempoRestante] = 
		useState(10);
	const textAreaRef = useRef(null);

	function handleSubmit() {
		/* console.log(event); */
		/* event.preventDefault(); */
		/* console.log(textAreaRef.current.value); */
	}
	
	useEffect(() => {
	   if (ativo && tempoRestante > 0) {
		   const timerID = setInterval(
			   () => {setTempoRestante(tempoRestante - 1)},
			   1000);
		   return () => { clearInterval(timerID) };
	   } else if (tempoRestante == 0) {
		   handleSubmit();
	   }
	});

	function setAtivoo (bool: boolean) {
		setAtivo(bool);

	}
	
	return (
        <Center bg='white' display="block">
			<form onSubmit={handleSubmit}>
				<textarea placeholder="Escreva aqui"
				autoFocus={true}
				ref={textAreaRef}
				onChange={(e) => {setAtivoo(true)}}
				className="TextoPrincipal" />
			</form>
			<Flex>
				<Spacer />
				<Relogio tempo={tempoRestante} />
				<Spacer />
			</Flex>
        </Center>
	);
}

function Atividade() {
	return (
	    <CaixaTextoAtividade />
	);
}

export default Atividade;
