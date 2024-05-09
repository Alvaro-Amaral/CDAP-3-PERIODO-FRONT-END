
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})



function toggle(){
    document.querySelector('.texto').classList.toggle('visivel')
}