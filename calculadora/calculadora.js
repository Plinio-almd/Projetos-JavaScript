function calculadora() {
    const operacao = Number( prompt('Escolha uma operação:\n 1-Adição (+)\n 2-Subtração (-)\n 3-Multiplicação (*)\n 4-Divisão Real (/)\n 5-Divisão Inteiro (%)\n 6-Potenciação(**)\n'));

    if (!operacao || operacao >= 7) {
        alert('ERRO - Operação Inválida!');
        calculadora();
    }else {
        let n1 = Number(prompt('primeiro valor'));
        let n2 = Number(prompt('segundo valor'));
        let resultado;

        if (!n1 || !n2) {
            alert('ERRO - parâmetros inválidos!')
            calculadora();
        }else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisaoInteiro() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é = ${resultado}`)
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é = ${resultado}`)
                novaOperacao();
            }
    
            function novaOperacao() {
                let opcao = prompt(`Deseja fazer uma nova operação?\n 1-Sim\n 2-Não\n`);
    
                if (opcao == 1) {
                    calculadora();
                }else if (opcao == 2){
                    alert('Até mais!')
                    close();
                }else {
                    alert('Digite uma opção válida!')
                    novaOperacao();
                }
            }
        }        

        /*if (operacao == 1) {
            soma(); 
        }else if (operacao == 2) {
            subtracao();
        }else if (operacao == 3) {
            multiplicacao();
        }else if (operacao == 4) {
            divisaoReal();
        }else if (operacao == 5) {
            divisaoInteiro();
        }else if (operacao == 6) {
            potenciacao();
        }*/
        
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteiro();
                break;
            case 6:
                potenciacao();
                break;
        }
               
        
    }
}
calculadora();
