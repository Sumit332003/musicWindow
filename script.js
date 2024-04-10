 
var arr2=[
    {songName:"Hua Main",url:"./music/HuaMain.mp3" , image:"./imgs/huaMain.jpg" ,duration:"4:37"},
    {songName:"Marham",url:"./music/Marham.mp3" , image:"./imgs/marham.jpg" ,duration:"1:53"},
    {songName:"Lovely",url:"./music/Lovely.mp3" , image:"./imgs/lovely.png",duration:"3:20"},
    {songName:"Aarzoo",url:"./music/Aarzoo1.mp3" , image:"./imgs/Aarzoo.png",duration:"3:24"},
    {songName:"Khwab",url:"./music/Khwab1.mp3" , image:"./imgs/khwab.png",duration:"2:38"},
    {songName:"Kaash Aisa Hota",url:"./music/Kaash1.mp3" , image:"./imgs/kaash.png",duration:"3:32"},
    {songName:"Haareya Meri Pyaari Bindu",url:"./music/HaareyaMeriPyaariBindu.mp3" , image:"./imgs/heeriye.png" ,duration:"3:34"},
    {songName:"Haaye Oye",url:"./music/HaayeOye.mp3" , image:"./imgs/oye.png",duration:"3:20"},
    {songName:"Kalavathi",url:"./music/Kalavathi.mp3" , image:"./imgs/kalavathi.png",duration:"4:14"},  
    {songName:"Apna Bna Le",url:"./music/Apna.mp3" , image:"./imgs/apena.png" ,duration:"3:24"},
    {songName:"Dil Diya Gallan",url:"./music/Dil.mp3" , image:"./imgs/diyan.png",duration:"4:20"},
    {songName:"Dil Jhoom",url:"./music/Jhoom.mp3" , image:"./imgs/jhoom.png",duration:"5:00"},
    {songName:"Main Raat Din Dua Karu",url:"./music/RaatDinDuaKaru.mp3" , image:"./imgs/raatDin.png",duration:"4:23"},
    {songName:"Malang",url:"./music/Malang.mp3" , image:"./imgs/malang.png",duration:"4:47"},
    {songName:"Naina Da Kya Kasoor",url:"./music/NainaDaKyaKasoor.mp3" , image:"./imgs/nainaDa.png",duration:"3:48"},
    {songName:"Raatan Lambiyan",url:"./music/RaatanLambiyan.mp3" , image:"./imgs/raatan.png",duration:"3:50"},
    {songName:"Tere Naal",url:"./music/TereNaal.mp3" , image:"./imgs/naal.png",duration:"3:18"},
    {songName:"Udd Jaa Kaale Kaava",url:"./music/UddJaaKaaleKaava.mp3" , image:"./imgs/heart1.jpg",duration:"3:24"},
    {songName:"Ok_Jaanu",url:"./music/okJaanu1.mp3" , image:"./imgs/okJaanu.png",duration:"3:25"},
    {songName:"Tere Pyar Mein",url:"./music/Tere_Pyar1.mp3" , image:"./imgs/pyarMain.png",duration:"2:57"},
  ];
  


var audio = new Audio();
   
var selectSong = 0;
function mainFunction(){
var clutter ="";
arr2.forEach(function(elm,index){

  clutter = clutter + `<div class="song-card" id=${index}> 
  <div class="part1">
       <img src="${elm.image}" alt="">
       <h2>${elm.songName}</h2>
   </div>
  <h6>3.56</h6>
</div>`

})


 
document.querySelector(".all_songs").innerHTML=clutter;
console.log(clutter);
audio.src=arr2[selectSong].url
document.querySelector(".displayImage").style.backgroundImage = `url(${arr2[selectSong].image})`;
document.querySelector(".circle").style.backgroundImage = `url(${arr2[selectSong].image})`;
document.querySelector(".nam").innerHTML = `<h5>${arr2[selectSong].songName}</h5>`;
document.querySelector(".topCon").innerHTML = `<h2>${arr2[selectSong].songName}</h2>`;
document.querySelector(".card1").style.backgroundImage=`url(${arr2[selectSong].image})`
document.querySelector("#download").innerHTML=`
<a href="${arr2[selectSong].url}" download="${arr2[selectSong].songName}">
                  <img id="down" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif
" alt="">
                     
                        </a>
`

}
mainFunction()

var backwd=document.querySelector(".bt1")
var play=document.querySelector(".bt2")
var forwd=document.querySelector(".bt3")

document.querySelector(".all_songs")
.addEventListener("click",function(dets){
 
selectSong=dets.target.id
play.innerHTML="play"
flag=1
mainFunction();
audio.play();
})




// // song controll code

// var backwd=document.querySelector("#bt1")
// var play=document.querySelector("#bt2")
// var forwd=document.querySelector("#bt3")



var flag = 0
play.addEventListener("click",function(){
   if(flag==0){
      play.innerHTML="play";
      mainFunction()
      audio.play()
      flag=1
  
   }
   else{
      play.innerHTML="pause"
      mainFunction()
      audio.pause()
      flag=0;
   }
})

forwd.addEventListener("click",function(){
     if(selectSong < arr2.length-1){
      selectSong++
      mainFunction()
      audio.play()
      backwd.style.opacity=1
     }else{
      forwd.style.opacity=0.3
     }
})

backwd.addEventListener("click",function(){
   if(selectSong >0){
    selectSong--
    mainFunction()
    audio.play()
    forwd.style.opacity=1
   }else{
    backwd.style.opacity=0.3
    
   }
})
