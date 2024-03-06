//Resposta da Primeira Pergunta
	var Indice = 13;
	var soma = 0; 
	var k = 0;

	while(k < Indice){
		k++;
		soma += k;
	}
	document.write(soma);

	//Resultado da Soma é 91

//Resposta da Segunda Pergunta	
	var array = [0, 1];
	var nCont = 0;
	var resultado = 0;
	var numero = 0;
	var limite = 0;
	var lPertence = false;

	numero = parseInt(prompt('Digite seu Numero Desejado'));
	//Calculando a Fibonacci

	for(nCont = 2; nCont <= 100; nCont++){
		array[nCont] = array[nCont -1] + array[nCont-2];
		resultado += array[nCont] + '-';
	}

	resultado = resultado.substr(0, resultado.length -1);
	
	for(nCont = 0; nCont <= array.length -1; nCont++){
		if(numero === array[nCont]){
			lPertence = true;
			break;
		}
	}

	if(lPertence === false){
		console.log('O numero Informado Não Pertence ao Conjunto de Valores do Fibonacci');
	}else{
		console.log('O numero Informado Pertence ao Conjunto de Valores do Fibonacci');
	}

	console.log('Resultado do Fibonacci: ' + resultado);
/*
//Resposta da Terceira Pergunta

	A)1, 3, 5, 7, ___ : A resposta é 9 pois aqui segue uma sequencia de ímpares.

	B)2, 4, 8, 16, 32, 64, ____ : A resposta é 128 pois aqui é sempre multiplicado pelo dobro do valor anterior.

	C)0, 1, 4, 9, 16, 25, 36, ____ : A resposta é 49 pois aqui é quadrado perfeito dos Numeros Naturais.

	D) 4, 16, 36, 64, ____ : A resposta é 100 pois aqui é uma sequencia de diferenças. 

	E)1, 1, 2, 3, 5, 8, ____ : A resposta é 13 pois aqui é uma sequencia fibonacci.

	F)2, 10, 12, 16, 17, 18, 19, ____ : A resposta é 20 pois aqui é sequencia crescente de numero naturais.
*/

//Resposta da Quarta Pergunta
/*
Ligue o primeiro interruptor e aguarde alguns minutos.
Depois, desligue o primeiro interruptor e ligue o segundo interruptor.
Entre na sala onde as lâmpadas estão localizadas.
Agora, vamos analisar os resultados:

Se a lâmpada estiver acesa, então o primeiro interruptor controla essa lâmpada.
Se a lâmpada estiver apagada e estiver quente ao toque, então o segundo interruptor controla essa lâmpada.
Se a lâmpada estiver apagada e estiver fria ao toque, então o terceiro interruptor controla essa lâmpada.
*/	

/* Resposta da Quinta Pergunta */
	var string = prompt('Informe uma Palavra');
	var nCont = 0;
	var invertida = '';

	if((string.length -1) > 0){
		for(nCont = string.length -1; nCont >= 0; nCont--){
			invertida += string.charAt(nCont);
		}
		alert('String Invertida: ' + invertida);
	}else{
		alert('Para inverter uma String, precisa mais de que só um caracter!');
	}