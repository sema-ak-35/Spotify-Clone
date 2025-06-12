 class API{
    constructor(){

        this.options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '584d362b37msh224dd003b1ed79cp1e0520jsn4d43411f0649',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};

this.baseURL=`https://shazam.p.rapidapi.com`;

    }
    async getPopular(){
        try{
           const response= await fetch(`${this.baseURL}/search?term=neffex`,this.options);
           

           const data= await response.json();

           return data.tracks.hits.map((item)=>item.track);
           
         
         }

        catch (error){
            alert(`Hata:${error}`)
        }
    }
  
   async getSearchMusic(query){


        const response= await fetch(`${this.baseURL}/search?term=${query}`,this.options)

       const songs= await response.json()
       return songs.tracks.hits.map((item)=>item.track)
    }



 }

     export default API;