const isNameValid = function(key) {
    return (key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key === ' '
}

const isNumberValid = function(key) {
     return (key >= '0' && key <= '9' || key === 'Backspace') 
}
//מקבלת סוג
const  getType = (type,callbackFunc = () => {}) => {
    $.ajax({
        url: "../../data/picture.json",
        success: ( result ) => {
            let j=result
            let h=[]
            j.forEach(i => {
               if(i.type==type) 
                h.push(i);
            }); 
            callbackFunc(h); 
        },
        error: (err) => {
            // console.errr(err);
            console.log("error");
        }
    });
}

//מקבלת איזור
function getArea(area,callbackFunc = () => {}){
    $.ajax({
        url: "../../data/picture.json",
        success: ( result ) => {
            let j=result
            let h=[]
            j.forEach(i => {
               if(i.area==area && i.type=="Travel site") 
                h.push(i);
            }); 
            callbackFunc(h); 
        },
        error: (err) => {
            // console.errr(err);
            console.log("error");
        }
    });
}

const dom1={
    frmRecord:document.querySelector(".frmRecord"),
    inputNameRecord:document.querySelector(".inputNameRecord"),
    inputPhoneRecord:document.querySelector(".inputPhoneRecord"),
    inputEmailRecord:document.querySelector(".inputEmailRecord"),
    btnSubmitRacord:document.querySelector(".btnSubmitRacord"),
}

dom1.inputNameRecord.onkeydown = function(event) {
    if (!isNameValid(event.key)){
        event.preventDefault();
    }       
}

dom1.inputPhoneRecord.onkeydown = function(event) {
    if (!isNumberValid(event.key)){
        event.preventDefault();
    }       
}

dom1.frmRecord.onsubmit=(event)=>{
    event.preventDefault();
    if(dom1.inputNameRecord.value=="" || dom1.inputEmailRecord.value=="" || dom1.inputPhoneRecord.value=="")
        alert("enter name,phone number and email")
    else{
        if(dom1.inputPhoneRecord.value.length<9 || dom1.inputPhoneRecord.value.length>10 || dom1.inputPhoneRecord.value[0]!=0)
           alert("error phone number")
        else{
            const user={
                name:dom1.inputNameRecord.value,
                email:dom1.inputEmailRecord.value,
                phone:dom1.inputPhoneRecord.value
            }
            localStorage.setItem(dom1.inputEmailRecord.value,JSON.stringify(user));
            alert("Thank you for joining us!");
            dom1.frmRecord.reset();
        }
    }
}
const nav=document.querySelector("nav");
const responsiveIkon=document.getElementById("responsiveIkon");
let count=0;
responsiveIkon.addEventListener("click",clickonresponsiveIkon)
function clickonresponsiveIkon(){
    if(count==0){
        nav.style.visibility="visible";
        count++;
    }
    else
    {
        nav.style.visibility="hidden"
        count--;
    }

}