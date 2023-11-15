// console.log("welcome");

let Index = 0;
let audioElement = new Audio('songs/1.mp3')
let songs = [
    {songname:"Song one", songpath: "songs/1.mp3", coverpath: "covers/1.jpg", timestamp: "03:50"},
    {songname:"Song Two", songpath: "songs/2.mp3", coverpath: "covers/2.jpg", timestamp: "02:33"},
    {songname:"Song Three", songpath: "songs/3.mp3", coverpath: "covers/3.jpg", timestamp: "04:33"},
    {songname:"Song Four", songpath: "songs/4.mp3", coverpath: "covers/4.jpg", timestamp: "04:27"},
    {songname:"Song Five", songpath: "songs/5.mp3", coverpath: "covers/5.jpg", timestamp: "03:28"},
    {songname:"Song Six", songpath: "songs/6.mp3", coverpath: "covers/6.jpg", timestamp: "03:28"},
    {songname:"Song Seven", songpath: "songs/7.mp3", coverpath: "covers/7.jpg", timestamp: "04:33"},
    {songname:"Song Eight", songpath: "songs/8.mp3", coverpath: "covers/2.jpg", timestamp: "3:50"},
    {songname:"Song Nine", songpath: "songs/9.mp3", coverpath: "covers/9.jpg", timestamp: "03:28"},
    {songname:"Song Ten", songpath: "songs/10.mp3", coverpath: "covers/10.jpg", timestamp: "04:27"}
]

let play = document.getElementById("play");
let progressbar = document.getElementById("pgbar");
let gif = document.getElementById("gif");
let song = Array.from(document.getElementsByClassName("songitem"));
let playbt = Array.from(document.getElementsByClassName("playbt"));
let Mastersongname = document.getElementById('Mastersongname');


// console.log(play.classList);


play.addEventListener(
    'click', ()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            Mastersongname.innerText = songs[Index].songname;
            audioElement.play();
            play.classList.remove('fa-play');
            play.classList.add('fa-pause');
            gif.style.opacity = 1;
        }
        else{
            audioElement.pause();
            play.classList.remove('fa-pause');
            play.classList.add('fa-play');
            gif.style.opacity = 0;
        }
    }
)

document.getElementById('prev').addEventListener('click',()=>{
    Index = Index-1;
    if(Index<0){
        Index = 9;
    }
    console.log(Index);
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
    Mastersongname.innerText = songs[Index].songname;
    audioElement.src = `songs/${Index + 1}.mp3`;
    audioElement.play();
})

document.getElementById('next').addEventListener('click',()=>{
    Index = Index+1;
    if(Index == 10){
        Index = 0;
    }
    console.log(Index);
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
    Mastersongname.innerText = songs[Index].songname;
    audioElement.src = `songs/${Index + 1}.mp3`;
    audioElement.play();
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
})

progressbar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressbar.value * audioElement.duration)/100;
})

// const makeplay = ()=>{
//    playbt.forEach((element)=>{
//         element.classList.remove("fa-pause")
//         element.classList.add("fa-play")
//     })
// }

// const makepause = ()=>{
//     playbt.forEach((element)=>{
//          element.classList.remove("fa-play")
//          element.classList.add("fa-pause")
//      })
//  }

song.forEach((element, i) => {
    element.addEventListener('click', ()=>{
        // console.log(element.classList);
        Index = parseInt(element.id);
        console.log(Index);
        Mastersongname.innerText = songs[Index].songname;
        audioElement.src = `songs/${Index + 1}.mp3`;
        audioElement.play();
        audioElement.currentTime = 0;
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');


     })
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    element.getElementsByClassName("timestamp")[0].innerText = songs[i].timestamp;
});
