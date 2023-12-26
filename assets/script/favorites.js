let id=new URLSearchParams(window.location.search).get("id");

let sDivAll=document.querySelector(".s-divall");

fetch("http://localhost:3000/Favorites/")
.then(res=>res.json())
.then(data=>{
    console.log(data);

    data.forEach(element => {
        
        sDivAll.innerHTML+=`
        <div class="div3">
        <i class="bi bi-heart-fill"></i>
        <img src="${element.image}" alt="">
        <p id="p1">${element.home}</p>
        <h3>${element.name}</h3>
        <p>${element.description}</p>
        <button id="deleteFavBtn" onclick="DeleteFav(${element.id})"> Delete</button>
        </div>
        `
    });
    })

    function DeleteFav(id){
        axios.delete(`http://localhost:3000/Favorites/${id}`)
        .then(res=>{
            window.location.reload()
        })
    }