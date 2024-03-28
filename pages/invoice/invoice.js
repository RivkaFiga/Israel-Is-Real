const dom={
    hello:document.getElementById("hello"),
    whichPackages:document.getElementById("whichPackages"),
    whichDates:document.getElementById("whichDates"),
    countParticipans:document.getElementById("countParticipans"),
    totalPayment:document.getElementById("totalPayment"),
    btnFunallyForPayment:document.getElementById("btnFunallyForPayment"),
    creditDetails:document.getElementById("creditDetails"),
}
let isClickedOnBtnFunallyForPayment=false
const helloSTR=JSON.parse(sessionStorage.getItem("currentEmail"))
dom.hello.innerHTML+=helloSTR.name
const finnalyPackegas=JSON.parse(sessionStorage.getItem("finnalyPackegas"))
finnalyPackegas.forEach(f => {
    if(finnalyPackegas[0]!=f)
        dom.whichPackages.innerHTML+=", "+f
    else
        dom.whichPackages.innerHTML+=f+" "
});

dom.countParticipans.innerHTML+=sessionStorage.getItem("countJoiners")
dom.totalPayment.innerHTML+=sessionStorage.getItem("sum")+" $"

dom.btnFunallyForPayment.onclick=()=>{
    if(!isClickedOnBtnFunallyForPayment){
        isClickedOnBtnFunallyForPayment=true
        creditDetails.innerHTML+=`<input type="text" id="inputCreditznumber" placeholder="enter credit number">
        <input type="text" id="inputGoodThruLastDayOf" placeholder="enter good thru last date of">
        <input type="text" id="inputCVV" placeholder="enter CVV">
        <input type="text" id="idUser" placeholder="enter ID">
        <input type="number" id="inputNumPayments" placeholder="enter number of payments" min="1" max="5">
        <input type="button" value="OK" id="btnOKCreditDetails" class="butn btn">`
        inputCreditznumber.onkeydown = function(event) {
            if (!isNumberValid(event.key)){
                event.preventDefault();
            }       
        }
        inputGoodThruLastDayOf.onkeydown = function(event) {
            if (!isNumberValid(event.key)){
                event.preventDefault();
            }       
        }
        inputCVV.onkeydown = function(event) {
            if (!isNumberValid(event.key)){
                event.preventDefault();
            }       
        }
        idUser.onkeydown = function(event) {
            if (!isNumberValid(event.key)){
                event.preventDefault();
            }       
        }
        btnOKCreditDetails.onclick=(event)=>{
            event.preventDefault()
            let OKCreditDetails=true
            if(inputCreditznumber.value<1000000000000000 || inputCreditznumber.value>9999999999999999)
                OKCreditDetails=false
            if(!isGoodThruLastDayOf(Number(inputGoodThruLastDayOf.value)))
                OKCreditDetails=false
            if(inputCVV.value<100 || inputCVV.value>999)
                OKCreditDetails=false
            if(!isIDValid(idUser.value))
                OKCreditDetails=false
            if(inputNumPayments.value<1 || inputNumPayments.value>5)
                OKCreditDetails=false
            if(!OKCreditDetails)
                alert("One or more of the details is wrong, or you did'nt wrote it")
            if(OKCreditDetails)
                goodbye()
        } 
    }
}
const isNumberValid = function(key) {
    return (key >= '0' && key <= '9' || key === 'Backspace') 
}
const isGoodThruLastDayOf = function(num) {
    return num>122 && num<1240 && num/100>0 && num/100<13 && num%100>22 && num%100<40
}
const isIDValid = function(ID) {
    if(ID.length!=9)
        return false
    let sum=0
    let z=1
    for(let i=0; i<9; i++){
        let x=ID[i]*z
        if(x>=10)
            x=1+x%10
        sum+=x
        if(z==1)
            z=2
        else
            z=1
    }
    if(sum%10==0)
      return true
    return false
}
const goodbye =  function() {
   dom.creditDetails.innerHTML+=`<div id="finally" class="alert"><div>Your order has been recorded in the system</div>
   <br><input type="button" value="back to home page" class="butn btn" id="btnBackToHomePege"></div>`
   sessionStorage.setItem("choseBasePackage",null)
   sessionStorage.setItem("choseDreamPackage",null)
   sessionStorage.setItem("chosePrimumPackage",null)
   sessionStorage.setItem("choseVIPPackage",null)
   sessionStorage.setItem("note",false)
   sessionStorage.setItem("sum",0)
   btnBackToHomePege.onclick=()=>{
    window.location.href = "../home/home.html"
   }
}