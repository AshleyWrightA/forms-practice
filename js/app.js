const firstName = document.querySelector("#first-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password")

document.addEventListener("input", e => {
    if(e.target === firstName) {
        validateForm(e);
    }
    if(e.target === email) {
        validateForm(e);
    }
    if(e.target === password){
        validateForm(e)
    }
    if(e.target === confirmPassword){
        validateForm(e);
    }
})

const validateForm = (e) => {
    if(e.target.value.trim() === ""){
        e.target.nextElementSibling.innerText = "Cannot be blank";
    }
}