const tema = document.getElementById('tema');
const temaAtual = document.querySelector('body');

tema.addEventListener('mouseover', function(){
    
    tema.innerText = 'Desenvolvedor de Software'
    tema.style.color = '#bdbdbd'
})
tema.addEventListener('mouseout', function(){
    tema.innerText = 'Weslen Oliveira'
     tema.style.color = '#141414'
})

//Menu mobile//

const menuCelular = document.getElementById('menu__mobile');//menu hamburger
const listaCelular = document.querySelector('#lista__mobile')



menuCelular.addEventListener('click', function(){
    let display = window.getComputedStyle(listaCelular).display;//Código padrao para uso de display verifica a condição atual.


        if(display === 'none'){
            listaCelular.style.display = 'flex';
        } else {
            listaCelular.style.display = 'none';
          }
          
})