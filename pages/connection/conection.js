
const dom={
    frmConection:document.getElementById("frmConection"),
    inputNameConection:document.getElementById("inputNameConection"),
    inputTelConection:document.getElementById("inputTelConection"),
    inputEmailConection:document.getElementById("inputEmailConection"),
    inputMessegeConection:document.getElementById("inputMessegeConection"),
    btnSubmitConection:document.getElementById("btnSubmitConection"),
}

dom.inputNameConection.onkeydown = function(event) {
    if (!((event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z') || event.key === ' ')){
        event.preventDefault();
    }       
}

dom.inputTelConection.onkeydown = function(event) {
    if (!(event.key >= '0' && event.key <= '9' || event.key === 'Backspace')){
        event.preventDefault();
    }       
}

dom.frmConection.onsubmit=(event)=>{
    event.preventDefault();
    if(dom.inputNameConection.value=="" || dom.inputTelConection.value=="" || dom.inputEmailConection.value=="" || dom.inputMessegeConection.value=="")
      alert("enter name,phone number,email and messege")
    else{
        if(dom.inputTelConection.value.length<9 || dom.inputTelConection.value.length>10 || dom.inputTelConection.value[0]!=0)
            alert("error hpone number")
        else{
            alert("we'll get back to you soon!");
            window.location.href = "../home/home.html";
        }
    }
}