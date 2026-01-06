/*
  Doctor Card Component
  Creates dynamic doctor cards with role-based actions (admin delete, patient booking)
*/

// Import the overlay function for booking appointments from loggedPatient.js
import { showBookingOverlay } from '../loggedPatient.js';

// Import the deleteDoctor API function to remove doctors (admin role) from doctorServices.js
import { deleteDoctor } from '../services/doctorServices.js';

// Import function to fetch patient details (used during booking) from patientServices.js
import { getPatientData } from '../services/patientServices.js';



/**
 * Function to create and return a DOM element for a single doctor card
 * @param {Object} doctor - Doctor object containing id, name, email, specialization, appointmentTimes
 * @returns {HTMLElement} - Complete doctor card DOM element
 */
export function createDoctorCard(doctor) {
  // Create the main container for the doctor card
  const card = document.createElement('div');
  card.className = 'doctor-card';
  card.setAttribute('data-doctor-id', doctor.id);

  // Retrieve the current user role from localStorage
  const role = localStorage.getItem('userRole');

  // Create a div to hold doctor information
  const doctorInfo = document.createElement('div');
  doctorInfo.className = 'doctor-info';

  // Create and set the doctor's name
  const doctorName = document.createElement('h3');
  doctorName.className = 'doctor-name';
  doctorName.textContent = doctor.name || 'Dr. Unknown';

  // Create and set the doctor's specialization
  const doctorSpecialization = document.createElement('p');
  doctorSpecialization.className = 'doctor-specialization';
  doctorSpecialization.textContent = `Specialization: ${doctor.specialization || 'General'}`;

  // Create and set the doctor's email
  const doctorEmail = document.createElement('p');
  doctorEmail.className = 'doctor-email';
  doctorEmail.textContent = `Email: ${doctor.email || 'N/A'}`;

  // Create and list available appointment times
  const appointmentTimes = document.createElement('p');
  appointmentTimes.className = 'appointment-times';
  if (doctor.appointmentTimes && doctor.appointmentTimes.length > 0) {
    appointmentTimes.textContent = `Available Times: ${doctor.appointmentTimes.join(', ')}`;
  } else {
    appointmentTimes.textContent = 'Available Times: Not specified';
  }

  // Append all info elements to the doctor info container
  doctorInfo.appendChild(doctorName);
  doctorInfo.appendChild(doctorSpecialization);
  doctorInfo.appendChild(doctorEmail);
  doctorInfo.appendChild(appointmentTimes);

  // Create a container for card action buttons
  const actionsContainer = document.createElement('div');
  actionsContainer.className = 'card-actions';

  // === ADMIN ROLE ACTIONS ===
  if (role === 'admin') {
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn-delete';
    deleteButton.textContent = 'Delete Doctor';

    // Add click handler for delete button
    deleteButton.addEventListener('click', async () => {
      // Confirm deletion
      const confirmed = confirm(`Are you sure you want to delete Dr. ${doctor.name}?`);
      if (!confirmed) return;

      try {
        // Get the admin token from localStorage
        const token = localStorage.getItem('token');

        if (!token) {
          alert('Authentication token not found. Please log in again.');
          return;
        }

        // Call API to delete the doctor
        const result = await deleteDoctor(doctor.id, token);

        // Show result and remove card if successful
        if (result.success) {
          alert(`Dr. ${doctor.name} has been deleted successfully.`);
          card.remove(); // Remove the card from DOM
        } else {
          alert(`Failed to delete doctor: ${result.message || 'Unknown error'}`);
        }
      } catch (error) {
        console.error('Error deleting doctor:', error);
        alert('An error occurred while deleting the doctor. Please try again.');
      }
    });

    // Add delete button to actions container
    actionsContainer.appendChild(deleteButton);
  }

  // === PATIENT (NOT LOGGED-IN) ROLE ACTIONS ===
  else if (role === 'patient') {
    // Create a book now button
    const bookButton = document.createElement('button');
    bookButton.className = 'btn-book';
    bookButton.textContent = 'Book Now';

    // Alert patient to log in before booking
    bookButton.addEventListener('click', () => {
      alert('Please log in to book an appointment.');
      // Optionally redirect to login
      // window.location.href = '/pages/index.html';
    });

    // Add button to actions container
    actionsContainer.appendChild(bookButton);
  }

  // === LOGGED-IN PATIENT ROLE ACTIONS ===
  else if (role === 'loggedPatient') {
    // Create a book now button
    const bookButton = document.createElement('button');
    bookButton.className = 'btn-book';
    bookButton.textContent = 'Book Now';

    // Handle booking logic for logged-in patient
    bookButton.addEventListener('click', async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem('token');

        // Redirect if token not available
        if (!token) {
          alert('Session expired. Please log in again.');
          window.location.href = '/pages/index.html';
          return;
        }

        // Fetch patient data with token
        const patientData = await getPatientData(token);

        if (!patientData) {
          alert('Unable to retrieve patient information. Please try again.');
          return;
        }

        // Show booking overlay UI with doctor and patient info
        showBookingOverlay(doctor, patientData);

      } catch (error) {
        console.error('Error booking appointment:', error);
        alert('An error occurred while booking. Please try again.');
      }
    });

    // Add button to actions container
    actionsContainer.appendChild(bookButton);
  }

  // Append doctor info and action buttons to the card
  card.appendChild(doctorInfo);
  card.appendChild(actionsContainer);

  // Return the complete doctor card element
  return card;
}

/**
 * Helper function to render multiple doctor cards into a container
 * @param {Array} doctors - Array of doctor objects
 * @param {string} containerId - ID of the container element to render cards into
 */
export function renderDoctorCards(doctors, containerId = 'content') {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }

  // Clear existing content
  container.innerHTML = '';

  // Check if there are doctors to display
  if (!doctors || doctors.length === 0) {
    container.innerHTML = '<p class="no-doctors">No doctors available at the moment.</p>';
    return;
  }

  // Create and append each doctor card
  doctors.forEach(doctor => {
    const card = createDoctorCard(doctor);
    container.appendChild(card);
  });
}