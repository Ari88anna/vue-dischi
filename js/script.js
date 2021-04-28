var app = new Vue({
    el: '#root',
    data: {
        albumList : []
                   
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                this.albumList = response.data.response;
            });
                
                
               
       
    }
  })