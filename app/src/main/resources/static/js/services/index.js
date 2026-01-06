/*
  Role Selection and Login Handler
  This file manages the login functionality for Admin and Doctor roles
*/

// Import the openModal function to handle showing login popups/modals
import { openModal, closeModal } from '../components/modals.js';

// Import the base API URL from the config file
import { API_BASE_URL } from '../config/config.js';

// Import selectRole function for role-based navigation
import { selectRole } from '../render.js';

// Make openModal and closeModal globally accessible for onclick handlers
window.openModal = openModal;
window.closeModal = closeModal;

// Define constants for the admin and doctor login API endpoints using the base URL
const ADMIN_API = `${API_BASE_URL}/admin/login`;
const DOCTOR_API = `${API_BASE_URL}/doctor/login`;
const PATIENT_API = `${API_BASE_URL}/patient/login`;

// Use the window.onload event to ensure DOM elements are available after page load
window.onload = function() {
  // Select the "adminLogin" and "doctorLogin" buttons using getElementById
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  const doctorLoginBtn = document.getElementById('doctorLoginBtn');
  const patientLoginBtn = document.getElementById('patientLoginBtn');

  // If the admin login button exists:
  if (adminLoginBtn) {
    // Add a click event listener that calls openModal('adminLogin') to show the admin login modal
    adminLoginBtn.addEventListener('click', () => {
      openModal('adminLogin');
    });
  }

  // If the doctor login button exists:
  if (doctorLoginBtn) {
    // Add a click event listener that calls openModal('doctorLogin') to show the doctor login modal
    doctorLoginBtn.addEventListener('click', () => {
      openModal('doctorLogin');
    });
  }

  // If the patient login button exists:
  if (patientLoginBtn) {
    // Add a click event listener that calls openModal('patientLogin') to show the patient login modal
    patientLoginBtn.addEventListener('click', () => {
      openModal('patientLogin');
    });
  }

  // Setup close modal button
  const closeModalBtn = document.getElementById('closeModal');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      closeModal();
    });
  }

  // Close modal when clicking outside of it
  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }
};

// Define a function named adminLoginHandler on the global window object
// This function will be triggered when the admin submits their login credentials
window.adminLoginHandler = async function() {
  // Step 6: Wrap everything in a try-catch to handle network or server errors
  try {
    // Step 1: Get the entered username and password from the input fields
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    // Validate that fields are not empty
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    // Step 2: Create an admin object with these credentials
    const admin = {
      username: username,
      password: password
    };

    // Step 3: Use fetch() to send a POST request to the ADMIN_API endpoint
    const response = await fetch(ADMIN_API, {
      // Set method to POST
      method: 'POST',
      // Add headers with 'Content-Type: application/json'
      headers: {
        'Content-Type': 'application/json'
      },
      // Convert the admin object to JSON and send in the body
      body: JSON.stringify(admin)
    });

    // Parse the JSON response to get the token
    const data = await response.text();
    // Step 4: If the response is successful:
    if (response.ok) {
      // Store the token in localStorage
      localStorage.setItem('token', data);

      // Call selectRole('admin') to proceed with admin-specific behavior
      selectRole('admin');

      // Optional: Show success message
      alert('Admin login successful!');

    } else {
      // Step 5: If login fails or credentials are invalid:
      // Show an alert with an error message
      alert('Invalid credentials! Please check your username and password.');
    }

  } catch (error) {
    // Step 6: Show a generic error message if something goes wrong
    console.error('Admin login error:', error);
    alert('An error occurred during login. Please try again later.');
  }
};

// Define a function named doctorLoginHandler on the global window object
// This function will be triggered when a doctor submits their login credentials
window.doctorLoginHandler = async function() {
  // Step 6: Wrap in a try-catch block to handle errors gracefully
  try {
    // Step 1: Get the entered email and password from the input fields
    const email = document.getElementById('doctorEmail').value;
    const password = document.getElementById('doctorPassword').value;

    // Validate that fields are not empty
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    // Step 2: Create a doctor object with these credentials
    const doctor = {
      email: email,
      password: password
    };

    // Step 3: Use fetch() to send a POST request to the DOCTOR_API endpoint
    const response = await fetch(DOCTOR_API, {
      // Set method to POST
      method: 'POST',
      // Include headers with 'Content-Type: application/json'
      headers: {
        'Content-Type': 'application/json'
      },
      // Convert the doctor object to JSON and send in the body
      body: JSON.stringify(doctor)
    });

    // Step 4: If login is successful:
    if (response.ok) {
      // Parse the JSON response to get the token
      const data = await response.text();
      console.log("doctorLoginHandler  "+data)
      // Store the token in localStorage
      localStorage.setItem('token', data);

      // Call selectRole('doctor') to proceed with doctor-specific behavior
      selectRole('doctor');

      // Optional: Show success message
      alert('Doctor login successful!');
    } else {
      // Step 5: If login fails:
      // Show an alert for invalid credentials
      alert('Invalid credentials! Please check your email and password.');
    }

  } catch (error) {
    // Step 6: Log the error to the console
    console.error('Doctor login error:', error);
    // Show a generic error message
    alert('An error occurred during login. Please try again later.');
  }
};

window.patientLoginHandler = async function() {
  // Step 6: Wrap in a try-catch block to handle errors gracefully
  try {
    // Step 1: Get the entered email and password from the input fields
    const email = document.getElementById('patientEmail').value;
    const password = document.getElementById('patientPassword').value;

    // Validate that fields are not empty
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    // Step 2: Create a doctor object with these credentials
    const patient = {
      email: email,
      password: password
    };

    // Step 3: Use fetch() to send a POST request to the DOCTOR_API endpoint
    const response = await fetch(PATIENT_API, {
      // Set method to POST
      method: 'POST',
      // Include headers with 'Content-Type: application/json'
      headers: {
        'Content-Type': 'application/json'
      },
      // Convert the doctor object to JSON and send in the body
      body: JSON.stringify(patient)
    });

    // Step 4: If login is successful:
    if (response.ok) {
      // Parse the JSON response to get the token
      const data = await response.text();
      console.log("patientLoginHandler  "+data)
      // Store the token in localStorage
      localStorage.setItem('token', data);

      // Call selectRole('doctor') to proceed with doctor-specific behavior
      selectRole('patient');

      // Optional: Show success message
      alert('Patient login successful!');
    } else {
      // Step 5: If login fails:
      // Show an alert for invalid credentials
      alert('Invalid credentials! Please check your email and password.');
    }

  } catch (error) {
    // Step 6: Log the error to the console
    console.error('Patient login error:', error);
    // Show a generic error message
    alert('An error occurred during login. Please try again later.');
  }
};