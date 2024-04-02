document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("my-canvas");

  // Initialize confetti with defaults
  const defaults = {
    spread: 180,
    particleCount: 4,
    startVelocity: 35,
  };

  // Determine if the user is on mobile
  const isMobile = window.innerWidth < 768; // This threshold can be adjusted
  console.log(isMobile);

  // Adjust scalar based on device type
  const scalarValue = isMobile ? 5 : 10;

  confetti.create(canvasEl, { resize: true }).then((confettiInstance) => {
    // Function to trigger confetti
    const triggerConfetti = (x, y) => {
      confettiInstance({
        ...defaults,
        scalar: scalarValue,
        origin: { x, y }, // Use provided position for origin
        particleCount: 1,
        shapes: ["image"], // For custom images
        shapeOptions: {
          image: {
            src: "https://i.imgur.com/EaDGCYq.png",
            replaceColor: false,
            width: 100,
            height: 100,
          },
        },
      });
    };

    // Trigger confetti at the center of the screen on page load
    triggerConfetti(0.5, 0.5);

    // Trigger confetti on mouse clicks
    document.addEventListener("mousedown", (e) => {
      // Calculate click position normalized to [0, 1]
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      triggerConfetti(x, y);
    });
  });
});

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
