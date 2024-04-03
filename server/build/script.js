function validateLogin() {
  var inputUsername = document.getElementById("inputEmail").value;
  var inputPassword = document.getElementById("inputPassword").value;
  var alertPlaceholder = document.getElementById("alertPlaceholder");

  var staticUsers = [
    { username: "suhail@tworks.in", password: "suhail" },
    { username: "rahman@tworks.in", password: "rahman" },
  ];

  // Check if the entered credentials match any of the user objects in the staticUsers array
  var userExists = staticUsers.some(function (user) {
    return user.username === inputUsername && user.password === inputPassword;
  });

  // Function to display Bootstrap alerts
  function showAlert(message, type) {
    // Clear existing alerts
    alertPlaceholder.innerHTML = "";

    var wrapper = document.createElement("div");
    wrapper.innerHTML =
      '<div class="alert alert-' +
      type +
      ' alert-dismissible fade show" role="alert">' +
      message +
      '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';

    alertPlaceholder.append(wrapper);

    // Automatically close the alert after 3 seconds (3000 ms)
    setTimeout(function () {
      alertPlaceholder.innerHTML = "";
    }, 3000);
  }

  if (userExists) {
    // Store the login credentials in local storage
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ username: inputUsername, password: inputPassword })
    );

    // Show success alert
    showAlert("Login Successfully", "success");

    // Optionally redirect or update UI
    window.location = "./home.html"; // Uncomment to redirect
  } else {
    showAlert("Invalid Email or Password", "danger");
  }
}
