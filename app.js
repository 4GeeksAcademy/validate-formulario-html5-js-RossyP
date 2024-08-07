const sendForm = document.getElementById("sendForm");
const alertIncomplet = document.getElementById("alertIncomplet");

alertIncomplet.style.display = "none"

sendForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Hola soy el console.log");

    const inputs = document.querySelectorAll("input, textarea, select");
    
    let isValid = true;

// (input.type === "radio" && !input.checked) ||

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
            alertIncomplet.style.display = "none";
        }
    });

    
    if(isValid){
        inputs.forEach(input =>{
            if((input.value !== "") || (input.value !== "Pick a state")){
                input.value = "";
                input.classList.remove("input-correct"); 
            }
        })

        alert("Form submitted successfully");
    }
 
})