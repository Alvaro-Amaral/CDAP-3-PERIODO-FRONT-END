
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})



function toggle(){
    document.querySelector('.texto').classList.toggle('visivel')
}

////////////curiculo///////////////

let indiceImagem = 0;

function trocarConteudo(delta) {
  const imagens = ["imagem/a.jpg", "imagem/b.jpg", "imagem/c.jpg"];
  const textos = [
    { titulo: "Aluno: mateus guerra feitosa", descricao: "matricular 01625297 " },
    { titulo: "Título do Texto 2", descricao: "Texto descritivo 2..." },
    { titulo: "Título do Texto 3", descricao: "Texto descritivo 3..." }
  ];

  // Avança ou retrocede o índice da imagem
  indiceImagem = (indiceImagem + delta + imagens.length) % imagens.length;

  // Atualiza o texto
  document.getElementById("titulo").innerText = textos[indiceImagem].titulo;
  document.getElementById("descricao").innerText = textos[indiceImagem].descricao;

  // Atualiza a imagem
  document.getElementById("imagem").src = imagens[indiceImagem];
}
