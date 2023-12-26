let sDivAll=document.querySelector(".s-divall");
let page=3;

function ShowData(){
fetch(" http://localhost:3000/EasyLo")
.then(res=>res.json())
.then(data=>{
    data.slice(page-3,page).forEach(element => {
        sDivAll.innerHTML+=`
        <div class="div3">
        <i id="heart" class="bi bi-heart-fill" onclick="Fav(${element.id})"></i>
        <img src="${element.image}" alt="">
        <p id="p1">${element.home}</p>
        <h3>${element.name}</h3>
        <p>${element.description}</p>
        <div class="divBtn">
        <button onclick="Update(${element.id})">Update</button>
        <button onclick="Deletebox(${element.id})">Delete</button>
        <button onclick="GoTo(${element.id})">Details</button>
    </div>
    </div>
        `
    });
})
}
ShowData();

function Update(id){
    window.location=`./update.html?id=${id}`
}

let Load=document.querySelector("#load");

Load.addEventListener("click", ()=>{
    page+=3;
    ShowData();
})

function Deletebox(id){
    axios.delete(`http://localhost:3000/EasyLo/${id}`);
    window.location.reload()
}

function GoTo(id){
window.location=`./details.html?id=${id}`
}

function Fav(id){
    axios.get("http://localhost:3000/EasyLo/"+id)
    .then(res=>{
       axios.post("http://localhost:3000/Favorites/", res.data)
       window.location="./favorite.html"
    })
}

let  Navbar=document.querySelector(".navbar")
let BTN=document.querySelector(".div-btn");

window.addEventListener("scroll", ()=>{
    if(scrollY>500){
        Navbar.style.position="fixed"
        Navbar.style.backgroundColor="rgb(10, 161, 146)"
        BTN.style.position="fixed"
    }else{
        Navbar.style.position=""
        Navbar.style.backgroundColor=""
        BTN.style.position=""
    }
})

let Header=document.querySelector("#header");
BTN.addEventListener("click", ()=>{
    
Header.scrollIntoView({
    behavior:'smooth'
})
})