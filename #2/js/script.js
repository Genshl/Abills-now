//змінні, які ми берем з форми 
var modalNewDescription = "modalNewDescription",
    modalNewPosition = "modalNewPosition",
    modalNewFirmware = "modalNewFirmware",
    modalNewAudit = "modalNewAudit",
    modalNewIP = "modalNewIP",
    modalNewMAC = "modalNewMAC",
    modalNewHiVlan = "modalNewHiVlan",
    modalNewLoVlan = "modalNewLoVlan",
    modalNewAddress = "modalNewAddress";

//змінні, куди ми будем заносити нові данні
var description = "description",
    position = "position",
    firmware = "firmware",
    audit = "audit",
    IP = "IP",
    MAC = "MAC",
    hiVlan = "hiVlan",
    loVlan = "loVlan",
    address = "address";

//функція для зміни даних користувача
function change() {
    document.getElementById(description).innerHTML = document.getElementById(modalNewDescription).value;
    document.getElementById(position).innerHTML = document.getElementById(modalNewPosition).value;
    document.getElementById(firmware).innerHTML = document.getElementById(modalNewFirmware).value;
    document.getElementById(audit).innerHTML = document.getElementById(modalNewAudit).value;
    document.getElementById(IP).innerHTML = document.getElementById(modalNewIP).value;
    document.getElementById(MAC).innerHTML = document.getElementById(modalNewMAC).value;
    document.getElementById(hiVlan).innerHTML = document.getElementById(modalNewHiVlan).value;
    document.getElementById(loVlan).innerHTML = document.getElementById(modalNewLoVlan).value;
    document.getElementById(address).innerHTML = document.getElementById(modalNewAddress).value;
}
console.log('llllll');