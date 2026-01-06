package com.project.back_end.DTO;

/**
 * Login - Data Transfer Object for Login Credentials
 * Represents the login credentials (email and password) used for user authentication
 */
public class Login {

    // 1. 'email' field:
    // Represents the email address used for logging into the system.
    // The email field is expected to contain a valid email address for user authentication purposes.
    private String email;

    // 2. 'password' field:
    // Represents the password associated with the email address.
    // The password field is used for verifying the user's identity during login.
    // It is generally hashed before being stored and compared during authentication.
    private String password;


    // 3. Constructor:
    // No explicit constructor is defined for this class, as it relies on the default constructor provided by Java.
    // This class can be initialized with setters or directly via reflection, as per the application's needs.


    // 4. Getters and Setters:
    // Standard getter and setter methods are provided for both 'email' and 'password' fields.

    /**
     * Gets the email address
     * @return the email value
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets the email address
     * @param email the email value to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Gets the password
     * @return the password value
     */
    public String getPassword() {
        return password;
    }

    /**
     * Sets the password
     * @param password the password value to set
     */
    public void setPassword(String password) {
        this.password = password;
    }
}