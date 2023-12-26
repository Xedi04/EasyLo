let id=new URLSearchParams(window.location.search).get("id");

let sDivAll=document.querySelector(".s-divall");

fetch(`http://localhost:3000/EasyLo/${id}`)
.then(res=>res.json())
.then(data=>{
    sDivAll.innerHTML+=`
    <div class="div3">
    <i class="bi bi-heart-fill"></i>
    <img src="${data.image}" alt="">
    <p id="p1">${data.home}</p>
    <h3>${data.name}</h3>
    <p>${data.description}</p>
</div>
    `

})