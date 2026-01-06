/*
  This script handles the admin dashboard functionality for managing doctors:
  - Loads all doctor cards
  - Filters doctors by name, time, or specialty
  - Adds a new doctor via modal form
*/

// Import required functions from service layer
import { getDoctors, filterDoctors, saveDoctor } from './services/doctorServices.js';

// Import doctor card creation function
import { createDoctorCard } from './components/doctorCard.js';

// Import modal function
import { openModal, closeModal } from './components/modals.js';

window.openModal = openModal;
window.closeModal = closeModal;
/**
 * Attach a click listener to the "Add Doctor" button
 * When clicked, it opens a modal form using openModal('addDoctor')
 */
function setupAddDoctorButton() {
  const addDocBtn = document.getElementById('addDocBtn');
  if (addDocBtn) {
    addDocBtn.addEventListener('click', () => {
      openModal('addDoctor');
    });
  }
}


/**
 * When the DOM is fully loaded:
 * - Call loadDoctorCards() to fetch and display all doctors
 * - Setup event listeners for filters and search
 */
document.addEventListener('DOMContentLoaded', () => {
  // Load all doctor cards on page load
  loadDoctorCards();

  // Setup add doctor button listener
  setupAddDoctorButton();

  // Setup filter event listeners
  setupFilterListeners();
});


/**
 * Function: loadDoctorCards
 * Purpose: Fetch all doctors and display them as cards
 */
async function loadDoctorCards() {
  try {
    // Call getDoctors() from the service layer
    const doctors = await getDoctors();

    // Clear the current content area
    const contentDiv = document.getElementById('content');
    if (!contentDiv) {
      console.error('Content div not found');
      return;
    }

    contentDiv.innerHTML = '';

    // Check if doctors exist
    if (!doctors || doctors.length === 0) {
      contentDiv.innerHTML = '<p class="no-doctors">No doctors available.</p>';
      return;
    }

    // For each doctor returned:
    // - Create a doctor card using createDoctorCard()
    // - Append it to the content div
    doctors.forEach(doctor => {
      const card = createDoctorCard(doctor);
      contentDiv.appendChild(card);
    });

  } catch (error) {
    // Handle any fetch errors by logging them
    console.error('Error loading doctor cards:', error);
    alert('Failed to load doctors. Please try again.');
  }
}


/**
 * Attach 'input' and 'change' event listeners to the search bar and filter dropdowns
 * On any input change, call filterDoctorsOnChange()
 */
function setupFilterListeners() {
  const searchBar = document.getElementById('searchBar');
  const timeFilter = document.getElementById('timeFilter');
  const specialtyFilter = document.getElementById('specialtyFilter');

  if (searchBar) {
    searchBar.addEventListener('input', filterDoctorsOnChange);
  }

  if (timeFilter) {
    timeFilter.addEventListener('change', filterDoctorsOnChange);
  }

  if (specialtyFilter) {
    specialtyFilter.addEventListener('change', filterDoctorsOnChange);
  }
}


/**
 * Function: filterDoctorsOnChange
 * Purpose: Filter doctors based on name, available time, and specialty
 */
async function filterDoctorsOnChange() {
  try {
    // Read values from the search bar and filters
    const searchBar = document.getElementById('searchBar');
    const timeFilter = document.getElementById('timeFilter');
    const specialtyFilter = document.getElementById('specialtyFilter');

    let name = searchBar ? searchBar.value.trim() : '';
    let time = timeFilter ? timeFilter.value : '';
    let specialty = specialtyFilter ? specialtyFilter.value : '';

    // Normalize empty values to null or empty string for API
    name = name || '';
    time = time || '';
    specialty = specialty || '';

    // Call filterDoctors(name, time, specialty) from the service
    const result = await filterDoctors(name, time, specialty);

    const contentDiv = document.getElementById('content');
    if (!contentDiv) return;

    // Clear content area
    contentDiv.innerHTML = '';

    // If doctors are found:
    if (result.doctors && result.doctors.length > 0) {
      // Render them using createDoctorCard()
      result.doctors.forEach(doctor => {
        const card = createDoctorCard(doctor);
        contentDiv.appendChild(card);
      });
    } else {
      // If no doctors match the filter:
      // Show a message: "No doctors found with the given filters."
      contentDiv.innerHTML = '<p class="no-doctors">No doctors found with the given filters.</p>';
    }

  } catch (error) {
    // Catch and display any errors with an alert
    console.error('Error filtering doctors:', error);
    alert('An error occurred while filtering doctors. Please try again.');
  }
}


/**
 * Function: renderDoctorCards
 * Purpose: A helper function to render a list of doctors passed to it
 * @param {Array} doctors - Array of doctor objects to render
 */
function renderDoctorCards(doctors) {
  // Clear the content area
  const contentDiv = document.getElementById('content');
  if (!contentDiv) return;

  contentDiv.innerHTML = '';

  if (!doctors || doctors.length === 0) {
    contentDiv.innerHTML = '<p class="no-doctors">No doctors available.</p>';
    return;
  }

  // Loop through the doctors and append each card to the content area
  doctors.forEach(doctor => {
    const card = createDoctorCard(doctor);
    contentDiv.appendChild(card);
  });
}


/**
 * Function: adminAddDoctor
 * Purpose: Collect form data and add a new doctor to the system
 * This function is called from the modal form submission
 */
async function adminAddDoctor() {
  try {
    // Collect input values from the modal form
    // Includes name, email, phone, password, specialty, and available times
    const name = document.getElementById('doctorName')?.value.trim();
    const email = document.getElementById('doctorEmail')?.value.trim();
    const phone = document.getElementById('doctorPhone')?.value.trim();
    const password = document.getElementById('doctorPassword')?.value.trim();
    const specialty = document.getElementById('specialization')?.value.trim();

    console.log("Save : "+name+"-"+email+"-"+phone+"-"+password+"-"+specialty)
    // Get appointment times (could be multiple checkboxes or a multi-select)
    const timesInput = document.getElementById('appointmentTimes')?.value;
    //const appointmentTimes = timesInput ? timesInput.split(',').map(t => t.trim()) : [];
    const checkedBoxes = document.querySelectorAll('input[name="availability"]:checked');
      // Convert the NodeList to an array and map to their values
    const availableTimes = Array.from(checkedBoxes).map(cb => cb.value);
    // Validate required fields
    if (!name || !email || !password || !specialization) {
      alert('Please fill in all required fields: Name, Email, Password, and Specialty.');
      return;
    }

    // Retrieve the authentication token from localStorage
    const token = localStorage.getItem('token');

    // If no token is found, show an alert and stop execution
    if (!token) {
      alert('Authentication token not found. Please log in again.');
      window.location.href = '/pages/index.html';
      return;
    }

    // Build a doctor object with the form values
    const doctor = {
      name,
      email,
      phone,
      password,
      specialty,
      availableTimes
    };

    // Call saveDoctor(doctor, token) from the service
    const result = await saveDoctor(doctor, token);

    // If save is successful:
    if (result.success) {
      // Show a success message
      alert('Doctor added successfully!');

      // Close the modal and reload the page
      closeModal();

      // Reload doctor cards to show the new doctor
      await loadDoctorCards();

      // Or reload the entire page
      // window.location.reload();
    } else {
      // If saving fails, show an error message
      alert(`Failed to add doctor: ${result.message}`);
    }

  } catch (error) {
    console.error('Error adding doctor:', error);
    alert('An error occurred while adding the doctor. Please try again.');
  }
}


// Make adminAddDoctor globally accessible for modal form submission
window.adminAddDoctor = adminAddDoctor;

// Also expose other functions if needed
window.loadDoctorCards = loadDoctorCards;
window.renderDoctorCards = renderDoctorCards;