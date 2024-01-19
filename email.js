document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the form
    var form = document.getElementById('email-form');
    form.addEventListener('submit', async function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Capture the email value
        var email = document.getElementById('Email-4').value;

        // Log the email to the console
        console.log('Email for early access:', email);

        let msg = `Email : ${email}`;

        // Prepare the data to be sent
        var data = {
            recipients: ["suhail@code.in"], // Use the captured email as the recipient
            subject: "📩 Email From csproducts.xyz",
            textBody: msg
        };

        try {
            const response = await axios.post('https://mail.suhailroushan.in/api/email/send', data);
            console.log('Email sent successfully:', response);

            // Redirect to the specified URL after successful email sending
            window.location.href = 'https://csproducts.xyz/form.html';

        } catch (error) {
            console.error('Error sending email:', error);
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('wf-form-Footer-Subscribe-Form');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        var email = document.getElementById('Email-4').value;
        console.log('Email for early access:', email);

        // Capture the email value
        var email = document.getElementById('Email-4').value;

        // Log the email to the console
        console.log('Email for early access:', email);

        let msg = `Email : ${email}`

        // Prepare the data to be sent
        var data = {
            recipients: ["suhail@code.in"], // Use the captured email as the recipient
            subject: "📩 Email From csproducts.xyz",
            textBody: msg
        };


        try {
            const response = await axios.post('https://mail.suhailroushan.in/api/email/send', data);
            console.log('Email sent successfully:', response);
            window.location.href = 'https://csproducts.xyz/form.html';

        } catch (error) {
            console.error('Error sending email:', error);
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('wf-form-Company-Inquiry-Form');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Capture form values
        var companyName = document.getElementById('company-name').value;
        var teamSize = document.getElementById('team-size').value;
        var role = document.getElementById('role').value;
        var additionalInfo = document.getElementById('additional-info').value;
        var email = document.getElementById('email').value

        // Log the captured values to the console (for debugging purposes)
        console.log('Company Name:', companyName);
        console.log('Team Size:', teamSize);
        console.log('Role:', role);
        console.log('Additional Info:', additionalInfo);

        // Capture the email value from the form
        var email = document.getElementById('email').value;

        // Now include this email in your message string
        let msg = `Company Name: ${companyName}\nEmail: ${email}\nTeam Size: ${teamSize}\nRole: ${role}\nAdditional Info: ${additionalInfo}`;


        // Prepare the data to be sent
        var data = {
            recipients: ["suhail@code.in"],
            subject: "📩 New Company Inquiry from csproducts.xyz",
            textBody: msg
        };

        try {
            const response = await axios.post('https://mail.suhailroushan.in/api/email/send', data);
            console.log('Email sent successfully:', response);
            window.location.href = ""; // Redirect to a success page or URL if needed
        } catch (error) {
            console.error('Error sending email:', error);
        }
    });
});
