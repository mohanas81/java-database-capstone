// Render and Role Management Functions

// Select Role - Store role in localStorage and redirect to appropriate page
 export function selectRole(role) {
  if (!role) {
    console.error('Role is required');
    return;
  }

  // Store the selected role in localStorage
  localStorage.setItem('userRole', role);

  console.log(`Role selected: ${role}`);
   const token = localStorage.getItem('token');
   console.log("Token "+token)
  // Redirect to appropriate dashboard based on role
  switch(role) {
    case 'admin':
      window.location.href = '/adminDashboard/'+token;
      break;

    case 'doctor':
      window.location.href = '/doctorDashboard/'+token;
      break;

    case 'patient':
      window.location.href = '/pages/patientDashboard.html';
      break;

    default:
      console.error('Invalid role:', role);
      alert('Invalid role selected');
  }
}

// Get current role from localStorage
export function getCurrentRole() {
  return localStorage.getItem('userRole');
}

// Clear role (for logout)
export function clearRole() {
  localStorage.removeItem('userRole');
  localStorage.removeItem('token');
}

// Check if user is authenticated
export function isAuthenticated() {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('userRole');
  return !!(token && role);
}

// Protect page - redirect to login if not authenticated
export function protectPage(requiredRole = null) {
  if (!isAuthenticated()) {
    window.location.href = '../../pages/index.html';
    return false;
  }

  if (requiredRole) {
    const currentRole = getCurrentRole();
    if (currentRole !== requiredRole) {
      alert('Access denied. You do not have permission to view this page.');
      window.location.href = '../../pages/index.html';
      return false;
    }
  }

  return true;
}
//function renderContent() {
//  const role = getRole();
//  if (!role) {
//    window.location.href = "/"; // if no role, send to role selection page
//    return;
//  }
//}
// Make selectRole globally accessible for onclick handlers
window.selectRole = selectRole;