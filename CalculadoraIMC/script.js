// Capturar evento de submit do formulário
const form = document.querySelector('#form')

// Adicionar um evento ao formulário -> "SUBMIT"
form.addEventListener('submit', function(evento){
    // Não deixa o formulário ser enviado
    evento.preventDefault()
    // Captura de dados do input
    const inputPeso = evento.target.querySelector('#peso')
    const inputAltura =  evento.target.querySelector('#altura')

    // Conversão de inputs para NUMBER
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if(!peso){
        setResultado('Peso inválido', false)
        return;
    }
    if(!altura){
        setResultado('Altura inválida', false)
        return;
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`
    setResultado(msg, true)
})

function getNivelImc(imc){
    const nivel = ['Abaixo do Peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3' ]
    
    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}

function getImc(peso,altura){
    const imc = peso / altura ** 2
    return imc.toFixed(2)
    
}

// Função que cria parágrafo
function criaParagrafo(){
    const p = document.createElement('p')
    return p
    
}

function setResultado(mensagem, isValid){
    const resultado = document.querySelector('#res')
    resultado.innerHTML = ''  
    const p = criaParagrafo()

    if(isValid){
        p.classList.add('paragrafo-resultado')
    } else{
        p.classList.add('bad')
    }

    p.innerHTML = mensagem
    resultado.appendChild(p)
  }