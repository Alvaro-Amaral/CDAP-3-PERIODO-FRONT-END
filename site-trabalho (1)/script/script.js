
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 3)
})



function toggle(){
    document.querySelector('.texto').classList.toggle('visivel')
}

////////////curiculo///////////////

let indiceImagem = 0;

function trocarConteudo(delta) {
  const imagens = ["../imagem/mateus.jpeg", "../imagem/caio.jpeg", "../imagem/c.jpeg ","../imagem/dino.jpeg","../imagem/lucas.jpeg","../imagem/aden.jpeg"];
  const textos = [
    { titulo: "MATEUS GUERRA FEITOSA ", descricao: "Olá, sou Mateus Guerra Feitosa, estudante do 3º período na UNINASSAU, cursando Ciência da Computação. Meu principal foco é o desenvolvimento back-end, onde tenho aprofundado meus conhecimentos e habilidades.\nPossuo um ótimo conhecimento em front-end, um bom domínio de Java e experiência em Python. Essas competências complementam minha especialização em back-end, permitindo-me desenvolver soluções robustas e eficientes.\nEstou comprometido em expandir meu conhecimento e explorar novas oportunidades na área de tecnologia, sempre buscando desafios que me permitam crescer profissionalmente e contribuir de forma significativa para os projetos dos quais faço parte." },
    { titulo: "CAIO VINICIUS ARAUJO", descricao: "Olá, sou Caio Vinicius Araujo, estudante do 3º período de Ciência da Computação na UNINASSAU. Além disso, trago uma experiência valiosa como ex-militar, onde desenvolvi habilidades como disciplina, organização e trabalho em equipe.\nComplementando minha formação, possuo experiência em manutenção de computadores e sou técnico em desenvolvimento de sistemas. Estou comprometido em continuar aprendendo e buscando oportunidades para crescer tanto pessoal quanto profissionalmente na área de tecnolo" },
    { titulo: "ÁLVARO AMARAL OLIVEIRA", descricao: "Olá, sou Álvaro Amaral Oliveira, estudante do 3º período na UNINASSAU, onde estou cursando Ciência da Computação. Além dos estudos acadêmicos, estou aprofundando meus conhecimentos através de um curso de programação de software com Java, JDBC, MySQL e Scrum.\nMinha formação em Ciência da Computação, combinada com o curso de programação, me proporciona uma base sólida tanto na teoria quanto na prática do desenvolvimento de software. Com Java, estou aprendendo a construir aplicações robustas e escaláveis. Com JDBC e MySQL, estou adquirindo habilidades essenciais para o gerenciamento de banco de dados. E com Scrum, estou desenvolvendo competências em metodologias ágeis, essenciais para a gestão eficiente de projetos de desenvolvimento.\nEstou comprometido em continuar expandindo meu conhecimento e habilidades para me tornar um profissional versátil e preparado para enfrentar desafios no campo da tecnologia." },
    { titulo: "LUCAS BERNADINO SILVESTRE", descricao: "Olá, sou Lucas Bernardino Silvestre, estagiário na Compass UOL e estudante de Ciência da Computação (3º período) na UNINASSAU. Minha paixão é o desenvolvimento back-end, com um foco especial em Java e Spring Boot.\nTenho experiência com várias tecnologias, incluindo Java com Spring Boot, AWS, C# e .NET, além de HTML, CSS, JavaScript, Git, GitHub e PostgreSQL. Essas habilidades me permitem abordar projetos com uma visão ampla e integrada, garantindo soluções eficientes e de alta qualidade.\nMeu principal objetivo é me especializar em back-end, aplicando minhas habilidades e conhecimentos em projetos desafiadores e inovadores. Estou sempre em busca de novas oportunidades para crescer profissionalmente e contribuir para o sucesso das equipes e projetos dos quais faço parte." },
    { titulo: "LUCAS BOMFIM DO NASCIMENTO", descricao: "Olá, sou Lucas Bomfim do Nascimento, estudante do 3º período na UNINASSAU, cursando Ciência da Computação.\nAtualmente, estou estagiando na UOL Compass, onde tenho a oportunidade de aplicar meus conhecimentos em Typescript em projetos reais. Além disso, complementei minha formação com o curso completo de Front-End pela Alura em parceria com a Oracle.Tenho experiência com diversas tecnologias, incluindo C#, .NET, HTML, CSS, JavaScript, Git, GitHub, PostgreSQL, Node.js, Express.js e AWS. Essas habilidades me permitem desenvolver soluções completas e robustas, tanto no front-end quanto no back-end.\nEstou comprometido em aprimorar minhas habilidades e explorar novas tecnologias para me tornar um desenvolvedor móvel altamente qualificado e contribuir de forma significativa para projetos inovadores." },
    { titulo: "ANDERSON JOSÉ SÁTIRO DE OLIVEIRA BARBOSA", descricao: "Olá, sou Anderson José Sátiro de Oliveira Barbosa, estudante do 3º período de Ciência da Computação na UNINASSAU. Atualmente, estou focado em expandir meus conhecimentos em áreas como Java, JavaScript, HTML e CSS. Além disso, tenho experiência com Scrum, uma metodologia ágil essencial para o desenvolvimento de projetos de software de forma eficiente e colaborativa.\nEstou realizando o curso de Java com Spring Boot oferecido pelo Alura em parceria com a Oracle, o que me proporcionará um entendimento aprofundado sobre o desenvolvimento de aplicações robustas e escaláveis.\nEstou comprometido em seguir uma jornada de constante aprendizado e crescimento na área de tecnologia, buscando sempre novos desafios e oportunidades para aplicar e expandir meus conhecimentos."}
];

// Avança ou retrocede o índice da imagem
indiceImagem = (indiceImagem + delta + imagens.length) % imagens.length;

// Atualiza o texto
document.getElementById("titulo").innerText = textos[indiceImagem].titulo;
document.getElementById("descricao").innerText = textos[indiceImagem].descricao;

// Atualiza a imagem
document.getElementById("imagem").src = imagens[indiceImagem];
}