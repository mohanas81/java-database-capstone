// Modal Management Functions

/**
 * Open Modal with specific content based on type
 * @param {string} type - The type of modal to open (adminLogin, doctorLogin, patientLogin)
 */
export function openModal(type) {
   console.log("Type modal "+type);
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');

  if (!modal || !modalBody) {
    console.error('Modal elements not found');
    return;
  }

  // Generate modal content based on type
  let content = '';

  switch(type) {
    case 'adminLogin':
      content = `
        <h2>Admin Login</h2>
        <form id="adminLoginForm" onsubmit="event.preventDefault(); window.adminLoginHandler();">
          <div class="form-group">
            <label for="adminUsername">Username:</label>
            <input type="text" id="adminUsername" name="username" required>
          </div>
          <div class="form-group">
            <label for="adminPassword">Password:</label>
            <input type="password" id="adminPassword" name="password" required>
          </div>
          <button type="submit" class="btn-primary">Login</button>
        </form>
      `;
      break;

    case 'doctorLogin':
      content = `
        <h2>Doctor Login</h2>
        <form id="doctorLoginForm" onsubmit="event.preventDefault(); window.doctorLoginHandler();">
          <div class="form-group">
            <label for="doctorEmail">Email:</label>
            <input type="email" id="doctorEmail" name="email" required>
          </div>
          <div class="form-group">
            <label for="doctorPassword">Password:</label>
            <input type="password" id="doctorPassword" name="password" required>
          </div>
          <button type="submit" class="btn-primary">Login</button>
        </form>
      `;
      break;

    case 'patientLogin':
      content = `
        <h2>Patient Login</h2>
        <form id="patientLoginForm" onsubmit="event.preventDefault(); window.patientLoginHandler();">
          <div class="form-group">
            <label for="patientEmail">Email:</label>
            <input type="email" id="patientEmail" name="email" required>
          </div>
          <div class="form-group">
            <label for="patientPassword">Password:</label>
            <input type="password" id="patientPassword" name="password" required>
          </div>
          <button type="submit" class="btn-primary">Login</button>
        </form>
      `;
      break;
    case 'addDoctor':
      content = `
               <h2>Add Doctor</h2>
               <input type="text" id="doctorName" placeholder="Doctor Name" class="input-field">
               <select id="specialization" class="input-field select-dropdown">
                   <option value="">Specialization</option>
                              <option value="cardiologist">Cardiologist</option>
                              <option value="dermatologist">Dermatologist</option>
                              <option value="neurologist">Neurologist</option>
                              <option value="pediatrician">Pediatrician</option>
                              <option value="orthopedic">Orthopedic</option>
                              <option value="gynecologist">Gynecologist</option>
                              <option value="psychiatrist">Psychiatrist</option>
                              <option value="dentist">Dentist</option>
                              <option value="ophthalmologist">Ophthalmologist</option>
                              <option value="ent">ENT Specialist</option>
                              <option value="urologist">Urologist</option>
                              <option value="oncologist">Oncologist</option>
                              <option value="gastroenterologist">Gastroenterologist</option>
                              <option value="general">General Physician</option>

              </select>
              <input type="email" id="doctorEmail" placeholder="Email" class="input-field">
              <input type="password" id="doctorPassword" placeholder="Password" class="input-field">
              <input type="text" id="doctorPhone" placeholder="Mobile No." class="input-field">
              <div class="availability-container">
              <label class="availabilityLabel">Select Availability:</label>
                <div class="checkbox-group">
                    <label><input type="checkbox" name="availability" value="09:00-10:00"> 9:00 AM - 10:00 AM</label>
                    <label><input type="checkbox" name="availability" value="10:00-11:00"> 10:00 AM - 11:00 AM</label>
                    <label><input type="checkbox" name="availability" value="11:00-12:00"> 11:00 AM - 12:00 PM</label>
                    <label><input type="checkbox" name="availability" value="12:00-13:00"> 12:00 PM - 1:00 PM</label>
                </div>
              </div>
              <button class="dashboard-btn" id="saveDoctorBtn">Save</button>
            `;
            break;

    default:
      content = '<p>Invalid modal type</p>';
  }




  // Set content and show modal
  modalBody.innerHTML = content;
  modal.style.display = 'flex';

 if (type === 'addDoctor') {
     document.getElementById('saveDoctorBtn').addEventListener('click', adminAddDoctor);
   }



}

// Close Modal
export function closeModal() {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');

  if (modal) {
    modal.style.display = 'none';
  }

  if (modalBody) {
    modalBody.innerHTML = '';
  }
}