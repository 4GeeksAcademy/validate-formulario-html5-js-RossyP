const sendForm = document.getElementById("sendForm");
const alertIncomplet = document.getElementById("alertIncomplet");
const inputs = document.querySelectorAll("input, textarea, select");
alertIncomplet.style.display = "none"


function validateInput(input) {
    if ((input.value === "") || (input.value === "Pick a state")) {
        input.classList.remove("input-correct");
        input.classList.add("input-clear");
    } else {
        input.classList.remove("input-clear");
        input.classList.add("input-correct");
    }
}


inputs.forEach(input => {
    input.addEventListener("change", function() {
        validateInput(this);
    });
});


sendForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Hola soy el console.log");
    let isValid = true;
    inputs.forEach(input => {

        if((input.value === "") ||  (input.value === "Pick a state")){
            input.classList.add("input-error")
            console.log("estoy vacioo!!")
            alertIncomplet.style.display = "block";
            isValid = false;
        
        }else if(input.type === "radio"){
            input.classList.add("input-neutro");
        }else{
            input.classList.remove("input-error");
            input.classList.add("input-correct");
            
        }
    });

    
    if(isValid){
        inputs.forEach(input =>{
            if((input.value !== "") || (input.value !== "Pick a state")){
                input.value = "";
                input.classList.remove("input-correct"); 
            }
        })
        alertIncomplet.style.display = "none";
        alert("Form submitted successfully");
    }
 
})