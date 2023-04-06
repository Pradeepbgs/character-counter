const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('total-counter');
const remainingConuterEl = document.getElementById('remaining-counter');

textareaEl.addEventListener('keyup', ()=>{
    updateCounter()
})

function updateCounter(){
  totalCounterEl.innerHTML = textareaEl.value.length;

  remainingConuterEl.innerHTML =  textareaEl.getAttribute('maxlength') -textareaEl.value.length ;
}