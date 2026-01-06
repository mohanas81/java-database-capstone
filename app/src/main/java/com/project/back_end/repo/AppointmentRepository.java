package com.project.back_end.repo;

import com.project.back_end.models.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

/**
 * AppointmentRepository - Spring Data JPA Repository for Appointment Entity
 * Provides CRUD operations and custom query methods for Appointment management
 */

// 4. @Repository annotation:
// The @Repository annotation marks this interface as a Spring Data JPA repository.
// Spring Data JPA automatically implements this repository, providing the necessary
// CRUD functionality and custom queries defined in the interface.
@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    // 1. Extend JpaRepository:
    // The repository extends JpaRepository<Appointment, Long>, which gives it basic CRUD functionality.
    // The methods such as save, delete, update, and find are inherited without the need for explicit implementation.
    // JpaRepository also includes pagination and sorting features.

    // Inherited methods include: save(), findById(), findAll(), deleteById(), count(), etc.


    // 2. Custom Query Methods:

    /**
     * findByDoctorIdAndAppointmentTimeBetween:
     * This method retrieves a list of appointments for a specific doctor within a given time range.
     * The doctor's available times are eagerly fetched to avoid lazy loading.
     * It uses a LEFT JOIN to fetch the doctor's available times along with the appointments.
     *
     * @param doctorId the ID of the doctor
     * @param start the start of the time range
     * @param end the end of the time range
     * @return List of Appointment entities
     */
    @Query("SELECT a FROM Appointment a LEFT JOIN FETCH a.doctor d LEFT JOIN FETCH d.availableTimes " +
            "WHERE a.doctor.id = :doctorId AND a.appointmentTime BETWEEN :start AND :end")
    List<Appointment> findByDoctorIdAndAppointmentTimeBetween(
            @Param("doctorId") Long doctorId,
            @Param("start") LocalDateTime start,
            @Param("end") LocalDateTime end);


    /**
     * findByDoctorIdAndPatient_NameContainingIgnoreCaseAndAppointmentTimeBetween:
     * This method retrieves appointments for a specific doctor and patient name (ignoring case)
     * within a given time range.
     * It performs a LEFT JOIN to fetch both the doctor and patient details along with the appointment times.
     *
     * @param doctorId the ID of the doctor
     * @param patientName the name of the patient (case-insensitive)
     * @param start the start of the time range
     * @param end the end of the time range
     * @return List of Appointment entities
     */
    @Query("SELECT a FROM Appointment a LEFT JOIN FETCH a.doctor d LEFT JOIN FETCH a.patient p " +
            "WHERE a.doctor.id = :doctorId AND LOWER(p.name) LIKE LOWER(CONCAT('%', :patientName, '%')) " +
            "AND a.appointmentTime BETWEEN :start AND :end")
    List<Appointment> findByDoctorIdAndPatient_NameContainingIgnoreCaseAndAppointmentTimeBetween(
            @Param("doctorId") Long doctorId,
            @Param("patientName") String patientName,
            @Param("start") LocalDateTime start,
            @Param("end") LocalDateTime end);


    // 3. @Modifying and @Transactional annotations:
    // The @Modifying annotation is used to indicate that the method performs a modification operation
    // (like DELETE or UPDATE).
    // The @Transactional annotation ensures that the modification is done within a transaction,
    // meaning that if any exception occurs, the changes will be rolled back.

    /**
     * deleteAllByDoctorId:
     * This method deletes all appointments associated with a particular doctor.
     * It is marked as @Modifying and @Transactional, which makes it a modification query,
     * ensuring that the operation is executed within a transaction.
     *
     * @param doctorId the ID of the doctor whose appointments should be deleted
     */
    @Modifying
    @Transactional
    @Query("DELETE FROM Appointment a WHERE a.doctor.id = :doctorId")
    void deleteAllByDoctorId(@Param("doctorId") Long doctorId);


    /**
     * findByPatientId:
     * This method retrieves all appointments for a specific patient.
     *
     * @param patientId the ID of the patient
     * @return List of Appointment entities
     */
    List<Appointment> findByPatientId(Long patientId);


    /**
     * findByPatient_IdAndStatusOrderByAppointmentTimeAsc:
     * This method retrieves all appointments for a specific patient with a given status,
     * ordered by the appointment time.
     *
     * @param patientId the ID of the patient
     * @param status the status of the appointment (0=Scheduled, 1=Completed, etc.)
     * @return List of Appointment entities ordered by appointment time ascending
     */
    List<Appointment> findByPatient_IdAndStatusOrderByAppointmentTimeAsc(Long patientId, int status);


    /**
     * filterByDoctorNameAndPatientId:
     * This method retrieves appointments based on a doctor's name (using a LIKE query)
     * and the patient's ID.
     *
     * @param doctorName the name of the doctor (partial match)
     * @param patientId the ID of the patient
     * @return List of Appointment entities
     */
    @Query("SELECT a FROM Appointment a WHERE a.doctor.name LIKE %:doctorName% AND a.patient.id = :patientId")
    List<Appointment> filterByDoctorNameAndPatientId(
            @Param("doctorName") String doctorName,
            @Param("patientId") Long patientId);


    /**
     * filterByDoctorNameAndPatientIdAndStatus:
     * This method retrieves appointments based on a doctor's name (using a LIKE query),
     * patient's ID, and a specific appointment status.
     *
     * @param doctorName the name of the doctor (partial match)
     * @param patientId the ID of the patient
     * @param status the status of the appointment
     * @return List of Appointment entities
     */
    @Query("SELECT a FROM Appointment a WHERE a.doctor.name LIKE %:doctorName% " +
            "AND a.patient.id = :patientId AND a.status = :status")
    List<Appointment> filterByDoctorNameAndPatientIdAndStatus(
            @Param("doctorName") String doctorName,
            @Param("patientId") Long patientId,
            @Param("status") int status);


    /**
     * updateStatus:
     * This method updates the status of a specific appointment based on its ID.
     *
     * @param status the new status to set
     * @param id the ID of the appointment to update
     */
    @Modifying
    @Transactional
    @Query("UPDATE Appointment a SET a.status = :status WHERE a.id = :id")
    void updateStatus(@Param("status") int status, @Param("id") long id);

}