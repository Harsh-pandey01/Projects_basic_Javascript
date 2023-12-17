let calculate = document.getElementById("get-age") 
let dob = document.getElementById("birth-date")
let current = document.getElementById("current-date")
let output = document.getElementById('out')


calculate.onclick = function(){
    let birthYear = new Date(dob.value).getFullYear()
    let currentYear = new Date(current.value).getFullYear()
    let birthMonth = new Date(dob.value).getMonth()
    let currentMonth = new Date(current.value).getMonth()
    let birthdate = new Date(dob.value).getDate()
    let currentDate = new Date().getDate()

    let years = currentYear - birthYear
    let months = Math.abs(currentMonth-birthMonth)

    if((currentYear < birthYear) || ((currentYear === birthYear) && (currentMonth < birthMonth))){
         
        output.innerHTML = "Invalid Inputs"
    }else{
        output.innerHTML = `Your age is  ${years} years and
    ${months} months`
    }

    
}