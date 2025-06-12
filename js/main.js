import API from "./api.js";
import UI from "./ui.js";

const api=new API();
const ui= new UI();



 document.addEventListener("DOMContentLoaded", async()=>{

  ui.renderLoader();


   const songs= await api.getPopular();

   ui.renderCards(songs);
  
 })


 ui.form.addEventListener("submit",async (e)=>{
  e.preventDefault();
  const query= e.target[0].value.trim();

  if(!query){
    alert("Lütfen geçerli bir işlem gerçekleştiriniz!")
    return;
  }

  ui.renderLoader()

  ui.sectionTitle.textContent=`${query} için sonuçlar`




  const songs= await api.getSearchMusic(query)

 ui.renderCards(songs)

  
 })


 ui.musicList.addEventListener("click",(e)=>{
  if(e.target.className==="play"){
   const card=e.target.closest(".card");

   const songData=card.dataset;

   ui.renderPlayer(songData)
   
  }
 })




   
