function validateForm() {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let format = /\S+@\S+/
    if(email.value.match(format) && (email.value != null || email.value != "")) {
        email.className = ""
        if(password.value.length >= 10) {
            password.className = ""
            return true
        } else {
            alert("Passsword is not 10 or more characters.")
            password.className = "failed"
            return false
        }
    } else {
        alert("Email is invalid.")
        email.className = "failed"
        return false
    }
} 