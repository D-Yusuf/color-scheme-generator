const colorForm = document.getElementById("color-form")
colorForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const colorInput = document.getElementById("color-input")
    const schemeInput = document.getElementById("scheme-input")
    console.log(colorInput.value) 
    console.log(schemeInput.value) 
})