
// $.ajax({
//     url: "../../data/picture.json",
//     success: ( result ) => {
//         console.log("ggf");    
//     },
//     error: (err) => {
//         // console.errr(err);
//         console.log("ppp");
//     }
//   });
// const dom={
//     frmRecord:document.querySelector(".frmRecord"),
//     inputNameRecord:document.querySelector(".inputNameRecord"),
//     inputPhoneRecord:document.querySelector(".inputPhoneRecord"),
//     inputEmailRecord:document.querySelector(".inputEmailRecord"),
//     btnSubmitRacord:document.querySelector(".btnSubmitRacord"),
// }

// dom.inputNameRecord.onkeydown = function(event) {
//     if (!isNameValid(event.key)){
//         event.preventDefault();
//     }       
// }

// dom.inputPhoneRecord.onkeydown = function(event) {
//     if (!isNumberValid(event.key)){
//         event.preventDefault();
//     }       
// }

// dom.frmRecord.onsubmit=(event)=>{
//     event.preventDefault();
//     if(dom.inputNameRecord.value=="" || dom.inputEmailRecord.value=="" || dom.inputPhoneRecord.value=="")
//         alert("enter name,phone number and email")
//     else{
//         const user={
//             name:dom.inputNameRecord.value,
//             email:dom.inputEmailRecord.value,
//             phone:dom.inputPhoneRecord.value
//         }
//         localStorage.setItem("user",JSON.stringify(user));
//         alert("Thank you for joining us!");
//         dom.frmRecord.reset();
//     }
// }
