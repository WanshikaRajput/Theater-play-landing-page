
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "☀️";
    }else{
        themeBtn.textContent = "🌙";
    }

});



const loadBtn = document.getElementById("loadBtn");
const loader = document.getElementById("loader");
const result = document.getElementById("result");

loadBtn.addEventListener("click", () => {

    loader.classList.remove("hidden");
    result.textContent = "";

    setTimeout(() => {

        loader.classList.add("hidden");

        result.textContent = "Data Loaded Successfully!";

        console.log("[Analytics] User interacted with Static Landing Page");

    },2000);

});




const form = document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const message=document.getElementById("message");

 
    [name,email,message].forEach(input=>{
        input.style.border="1px solid #ccc";
    });

    if(
        name.value.trim()==="" ||
        email.value.trim()==="" ||
        message.value.trim()===""
    ){

        alert("Please fill all fields.");

        [name,email,message].forEach(input=>{

            if(input.value.trim()===""){
                input.style.border="2px solid red";
            }

        });

        return;

    }

    

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)){

        email.style.border="2px solid red";

        alert("Enter a valid email.");

        return;

    }

    

    const sanitize = (text) => {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

}

    const userData={

        name:sanitize(name.value),

        email:sanitize(email.value),

        message:sanitize(message.value)

    };

    console.log(userData);

    console.log("[Analytics] User interacted with Static Landing Page");

    alert("Message Submitted Successfully!");

    form.reset();

});


const fakeData = [];

const emptyState = document.getElementById("emptyState");

if(fakeData.length === 0){

    emptyState.classList.remove("hidden");

    console.log("No data found.");

}else{

    emptyState.classList.add("hidden");

}