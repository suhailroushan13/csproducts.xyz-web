document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("wf-form-Footer-Subscribe-Form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    var email = document.getElementById("Email-5").value;

    let msg = `Email : ${email}`;

    // Prepare the data to be sent
    var data = {
      recipients: ["suhail@csprojects.xyz"], // Use the captured email as the recipient
      subject: "📩 Email From csprojects.xyz",
      textBody: msg,
    };
    console.log(data);

    try {
      const response = await axios.post(
        "https://mail.suhailroushan.in/api/email/send",
        data
      );
      console.log("Email sent successfully:", response);
      window.location.href = "https://csprojects.xyz/form.html";
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Event listener for the email form submission
  var emailForm = document.getElementById("email-form");
  emailForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    var email = document.getElementById("Email-4").value;
    console.log("Email for early access:", email);
    let msg = `Email: ${email}`;
    var data = {
      recipients: ["suhail@csprojects.xyz"],
      subject: "📩 Email From csprojects.xyz",
      textBody: msg,
    };
    try {
      const response = await axios.post(
        "https://mail.suhailroushan.in/api/email/send",
        data
      );
      console.log("Email sent successfully:", response);
      window.location.href = "https://csprojects.xyz/form.html";
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
});
