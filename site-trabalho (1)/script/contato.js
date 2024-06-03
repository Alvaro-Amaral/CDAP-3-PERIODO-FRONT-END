
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 2)
})



function validateEmail() {
  var email = document.getElementById('email').value;
  var message = document.getElementById('message');

  if (email.includes('@')) {
    message.textContent = 'Email enviado com sucesso, MUITO OBRIGADO!';
  } else {
    message.textContent = 'Email inválido!';
  }
}




function changeText() {
  var textElement = document.getElementById('clickText');
  if (textElement.textContent === 'Formulário de Contato') {
    textElement.textContent = 'Deixe a sua Opinião';
  } else {
    textElement.textContent = 'Formulário de Contato';
  }
}