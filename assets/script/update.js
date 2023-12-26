
let Name = document.querySelector("#name");
let ImageDiv = document.querySelector("#img-div");
let FileImg = document.querySelector("#file");
let Des = document.querySelector("#descriptions");
let Submit = document.querySelector("#submit");
let Form = document.querySelector("#form");
let Home =document.querySelector("#home");

let id = new URLSearchParams(window.location.search).get("id");
console.log(id);


    fetch(`http://localhost:3000/EasyLo/${id}`)
        .then(res => res.json())
        .then(data => {
            ImageDiv.src = data.image;
            Name.value = data.name;
            Des.value = data.description;
            Home.value=data.home;
            
        })
       



FileImg.addEventListener("input", (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            ImageDiv.src = reader.result
        }
    }
})



Form.addEventListener("submit", (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/EasyLo/${id}`, {
        image: ImageDiv.src,
        name: Name.value,
        description: Des.value,
        home:Home.value
    })
        .then(res => {
            window.location = "./index.html"
        })
})