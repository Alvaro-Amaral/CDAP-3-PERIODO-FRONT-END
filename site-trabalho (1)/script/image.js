
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 1)
})



////////////curiculo///////////////


document.getElementById('aumentar').addEventListener('click', function() {
  let imagens = document.querySelectorAll('.gallery-container img');
  imagens.forEach(img => {
      let larguraAtual = img.clientWidth;
      let novaLargura = larguraAtual * 1.1;
      if (novaLargura <= 430) { // Limite máximo
          img.style.width = novaLargura + 'px';
      }
  });
});

document.getElementById('diminuir').addEventListener('click', function() {
  let imagens = document.querySelectorAll('.gallery-container img');
  imagens.forEach(img => {
      let larguraAtual = img.clientWidth;
      let novaLargura = larguraAtual * 0.9;
      if (novaLargura >= 250) { // Limite mínimo
          img.style.width = novaLargura + 'px';
      }
  });
});


 // Mostrar ou ocultar o botão com base na rolagem da página
 window.onscroll = function() {
    document.getElementById('toTopBtn').style.display = window.scrollY > 100 ? 'block' : 'none';
  };

  // Função para rolar suavemente até o topo
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }