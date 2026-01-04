## MySQL Database Design
### TABLE : patients
    - patient_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    - first_name VARCHAR(50) NOT NULL,
    - last_name VARCHAR(50) NOT NULL,
    - date_of_birth DATE NOT NULL,
    - gender VARCHAR(10),
    - contact_number VARCHAR(20),
    - email VARCHAR(100) UNIQUE,
    - address TEXT,
    - emergency_contact VARCHAR(100),
    - blood_type VARCHAR(5),
    - allergies TEXT,
    - created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    - updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

### TABLE : doctors 
    - doctor_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    - first_name VARCHAR(50) NOT NULL,
    - last_name VARCHAR(50) NOT NULL,
    - specialization VARCHAR(100) NOT NULL,
    - license_number VARCHAR(50) UNIQUE NOT NULL,
    - contact_number VARCHAR(20),
    - email VARCHAR(100) UNIQUE,
    - department VARCHAR(100),
    - available_hours JSON,
    - created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    - updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

### TABLE : appointments 
    - appointment_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    - patient_id BIGINT NOT NULL,
    - doctor_id BIGINT NOT NULL,
    - appointment_date DATE NOT NULL,
    - appointment_time TIME NOT NULL,
    - status VARCHAR(20) DEFAULT 'SCHEDULED',
    - reason TEXT,
    - notes TEXT,
    - created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    - updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    - FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    - FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id),
    - INDEX idx_patient_id (patient_id),
    - INDEX idx_doctor_id (doctor_id),
    - INDEX idx_appointment_date (appointment_date)

### TABLE : admin 
    - admin_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    - username VARCHAR(50) UNIQUE NOT NULL,
    - password_hash VARCHAR(255) NOT NULL,
    - email VARCHAR(100) UNIQUE NOT NULL,
    - role VARCHAR(50) NOT NULL,
    - permissions JSON,
    - last_login TIMESTAMP,
    - is_active BOOLEAN DEFAULT TRUE,
    - created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    - updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP


## MongoDB Collection Design
### Collection : prescriptions
```json
{
  "_id": ObjectId("..."),
  "prescriptionId": "RX-2026-001234",
  "patientId": 1001,
  "doctorId": 2001,
  "appointmentId": 3001,
  "diagnosis": "Acute bacterial sinusitis",
  "clinicalNotes": "Patient presented with facial pain and nasal congestion...",
  "vitalSigns": {
    "bloodPressure": "120/80",
    "temperature": "37.2",
    "pulse": 72
  },
  "allergies": ["Penicillin - mild rash"],
  "warnings": ["Monitor for allergic reaction"],
  "issueDate": ISODate("2026-01-04T10:30:00Z"),
  "validUntil": ISODate("2027-01-04T10:30:00Z"),
  "status": "ACTIVE",
  "pharmacyNotes": "Patient prefers local pharmacy on Main St",
  "createdAt": ISODate("2026-01-04T10:30:00Z"),
  "updatedAt": ISODate("2026-01-04T10:30:00Z")
}
```

### Collection : feedback
```json
{
  "_id": ObjectId("..."),
  "patientId": 1001,
  "doctorId": 2001,
  "rating": 4,
  "comment": "Great doctor! Highly recommended.",
  "createdAt": ISODate("2026-01-04T10:30:00Z"),
  "updatedAt": ISODate("2026-01-04T10:30:00Z")
}
```

### Collection : logs 
```json
{
  "_id": ObjectId("..."),
  "userId": 1001,
  "action": "Login",
  "createdAt": ISODate("2026-01-04T10:30:00Z"),
  "updatedAt": ISODate("2026-01-04T10:30:00Z")
}
```
