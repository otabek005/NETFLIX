"use strict"



// OnCLICK SINGIN PAGE -> SHOW / HIDE
let pas_input = document.querySelector('#sing_pasword');
let show = document.querySelector('#show');
console.log(show)
show.addEventListener('click', () =>{
    if(pas_input.type == "password"){
        pas_input.type = 'text';
        show.innerHTML = `<i class='bx bx-hide' ></i>`
    }else{
        pas_input.type = 'password';
        show.innerHTML = `<i class='bx bx-show' ></i>`
    }
})