const subBtn = document.querySelector('.subBtn');

subBtn.addEventListener('click', (event)=> {
    const formsValid1 = document.querySelectorAll('.form-form input');

    formsValid1.forEach((el) => {
        el.classList.remove('error-form');
        switch(el.name) {
            case 'user_name':
                if(el.value.length < 2){event.preventDefault();
                el.classList.add('error-form');
                el.placeholder = 'Введите имя';
                }
            break;
            case 'user_lastName':
                if(el.value.length < 2){event.preventDefault();
                el.classList.add('error-form');
                el.placeholder = 'Введите Фамилию';
                }
            break;
            case 'user_mail':
                if(el.value.length < 5 || el.value.indexOf('@') < 0){event.preventDefault();
                el.classList.add('error-form');
                el.placeholder = 'Проверьте Email';
                }
            break;
            case 'price-check':
                const formBudjet = document.querySelectorAll('.form-checkboxes input');
                if(checkBudjet(formBudjet)[0]){
                    document.querySelector('.budjet').classList.remove('error-bud');
                    document.querySelector('.hide-inp').value = checkBudjet(formBudjet)[1]
                    console.log(document.querySelector('.hide-inp').value);
                }else {
                    event.preventDefault();
                    document.querySelector('.budjet').classList.add('error-bud');
                    console.log(document.querySelector('.budjet').innerText = 'Введите бюджет');
                }
            break;
            default:
        }
    });
});

checkBudjet = elements => {
    let mark = false;
    let num;
    elements.forEach(el => {
        if(el.checked){
            mark = true;
            num = el.dataset.price
        }
    })
    return [mark, num];
}