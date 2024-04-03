document.addEventListener("DOMContentLoaded", () => {
  var staticUsers = [
    { username: "suhail@tworks.in", password: "suhail" },
    { username: "rahman@tworks.in", password: "rahman" },
  ];

  // Check if the user is logged in based on the stored credentials
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (!loggedInUser) {
    // If not logged in, redirect to the login page
    window.location.href = "/"; // Change the URL to your login page
    return; // Stop further execution
  }

  // Parse the stored user object
  const storedUser = JSON.parse(loggedInUser);

  // Check if the stored user credentials match any static user
  const userExists = staticUsers.some(function (user) {
    return (
      user.username === storedUser.username &&
      user.password === storedUser.password
    );
  });

  if (!userExists) {
    // If the stored credentials don't match any static user, redirect to the login page
    window.location.href = "/"; // Change the URL to your login page
    return; // Stop further execution
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.querySelector(".logout-btn");

  logoutBtn.addEventListener("click", function () {
    localStorage.clear();
    // Redirect to the logout page or perform any other logout action
    window.location.href = "/";
  });
});

function createMessageTextareaHTML(message) {
  // Generate the textarea HTML as a string
  const textareaHTML = `<textarea rows="5" cols="30" readonly="true">${message}</textarea>`;
  return textareaHTML;
}

function filterTable() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase();
  const table = document.getElementById("dataTable");
  const tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (let i = 0; i < tr.length; i++) {
    let tds = tr[i].getElementsByTagName("td");
    let rowContainsFilterText = false; // Flag to check if any cell in the row contains the filter text

    // Loop through all cells of the current row
    for (let j = 0; j < tds.length; j++) {
      let td = tds[j];
      if (td) {
        const txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          rowContainsFilterText = true; // The current cell contains the filter text
          break; // No need to check the rest of the cells in the row
        }
      }
    }

    // If any cell in the row contains the filter text, show it; otherwise, hide it
    if (rowContainsFilterText) {
      tr[i].style.display = "";
    } else {
      // This check ensures we do not attempt to hide the table header
      if (tr[i].getElementsByTagName("th").length === 0) {
        tr[i].style.display = "none";
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("dataTable");
  const ths = table.querySelectorAll("th");
  const tbody = table.querySelector("tbody");

  ths.forEach((th) => {
    const arrowUp = document.createElement("span");
    arrowUp.innerHTML = "&#9650;"; // Upward arrow
    arrowUp.classList.add("arrow", "up");

    const arrowDown = document.createElement("span");
    arrowDown.innerHTML = "&#9660;"; // Downward arrow
    arrowDown.classList.add("arrow", "down");

    th.appendChild(arrowUp);
    th.appendChild(arrowDown);

    th.addEventListener("click", () => {
      const index = th.cellIndex;
      const rows = Array.from(tbody.querySelectorAll("tr"));

      rows.sort((a, b) => {
        const aValue = a.cells[index].textContent.trim();
        const bValue = b.cells[index].textContent.trim();
        return aValue.localeCompare(bValue);
      });

      if (th.classList.contains("sorted")) {
        rows.reverse();
        th.classList.toggle("reversed");
      } else {
        ths.forEach((header) => header.classList.remove("sorted", "reversed"));
        th.classList.add("sorted");
      }

      tbody.innerHTML = "";
      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});

// Function to make API call and populate table
async function fetchDataAndPopulateTable() {
  try {
    const response = await axios.get(
      "https://sandeep.suhail.app/api/email/getall"
    );
    const responseData = response.data;
    populateTable(responseData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function populateTable(data) {
  // Sort data by createdAt in descending order (latest first)
  data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const tableBody = document.getElementById("paymentTableBody");
  tableBody.innerHTML = ""; // Clear existing rows

  // Update the total customers count
  const totalCustomers = data.length;
  document.getElementById(
    "totalCustomers"
  ).innerText = `Total Visitors: ${totalCustomers}`;

  data.forEach((item) => {
    const name = item.textBody.match(/Name: (.*?)(\n|$)/)
      ? item.textBody.match(/Name: (.*?)(\n|$)/)[1]
      : "N/A";
    const email = item.textBody.match(/Email: (.*?)(\n|$)/)
      ? item.textBody.match(/Email: (.*?)(\n|$)/)[1]
      : "N/A";
    const phone = item.textBody.match(/Phone: (.*?)(\n|$)/)
      ? item.textBody.match(/Phone: (.*?)(\n|$)/)[1]
      : "N/A";
    const country = item.textBody.match(/Country: (.*?)(\n|$)/)
      ? item.textBody.match(/Country: (.*?)(\n|$)/)[1]
      : "N/A";
    const message = item.textBody.match(/Message: (.*?)(\n|$)/)
      ? item.textBody.match(/Message: (.*?)(\n|$)/)[1]
      : "N/A";

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${createMailToLink(email)}</td>
      <td>${createWhatsAppLink(phone)}</td>
      <td>${country}</td>
      <td>${createMessageTextareaHTML(message)}</td>
      <td>${formatDate(item.createdAt)}</td>
    `;
    tableBody.appendChild(row);
  });
}

function createWhatsAppLink(phoneNumber) {
  // Remove spaces and plus sign from the phone number
  const cleanNumber = phoneNumber.replace(/\s+/g, "").replace("+", "");

  // Create the WhatsApp link
  const whatsappLink = `https://api.whatsapp.com/send?phone=${cleanNumber}`;

  // Return an anchor tag with the href set to the WhatsApp link
  return `<a href="${whatsappLink}" target="_blank">${phoneNumber}</a>`;
}

function createMailToLink(emailAddress) {
  // Create the mailto link
  const mailtoLink = `mailto:${emailAddress}`;

  // Return an anchor tag with the href set to the mailto link
  return `<a href="${mailtoLink}">${emailAddress}</a>`;
}

function formatDate(dateString) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const hours24 = date.getHours();
  const hours = hours24 % 12 || 12; // Convert 24h to 12h format and handle midnight
  const minutes = date.getMinutes();
  const ampm = hours24 < 12 ? "AM" : "PM";

  // Add suffix to day
  let daySuffix;
  switch (day) {
    case 1:
    case 21:
    case 31:
      daySuffix = "st";
      break;
    case 2:
    case 22:
      daySuffix = "nd";
      break;
    case 3:
    case 23:
      daySuffix = "rd";
      break;
    default:
      daySuffix = "th";
  }

  // Format minutes to ensure leading zero
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${day}${daySuffix} ${monthNames[monthIndex]} ${year} ${hours}:${formattedMinutes} ${ampm}`;
}

// Call function to fetch data and populate table
fetchDataAndPopulateTable();
