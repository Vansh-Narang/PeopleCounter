
let errorpara = document.getElementById("error")
console.log(errorpara)
function purchase() {
    console.log("Bought")
    errorpara.textContent = "Something went wrong"
}