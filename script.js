// ---------------- typing effect -----------------

let typed = new Typed(".auto-text",{
    strings: ["App Developer", "Freelancer"],
    typeSpeed:70,
    backSpeed:70,
    loop: true
})

// ---------------------- About section switching -------------------

let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")

Array.from(tablinks).forEach((element)=>{
    element.addEventListener('click',()=>{
        for (const tablink of tablinks) {
            tablink.classList.remove("active-link") 
        }
        for (const tabcontent of tabcontents) {
            tabcontent.classList.remove("active-content") 
        }
        element.classList.add("active-link")

        if(element.id == "skills"){
            tabcontents[0].classList.add("active-content")
        }
        if(element.id == "experience"){
            tabcontents[1].classList.add("active-content")
        }
        if(element.id == "education"){
            tabcontents[2].classList.add("active-content")
        }
    })
})

// ----------------- open/close sidemenu in small screen -----------------------

let sidemenu = document.getElementById("sidemenu")
let openmenu = document.getElementById("openmenu")
let closemenu = document.getElementById("closemenu")

openmenu.addEventListener('click',()=>{
    sidemenu.style.right = "0px"
})

closemenu.addEventListener('click',()=>{
    sidemenu.style.right = "-200px"
})

// -------------------- Send contact form to google sheets -------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzIk5QjnFnLfTvYj7vwBnpk2coTr9t8lIx_vY1kt7V93OQxSZ7VeAoTMntBwIyKHfmuzg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.style.color = "#61b752"
        msg.innerHTML = "Message sent successfully!"
        setTimeout(()=>{
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => {
        console.error('Error!', error.message)
        msg.style.color = "#e50000"
        msg.innerHTML = "Error sending message!"
        setTimeout(()=>{
            msg.innerHTML = ""
        },5000)
    })
})