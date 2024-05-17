
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
    { titulo: "MATEUS GUERRA FEITOSA ", descricao: " Matricula: 01625297\nUninassau Graças\nTurma: 3MD\nCurso: Ciência da Computação\nTurno: Manhã" },
    { titulo: "CAIO VINICIUS ARAUJO", descricao: "Matricula: 01611224\nUninassau Graças\nTurma: 3MD\nCurso: Ciência da Computação\nTurno: Manhã" },
    { titulo: "ÁLVARO AMARAL OLIVEIRA", descricao: "Matricula: \nUninassau Graças\nTurma: 3MD\nCurso: Ciência da Computação\nTurno: Manhã" },
    { titulo: "LUCAS BERNADINO SILVESTRE", descricao: "Matricula: \nUninassau Graças\nTurma: 3MD\nCurso: Ciência da Computação\nTurno: Manhã" },
    { titulo: "LUCAS BOMFIM DO NASCIMENTO", descricao: "Matricula: \nUninassau Graças\nTurma: 3MD\nCurso: Ciência da Computação\nTurno: Manhã" },
    { titulo: "ANDERSON JOSÉ SÁTIRO DE OLIVEIRA BARBOSA", descricao: "Matricula: 01624883\nUninassau Graças\nTurma: 3MD\nCurso: Ciência da Computação\nTurno: Manhã" }
  ];

  // Avança ou retrocede o índice da imagem
  indiceImagem = (indiceImagem + delta + imagens.length) % imagens.length;

  // Atualiza o texto
  document.getElementById("titulo").innerText = textos[indiceImagem].titulo;
  document.getElementById("descricao").innerText = textos[indiceImagem].descricao;

  // Atualiza a imagem
  document.getElementById("imagem").src = imagens[indiceImagem];
}
