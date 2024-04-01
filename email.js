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

document.addEventListener("DOMContentLoaded", function () {
  // Event listener for the Company Inquiry Form submission
  var companyInquiryForm = document.getElementById(
    "wf-form-Company-Inquiry-Form"
  );
  companyInquiryForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    var companyName = document.getElementById("company-name").value;
    var registrationType = document.getElementById("registration-type").value; // New select element
    var email = document.getElementById("email").value;
    var teamSize = document.getElementById("team-size").value;
    var role = document.getElementById("role").value;
    var additionalInfo = document.getElementById("additional-info").value;

    console.log(
      "Company Name:",
      companyName,
      "Registration Type:",
      registrationType
    );
    let msg = `Company Name: ${companyName}\nRegistration Type: ${registrationType}\nEmail: ${email}\nTeam Size: ${teamSize}\nRole: ${role}\nAdditional Info: ${additionalInfo}`;
    var data = {
      recipients: ["suhail@csprojects.xyz"],
      subject: "📩 New Company Inquiry from csprojects.xyz",
      textBody: msg,
    };
    try {
      const response = await axios.post(
        "https://mail.suhailroushan.in/api/email/send",
        data
      );
      console.log("Email sent successfully:", response);
      window.location.href = "https://csprojects.xyz/"; // Updated redirection URL
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
});
