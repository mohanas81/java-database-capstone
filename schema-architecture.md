# Architecture Summary
The Healthcare Management System is designed to manage healthcare operations including patient records,
appointments, doctor information, and prescriptions. The system uses a three-tier architecture model :

. Presentation Tier
 - User initiate request through thymeleaf-web (admin dashboard , doctor dashboard )
 - User client use mobile apps or front-end web for appointment, patient dashboard and patient record interact with backend service via rest api (json api) 

. Application Tier
 - Request from thymeleaf handled by thymeleaf controller, request from Api consumer will be handle by REST controller
 - All controller delegate business logic to centralized service layer
 - service layer applies business rules and validations, coordinates workflows across multiple entities
 - service layer interact with repository layer to perform  data access operations for  mongodb and mysql

. Data Tier
- MySQL repositories use Spring Data JPA to manage data patients, doctors, appointments and admin records
- MongoDB repositories use Spring Data MongoDB to manage document based records like prescriptions


# Data Flow and Control

1. User initiates a request  
   - User initiate request through thymeleaf-web (admin dashboard , doctor dashboard )
   - User initiate request via mobile apps or front-end web for appointment, patient dashboard and patient record 

2. Controller  
   - Request from thymeleaf handled by thymeleaf controller 
   - Request from Api consumer will be handle by REST controller
   - both  thymeleaf controller and rest controller will forward to service layer

3. Service Layer 
   - Business rules are applied (e.g., check availability, validate form input)

4. The Service Layer calls the Repository Layer  
   - Spring Data JPA Repositories (for MySQL)  
   - Spring Data MongoDB Repositories (for Prescriptions)

5. Repositories query or persist data  
   - MySQL stores relational data (patients, appointments)  
   - MongoDB handles flexible schema documents (prescriptions)

6. Data is bound to Java models  
   - JPA Entities for SQL data (`@Entity`)  
   - MongoDB Documents (`@Document`) for NoSQL collections

7. Response is generated  
   - Thymeleaf templates receive models and render HTML  
   - REST endpoints return serialized JSON data to clients
