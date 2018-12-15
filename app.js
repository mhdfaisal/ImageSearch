//Get UI elements
let searchBtn = document.querySelector('#searchBtn');
let searchText = document.querySelector('#searchText');

//Add Event Listener
searchBtn.addEventListener('click', function(){
   let query = searchText.value;
   if(query!=''){
    const getimage = new getImages(query);
    getimage.fetchImages()
    .then(data =>{
        const ui = new UI(data);
        ui.displayImages();
    }).catch(err=>{
        console.log(err);
    });
   }
})