"use strict"

let hind_movies = [
    {
        katalog: "South Indian Cinemas",
        img: "./kino_images/hind-movies/javan.jpg",
        name: "JAWAN",
    },
    {
        img: "./kino_images/hind-movies/rox.png",
        name: "ROX",
    },
    {
        img: "./kino_images/hind-movies/adipurush.png",
        name: "ADIPURUSH",
    },
    {
        img: "./kino_images/hind-movies/3_yigit.png",
        name: "3 BOYS",
    },
] 
let trending_now = [
    {
        katalog: "Trending Now",
        img: "./kino_images/trending-now/akumakun.png",
        name: "AKUMAKUN"
    },
    {
        img: "./kino_images/trending-now/shetti.png",
        name: "Miss SHETTY Me PoliSHETTY"
    },
    {
        img: "./kino_images/trending-now/malayalam.png",
        name: "MALAYALAM"
    },
    {
        img: "./kino_images/trending-now/mismadched.png",
        name: "MISMADCHED"
    },
]
let tv_shows = [
    {
        katalog: "Critically Acclaimed TV Shows",
        img: "./kino_images/tv-shows/kushi.png",
        name: "KUSHI",
    },
    {
        img: "./kino_images/tv-shows/lostinspace.png",
        name: "LOST IN SPACE",
    },
    {
        img: "./kino_images/tv-shows/shankar.png",
        name: "BHOLA SHANKAR",
    },
    {
        img: "./kino_images/tv-shows/sweettooth.png",
        name: "SWEET TOOTH",
    },
]
let us_tv = [
    {
        katalog: "US TV Show",
        img: "./kino_images/us-tv-shows/theoffice.png",
        name: "THE OFFICE",
    },
    {
        img: "./kino_images/us-tv-shows/bro.png",
        name: "BRO",
    },
    {
        img: "./kino_images/us-tv-shows/nightagent.png",
        name: "THE NIGHT AGENT",
    },
    {
        img: "./kino_images/us-tv-shows/crashlanding.png",
        name: "CRASH LANDING ON YOU",
    },
]
let adventure_movie = [
    {
        katalog: "Adventure Movie",
        img: "./kino_images/adventure-movie/lucifer.png",
        name: "LUCIFER",
    },
    {
        img: "./kino_images/adventure-movie/kunfupanda.png",
        name: "KUNG FU PANDA: The Dragon Knight",
    },
    {
        img: "./kino_images/adventure-movie/turebeatiu.png",
        name: "TRUE BEAUTY",
    },
    {
        img: "./kino_images/adventure-movie/chornikal.png",
        name: "CHORNIKAL KE BHAGA",
    },
]
let international = [
    {
        katalog: "Adventure Movie",
        img: "./kino_images/international-tv-show/baby.png",
        name: "OH! BABY",
    },
    {
        img: "./kino_images/international-tv-show/devobhava.png",
        name: "AYHITHI DEVOBHAVA",
    },
    {
        img: "./kino_images/international-tv-show/dearzindagi.png",
        name: "DEAR ZINDAGI",
    },
    {
        img: "./kino_images/international-tv-show/bongsuc.png",
        name: "STRONG GIRL BONG-SOON",
    },
]

localStorage.setItem('hind_movies', JSON.stringify(hind_movies));
localStorage.setItem('trending-now', JSON.stringify(trending_now));
localStorage.setItem('tv_shows', JSON.stringify(tv_shows));
localStorage.setItem('us_tv', JSON.stringify(us_tv));
localStorage.setItem('adventure_movie', JSON.stringify(adventure_movie));
localStorage.setItem('international', JSON.stringify(international));