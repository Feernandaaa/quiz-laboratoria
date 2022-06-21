const botaoIniciar = document.querySelector('#botao-iniciar'); 

botaoIniciar.addEventListener('click',function(e){
    e.preventDefault(); 
    const name = document.querySelector('.input-name');
    sessionStorage.setItem("name", name.value);
    window.location.assign('categoria.html');
})




// manipula elementos do index.html


