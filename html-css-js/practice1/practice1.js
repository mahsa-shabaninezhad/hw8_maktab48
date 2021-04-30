let accordion = document.querySelector(".accordion")
let headers = document.querySelectorAll(".section__header")
let secContent = document.querySelectorAll(".section__content");


headers.forEach(header => {
    header.addEventListener("click",function () {

        let icon = this.children[1].innerHTML 
        let content = this.nextElementSibling
        content.classList.toggle("content__display");
        this.classList.toggle('section__header--open')
        this.children[1].innerHTML = icon == "+"? "-" : "+"
            
        
    })
})