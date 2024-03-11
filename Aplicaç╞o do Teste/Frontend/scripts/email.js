function sendEmail() {
    
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_f67b6hd", "template_h51xoxl", parms).then(alert("Email sent!"))

}