/*
  Step-by-Step Explanation of Header Section Rendering

  This code dynamically renders the header section of the page based on the
  user's role, session status, and available actions (such as login, logout,
  or role-switching).
*/


// 1. Define the renderHeader Function
function renderHeader() {
  // 2. Select the Header Div
  // The headerDiv variable retrieves the HTML element with the ID 'header'
  const headerDiv = document.getElementById("header");

  if (!headerDiv) {
    console.error('Header element not found');
    return;
  }

  // 3. Check if the Current Page is the Root Page
  // If true, remove user session data and render basic header
  if (window.location.pathname.endsWith("/") || window.location.pathname.endsWith("/index.html")) {
    localStorage.removeItem("userRole");
    headerDiv.innerHTML = `
      <header class="header">
        <div class="logo-section">
          <img src="../assets/images/logo/logo.png" alt="Hospital CRM Logo" class="logo-img">
          <span class="logo-title">Hospital CMS</span>
        </div>
      </header>`;
    return;
  }

  // 4. Retrieve the User's Role and Token from LocalStorage
  const role = localStorage.getItem("userRole");
  const token = localStorage.getItem("token");

  // 5. Initialize Header Content
  // Start with basic header HTML (logo section)
  let headerContent = `<header class="header">
    <div class="logo-section">
      <img src="../assets/images/logo/logo.png" alt="Hospital CRM Logo" class="logo-img">
      <span class="logo-title">Hospital CMS</span>
    </div>
    <nav>`;

  // 6. Handle Session Expiry or Invalid Login
  // If user has a role but no token, session is expired
  if ((role === "loggedPatient" || role === "admin" || role === "doctor") && !token) {
    localStorage.removeItem("userRole");
    alert("Session expired or invalid login. Please log in again.");
    window.location.href = "/";
    return;
  }

  // 7. Add Role-Specific Header Content
  // Different actions or buttons based on user's role

  if (role === "admin") {
    // Admin: Can add a doctor and log out
    headerContent += `
      <button id="addDocBtn" class="adminBtn" onclick="openModal('addDoctor')">Add Doctor</button>
      <a href="#" onclick="logout()">Logout</a>`;

  } else if (role === "doctor") {
    // Doctor: Has a home button and log out
    headerContent += `
      <button class="adminBtn" onclick="selectRole('doctor')">Home</button>
      <a href="#" onclick="logout()">Logout</a>`;

  } else if (role === "patient") {
    // Patient: Shows login and signup buttons
    headerContent += `
      <button id="patientLogin" class="adminBtn">Login</button>
      <button id="patientSignup" class="adminBtn">Sign Up</button>`;

  } else if (role === "loggedPatient") {
    // LoggedPatient: Has home, appointments, and logout options
    headerContent += `
      <button id="home" class="adminBtn" onclick="window.location.href='/pages/loggedPatientDashboard.html'">Home</button>
      <button id="patientAppointments" class="adminBtn" onclick="window.location.href='/pages/patientAppointments.html'">Appointments</button>
      <a href="#" onclick="logoutPatient()">Logout</a>`;
  }

  // 9. Close the Header Section
  headerContent += `
    </nav>
  </header>`;

  // 10. Render the Header Content
  // Insert the dynamically generated headerContent into the headerDiv element
  headerDiv.innerHTML = headerContent;

  // 11. Attach Event Listeners to Header Buttons
  attachHeaderButtonListeners();
}

// Helper Functions

// 13. attachHeaderButtonListeners
// Adds event listeners to login buttons for "Doctor" and "Admin" roles
function attachHeaderButtonListeners() {
  // Patient Login Button
  const patientLoginBtn = document.getElementById("patientLogin");
  if (patientLoginBtn) {
    patientLoginBtn.addEventListener("click", () => {
      openModal("patientLogin");
    });
  }

  // Patient Signup Button
  const patientSignupBtn = document.getElementById("patientSignup");
  if (patientSignupBtn) {
    patientSignupBtn.addEventListener("click", () => {
      openModal("patientSignup");
    });
  }

  // Add Doctor Button (for admin)
  const addDocBtn = document.getElementById("addDocBtn");
  if (addDocBtn) {
    addDocBtn.addEventListener("click", () => {
      openModal("addDoctor");
    });
  }
}

// 14. logout Function
// Removes user session data and redirects the user to the root page
function logout() {
  // Remove session data
  localStorage.removeItem("userRole");
  localStorage.removeItem("token");

  // Show logout message
  alert("You have been logged out successfully.");

  // Redirect to root page
  window.location.href = "/";
}

// 15. logoutPatient Function
// Removes the patient's session token and redirects to the patient dashboard
function logoutPatient() {
  // Remove session data
  localStorage.removeItem("userRole");
  localStorage.removeItem("token");

  // Show logout message
  alert("You have been logged out successfully.");

  // Redirect to patient dashboard or login page
  window.location.href = "/";
}

// Make functions globally accessible for onclick handlers
window.logout = logout;
window.logoutPatient = logoutPatient;

// 16. Render the Header
// Call renderHeader() to initialize the header rendering process when the page loads
renderHeader();