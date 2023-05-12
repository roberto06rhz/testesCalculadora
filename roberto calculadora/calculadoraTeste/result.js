var aValor = document.getElementById('a')
var bValor = document.getElementById('b')
var igual = document.getElementById('igual')
const result = document.getElementById('resultado')

var excluir = document.getElementById('delete')

function deletar(){
    aValor.value=''
    bValor.value=''
    result.innerHTML=''

}

function resultado() {
    if (aValor.value !== '' && bValor.value !== '') {
        switch(document.getElementById('operacoes').value) {
            case 'adicao': result.innerHTML = adicao(Number(aValor.value), Number(bValor.value));
            break;
            
            
            case 'divisao': result.innerHTML = divisao(Number(aValor.value), Number(bValor.value));
            break;
            
            case'subtracao': result.innerHTML = subtracao(Number(aValor.value), Number(bValor.value));
            break;
        
            case'multiplicacao': result.innerHTML = multiplicacao(Number(aValor.value), Number(bValor.value));
            break;

            case 'fatorial': result.innerHTML = fatorial(Number(aValor.value));
            break;

            case 'potencia': result.innerHTML = potencia(Number(aValor.value), Number(bValor.value));
            break;
        
        }
    } else {
        alert('insira un valor ')
    }
}

igual.addEventListener('click', resultado)
excluir.addEventListener('click',deletar)