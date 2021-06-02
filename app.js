  
//     //let card = document.getElementById("card").value;
//     // let cvc = document.getElementById("cvc").value;
//     // let amout = document.getElementById("amout").value;
//     // let frirtName = document.getElementById("name").value;
//     // let lastName = document.getElementById("lastname").value;
//     // let city = document.getElementById("city").value;
//     // let states = document.getElementById("states").value;
//     // let Posta = document.getElementById("posta").value;
//     // let master = document.getElementById("master").value;
//     // let visa = document.getElementById("visa").value;
//     // let Posta = document.getElementById("diners").value;
//     // let american = document.getElementById("american").value;
//     // let message = document.getElementById("message").value;
//     // let states = document.getElementById("states").value;



let formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();


    let regexcard = /[a-zA-Z0-9]/;
    let regexcvc = /^[0-9]{3}$/;
    let regex = /[a-zA-Z0-9]/;
    let regexnombre = /[a-zA-Z]/;
    let regexposta = /[0-9]/;
   

    if (this.card.value === '' || !regexcard.test(this.card.value)) {
        alert("Debe ingresar el numero de la tarjeta");
        this.card.classList.add('is-invalid');
        return;
    }
    this.card.classList.remove('is-invalid');
    this.card.classList.add('is-valid');



    if (this.cvc.value === '' || !regexcvc.test(this.cvc.value)) {
        alert("Debe ingresar el cvc de la tarjeta");
        this.cvc.classList.add('is-invalid');
        return;
    }
    this.cvc.classList.remove('is-invalid');
    this.cvc.classList.add('is-valid');



    if (this.amout.value === '' || !regex.test(this.amout.value)) {
        alert("Debe ingresar un monto");
        this.amout.classList.add('is-invalid');
        return;
    }
    this.amout.classList.remove('is-invalid');
    this.amout.classList.add('is-valid');

    if (this.name.value === '' || !regexnombre.test(this.name.value)) {
        alert("Debe ingresar nombre");
        this.name.classList.add('is-invalid');
        return;
    }
    this.name.classList.remove('is-invalid');
    this.name.classList.add('is-valid');

    if (this.lastname.value === '' || !regexnombre.test(this.lastname.value)) {
        alert("Debe ingresar apellido");
        this.lastname.classList.add('is-invalid');
        return;
    }
    this.lastname.classList.remove('is-invalid');
    this.lastname.classList.add('is-valid');

    if (this.city.value === '' || !regexnombre.test(this.city.value)) {
        alert("Debe ingresar city");
        this.lastname.classList.add('is-invalid');
        return;
    }
    this.city.classList.remove('is-invalid');
    this.city.classList.add('is-valid');

    if (this.inputState.value === 'Pick a states' ) {
        alert("Debe ingresar city");
        this.inputState.classList.add('is-invalid');
        return;
    }
    this.inputState.classList.remove('is-invalid');
    this.inputState.classList.add('is-valid');
    

    if (this.posta.value === '' || !regexposta.test(this.posta.value)) {
        alert("Debe ingresar city");
        this.posta.classList.add('is-invalid');
        return;
    }
    this.posta.classList.remove('is-invalid');
    this.posta.classList.add('is-valid');


    if (this.mastercard.checked === false || this.visa.checked === false ||  this.dinero.checked === false ||  this.dinero.checked === false ||  this.american.checked === false ){
        alert("Debe ingresar selecciona una tarjeta");
        
    }








    // if (this.mastercard.checked === false  ) {
    //     alert("selecciona una tarjeta de pago");
    //     this.mastercard.checked.add('is-invalid');
    //     return;
    // }
    // this.mastercard.checked.remove('is-invalid');
    // this.mastercard.checked.add('is-valid');

    // if (this.visa.checked === false  ) {
    //     alert("selecciona una tarjeta de pago");
    //     this.visa.checked.add('is-invalid');
    //     return;
    // }
    // this.visa.checked.remove('is-invalid');
    // this.visa.checked.add('is-valid');


    // if (this.dinero.checked === false  ) {
    //     alert("selecciona una tarjeta de pago");
    //     this.dinero.checked.add('is-invalid');
    //     return;
    // }
    // this.dinero.checked.remove('is-invalid');
    // this.dinero.checked.add('is-valid');

    // if (this.american.checked === false  ) {
    //     alert("selecciona una tarjeta de pago");
    //     this.visa.checked.add('is-invalid');
    //     return;
    // }
    // this.american.checked.remove('is-invalid');
    // this.american.checked.add('is-valid');

   



})





