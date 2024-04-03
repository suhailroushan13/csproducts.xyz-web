document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("emailForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();

      var data = {
        recipients: [document.getElementById("recipients").value],
        subject: document.getElementById("subject").value,
        body: document.getElementById("body").value,
        cc: [document.getElementById("cc").value],
        replyTo: document.getElementById("replyTo").value,
      };

      try {
        const response = await axios.post(
          "https://mail.suhailroushan.in/api/email/send",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Success:", response.data);
        alert("Email sent successfully");
      } catch (error) {
        console.error("Error:", error);
        alert("Error sending email");
      }
    });
});
