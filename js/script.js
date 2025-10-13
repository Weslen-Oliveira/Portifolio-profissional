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
function iniciarAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll');   
    if(sections.length){
        const windowMetade = window.innerHeight * 0.5;  
        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const iniciarScrollSuave = (sectionTop - windowMetade) < 0;
                if(iniciarScrollSuave){
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            }); 
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}
iniciarAnimacaoScroll();