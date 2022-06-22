// estou atribuindo o elemento com o #id saudacao , a constante saudacao(h3 que exibe o nome do jogador)
const saudacao = document.querySelector('#saudacao')

// estou acessando a propriedade de texto da constante saudacao e atribuindo o valor do sessionStorange(guarda dados de uma sessao em um navegador)

saudacao.textContent = 'Olá, ' + sessionStorage.getItem('name')

//percorrendo a array

function verificar() {
  if (!window.confirm('Você tem certeza que essas são as respostas?'))
    return false

  var resposta = document.getElementById('correta')
  var erros = 0
  var acertos = 0
  return alert(
    'ACERTOU - Número de acertos: ' +
      acertos +
    '. ERROU - Número de erros: ' +
      erros
  )
}

// manipula elementos das páginas de quiz.
