//Class to fetch APIs
class getImages{
    constructor(queryData){
        this.imageUrl = "https://api.unsplash.com/search/photos/";
        this.clientId = "";
        this.page = 2;
        this.per_page=4;
        this.query =queryData;
    }

    async fetchImages(){
        let url = `${this.imageUrl}?client_id=${this.clientId}&page=${this.page}&per_page=${this.per_page}&query=${this.query}`;
        let response = await fetch(`${this.imageUrl}?client_id=${this.clientId}&page=${this.page}&per_page=${this.per_page}&query=${this.query}`);
        let data = await response.json();
        return data;
    }

}
