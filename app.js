

let formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    let regexcard = /[a-zA-Z0-9]/;
    let regexcvc = /^[0-9]{3}$/;
    let regex = /[0-9]/;
    let regexnombre = /[a-zA-Z]/;

    if (this.card.value === '' || !regexcard.test(this.card.value)) {
        this.card.classList.add('is-invalid');
    } else {
        this.card.classList.remove('is-invalid');
        this.card.classList.add('is-valid');
    }
    if (this.cvc.value === '' || !regexcvc.test(this.cvc.value)) {
        this.cvc.classList.remove('is-valid');
        this.cvc.classList.add('is-invalid');
    } else {
        this.cvc.classList.remove('is-invalid');
        this.cvc.classList.add('is-valid');
    }


    if (this.amout.value === '' || !regex.test(this.amout.value)) {
        this.amout.classList.remove('is-valid');
        this.amout.classList.add('is-invalid');
    } else {
        this.amout.classList.remove('is-invalid');
        this.amout.classList.add('is-valid');
    }


    if (this.name.value === '' || !regexnombre.test(this.name.value)) {
        this.name.classList.remove('is-valid');
        this.name.classList.add('is-invalid');

    } else {
        this.name.classList.remove('is-invalid');
        this.name.classList.add('is-valid');
    }


    if (this.lastname.value === '' || !regexnombre.test(this.lastname.value)) {
        this.lastname.classList.remove('is-valid');
        this.lastname.classList.add('is-invalid');

    } else {
        this.lastname.classList.remove('is-invalid');
        this.lastname.classList.add('is-valid');
    }


    if (this.city.value === '' || !regexnombre.test(this.city.value)) {
        this.city.classList.remove('is-valid');
        this.city.classList.add('is-invalid');

    } else {
        this.city.classList.remove('is-invalid');
        this.city.classList.add('is-valid');
    }


    if (this.inputState.value === 'Pick a states') {
        this.inputState.classList.remove('is-valid');
        this.inputState.classList.add('is-invalid');

    } else {
        this.inputState.classList.remove('is-invalid');
        this.inputState.classList.add('is-valid');
    }
    if (this.posta.value === '' || !regex.test(this.posta.value)) {
        this.posta.classList.remove('is-valid');
        this.posta.classList.add('is-invalid');

    } else {
        this.posta.classList.remove('is-invalid');
        this.posta.classList.add('is-valid');
    }
    if (this.card.classList[1] === "is-invalid" || this.cvc.classList[1] === "is-invalid" ||
        this.amout.classList[1] === "is-invalid" || this.name.classList[1] === "is-invalid" ||
        this.lastname.classList[1] === "is-invalid" || this.city.classList[1] === "is-invalid" ||
        this.inputState.classList[1] === "is-invalid" || this.posta.classList[1] === "is-invalid") {
        document.getElementById("alert").style.display = "block";
    } else {
        document.getElementById("alert").style.display = "none";
    }

    if (this.mastercard.checked === false || this.visa.checked === false || this.dinero.checked === false || this.dinero.checked === false || this.american.checked === false) {
    }

})





