/*
  Doctor Service
  Handles all API calls related to doctor operations (fetch, delete, save, filter)
*/

// Import the base API URL from the config file
import { API_BASE_URL } from '../config/config.js';

// Define a constant DOCTOR_API to hold the full endpoint for doctor-related actions
const DOCTOR_API = `${API_BASE_URL}/doctor`;


/**
 * Function: getDoctors
 * Purpose: Fetch the list of all doctors from the API
 * @returns {Promise<Array>} - Array of doctor objects or empty array on error
 */
export async function getDoctors() {
  try {
    // Use fetch() to send a GET request to the DOCTOR_API endpoint
    const response = await fetch(DOCTOR_API+"/all");

    // Convert the response to JSON
    const data = await response.json();

    // Return the 'doctors' array from the response
    return data.doctors || [];

  } catch (error) {
    // If there's an error (e.g., network issue), log it and return an empty array
    console.error('Error fetching doctors:', error);
    return [];
  }
}


/**
 * Function: deleteDoctor
 * Purpose: Delete a specific doctor using their ID and an authentication token
 * @param {number|string} doctorId - The ID of the doctor to delete
 * @param {string} token - Authentication token
 * @returns {Promise<Object>} - Object with success status and message
 */
export async function deleteDoctor(doctorId, token) {
  try {
    // Use fetch() with the DELETE method
    // The URL includes the doctor ID and token as path parameters
    const response = await fetch(`${DOCTOR_API}+"/delete/"+${token}+"/"+"${doctorId}`, {
      method: 'DELETE'
    });

    // Convert the response to JSON
    const data = await response.json();

    // Return an object with:
    // - success: true if deletion was successful
    // - message: message from the server
    return {
      success: response.ok,
      message: data.message || 'Doctor deleted successfully'
    };

  } catch (error) {
    // If an error occurs, log it and return a default failure response
    console.error('Error deleting doctor:', error);
    return {
      success: false,
      message: 'Failed to delete doctor. Please try again.'
    };
  }
}


/**
 * Function: saveDoctor
 * Purpose: Save (create) a new doctor using a POST request
 * @param {Object} doctor - Doctor object containing name, email, specialization, etc.
 * @param {string} token - Authentication token
 * @returns {Promise<Object>} - Object with success status and message
 */
export async function saveDoctor(doctor, token) {
  try {
    // Use fetch() with the POST method
    // URL includes the token in the path
    // Set headers to specify JSON content type
    // Convert the doctor object to JSON in the request body
    const response = await fetch(`${DOCTOR_API}/register/${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(doctor)
    });

    // Parse the JSON response
    const data = await response.text();
    console.log("on save doctor "+data)

    // Return:
    // - success: whether the request succeeded
    // - message: from the server
    return {
      success: response.ok,
      message: data || 'Doctor saved successfully'
    };

  } catch (error) {
    // Catch and log errors
    console.error('Error saving doctor:', error);

    // Return a failure response if an error occurs
    return {
      success: false,
      message: 'Failed to save doctor. Please try again.'+ error
    };
  }
}


/**
 * Function: filterDoctors
 * Purpose: Fetch doctors based on filtering criteria (name, time, and specialty)
 * @param {string} name - Doctor name to filter by
 * @param {string} time - Time slot to filter by (e.g., "AM", "PM")
 * @param {string} specialty - Medical specialty to filter by
 * @returns {Promise<Object>} - Object containing filtered doctors array
 */
export async function filterDoctors(name = '', time = '', specialty = '') {
  try {
    // Use fetch() with the GET method
    // Include the name, time, and specialty as URL path parameters
    const response = await fetch(`${DOCTOR_API}/${name}/${time}/${specialty}`);

    // Check if the response is OK
    if (response.ok) {
      // If yes, parse and return the doctor data
      const data = await response.json();
      return data;
    } else {
      // If no, log the error and return an object with an empty 'doctors' array
      console.error('Error response from server:', response.status);
      return { doctors: [] };
    }

  } catch (error) {
    // Catch any other errors, alert the user, and return a default empty result
    console.error('Error filtering doctors:', error);
    alert('An error occurred while filtering doctors. Please try again.');
    return { doctors: [] };
  }
}


/**
 * Helper function: searchDoctors
 * Purpose: Search doctors by name locally (client-side filtering)
 * @param {Array} doctors - Array of all doctors
 * @param {string} searchTerm - Search term to filter by
 * @returns {Array} - Filtered array of doctors
 */
export function searchDoctors(doctors, searchTerm) {
  if (!searchTerm || searchTerm.trim() === '') {
    return doctors;
  }

  const term = searchTerm.toLowerCase().trim();
  return doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(term) ||
    doctor.specialization.toLowerCase().includes(term) ||
    doctor.email.toLowerCase().includes(term)
  );
}