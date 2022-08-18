
let validator = {
    handleSubmit:(event)=> {
        event.preventDefault()
        let send = true

        let inputs = form.querySlectorAll('input')
        validator.clearErrors()
        for(let i = 0; i < inputs.lenght; i++){
            let input = inputs[i]
            let check = validator.checkInput(input)

            if(check !== true){
                send = false
                validator.showError(input, check)
            }
            
        }

        if(send){
            form.submit()
        }
        checkInput:(input) => {
            let rules = input.getAttribute('data-rules')
        
            if(rules !== null){
                rules = rules.split('|')
                for(let e in rules){
                    let rDetails = rules[e].split('=')
                    switch(rDetails[0]){
                        case 'required':
                            if(input.value == ''){
                                return 'Campo obrigatório'
                            }
                        break;
                    }
                }
            }

            return true
        }
        //Show error é uma função criada para exibir o erro e em qual input
        showError:(input, error)=> {
            input.style.borderColor = '#FF0000'

            let errorElement = document.createElement('div')
            errorElement.classList.add('error')
            errorElement.innerHTML = error
            input.parentElement.insertBefore(errorElement, input.ElementSibling)
        }
        clearErrors:() => {
            let inputs = document.querySelectorAll('input')
            for(let i =0; i < inputs.lenght; i++){
                inputs[i].style = ''
            }
            let errorElements = document.querySelectorAll('.error')
        for(let i = 0; i < errorElements.lenght; i++){
            errorElements[i].remove()
        }
    }
    }
}
let form = document.querySelector('.validator')
form.addEventListener('submit', validator.handleSubmit)