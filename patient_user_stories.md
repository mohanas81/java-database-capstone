# Patient User Stories 

## User Story #1: View Doctors List Without Login :
_As a patient, I want to view a list of doctors without logging in, so that I can explore available options before deciding to register._
## Acceptance Criteria :
1. Patients can access the doctors list page at `/doctors` without authentication
2. Page displays all active doctors with status "ACTIVE" (excludes suspended/deleted doctors)
3. Each doctor card shows:
   - Doctor's name (Dr. First Name Last Name)
   - Specialization (e.g., Cardiology, Orthopedics)
   - Department
   - Years of experience
   - Profile photo (or default avatar if not available)
   - Available days (e.g., Mon-Fri)
   - Rating/reviews (if available)
4. Doctors list supports filtering by:
   - Specialization (dropdown with all specializations)
   - Department (dropdown with all departments)
   - Availability (Any day, Weekdays only, Weekends available)
5. Doctors list supports search by doctor name (real-time search as user types)
## Priority: High
## Story Points: 5
## Notes:
- This is a public page accessible without authentication
- Implement caching to improve performance (cache doctor list for 15 minutes)
- Use pagination or infinite scroll if doctor count > 50
- Default sorting: Alphabetical by last name

---

## User Story #2: Patient Registration :
_As a patient, I want to sign up using my email and password, so that I can book appointments and access the portal.
## Acceptance Criteria :
1. Patients can access registration page at `/register` or `/signup`
2. Registration form includes all required fields:
   - First Name (required, text, max 50 characters)
   - Last Name (required, text, max 50 characters)
   - Email Address (required, unique, valid email format)
   - Password (required, min 12 characters)
   - Confirm Password (required, must match password)
   - Date of Birth (required, date picker, must be at least 1 year old)
   - Gender (required, dropdown: Male, Female, Other, Prefer not to say)
   - Contact Number (required, valid phone format with country code)
3. Optional fields:
   - Address (text, max 200 characters)
   - Emergency Contact Name (text, max 100 characters)
   - Emergency Contact Number (phone)
   - Blood Type (dropdown: A+, A-, B+, B-, O+, O-, AB+, AB-)
   - Known Allergies (textarea, max 500 characters)
## Priority: High
## Story Points: 8
## Notes:
- Password must be hashed using BCrypt (cost factor 12) before storing
- Implement rate limiting: Max 5 registration attempts per IP per hour
- Store patient timezone for appointment scheduling

---

## User Story #3: Patient Login :
_As a patient, I want to log into the portal, so that I can manage my appointments and access my medical information._

## Acceptance Criteria :
1. Patients can access login page at `/patient/login` or `/login`
2. Login form includes:
   - Email address field (required)
   - Password field (required, masked with show/hide toggle)
   - "Remember me" checkbox (optional)
   - "Forgot Password?" link
3. System validates credentials against patient table in MySQL database
4. Upon successful authentication:
   - JWT token is generated with 24-hour expiration
   - Patient is redirected to patient dashboard at `/patient/dashboard`
   - Welcome message displays: "Welcome back, [First Name]!"
   - Last login time is displayed
5. Failed login shows error: "Invalid email or password"
## Priority: High
## Story Points: 5
## Notes:
- Implement rate limiting: Max 5 login attempts per IP per 5 minutes
- Store last login timestamp and display on dashboard
- Add "Sign in from mobile app" with QR code option
- Password reset link should expire after 1 hour
- Consider adding security questions as additional verification
- Implement brute force protection using exponential backoff
- Add option to "View active sessions" and "Logout from all devices"
- Compliance: Log login activity for audit purposes (HIPAA requirement)

---

## User Story #4: Patient Logout :
_As a patient, I want to log out of the portal, so that I can secure my account when I'm finished using the system._

## Acceptance Criteria :
1. Logout button is visible on all authenticated patient pages
2. Logout button is located in:
   - Top navigation bar (desktop)
   - Mobile menu (mobile devices)
   - User profile dropdown menu
3. Clicking logout triggers confirmation if patient has:
   - Unsaved form data
   - Active appointment booking in progress
   - Draft messages to doctors
## Priority: High
## Story Points: 3
## Notes:
- Implement graceful logout handling in case of network issues
- Store logout timestamp for session duration analytics
- Add "You were logged out due to inactivity" message for auto-logout
- Test logout functionality across all browsers and devices

---

## User Story #5: Book Appointment :
_As a patient, I want to log in and book an hour-long appointment, so that I can consult with a doctor._
## Acceptance Criteria :
1. Authenticated patients can access "Book Appointment" from dashboard or navigation menu
2. Appointment booking wizard has clear steps:
## Priority: High
## Story Points: 13
## Notes:
- Appointment duration is fixed at 1 hour as per requirements
- Implement real-time slot availability checking using WebSocket or polling
- Use optimistic locking to prevent double-booking race conditions

---

## User Story #6: View Upcoming Appointments :
_As a patient, I want to view my upcoming appointments, so that I can prepare accordingly and manage my schedule.
## Acceptance Criteria :
1. Authenticated patients can access "My Appointments" from dashboard or main navigation
2. Page displays two tabs/sections:
   - "Upcoming Appointments" (default view)
   - "Past Appointments"
3. ##Upcoming Appointments section shows:
   - All appointments with status "SCHEDULED" and date >= today
   - Sorted by date and time (nearest first)
   - Each appointment card displays:
     - Appointment ID (e.g., APT-2026-00123)
     - Doctor's name and specialization
     - Doctor's profile photo
     - Date and time (e.g., "Monday, January 15, 2026 at 2:00 PM")
     - Duration (1 hour)
     - Status badge (SCHEDULED in green)
     - Reason for visit
     - Location/clinic address
     - Action buttons: View Details, Cancel, Reschedule
## Priority: High
## Story Points: 8
## Notes:
- Implement real-time updates if appointment is cancelled by doctor
- Show notification badge on navigation if appointment is within 24 hours
- Consider adding "Add notes to appointment" functionality
