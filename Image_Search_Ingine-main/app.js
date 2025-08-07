let accessKey= "f2jjQasLTLMKRFNcptZic-8-LNaQQWOnfIX8OezDgcQ"
let searchForm = document.querySelector('#search-form');
let searchBox = document.querySelector('#search-box');
let btnBox = document.querySelector('#btn-box');
let searchResult = document.querySelector('#search-result');
let showMore = document.querySelector('#show-more');

let keyword = "";
let page = 1;
async function getPicture(){
    try{
    keyword = searchBox.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${12}&query=${keyword}&client_id=${accessKey}`
    let res = await fetch(url);
    let data = await res.json();
    
    let results = data.results; //this is arrray
    for(result of results){
        let image = document.createElement("img");
        image.setAttribute("src",result.urls.small);
        image.classList.add("img-modification")
        let link = document.createElement("a");
        link.setAttribute("href",result.links.html);
        
        link.target="_blank";//to open another page
        link.appendChild(image);
        searchResult.appendChild(link);
    }
    showMore.style.display = "block";
        showMore.addEventListener("click",()=>{
            getPicture();
            page++;
        })
    }
    catch(e){
        // let p = document.createElement("p");
        // p.innerText = "api is not working";
        // p.style.display = "block";
        // p.style.textAlign = "center";
        // p.style.display = "block";
        // searchResult.appendChild(p);
    }
}


searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchResult.innerText = "";
    getPicture();
});


