var app = new Vue({
    el: '#root',
    data: {
        albumList : [],
        musicGenre: [],
        activeGenre: '',
                          
    },
    methods: {
        seletGenre(index) {
            this.activeGenre = index;
            console.log(this.activeGenre)
        }
    },
    
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                this.albumList = response.data.response;

                this.albumList.sort((a, b) => {
                    return a.year - b.year;
                })

                this.albumList.forEach( (element) => {

                    if (this.musicGenre.includes(element.genre) == false ) {
                        this.musicGenre.push(element.genre)                        
                    }

                });     
                
                
            });               
       
    }
  })