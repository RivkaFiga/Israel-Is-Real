const dom = {
    inputCurrentUserEmail: document.getElementById("inputCurrentUserEmail"),
    inputCountJoiners: document.getElementById("inputCountJoiners"),
    base_package: document.getElementById("base_package"),
    basePackageTitle: document.getElementById("basePackageTitle"),
    dream_package: document.getElementById("dream_package"),
    dreamPackageTitle: document.getElementById("dreamPackageTitle"),
    primum_package: document.getElementById("primum_package"),
    premiumPackageTitle: document.getElementById("premiumPackageTitle"),
    VIP_Package: document.getElementById("VIP_Package"),
    VIP_PackageTitle: document.getElementById("VIP_PackageTitle"),
    btnToPay: document.getElementById("btnToPay"),
    currentPackage: document.getElementById("currentPackage"),
}

if (sessionStorage.getItem("sum") == null)
    sessionStorage.setItem("sum", 0)
    // let sum = 0
if (sessionStorage.getItem("choseBasePackage") == null || sessionStorage.getItem("choseBasePackage") == "null")
    sessionStorage.setItem("choseBasePackage", false)
    // let choseBasePackage = false
if (sessionStorage.getItem("choseDreamPackage") == null || sessionStorage.getItem("choseDreamPackage") == "null")
    sessionStorage.setItem("choseDreamPackage", false)
    // let choseDreamPackage = false
if (sessionStorage.getItem("chosePrimumPackage") == null || sessionStorage.getItem("chosePrimumPackage") == "null")
    sessionStorage.setItem("chosePrimumPackage", false)
    // let chosePrimumPackage = false
if (sessionStorage.getItem("choseVIPPackage") == null || sessionStorage.getItem("choseVIPPackage") == "null")
    sessionStorage.setItem("choseVIPPackage", false)
    // let choseVIPPackage = false
let countClickOnBasePackage = 0
let countClickOnDreamPackage = 0
let countClickOnPrimumpackage = 0
let countClickOnVIPPackage = 0
dom.basePackageTitle.addEventListener("click", drowBasePackage)
dom.dreamPackageTitle.addEventListener("click", drowDreamPackage)
dom.premiumPackageTitle.addEventListener("click", drowPremiumPackage)
dom.VIP_PackageTitle.addEventListener("click", drowVIPPackage)

// החבילה הבסיסית
function drowBasePackage() {
    if (countClickOnBasePackage == 0) {
        countClickOnDreamPackage = 0
        dom.dream_package.classList.remove("currentPackageTitle")
        countClickOnPrimumpackage = 0
        dom.primum_package.classList.remove("currentPackageTitle")
        dom.base_package.classList.add("currentPackageTitle")
        dom.currentPackage.innerHTML = ''
        dom.currentPackage.innerHTML += `<img src="../../assets/תמונות/צילום מסך 2023-08-29 125811.png" width=100%>
            <div class="d-grid gap-2 col-6 mx-auto">
            <input type="button" value="I want it"  class="butn btn btn-secondary btn-lg" id="btnBuyBase_package">
            </div>`
        if (sessionStorage.getItem("choseBasePackage") == 'false')
            btnBuyBase_package.value = "I want it"
        else
            btnBuyBase_package.value = "To remove"
        btnBuyBase_package.onclick = () => {
            if (sessionStorage.getItem("choseBasePackage") == 'false') {
                sessionStorage.setItem("sum", Number(sessionStorage.getItem("sum")) + 1500)
                sessionStorage.setItem("choseBasePackage", true)
                btnBuyBase_package.value = "To remove"
                alert("You chose the base packege. Enjoy!!!")
            } else {
                sessionStorage.setItem("sum", Number(sessionStorage.getItem("sum")) - 1500)
                sessionStorage.setItem("choseBasePackage", false)
                btnBuyBase_package.value = "I want it"
                alert("You removed the base packege.")
            }
        }
        countClickOnBasePackage++;
    } else {
        dom.currentPackage.innerHTML = ''
        dom.base_package.classList.remove("currentPackageTitle")
        countClickOnBasePackage--
    }
}

//החבילה החלומית
function drowDreamPackage() {
    if (countClickOnDreamPackage == 0) {
        countClickOnBasePackage = 0
        dom.base_package.classList.remove("currentPackageTitle")
        countClickOnPrimumpackage = 0
        dom.primum_package.classList.remove("currentPackageTitle")
        dom.dream_package.classList.add("currentPackageTitle")
        dom.currentPackage.innerHTML = ''
        dom.currentPackage.innerHTML += `
        <img src="../../assets/תמונות/צילום מסך 2023-08-29 220107.png" width=100%>
        <br><input type="button" value="I want it" class="butn btn btn-secondary btn-lg" id="btnBuyDreamPackage">`
        if (sessionStorage.getItem("choseDreamPackage") == 'false')
            btnBuyDreamPackage.value = "I want it"
        else
            btnBuyDreamPackage.value = "To remove"
        btnBuyDreamPackage.onclick = (event) => {
            event.preventDefault()
            if (sessionStorage.getItem("choseDreamPackage") == 'false') {
                sessionStorage.setItem("choseDreamPackage", true)
                sessionStorage.setItem("sum", Number(sessionStorage.getItem("sum")) + 5000)
                btnBuyDreamPackage.value = "To remove"
                alert("You chose the dream packege. Enjoy!!!")
            } else {
                sessionStorage.setItem("choseDreamPackage", false)
                sessionStorage.setItem("sum", Number(sessionStorage.getItem("sum")) - 5000)
                btnBuyDreamPackage.value = "I want it"
                alert("You removed the dream packege.")
            }
        }
        countClickOnDreamPackage++;
    } else {
        dom.currentPackage.innerHTML = ''
        dom.dream_package.classList.remove("currentPackageTitle")
        countClickOnDreamPackage--
    }
}

//חבילת פרמיום 
function drowPremiumPackage() {
    if (countClickOnPrimumpackage == 0) {
        countClickOnBasePackage = 0
        dom.base_package.classList.remove("currentPackageTitle")
        countClickOnDreamPackage = 0
        dom.dream_package.classList.remove("currentPackageTitle")
        dom.primum_package.classList.add("currentPackageTitle")
        dom.currentPackage.innerHTML = ''
        dom.currentPackage.innerHTML += `
        <img src="../../assets/תמונות/צילום מסך 2023-08-29 211923.png" width=100%>
        <br><input type="button" value="I want it" class="butn btn btn-secondary btn-lg" id="btnBuyPrimumPackage">`
        if (sessionStorage.getItem("chosePrimumPackage") == 'false')
            btnBuyPrimumPackage.value = "I want it"
        else
            btnBuyPrimumPackage.value = "To remove"
        btnBuyPrimumPackage.onclick = () => {
            if (sessionStorage.getItem("chosePrimumPackage") == 'false') {
                sessionStorage.setItem("sum", Number(sessionStorage.getItem("sum")) + 7000)
                sessionStorage.setItem("chosePrimumPackage", true)
                btnBuyPrimumPackage.value = "To remove"
                alert("You chose the primum packege. Enjoy!!!")
            } else {
                sessionStorage.setItem("sum", Number(sessionStorage.getItem("sum")) - 7000)
                sessionStorage.setItem("chosePrimumPackage", false)
                btnBuyPrimumPackage.value = "I want it"
                alert("You removed the primum packege.")
            }
        }
        countClickOnPrimumpackage++;
    } else {
        dom.primum_package.classList.remove("currentPackageTitle")
        dom.currentPackage.innerHTML = ''
        countClickOnPrimumpackage--
    }
}

//חבילת VIP
function drowVIPPackage() {
   
    if(countClickOnVIPPackage==0){
            dom.VIP_Package.innerHTML += `<form id="frmVIPDetails">       
            <p>how long?</p> 
            <select id="chooseDays">             
                <option id="threeDays">3 days</option>
                <option id="fourDays">4 days</option>
                <option id="fiveDays">5 days</option>
            </select>
            <br>
            <p>whitch hotel?</p> 
            <select id="selectHotel">
                <option >select hotel</option>
            </select>
            <br>
            <br>
            <button type="submit" class="butn btn" id="btnSubmitFrmVIPDetails">OK</button>
            </form>`
            getType("hotel", getHotels)
            if(sessionStorage.getItem("choseVIPPackage")=='false'){
                chooseDays.innerHTML += `<option selected>select long</option>`
                // selectHotel.id += `<option selected>select hotel</option>`
            }
            else{
                chooseDays.innerHTML+=`<option selected>${sessionStorage.getItem("countDays")}</option>`
                // selectHotel.id+=`<option selected>${sessionStorage.getItem("hotelName")}</option>`
            }
            //כשהטופס של מספר הימים והמלון מאושר
            frmVIPDetails.onsubmit = (event) => {
                event.preventDefault()
                if (chooseDays.value == "select long" || selectHotel.value == "select hotel")
                    alert("select long and hotel")
                else {
                    sessionStorage.setItem("countDays",chooseDays.value)
                    sessionStorage.setItem("hotelName",selectHotel.value)
                    getType("Travel site", getTravelSiteAndContinueVIPPackage)
                }
            }
        countClickOnVIPPackage++
    }
    else {
        console.log("hgf")
        dom.VIP_Package.innerHTML=''
        dom.VIP_Package.innerHTML+=`<h3 id="VIP_PackageTitle">VIP Package</h3>
            <p> Do you want to plan a vacation that suits you exactly?</p>
            <p>Let's make your dream come true!</p>`
        countClickOnVIPPackage--
    }
}

function getHotels(hotels) {
    hotels.forEach(h => {
        const option = document.createElement("option")
        option.innerHTML = h.name
        selectHotel.appendChild(option)
    });
}

function getTravelSiteAndContinueVIPPackage(TravelSites) {
    if (sessionStorage.getItem("choseVIPPackage") == 'false') {
        sessionStorage.setItem("sitesArr", [])
    }
    chooseDays.value = sessionStorage.getItem("countDays")
    selectHotel.checked = sessionStorage.getItem("hotelName")
    let chooseDaysValue = chooseDays.value[0] * 3
    let hotelName = selectHotel.value
    dom.VIP_Package.innerHTML += `<div id="chooseTravelSites"><div>you have to choose ${chooseDaysValue} travel sites<div>`
    TravelSites.forEach(t => {
        if (sessionStorage.getItem("choseVIPPackage") == 'false') {
            dom.VIP_Package.innerHTML += `<div class="chbAndLbl col-lg-2 col-md-4 col-sm-6 col-xs-12">
                <input type="checkbox" id="${t.name}" class="sites">
                <label for="${t.name}">${t.name}</label></div><br>`
        } else {
            let ischecked = false
            let sitesArrFromSessionStorage = sessionStorage.getItem("sitesArr")
            if (sitesArrFromSessionStorage.indexOf(t.name) != -1) {
                ischecked = true
                dom.VIP_Package.innerHTML += `<div class="chbAndLbl col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <input type="checkbox" id="${t.name}" class="sites" checked>
                    <label for="${t.name}">${t.name}</label></div><br>`
            }
            if (!ischecked)
                dom.VIP_Package.innerHTML += `<div class="chbAndLbl col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <input type="checkbox" id="${t.name}" class="sites">
                    <label for="${t.name}">${t.name}</label></div><br>`
        }
    })
    if (sessionStorage.getItem("choseVIPPackage") == 'false') {
        dom.VIP_Package.innerHTML += `<input type="checkbox" id="chbLeader">
            <label for="chbLeader" id="lblForChbLeader">I want leader</label></div><br><br>
            <input type="button" value="I want it" class="butn btn btn-secondary btn-lg" id="btnBuyVIPPackage">`
        sessionStorage.setItem("isChbLeader", false)
    } else {
        if (sessionStorage.getItem("isChbLeader") == 'false')
            dom.VIP_Package.innerHTML += `<input type="checkbox" id="chbLeader">
                <label for="chbLeader" id="lblForChbLeader">I want leader</label></div><br>`
        else
            dom.VIP_Package.innerHTML += `<input type="checkbox" id="chbLeader" checked>
                <label for="chbLeader" id="lblForChbLeader">I want leader</label></div><br>`
        dom.VIP_Package.innerHTML += `<br>
            <input type="button" value="To remove" class="butn btn btn-secondary btn-lg" id="btnBuyVIPPackage">`
    }
    btnBuyVIPPackage.onclick = (event) => {
        if (btnBuyVIPPackage.value == "I want it") {
            event.preventDefault()
            selectHotel.value = hotelName
            chooseDays.value = chooseDaysValue / 3 + " days"
            const sites = document.querySelectorAll(".sites")
            let currentSitesArr = []
            sites.forEach(s => {
                if (s.checked)
                    currentSitesArr.push(s.id)
            })
            if (currentSitesArr.length != chooseDaysValue)
                alert("tou nees to choose " + chooseDaysValue + " sites")
            else {
                sessionStorage.setItem("sitesArr", currentSitesArr)
                sessionStorage.setItem("sum", Number(sessionStorage.getItem("sum")) + 3000 * (chooseDaysValue) / 3)
                if (chbLeader.checked) {
                    sessionStorage.setItem("sum", Number(sessionStorage.getItem("sum")) + 300 * (chooseDaysValue) / 3)
                    sessionStorage.setItem("isChbLeader", true)
                }
                sessionStorage.setItem("choseVIPPackage", true)
                alert("you chose the VIP packege. enjoy!!!")
            }
        } else {
            sessionStorage.setItem("choseVIPPackage", false)
            alert("You removed the VIP packege.")
        }
    }
}

dom.btnToPay.onclick = (event) => {
    event.preventDefault()
    dom.inputCountJoiners.style.visibility = "visible"
    dom.inputCurrentUserEmail.style.visibility = "visible"
    let allOK = true
    if (sessionStorage.getItem("sum") == '0') {
        allOK = false
        alert("choose package!")
    }
    if (!(inputCountJoiners.value > 0 && inputCountJoiners.value < 26)) {
        allOK = false
        alert("choose amount joiners betweeb 1 to 25")
    }
    if (localStorage.getItem(dom.inputCurrentUserEmail.value) == null) {
        allOK = false
        alert("the email that you wrote is wrong, or you havn't yet registrated")
    }
    if (allOK) {
        let finallyPackages = [];
        if (sessionStorage.getItem("choseBasePackage") == 'true')
            finallyPackages.push("base package")
        if (sessionStorage.getItem("choseDreamPackage") == 'true')
            finallyPackages.push("dream package")
        if (sessionStorage.getItem("chosePrimumPackage") == 'true')
            finallyPackages.push("primum package")
        if (sessionStorage.getItem("choseVIPPackage") == 'true')
            finallyPackages.push("VIP Package")
        sessionStorage.setItem("currentEmail", localStorage.getItem(dom.inputCurrentUserEmail.value));
        sessionStorage.setItem("finnalyPackegas", JSON.stringify(finallyPackages))
        sessionStorage.setItem("countJoiners", inputCountJoiners.value)
        window.location.href = "../invoice/invoice.html"
    }
}
if (sessionStorage.getItem("note") == null || sessionStorage.getItem("note") == "false") {
    setTimeout(function() {
        alert("Please Note! You must be registered to the website before ordering a package");
    }, 3000);
    sessionStorage.setItem("note", true)
}