"use strict"


let meVidoes = JSON.parse(localStorage.getItem("MyVideos")) || [];
pushhomepage(meVidoes)


let hind_cinema = JSON.parse(localStorage.getItem('hind_movies'));
let trend_cinema = JSON.parse(localStorage.getItem('trending-now'))
let adventure_cinema = JSON.parse(localStorage.getItem('adventure_movie'))
let international_cinema = JSON.parse(localStorage.getItem('international'))
let tvshows_cinema = JSON.parse(localStorage.getItem('tv_shows'))
let ustv_cinema = JSON.parse(localStorage.getItem('us_tv'))
let parent_kinolist = document.querySelector('.kinolist-wrapper');

home_cinema(hind_cinema);
home_cinema(trend_cinema)
home_cinema(tvshows_cinema)
home_cinema(ustv_cinema)
home_cinema(adventure_cinema)
home_cinema(international_cinema)
home_cinema(hind_cinema);
home_cinema(trend_cinema)
home_cinema(tvshows_cinema)
home_cinema(ustv_cinema)
home_cinema(adventure_cinema)
home_cinema(international_cinema)
home_cinema(adventure_cinema)
home_cinema(international_cinema)

function home_cinema(obj){
    obj.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('card-kino');
        // console.log(element.katalog.split('').length)
        if(element.katalog != undefined){
             div.innerHTML= `
                <h1>${element.katalog}</h1>
                <img src="${element.img}" onclick="kinostart()">
            `
        }else{
             div.innerHTML= `
                <img src="${element.img}" onclick="kinostart()">
            `
        }       
        parent_kinolist.append(div);
    });
}


function kinostart(element){
    console.log(1)
}



let formmovie = document.querySelector('#formaddmovie');
let addclick = document.querySelector('#addclick');
addclick.addEventListener('click', () =>{
    formmovie.style.display = "block";
});

formmovie.addEventListener("submit", function(e) {
    e.preventDefault();
    let inputname = document.querySelector('#namem').value;
    let inputlink = document.querySelector('#linkm').value;

    let movieobj = {
        img: inputlink,
        name: inputname
    };

    let obj = meVidoes.find((element) => movieobj.name == element.name)
    if(obj){
        alert('Bu video oldin joylangan')
    }else{
        meVidoes.push(movieobj);
        localStorage.setItem("MyVideos", JSON.stringify(meVidoes));
        pushhomepage(meVidoes)
    }
})



function pushhomepage(element){
    let yourvides = document.querySelector('#yourvideos');
    yourvides.innerHTML = ""
    element.forEach(element => {
        let div = document.createElement('div')
        div.classList.add('myv');
        div.innerHTML = `
            <img src="${element.img}">
            <h1>${element.name}</h1>
        `
        yourvides.append(div);
    })
}



let removeclick = document.querySelector('#removeclick');
removeclick.addEventListener('click', ()=>{
    meVidoes.pop();
    localStorage.setItem('MyVideos', JSON.stringify(meVidoes));
    pushhomepage(meVidoes);
});





// OnCLICK SINGIN PAGE -> SHOW / HIDE
// let pas_input = document.querySelector('#sing_pasword');
// let show = document.querySelector('#show');
// show.addEventListener('click', ()=>{
//     if(pas_input.type == "password"){
//         pas_input.type = 'text';
//         show.innerHTML = `<i class='bx bx-hide' ></i>`
//     }else{
//         pas_input.type = 'password';
//         show.innerHTML = `<i class='bx bx-show' ></i>`
//     }
// })
