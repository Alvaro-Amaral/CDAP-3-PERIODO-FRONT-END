
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
    { titulo: "MATEUS GUERRA FEITOSA ", descricao: "Olá, sou Mateus Guerra Feitosa, estudante do 3º período na UNINASSAU, cursando Ciência da Computação. Possuo um ótimo conhecimento em front-end, um bom domínio de Java e também experiência em Python.\nMinha paixão pelo desenvolvimento web me levou a aprimorar minhas habilidades em front-end, enquanto que meu conhecimento em Java e Python complementam meu conjunto de habilidades. Estou comprometido em expandir meu conhecimento e explorar novas oportunidades na área de tecnologia." },
    { titulo: "CAIO VINICIUS ARAUJO", descricao: "Olá, sou Caio Vinicius Araujo, estudante do 3º período de Ciência da Computação na UNINASSAU. Além disso, trago uma experiência valiosa como ex-militar, onde desenvolvi habilidades como disciplina, organização e trabalho em equipe.\nComplementando minha formação, possuo experiência em manutenção de computadores e sou técnico em desenvolvimento de sistemas. Estou comprometido em continuar aprendendo e buscando oportunidades para crescer tanto pessoal quanto profissionalmente na área de tecnolo" },
    { titulo: "ÁLVARO AMARAL OLIVEIRA", descricao: "Olá, sou Álvaro Amaral Oliveira, estudante do 3º período na UNINASSAU, cursando Ciência da Computação. Possuo conhecimento em diversas áreas da computação, incluindo redes e linguagens como Pascal, COBOL, Ruby, PHP e Ada Lovelace.\nMinha experiência em redes me proporciona uma compreensão sólida dos fundamentos de comunicação entre sistemas, enquanto meu conhecimento em linguagens como Pascal, COBOL, Ruby, PHP e Ada Lovelace amplia meu leque de habilidades e possibilidades de desenvolvimento.\nEstou comprometido em continuar explorando novas tecnologias e expandindo meu conhecimento para me tornar um profissional versátil e qualificado na área de tecnologia da informação." },
    { titulo: "LUCAS BERNADINO SILVESTRE", descricao: "Olá, sou Lucas Bernardino Silvestre, estagiário na Compass UOL e estudante de Ciência da Computação (3º período) na UNINASSAU. Minha paixão é o desenvolvimento back-end com Java, tecnologia que estou explorando no meu estágio.\nTambém estou aprimorando minhas habilidades em front-end através do curso Alura One Oracle. Busco constantemente novos desafios para crescer profissionalmente, unindo teoria e prática no desenvolvimento web." },
    { titulo: "LUCAS BOMFIM DO NASCIMENTO", descricao: "Olá, sou Lucas Bomfim do Nascimento, estudante do 3º período na UNINASSAU, cursando Ciência da Computação. Meu foco principal está no desenvolvimento móvel com Flutter.\nAtualmente, estou estagiando na UOL Compass, onde tenho a oportunidade de aplicar meus conhecimentos em Flutter em projetos reais. Além disso, complementei minha formação com o curso completo de Front-End pela Alura em parceria com a Oracle.\nEstou comprometido em aprimorar minhas habilidades e explorar novas tecnologias para me tornar um desenvolvedor móvel altamente qualificado e contribuir de forma significativa para projetos inovadores." },
    { titulo: "ANDERSON JOSÉ SÁTIRO DE OLIVEIRA BARBOSA", descricao: "Olá, sou Anderson José Sátiro de Oliveira Barbosa, estudante de Ciência da Computação no 3º período na UNINASSAU. Atualmente, estou cursando Java com Spring Boot pelo programa Alura One Oracle.\nMeu foco é me aprofundar no desenvolvimento back-end, utilizando tecnologias robustas e modernas. Estou sempre buscando novos conhecimentos e desafios para crescer profissionalmente, aplicando a teoria aprendida na universidade em projetos práticos e inovadores."}, 

  ];

  // Avança ou retrocede o índice da imagem
  indiceImagem = (indiceImagem + delta + imagens.length) % imagens.length;

  // Atualiza o texto
  document.getElementById("titulo").innerText = textos[indiceImagem].titulo;
  document.getElementById("descricao").innerText = textos[indiceImagem].descricao;

  // Atualiza a imagem
  document.getElementById("imagem").src = imagens[indiceImagem];
}
