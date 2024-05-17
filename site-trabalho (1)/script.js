
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 300)
})



function toggle(){
    document.querySelector('.texto').classList.toggle('visivel')
}

////////////curiculo///////////////

let indiceImagem = 0;

function trocarConteudo(delta) {
  const imagens = ["imagem/mateus.jpeg", "imagem/caio.jpeg", "imagem/alvaro.jpeg ","imagem/dino.jpeg","imagem/lucas.jpeg","imagem/aden.jpeg"];
  const textos = [
    { titulo: "MATEUS GUERRA FEITOSA ", descricao: " matricular 01625297  \n\nvvvfffffffffffffffffffffffffffffffffffffffffffffffffffffff\nvvvfffffffffffffffffffffffffffffffffffffffffffffffffffffff\nvvvvvvffffvvvffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffv\nvvvffffffffffffffffffffffffffffffffffffffffffffffffffff" },
    { titulo: "CAIO VINICIUS ARAUJO", descricao: "Texto descritivo 2..." },
    { titulo: "ÁLVARO AMARAL OLIVEIRA", descricao: "Texto descritivo 3..." },
    { titulo: "LUCAS BERNADINO SILVESTRE", descricao: "Texto descritivo 4..." },
    { titulo: "LUCAS BOMFIM DO NASCIMENTO", descricao: "Texto descritivo 5..." },
    { titulo: "ANDERSON JOSÉ SÁTIRO DE OLIVEIRA BARBOSA", descricao: "Matricula:01624883\nUninassau Graças\nTurma:3MD\nCurso:Ciência da Computação\nTurno:Manhã" }
  ];

  // Avança ou retrocede o índice da imagem
  indiceImagem = (indiceImagem + delta + imagens.length) % imagens.length;

  // Atualiza o texto
  document.getElementById("titulo").innerText = textos[indiceImagem].titulo;
  document.getElementById("descricao").innerText = textos[indiceImagem].descricao;

  // Atualiza a imagem
  document.getElementById("imagem").src = imagens[indiceImagem];
}
