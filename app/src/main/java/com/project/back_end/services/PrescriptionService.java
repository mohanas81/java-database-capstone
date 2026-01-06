package com.project.back_end.services;

import com.project.back_end.models.Prescription;
import com.project.back_end.repo.PrescriptionRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * PrescriptionService - Business Logic for Prescription Management
 * Handles saving and retrieving prescriptions stored in MongoDB
 */

// 1. Add @Service Annotation:
// The @Service annotation marks this class as a Spring service component,
// allowing Spring's container to manage it.
// This class contains the business logic related to managing prescriptions in the healthcare system.
@Service
public class PrescriptionService {

    // 2. Constructor Injection for Dependencies:
    // The PrescriptionService class depends on the PrescriptionRepository to interact with the database.
    // It is injected through the constructor, ensuring proper dependency management and enabling testing.

    private final PrescriptionRepository prescriptionRepository;

    public PrescriptionService(PrescriptionRepository prescriptionRepository) {
        this.prescriptionRepository = prescriptionRepository;
    }


    // 3. savePrescription Method:
    // This method saves a new prescription to the database.
    // Before saving, it checks if a prescription already exists for the same appointment (using the appointment ID).
    // If a prescription exists, it returns a 400 Bad Request with a message stating the prescription already exists.
    // If no prescription exists, it saves the new prescription and returns a 201 Created status with a success message.

    /**
     * Save a new prescription to MongoDB
     * @param prescription the prescription object to save
     * @return ResponseEntity with appropriate status code and message
     */
    public ResponseEntity<Map<String, Object>> savePrescription(Prescription prescription) {
        Map<String, Object> response = new HashMap<>();

        try {
            // Check if a prescription already exists for this appointment
            List<Prescription> existingPrescriptions =
                    prescriptionRepository.findByAppointmentId(prescription.getAppointmentId());

            if (existingPrescriptions != null && !existingPrescriptions.isEmpty()) {
                // Prescription already exists for this appointment
                response.put("message", "Prescription already exists for this appointment");
                response.put("success", false);
                return ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(response);
            }

            // Set timestamps
//            if (prescription.getCreatedDate() == null) {
//                prescription.setCreatedDate(LocalDateTime.now());
//            }
//            prescription.setUpdatedDate(LocalDateTime.now());

            // Save the new prescription
            Prescription savedPrescription = prescriptionRepository.save(prescription);

            // Return success response
            response.put("message", "Prescription saved successfully");
            response.put("success", true);
            response.put("prescriptionId", savedPrescription.getId());
            response.put("prescription", savedPrescription);

            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(response);

        } catch (Exception e) {
            // Handle errors by logging and returning 500 Internal Server Error
            System.err.println("Error saving prescription: " + e.getMessage());
            e.printStackTrace();

            response.put("message", "Error saving prescription: " + e.getMessage());
            response.put("success", false);

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(response);
        }
    }


    // 4. getPrescription Method:
    // Retrieves a prescription associated with a specific appointment based on the appointmentId.
    // If a prescription is found, it returns it within a map wrapped in a 200 OK status.
    // If there is an error while fetching the prescription, it logs the error and
    // returns a 500 Internal Server Error status with an error message.

    /**
     * Get prescription(s) for a specific appointment
     * @param appointmentId the ID of the appointment
     * @return ResponseEntity with prescription data or error message
     */
    public ResponseEntity<Map<String, Object>> getPrescription(Long appointmentId) {
        Map<String, Object> response = new HashMap<>();

        try {
            // Retrieve prescriptions for the given appointment ID
            List<Prescription> prescriptions =
                    prescriptionRepository.findByAppointmentId(appointmentId);

            if (prescriptions == null || prescriptions.isEmpty()) {
                // No prescription found for this appointment
                response.put("message", "No prescription found for this appointment");
                response.put("success", false);
                response.put("prescriptions", null);

                return ResponseEntity
                        .status(HttpStatus.OK)
                        .body(response);
            }

            // Return the found prescription(s)
            response.put("message", "Prescription(s) retrieved successfully");
            response.put("success", true);
            response.put("prescriptions", prescriptions);
            response.put("count", prescriptions.size());

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(response);

        } catch (Exception e) {
            // 5. Exception Handling and Error Responses:
            // Handle exceptions by logging the error and returning a 500 Internal Server Error
            System.err.println("Error getting prescription: " + e.getMessage());
            e.printStackTrace();

            response.put("message", "Error retrieving prescription: " + e.getMessage());
            response.put("success", false);
            response.put("prescriptions", null);

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(response);
        }
    }


    // Additional Helper Methods

    /**
     * Get prescription by MongoDB ID
     * @param prescriptionId the MongoDB ObjectId
     * @return ResponseEntity with prescription or error message
     */
    public ResponseEntity<Map<String, Object>> getPrescriptionById(String prescriptionId) {
        Map<String, Object> response = new HashMap<>();

        try {
            // Find prescription by ID
            var prescriptionOpt = prescriptionRepository.findById(prescriptionId);

            if (prescriptionOpt.isEmpty()) {
                response.put("message", "Prescription not found");
                response.put("success", false);

                return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body(response);
            }

            response.put("message", "Prescription retrieved successfully");
            response.put("success", true);
            response.put("prescription", prescriptionOpt.get());

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(response);

        } catch (Exception e) {
            System.err.println("Error getting prescription by ID: " + e.getMessage());
            e.printStackTrace();

            response.put("message", "Error retrieving prescription: " + e.getMessage());
            response.put("success", false);

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(response);
        }
    }


    /**
     * Update an existing prescription
     * @param prescriptionId the MongoDB ObjectId
     * @param updatedPrescription the updated prescription data
     * @return ResponseEntity with success or error message
     */
    public ResponseEntity<Map<String, Object>> updatePrescription(
            String prescriptionId,
            Prescription updatedPrescription) {

        Map<String, Object> response = new HashMap<>();

        try {
            // Find existing prescription
            var existingOpt = prescriptionRepository.findById(prescriptionId);

            if (existingOpt.isEmpty()) {
                response.put("message", "Prescription not found");
                response.put("success", false);

                return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body(response);
            }

            Prescription existing = existingOpt.get();

            // Update fields
//            if (updatedPrescription.getDoctorName() != null) {
//                existing.setDoctorName(updatedPrescription.getDoctorName());
//            }
//            if (updatedPrescription.getPatientName() != null) {
//                existing.setPatientName(updatedPrescription.getPatientName());
//            }
//            if (updatedPrescription.getMedicines() != null) {
//                existing.setMedicines(updatedPrescription.getMedicines());
//            }
//            if (updatedPrescription.getDiagnosis() != null) {
//                existing.setDiagnosis(updatedPrescription.getDiagnosis());
//            }
//            if (updatedPrescription.getInstructions() != null) {
//                existing.setInstructions(updatedPrescription.getInstructions());
//            }
//
//            // Update timestamp
//            existing.setUpdatedDate(LocalDateTime.now());

            // Save updated prescription
            Prescription saved = prescriptionRepository.save(existing);

            response.put("message", "Prescription updated successfully");
            response.put("success", true);
            response.put("prescription", saved);

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(response);

        } catch (Exception e) {
            System.err.println("Error updating prescription: " + e.getMessage());
            e.printStackTrace();

            response.put("message", "Error updating prescription: " + e.getMessage());
            response.put("success", false);

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(response);
        }
    }


    /**
     * Delete a prescription
     * @param prescriptionId the MongoDB ObjectId
     * @return ResponseEntity with success or error message
     */
    public ResponseEntity<Map<String, Object>> deletePrescription(String prescriptionId) {
        Map<String, Object> response = new HashMap<>();

        try {
            // Check if prescription exists
            if (!prescriptionRepository.existsById(prescriptionId)) {
                response.put("message", "Prescription not found");
                response.put("success", false);

                return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body(response);
            }

            // Delete prescription
            prescriptionRepository.deleteById(prescriptionId);

            response.put("message", "Prescription deleted successfully");
            response.put("success", true);

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(response);

        } catch (Exception e) {
            System.err.println("Error deleting prescription: " + e.getMessage());
            e.printStackTrace();

            response.put("message", "Error deleting prescription: " + e.getMessage());
            response.put("success", false);

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(response);
        }
    }


    /**
     * Get all prescriptions (for admin/doctor)
     * @return ResponseEntity with list of all prescriptions
     */
    public ResponseEntity<Map<String, Object>> getAllPrescriptions() {
        Map<String, Object> response = new HashMap<>();

        try {
            List<Prescription> prescriptions = prescriptionRepository.findAll();

            response.put("message", "Prescriptions retrieved successfully");
            response.put("success", true);
            response.put("prescriptions", prescriptions);
            response.put("count", prescriptions.size());

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(response);

        } catch (Exception e) {
            System.err.println("Error getting all prescriptions: " + e.getMessage());
            e.printStackTrace();

            response.put("message", "Error retrieving prescriptions: " + e.getMessage());
            response.put("success", false);

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(response);
        }
    }
}