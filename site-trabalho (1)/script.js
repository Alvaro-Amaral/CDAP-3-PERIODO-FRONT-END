
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
  const imagens = ["imagem/mateus.jpeg", "imagem/caio.jpeg", "imagem/alvaro.jpeg ","imagem/dino.jpeg","imagem/lucas.jpeg","imagem/aden.jpeg"];
  const textos = [
    { titulo: "Aluno: mateus guerra feitosa", descricao: "\n matricular 01625297  \n\n\nvvvfffffffffffffffffffffffffffffffffffffffffffffffffffffff\nvvvfffffffffffffffffffffffffffffffffffffffffffffffffffffff\nvvvvvvffffvvvffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffv\nvvvffffffffffffffffffffffffffffffffffffffffffffffffffff" },
    { titulo: "Título do Texto 2", descricao: "Texto descritivo 2..." },
    { titulo: "Título do Texto 3", descricao: "Texto descritivo 3..." },
    { titulo: "Título do Texto 4", descricao: "Texto descritivo 4..." },
    { titulo: "Título do Texto 5", descricao: "Texto descritivo 5..." },
    { titulo: "Título do Texto 6", descricao: "Texto descritivo 6..." }
  ];

  // Avança ou retrocede o índice da imagem
  indiceImagem = (indiceImagem + delta + imagens.length) % imagens.length;

  // Atualiza o texto
  document.getElementById("titulo").innerText = textos[indiceImagem].titulo;
  document.getElementById("descricao").innerText = textos[indiceImagem].descricao;

  // Atualiza a imagem
  document.getElementById("imagem").src = imagens[indiceImagem];
}
