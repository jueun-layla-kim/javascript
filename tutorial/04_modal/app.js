const showBtn = document.querySelector('.btn_show')
const closeBtn = document.querySelector('.btn_close')
const dimm = document.querySelector('.dimm')
const modal = document.querySelector('.modal')

showBtn.addEventListener('click', function() {
    dimm.classList.add('show')
    modal.classList.add('show')
})

closeBtn.addEventListener('click', function() {
    dimm.classList.remove('show')
    modal.classList.remove('show')
})

dimm.addEventListener('click', function() {
    dimm.classList.remove('show')
    modal.classList.remove('show')
})