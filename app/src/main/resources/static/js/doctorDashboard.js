/*
  Doctor Dashboard Script
  Handles appointment viewing with date filtering and patient search functionality
*/

// Import getAllAppointments to fetch appointments from the backend
import { getAllAppointments } from './services/appointmentRecordService.js';

// Import createPatientRow to generate a table row for each patient appointment
import { createPatientRow } from './components/patientRows.js';


// Get the table body where patient rows will be added
const patientTableBody = document.getElementById('patientTableBody');

// Initialize selectedDate with today's date in 'YYYY-MM-DD' format
let selectedDate = new Date().toISOString().split('T')[0];

// Get the saved token from localStorage (used for authenticated API calls)
const token = localStorage.getItem('token');

// Initialize patientName to null (used for filtering by name)
let patientName = null;


/**
 * Setup Event Listeners
 */

// Add an 'input' event listener to the search bar
const searchBar = document.getElementById('searchBar');
if (searchBar) {
  searchBar.addEventListener('input', (event) => {
    // On each keystroke:
    // - Trim and check the input value
    const inputValue = event.target.value.trim();

    // - If not empty, use it as the patientName for filtering
    if (inputValue !== '') {
      patientName = inputValue;
    } else {
      // - Else, reset patientName to "null" (as expected by backend)
      patientName = null;
    }

    // - Reload the appointments list with the updated filter
    loadAppointments();
  });
}


// Add a click listener to the "Today" button
const todayButton = document.getElementById('todayButton');
if (todayButton) {
  todayButton.addEventListener('click', () => {
    // When clicked:
    // - Set selectedDate to today's date
    selectedDate = new Date().toISOString().split('T')[0];

    // - Update the date picker UI to match
    const datePicker = document.getElementById('datePicker');
    if (datePicker) {
      datePicker.value = selectedDate;
    }

    // - Reload the appointments for today
    loadAppointments();
  });
}


// Add a change event listener to the date picker
const datePicker = document.getElementById('datePicker');
if (datePicker) {
  // Set initial value to today's date
  datePicker.value = selectedDate;

  datePicker.addEventListener('change', (event) => {
    // When the date changes:
    // - Update selectedDate with the new value
    selectedDate = event.target.value;

    // - Reload the appointments for that specific date
    loadAppointments();
  });
}


/**
 * Function: loadAppointments
 * Purpose: Fetch and display appointments based on selected date and optional patient name
 */
async function loadAppointments() {
  try {
    // Step 1: Call getAllAppointments with selectedDate, patientName, and token
    const appointments = await getAllAppointments(selectedDate, patientName, token);

    // Step 2: Clear the table body content before rendering new rows
    if (!patientTableBody) {
      console.error('Patient table body not found');
      return;
    }

    patientTableBody.innerHTML = '';

    // Step 3: If no appointments are returned:
    if (!appointments || appointments.length === 0) {
      // Display a message row: "No Appointments found for today."
      const noAppointmentsRow = document.createElement('tr');
      noAppointmentsRow.innerHTML = `
        <td colspan="5" class="noPatientRecord">
          No Appointments found for today.
        </td>
      `;
      patientTableBody.appendChild(noAppointmentsRow);
      return;
    }

    // Step 4: If appointments exist:
    // Loop through each appointment and construct a 'patient' object
    appointments.forEach(appointment => {
      // Construct a 'patient' object with id, name, phone, and email
      const patient = {
        id: appointment.patientId || appointment.id,
        name: appointment.patientName || appointment.name,
        phone: appointment.patientPhone || appointment.phone,
        email: appointment.patientEmail || appointment.email,
        appointmentId: appointment.appointmentId || appointment.id
      };

      // Call createPatientRow to generate a table row for the appointment
      const row = createPatientRow(patient, appointment);

      // Append each row to the table body
      patientTableBody.appendChild(row);
    });

  } catch (error) {
    // Step 5: Catch and handle any errors during fetch:
    console.error('Error loading appointments:', error);

    // Clear table and show error message
    if (patientTableBody) {
      patientTableBody.innerHTML = '';

      // Show a message row: "Error loading appointments. Try again later."
      const errorRow = document.createElement('tr');
      errorRow.innerHTML = `
        <td colspan="5" class="noPatientRecord" style="color: red;">
          Error loading appointments. Try again later.
        </td>
      `;
      patientTableBody.appendChild(errorRow);
    }
  }
}


/**
 * When the page is fully loaded (DOMContentLoaded):
 * - Call renderContent() (assumes it sets up the UI layout)
 * - Call loadAppointments() to display today's appointments by default
 */
document.addEventListener('DOMContentLoaded', () => {
  // Call renderContent() if it exists (for setting up UI layout)
  if (typeof renderContent === 'function') {
    renderContent();
  }

  // Call loadAppointments() to display today's appointments by default
  loadAppointments();
});


// Make loadAppointments globally accessible if needed
window.loadAppointments = loadAppointments;