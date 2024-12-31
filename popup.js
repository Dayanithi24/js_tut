document.addEventListener("click",()=>{
    const paras=document.getElementsByTagName("p");
    console.log(paras);
    for(let i=0;i<paras.length;i++){
        paras[i].innerHTML = "";
    }
})
function handlePrompt(){
    let person = prompt("Please enter your name", "Harry Potter");
    let text;
    if (person == null || person == "") {
    text = "User cancelled the prompt.";
    } else {
    text = "Name : " + person;
    }
    document.getElementById("prompt-msg").innerText=text;
}

function handleConfirm(){
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("confirm-msg").innerText=txt;
}

function handleAlert(){
    alert("Welcome!!");
}