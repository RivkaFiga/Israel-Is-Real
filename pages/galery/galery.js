const dom={
    btnSearchHotels:document.getElementById("btnSearchHotels"),
    btnSearchSites:document.getElementById("btnSearchSites"),
    showPictures:document.getElementById("showPictures"),
    btnSearchInspired:document.getElementById("btnSearchInspired"),
}

getType("Travel site",drowPictures)

dom.btnSearchHotels.onclick= () => {
    dom.btnSearchHotels.style.borderColor="rgb(102, 22, 86)";
    dom.btnSearchHotels.style.borderStyle="solid";
    dom.btnSearchHotels.style.borderWidth="0.30ch";
    dom.btnSearchSites.style.borderColor="white";
    dom.btnSearchInspired.style.borderColor="white"
    if(dom.showPictures.innerHTML==''){
       drowHotels()}
    else{
        dom.showPictures.innerHTML=''
        drowHotels()
    }}
function drowHotels(){
    getType("hotel",drowPictures)
}
dom.btnSearchInspired.onclick= () => {
    dom.btnSearchInspired.style.borderStyle="solid";
    dom.btnSearchInspired.style.borderWidth="0.30ch";
    dom.btnSearchInspired.style.borderColor="rgb(102, 22, 86)";
    dom.btnSearchHotels.style.borderColor="white"
    dom.btnSearchSites.style.borderColor="white";
    if(dom.showPictures.innerHTML==''){
    drowHotelDetails()}
    else{
        dom.showPictures.innerHTML=''
        drowHotelDetails()
    }
}

function drowHotelDetails(){
    getType("hotel details",drowPictures)
}

dom.btnSearchSites.onclick= () => {
    dom.btnSearchSites.style.borderStyle="solid";
    dom.btnSearchSites.style.borderWidth="0.30ch";
    dom.btnSearchSites.style.borderColor="rgb(102, 22, 86)";
    dom.btnSearchInspired.style.borderColor="white"
    dom.btnSearchHotels.style.borderColor="white"
    if(dom.showPictures.innerHTML==''){
      drowTravelSites()
    }
    else{
        dom.showPictures.innerHTML=''
        drowTravelSites()
    }
}

function drowTravelSites(){
    showPictures.innerHTML+=` 
    <div id="hotelbackground"><p>which region?</p> 
    <select id="chooseRegion" >
        <option id="allTheRegions">all the regions</option>             
        <option id="thenorthernregion">the northern region</option>
        <option id="theJerusalemregion">the Jerusalem region</option>
        <option id="thesouthernregion">the southern region</option>
        <option selected>select region</option>
    </select>
    <input type="button" value="OK" id="btnOKSearchRegion"  class="butn btn btn-outline-secondary">
    </div>`
    btnOKSearchRegion.onclick=()=>{
        if(chooseRegion.value=="select region"){
          alert("select region")}
        else{
            const choosingRegion=chooseRegion.value
            dom.showPictures.innerHTML=''
            if(choosingRegion=="all the regions")
                getType("Travel site",drowPictures)
            else
                getArea(choosingRegion,drowPictures)
        }
    }   
}

function drowPictures(pictures){
    pictures.forEach(p => {
        showPictures.innerHTML+=`<div class="col-l-2 col-md-4 col-sm-6 col-xs-12">
    <div> <img src="../../assets/תמונות/${p.adress}" class="image" title="${p.name}" width="150px"/><div>
    <div>${p.abote}</div>
    <h3>${p.name}</h3>
    </div>`
    });
} //col-l-2 col-md-4 col-sm-6 col-xs-12