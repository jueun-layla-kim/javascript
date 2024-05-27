const header = document.querySelector('.header')

window.addEventListener('scroll', function(){
    console.log(this.window.scrollY);
    header.classList.toggle('active', this.window.scrollY > 50)
})