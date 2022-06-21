// estou atribuindo o elemento com o #id saudacao , a constante saudacao(h3 que exibe o nome do jogador)
const saudacao = document.querySelector('#saudacao');
// estou atribuindo os elementos com classe botao-quiz , a constante botaoQuiz (button ver resposta)
const botaoQuiz = document.querySelectorAll('.botao-quiz');
// estou acessando a propriedade de texto da constante saudacao e atribuindo o valor do sessionStorange(guarda dados de uma sessao em um navegador)
saudacao.textContent = 'Olá ' + sessionStorage.getItem("name");

//percorrendo a array
botaoQuiz.forEach((element, index) => {
    element.addEventListener('click', function(){
        const resposta = element.dataset.resposta;
        const num = index + 1;
        const label = document.querySelector('label[for=q'+ num +'_alt'+ resposta +']');
        label.classList.add('active');
        element.textContent = 'Alternativa Correta ' + resposta;
    })
});



// manipula elementos das páginas de quiz.