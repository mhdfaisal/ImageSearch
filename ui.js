//Class to handle UI
class UI{
    constructor(data){
        this.imageData = data;
    }

    createImageElement(imgUrl, largeUrl){
        //Column div
        let div = document.createElement('div');
        div.className = 'card card-body';
        div.classList.add('my-2');
        //Full size image hyper-link
        let a = document.createElement('a');
        a.setAttribute('href',largeUrl);
        a.setAttribute('target','_blank');
        a.className='text-center';
        //Image element
        let imgDiv = document.querySelector("#img");
        let img = document.createElement('img');
        img.className = "img-fluid";
        img.setAttribute('src',imgUrl);
        //append child elements
        a.appendChild(img);
        div.appendChild(a);
        imgDiv.appendChild(div);

    }

    displayImages(){
        let mainDiv = document.querySelector("#img");
        mainDiv.innerHTML='';
        mainDiv.innerHTML='';
        const imagedata = this.imageData.results;
        //console.log(imagedata);
        //Loop through each data item
        imagedata.forEach((item,index)=>{
            this.createImageElement(item.urls.thumb,item.urls.full);
        });
    }
}