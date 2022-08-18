let form = document.querySelector('.validator')
let validator = {
    handleSubmit:(event)=> {
        event.preventDefault()
        let send = true

        let inputs = form.querySlectorAll('input')
        for(let i = 0; i < inputs.lenght; i++){
            
        }

        if(send){
            form.submit()
        }
    }
}

form.addEventListener('submit', validator.handleSubmit)