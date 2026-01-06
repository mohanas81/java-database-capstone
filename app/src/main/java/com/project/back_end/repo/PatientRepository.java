package com.project.back_end.repo;

import com.project.back_end.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * PatientRepository - Spring Data JPA Repository for Patient Entity
 * Provides CRUD operations and custom query methods for Patient management
 */

// 3. @Repository annotation:
// The @Repository annotation marks this interface as a Spring Data JPA repository.
// Spring Data JPA automatically implements this repository, providing the necessary
// CRUD functionality and custom queries defined in the interface.
@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

    // 1. Extend JpaRepository:
    // The repository extends JpaRepository<Patient, Long>, which provides basic CRUD functionality.
    // This allows the repository to perform operations like save, delete, update, and find
    // without needing to implement these methods manually.
    // JpaRepository also includes features like pagination and sorting.

    // Inherited methods include:
    // - save(Patient patient)
    // - findById(Long id)
    // - findAll()
    // - deleteById(Long id)
    // - delete(Patient patient)
    // - count()
    // - existsById(Long id)
    // And many more...


    // 2. Custom Query Methods:

    /**
     * findByEmail:
     * This method retrieves a Patient by their email address.
     *
     * @param email the email address of the patient
     * @return Patient entity if found, null otherwise
     */
    Patient findByEmail(String email);


    /**
     * findByEmailOrPhone:
     * This method retrieves a Patient by either their email or phone number,
     * allowing flexibility for the search.
     *
     * @param email the email address of the patient
     * @param phone the phone number of the patient
     * @return Patient entity if found by either email or phone, null otherwise
     */
    Patient findByEmailOrPhone(String email, String phone);

}