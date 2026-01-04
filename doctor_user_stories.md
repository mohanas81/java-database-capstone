# Doctor User Stories - Issue Template Format

## User Story #1: Doctor Login :
_As a doctor, I want to log into the portal, so that I can manage my appointments and access patient information securely._
## Acceptance Criteria:
1. Doctors can access the login page at `/doctor/login`
2. Login form includes:
   - Email address or Doctor ID field (required)
   - Password field (required, masked with show/hide toggle)
   - "Remember me" checkbox (optional)
   - "Forgot Password?" link
3. System validates credentials against doctor table in MySQL database
4. Account must have status "ACTIVE" to login (suspended accounts blocked)
5. Email must be verified before first login
## Priority: High
## Story Points: 5
## Notes:
- Doctors handle sensitive patient data (PHI) - extra security required
- Implement mandatory 2FA (Two-Factor Authentication) for all doctor accounts
- Support hardware security keys (YubiKey) for enhanced security
- Store last successful login time and display on dashboard


---

## User Story #2: Doctor Logout
_As a doctor, I want to log out of the portal, so that I can protect patient data and maintain confidentiality._
## Acceptance Criteria:
1. Logout button is prominently visible on all doctor portal pages:
   - Top navigation bar (always visible)
   - User profile dropdown menu
   - Mobile menu for mobile devices
2. Clicking logout button shows confirmation dialog if:
   - Doctor has unsaved changes in any form
   - Doctor is viewing patient records (to ensure proper closure)
   - Doctor has active consultation in progress
3. Confirmation dialog displays:
   - "Are you sure you want to logout?"
   - Warning: "Unsaved changes will be lost" (if applicable)
   - Options: "Logout" (primary), "Cancel" (secondary)
4. Upon logout:
   - Current session is terminated immediately
   - JWT token is invalidated on server side
   - All session data cleared from browser (localStorage, sessionStorage, cookies)
   - Doctor redirected to login page or public home page
   - Success message: "You have been logged out successfully"
## Priority: High
## Story Points: 3
## Notes:
- Critical for HIPAA compliance - unauthorized access to PHI is serious violation
- Hospital computers should have shorter timeout (15 minutes vs 1 hour)
- Implement "Quick Lock" feature (lock screen without full logout)


---

## User Story #3: View Appointment Calendar
_As a doctor, I want to view my appointment calendar, so that I can stay organized and manage my daily schedule effectively._
## Acceptance Criteria:
1. Authenticated doctors can access appointment calendar from dashboard or main navigation
2. Calendar view options available:
   - Day View (shows hourly schedule for selected day)
   - Week View (shows 7 days with appointments)
   - Month View (shows entire month with appointment counts per day)
3. Default view is "Day View" showing today's schedule
## Priority: High
## Story Points: 13
## Notes:
- Calendar is the primary tool doctors use throughout the day
- Implement WebSocket for real-time updates (avoid polling)

---

## User Story #4: Mark Unavailability
_As a doctor, I want to mark my unavailability, so that patients only see my available time slots when booking appointments._
## Acceptance Criteria:
1. Doctors can access "Manage Availability" from calendar or profile settings
2. Interface shows current working schedule and blocked periods
## Priority: High
## Story Points: 10
## Notes:
- Critical feature for accurate availability display to patients
- Implement approval workflow for extended leave (> 5 days)

---

## User Story #5: Update Doctor Profile
_As a doctor, I want to update my profile with specialization and contact information, so that patients have up-to-date and accurate information about me._
## Acceptance Criteria:
1. Doctors can access "My Profile" from navigation menu or dashboard
2. Profile page displays in edit mode with all current information
## Priority: Medium
## Story Points: 8
## Notes:
- Profile information directly impacts patient booking decisions
- Implement profile verification workflow for critical fields

---

## User Story #6: View Patient Details for Appointments
_As a doctor, I want to view patient details for upcoming appointments, so that I can be prepared and provide better care._
## Acceptance Criteria:
1. Doctor can access patient details from appointment calendar or appointments list
2. Click on any appointment card opens patient detail modal/page
## Priority: High
## Story Points: 10
## Notes:
- Critical for quality care and patient safety
- Must comply with HIPAA access controls and audit logging
