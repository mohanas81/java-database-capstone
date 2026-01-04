# Admin User Stories

## User Story #1: Admin Login : 
As an admin, I want to log into the portal with my username and password, so that I can manage the platform securely.
### Acceptance Criteria: 
1. Admin can access the login page at /admin/login
2. Admin must enter valid username and password
3. System validates credentials against the admin table in MySQL database
4. Upon successful authentication, admin is redirected to the admin dashboard
5. Invalid credentials display error message "Invalid username or password"
### Priority: High
### Story Points: 5
### Notes:
- Implement rate limiting to prevent brute force attacks (max 5 attempts per minute per IP)
- Support 2FA (Two-Factor Authentication) for enhanced security
- Session should expire after 30 minutes of inactivity
- Consider implementing "Remember Me" functionality (optional, security implications)
- Password should be hashed using BCrypt before storage


## User Story #2: Admin Logout : 
As an admin, I want to log out of the portal, so that I can protect system access when I'm done working.
## Acceptance Criteria:
1. Logout button is visible on all admin pages (typically in header/navigation bar)
2. Clicking logout immediately terminates the current session
3. Session token (JWT) is invalidated on the server side
4. Admin is redirected to the login page after logout
5. All session data is cleared from browser storage (localStorage, sessionStorage, cookies)
## Priority: High
## Story Points: 3
## Notes:
- Implement automatic logout after 30 minutes of inactivity
- Show warning 5 minutes before automatic logout ("Your session will expire in 5 minutes")
- If user has unsaved changes, show warning before logging out

## User Story #3: Add Doctor to Portal : 
As an admin, I want to add doctors to the portal, so that they can start managing appointments and patient care.
## Acceptance Criteria:
1. Admin can access "Add New Doctor" form from User Management section
2. Form includes all required fields:
    - First Name (required, text, max 50 characters)
    - Last Name (required, text, max 50 characters)
    - Email (required, unique, valid email format)
    - Contact Number (required, valid phone format)
    - Specialization (required, dropdown/text, max 100 characters)
    - License Number (required, unique, alphanumeric)
    - Department (required, dropdown selection)
    - Working Schedule (required, weekly schedule builder)
3. System validates all inputs before submission
4. Email must be unique - show error if email already exists in system
5. License number must be unique - show error if already registered
6. Upon successful submission, doctor account is created in MySQL database
## Priority: High
## Story Points: 8
## Notes:
- Implement email verification step before account activation
- Doctor must change temporary password on first login
- Support bulk import of doctors via CSV file (separate user story)


## User Story #4: Delete Doctor Profile from Portal : 
As an admin, I want to delete a doctor's profile from the portal, so that I can remove inactive or departed doctors from the system.
## Acceptance Criteria:
1. Admin can access doctor deletion from the doctor's profile page or user management list
2. Admin clicks "Delete Doctor" button
3. System checks if doctor has any active/upcoming appointments
4. If doctor has upcoming appointments (scheduled status), system blocks deletion and shows error:
"Cannot delete doctor profile. This doctor has X upcoming appointments. Please reassign or cancel appointments first."
Display list of affected appointments with dates
5. Doctor's login access is immediately revoked
6. Doctor no longer appears in active doctors list or appointment booking interface
## Priority: Medium
## Story Points: 8
## Notes:
- Implement soft delete (set deleted_at timestamp) rather than hard delete to maintain data integrity
- Consider implementing "Archive" instead of "Delete" for better data retention
- Provide "Restore Deleted Doctor" functionality for super admins (within 30 days)
- Consider implementing "Deactivate" instead of "Delete" as safer option


## User Story #5: Run Stored Procedure for Appointment Statistics : 
As an admin, I want to run a stored procedure in MySQL CLI to get the number of appointments per month, so that I can track usage statistics and system performance.
## Acceptance Criteria:
1. Results are ordered by month_number ascending
2. Procedure should execute in under 2 seconds for datasets up to 100,000 appointments
3. Procedure includes proper error handling (invalid year, invalid doctor_id)
4. Execution is logged in MySQL query log for audit purposes
5. Procedure has proper documentation in code comments explaining parameters and return values
6. Admin documentation includes usage examples and sample output

## Priority: Medium
## Story Points: 5
## Notes:
- Stored procedure should be created during database migration/setup
- Consider creating additional procedures for other common statistics


