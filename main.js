/* O arquivo está comentado para fins de aprendizagem e verificação do conteúdo*/


const calcular = document.getElementById('calcular'); //botao calcular
alert("ATENÇÃO: Use ponto '.' ao invés de vírgula ',' "); //alerta sobre as pontuações de ponto e vírgula

/*observação:
  value - o valor dele, no caso, onde fica o texto, (onde input será digitado)
  exemplo: nome.value = 'Rafael';  vai aparecer o nome dentro do  input*/

function imc (){
    
    // testando pra ve se ta funcionando ---> alert('teste click')
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== ''  && peso !== '') {// se o "nome, altura e peso" for diferente(!==) de vazio(''), vai aparecer algo.
    // alert('Texto preenchido'); teste - se nao tiver texto escrito n acontece nada, mas se escrever e apertar o botao, aparece um alert
    //alert ('Valor preenchido!')

        const valorIMC = (peso / (altura * altura)).toFixed(1);  //tofixed arredonda o tanto de casas decimais

        let classificacao = '';

        if (valorIMC < 18.5){                                   //abaixo do peso
            classificacao = 'abaixo do peso.';

        }else if (valorIMC < 25){                               // entre 18.5 e 25 , seu peso é ideal
            classificacao = 'com o peso ideal'; 

        }else if (valorIMC < 30){                               // entre 25 e 30 um pouco acima do peso  
            classificacao = 'levemente acima do peso.'; 

        }else if (valorIMC < 35){                               // entre 30 e 35 grau 1 obesidade
            classificacao = 'no nível de obesidade grau I.';

        }else if (valorIMC < 40){                                // entre 35 e 40 grau 2 obesidade
            classificacao = 'no nível de obesidade grau II';

        }else if (valorIMC < Infinity) {                               //  40 para cima obesidade grave
            classificacao = 'com obesidade grave, grau III. Se cuide!!';

        }                                                      
    

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else { 
        // alert ('Preencha todos os campos') testando para ve se foi preenchido tudo.
        resultado.textContent = 'Preencha todos os campos!!';
    }
}

calcular.addEventListener('click' , imc);  // quando clicar em calcular, vai aplicar um evento de click 
