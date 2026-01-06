package com.project.back_end.DTO;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

/**
 * AppointmentDTO - Data Transfer Object for Appointment
 * Represents a simplified view of an appointment with patient and doctor information
 */
public class AppointmentDTO {

    // 1. 'id' field:
    // Represents the unique identifier for the appointment.
    // This is the primary key for identifying the appointment in the system.
    private Long id;

    // 2. 'doctorId' field:
    // Represents the ID of the doctor associated with the appointment.
    // This is a simplified field, capturing only the ID of the doctor (not the full Doctor object).
    private Long doctorId;

    // 3. 'doctorName' field:
    // Represents the name of the doctor associated with the appointment.
    // This is a simplified field for displaying the doctor's name.
    private String doctorName;

    // 4. 'patientId' field:
    // Represents the ID of the patient associated with the appointment.
    // This is a simplified field, capturing only the ID of the patient (not the full Patient object).
    private Long patientId;

    // 5. 'patientName' field:
    // Represents the name of the patient associated with the appointment.
    // This is a simplified field for displaying the patient's name.
    private String patientName;

    // 6. 'patientEmail' field:
    // Represents the email of the patient associated with the appointment.
    // This is a simplified field for displaying the patient's email.
    private String patientEmail;

    // 7. 'patientPhone' field:
    // Represents the phone number of the patient associated with the appointment.
    // This is a simplified field for displaying the patient's phone number.
    private String patientPhone;

    // 8. 'patientAddress' field:
    // Represents the address of the patient associated with the appointment.
    // This is a simplified field for displaying the patient's address.
    private String patientAddress;

    // 9. 'appointmentTime' field:
    // Represents the scheduled date and time of the appointment.
    // The time when the appointment is supposed to happen, stored as a LocalDateTime object.
    private LocalDateTime appointmentTime;

    // 10. 'status' field:
    // Represents the status of the appointment.
    // Status can indicate if the appointment is "Scheduled:0", "Completed:1", or other statuses.
    private int status;

    // 11. 'appointmentDate' field (Custom Getter):
    // A derived field representing only the date part of the appointment (without the time).
    // Extracted from the 'appointmentTime' field.
    private LocalDate appointmentDate;

    // 12. 'appointmentTimeOnly' field (Custom Getter):
    // A derived field representing only the time part of the appointment (without the date).
    // Extracted from the 'appointmentTime' field.
    private LocalTime appointmentTimeOnly;

    // 13. 'endTime' field (Custom Getter):
    // A derived field representing the end time of the appointment.
    // Calculated by adding 1 hour to the 'appointmentTime' field.
    private LocalDateTime endTime;


    // 14. Constructor:
    // The constructor accepts all the relevant fields for the AppointmentDTO,
    // including simplified fields for the doctor and patient (ID, name, etc.).
    // It also calculates custom fields: 'appointmentDate', 'appointmentTimeOnly',
    // and 'endTime' based on the 'appointmentTime' field.
    public AppointmentDTO(Long id, Long doctorId, String doctorName, Long patientId,
                          String patientName, String patientEmail, String patientPhone,
                          String patientAddress, LocalDateTime appointmentTime, int status) {
        this.id = id;
        this.doctorId = doctorId;
        this.doctorName = doctorName;
        this.patientId = patientId;
        this.patientName = patientName;
        this.patientEmail = patientEmail;
        this.patientPhone = patientPhone;
        this.patientAddress = patientAddress;
        this.appointmentTime = appointmentTime;
        this.status = status;

        // Calculate derived fields
        if (appointmentTime != null) {
            this.appointmentDate = appointmentTime.toLocalDate();
            this.appointmentTimeOnly = appointmentTime.toLocalTime();
            this.endTime = appointmentTime.plusHours(1);
        }
    }


    // 15. Getters:
    // Standard getter methods are provided for all fields.
    // These methods allow access to the values of the fields in the AppointmentDTO object.

    public Long getId() {
        return id;
    }

    public Long getDoctorId() {
        return doctorId;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public Long getPatientId() {
        return patientId;
    }

    public String getPatientName() {
        return patientName;
    }

    public String getPatientEmail() {
        return patientEmail;
    }

    public String getPatientPhone() {
        return patientPhone;
    }

    public String getPatientAddress() {
        return patientAddress;
    }

    public LocalDateTime getAppointmentTime() {
        return appointmentTime;
    }

    public int getStatus() {
        return status;
    }

    public LocalDate getAppointmentDate() {
        return appointmentDate;
    }

    public LocalTime getAppointmentTimeOnly() {
        return appointmentTimeOnly;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }
}