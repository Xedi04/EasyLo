let Form = document.querySelector("#form");
let Name = document.querySelector("#name");
let ImageDiv = document.querySelector("#img-div");
let FileImg = document.querySelector("#file");
let Des = document.querySelector("#descriptions");
let Submit = document.querySelector("#submit");

FileImg.addEventListener("input", () => {
    let file = FileImg.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            ImageDiv.src = reader.result;
        }
    }
})

Form.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {}
    let src = FileImg.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        obj = {
            image: e.target.result,
            name: Name.value,
            description: Des.value

        }
        axios.post("http://localhost:3000/EasyLo", obj)
            .then(res => window.location = "./index.html")
    }
    reader.readAsDataURL(src);

})