function sendMail(contactForm) {
    emailjs.send("service_ek62ji9","letsQuiz", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.feedback.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;  // To block from loading a new page
}
