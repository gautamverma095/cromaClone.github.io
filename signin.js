let data = JSON.parse(localStorage.getItem("cromaUserData"))

    document.getElementById("input").addEventListener("keypress", showAlert)
    let show = document.getElementById("show");
    
    let empty = document.getElementById("empty");

    function showAlert(){
        show.textContent = ""
        empty.textContent = ""
    }
    
    function signIn(){

        let input = document.getElementById("input").value
        let otpData = JSON.parse(localStorage.getItem("otpData")) || []
        
        
        if (input.length > 0 && input.length<10){
            empty.textContent = ""
            show.textContent = "Incorrect number,Please enter a 10 digit mobile number or email to receive your OTP"
        }
        else if (input.length < 1){

            show.textContent = ""
            empty.textContent = "This field is required"
        }
        else{
            var count  = 0;

            for(var i = 0; i<data.length; i++){
                if(input == data[i].mobile || input == data[i].email){

                    let otp = Math.floor(1000 + Math.random()*9000)

                    let otp_data = {
                        mobile:input,
                        otp:otp
                    }

                    otpData.push(otp_data)

                    
                    window.location.href = "./otp.html"

                    //alert(`${otp} is your OTP to register with Croma. This OTP is valid for 15 minutes`)

                    count++
                }
            }

            if(count == 0){
                window.location.href = "./signup.html"
            }
        }
        
        localStorage.setItem("otpData", JSON.stringify(otpData))

        
        
    }