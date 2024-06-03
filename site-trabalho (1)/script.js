
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 1)
})



function toggle(){
    document.querySelector('.texto').classList.toggle('visivel')
}

////////////curiculo///////////////

let indiceImagem = 0;

document.getElementById('aumentar').addEventListener('click', function() {
  let imagens = document.querySelectorAll('.redimensionavel');
  imagens.forEach(img => {
      let larguraAtual = img.clientWidth;
      img.style.width = (larguraAtual * 1.1) + 'px';
  });
});

document.getElementById('diminuir').addEventListener('click', function() {
  let imagens = document.querySelectorAll('.redimensionavel');
  imagens.forEach(img => {
      let larguraAtual = img.clientWidth;
      img.style.width = (larguraAtual * 0.9) + 'px';
  });
});


