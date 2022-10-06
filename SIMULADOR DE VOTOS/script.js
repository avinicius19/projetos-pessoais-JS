const numeroCandidato = document.getElementById('candidato');
const confirma = document.getElementById('confirma');
const resultado = document.getElementById('res');



confirma.addEventListener('click', function () {
  if (numeroCandidato.value === 'Lula' || numeroCandidato.value === 'lula' || numeroCandidato.value === '13') {
    resultado.classList.add('lula');
    resultado.innerHTML = '<p>Você votou no(a) candidato(a) Lula.</p> <img class = "imglula" src = "imagens/lula.jpg">';
    limpaVoto();
  } else if (numeroCandidato.value === 'Soraya' || numeroCandidato.value === '44') {
    resultado.classList.add('soraya');
    resultado.innerHTML = '<p>Você votou no(a) candidato(a) Soraya</p> <img class = "imgsoraya" src = "imagens/soraya.jpg">';
    limpaVoto();
  } else if (numeroCandidato.value === 'Simone Tabet' || numeroCandidato.value === 'Simone' || numeroCandidato.value === '15') {
    resultado.classList.add('simone');
    resultado.innerHTML = '<p>Você votou no(a) candidato(a) Simone</p> <img class = "imgsimone" src = "imagens/simone.jpg">';
    limpaVoto();
  }
  else if (numeroCandidato.value === 'Ciro Gomes' || numeroCandidato.value === 'Ciro' || numeroCandidato.value === '12') {
    resultado.classList.add('ciro');
    resultado.innerHTML = '<p>Você votou no(a) candidato(a) Ciro Gomes</p> <img class = "imgciro" src = "imagens/ciro.jpg">';
    limpaVoto();
  }
  else if (numeroCandidato.value === 'Felipe Dávila' || numeroCandidato.value === 'Felipe' || numeroCandidato.value === '30') {
    resultado.classList.add('felipe');
    resultado.innerHTML = '<p>Você votou no(a) candidato(a) Felipe Dávila</p> <img class = "imgfelipe" src = "imagens/felipe.png">';
    limpaVoto();
  }
  else if (numeroCandidato.value === 'Bolsonaro' || numeroCandidato.value === 'Jair Bolsonaro' || numeroCandidato.value === '22') {
    resultado.classList.add('bolsonaro');
    resultado.innerHTML = '<p>Você votou no(a) candidato(a) Bolsonaro</p> <img class = "imgbolsonaro" src = "imagens/bolsonaro.jpeg">';
    limpaVoto();
  }
  else if(numeroCandidato.value === ''){
    alert('[ERRO] Preencha o campo corretamente!');
  }
});

function limpaVoto() {
  numeroCandidato.value = '';
  numeroCandidato.focus();
};



