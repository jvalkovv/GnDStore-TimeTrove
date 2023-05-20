function sendEmail() {
    let email = document.getElementById("email").value;
    let firstname = document.getElementById("fname").value;
    let message = document.getElementById("msg").value;

    Email.send({
      Host: "smtp.zoho.com",
      SecureToken: "YeUAj76aMnB3Q",
      To: "support@gndstore.sytes.net",
      From: email,
      Subject: "Subject",
      Body:
        "First Name: " +
        firstname +
        "<br>Email: " +
        email +
        "<br>Message: " +
        message,
    }).then((message) => alert("Email sent successfully"));
  }