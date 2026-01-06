package com.project.back_end.repo;

import com.project.back_end.models.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * DoctorRepository - Spring Data JPA Repository for Doctor Entity
 * Provides CRUD operations and custom query methods for Doctor management
 */

// 3. @Repository annotation:
// The @Repository annotation marks this interface as a Spring Data JPA repository.
// Spring Data JPA automatically implements this repository, providing the necessary
// CRUD functionality and custom queries defined in the interface.
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    // 1. Extend JpaRepository:
    // The repository extends JpaRepository<Doctor, Long>, which gives it basic CRUD functionality.
    // This allows the repository to perform operations like save, delete, update, and find
    // without needing to implement these methods manually.
    // JpaRepository also includes features like pagination and sorting.

    // Inherited methods include:
    // - save(Doctor doctor)
    // - findById(Long id)
    // - findAll()
    // - deleteById(Long id)
    // - delete(Doctor doctor)
    // - count()
    // - existsById(Long id)
    // And many more...


    // 2. Custom Query Methods:

    /**
     * findByEmail:
     * This method retrieves a Doctor by their email.
     *
     * @param email the email address of the doctor
     * @return Doctor entity if found, null otherwise
     */
    Doctor findByEmail(String email);


    /**
     * findByNameLike:
     * This method retrieves a list of Doctors whose name contains the provided search string (case-sensitive).
     * The CONCAT('%', :name, '%') is used to create a pattern for partial matching.
     *
     * @param name the name pattern to search for
     * @return List of Doctor entities matching the name pattern
     */
    @Query("SELECT d FROM Doctor d WHERE d.name LIKE CONCAT('%', :name, '%')")
    List<Doctor> findByNameLike(@Param("name") String name);


    /**
     * findByNameContainingIgnoreCaseAndSpecialtyIgnoreCase:
     * This method retrieves a list of Doctors where the name contains the search string (case-insensitive)
     * and the specialty matches exactly (case-insensitive).
     * It combines both fields for a more specific search.
     *
     * @param name the name pattern to search for (case-insensitive)
     * @param specialty the specialty to match (case-insensitive)
     * @return List of Doctor entities matching both criteria
     */
    List<Doctor> findByNameContainingIgnoreCaseAndSpecialtyIgnoreCase(String name, String specialty);


    /**
     * findBySpecialtyIgnoreCase:
     * This method retrieves a list of Doctors with the specified specialty, ignoring case sensitivity.
     *
     * @param specialty the specialty to search for (case-insensitive)
     * @return List of Doctor entities with the specified specialty
     */
    List<Doctor> findBySpecialtyIgnoreCase(String specialty);

}