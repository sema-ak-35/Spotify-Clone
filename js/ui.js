class UI{
    constructor(){
        this.musicList=document.querySelector("#music-list");
        this.form=document.querySelector("form");
        this.sectionTitle=document.querySelector("#section-title");
        this.player=document.querySelector(".player");
    }

    renderCards(songs){


        this.musicList.innerHTML="";

        songs.forEach((song)=>{
     
            const card=document.createElement("div")

           card.className="card";

           card.dataset.title=song.title;
           card.dataset.subtitle=song.subtitle;
           card.dataset.image=song.images.coverarthq;
           card.dataset.mp3=song.hub.actions[1].uri;
     


           card.innerHTML=`<figure>
               <img src="${song.images.coverarthq}">

               <div class="play">
                  <i class="bi bi-play-fill"></i>
               </div>
            </figure>

            <div class="card-info">
               <h4>${song.title}</h4>
               <h4>${song.subtitle}</h4>
            </div>`

           this.musicList.appendChild(card)


            
          })
    }


    renderLoader() {
        this.musicList.innerHTML=`
<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>`
    }


  


    renderPlayer(data) {this.player.innerHTML=` <div class="info">
         <img src=${data.image}
         alt="music-image"
         id="music-image"
         />

         <div>
            <h5 id="music-title">${data.title}</h5>

            <p id="artist-title">${data.subtitle}</p>
         </div>
      </div>

      <audio src=${data.mp3} id="music-sound" controls autoplay></audio>



      <div class="icons">
         <i class="bi bi-music-note-list"></i>
         <i class="bi bi-boombox"></i>
         <i class="bi bi-pc-display"></i>
      </div>`;

      const audioElement=document.querySelector("#music-sound")

      audioElement.addEventListener("play",()=>{
          
        const image=document.querySelector("#music-image")

        image.classList.add("animate");
     
      })


      audioElement.addEventListener("pause",()=>{
          
        const image=document.querySelector("#music-image")

        image.classList.remove("animate");})
    
    }

}

 export default UI;