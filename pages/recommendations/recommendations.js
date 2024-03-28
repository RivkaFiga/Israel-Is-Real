const frmUserRecommendations=document.getElementById("frmUserRecommendations")
const txtUserRecommendations=document.getElementById("txtUserRecommendations")
frmUserRecommendations.onsubmit=(event)=>{
    event.preventDefault()
    if(!txtUserRecommendations.value==""){     
       alert("Thank you!!!")
       txtUserRecommendations.value=""
    }
}