const txtareaEl = document.getElementById("txtArea");
const totalCounterEl = document.getElementById("totalCounter");
const remainingCounterEl = document.getElementById("remainingCounter");

txtareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

function updateCounter(){
    totalCounterEl.innerText = txtareaEl.value.length;
    remainingCounterEl.innerText = txtareaEl.getAttribute("maxlength") - txtareaEl.value.length
}

updateCounter();