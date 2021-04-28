var app = new Vue({
    el: '#root',
    data: {
        albumList : [],
        musicGenre: []
                          
    },
    
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                this.albumList = response.data.response;

                this.albumList.forEach( (element) => {

                    if (this.musicGenre.includes(element.genre) == false ) {
                        this.musicGenre.push(element.genre)                        
                    }

                }) 
                
            });               
       
    }
  })