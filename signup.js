var cromaUsers = JSON.parse(localStorage.getItem("cromaUserData")) || []

    let otpData = JSON.parse(localStorage.getItem("otpData")) || []

    document.getElementById("mobile").addEventListener("keypress", showAlert)

    let show = document.getElementById("show");
    
    let empty = document.getElementById("empty");

    function showAlert(){
        show.textContent = ""
        empty.textContent = ""
    }

    //console.log(cromaUsers)

    function signUp(){
        let input = document.getElementById("mobile").value
        
        if (input.length > 0 && input.length<10){
            empty.textContent = ""
            show.textContent = "Incorrect number,Please enter a 10 digit mobile number or email to receive your OTP"
        }
        else if (input.length < 1){

            show.textContent = ""
            empty.textContent = "This field is required"
        }
        else{
            let obj = {
                mobile: input,
                email: "dummy@email.com"
            }
            cromaUsers.push(obj)

            let otp = Math.floor(1000 + Math.random()*9000)

            let otp_data = {
                mobile:input,
                otp:otp
            }

            otpData.push(otp_data)

            alert(`${otp} is your OTP to register with Croma. This OTP is valid for 15 minutes`)

            window.location.href = "otp.html"


        }
        

        localStorage.setItem("cromaUserData", JSON.stringify(cromaUsers))

        localStorage.setItem("otpData", JSON.stringify(otpData))
        
    }