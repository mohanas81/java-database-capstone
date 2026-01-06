package com.project.back_end.repo;

import com.project.back_end.models.Prescription;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * PrescriptionRepository - Spring Data MongoDB Repository for Prescription Document
 * Provides CRUD operations and custom query methods for Prescription management in MongoDB
 */

// 1. Extend MongoRepository:
// The repository extends MongoRepository<Prescription, String>, which provides basic CRUD functionality for MongoDB.
// This allows the repository to perform operations like save, delete, update, and find
// without needing to implement these methods manually.
// MongoRepository is tailored for working with MongoDB, unlike JpaRepository which is used for relational databases.
@Repository
public interface PrescriptionRepository extends MongoRepository<Prescription, String> {

    // Inherited methods from MongoRepository include:
    // - save(Prescription prescription)
    // - findById(String id)
    // - findAll()
    // - deleteById(String id)
    // - delete(Prescription prescription)
    // - count()
    // - existsById(String id)
    // And many more...


    // 2. Custom Query Method:

    /**
     * findByAppointmentId:
     * This method retrieves a list of prescriptions associated with a specific appointment.
     * MongoRepository automatically derives the query from the method name,
     * in this case, it will find prescriptions by the appointment ID.
     *
     * @param appointmentId the ID of the appointment
     * @return List of Prescription documents associated with the appointment
     */
    List<Prescription> findByAppointmentId(Long appointmentId);

}