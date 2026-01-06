
INSERT INTO doctor_available_time (doctor_id, time_slot) VALUES
(1, '09:00-10:00'), (1, '10:00-11:00'), (1, '11:00-12:00'), (1, '14:00-15:00'),
(2, '10:00-11:00'), (2, '11:00-12:00'), (2, '14:00-15:00'), (2, '15:00-16:00'),
(3, '09:00-10:00'), (3, '11:00-12:00'), (3, '14:00-15:00'), (3, '16:00-17:00'),
(4, '09:00-10:00'), (4, '10:00-11:00'), (4, '15:00-16:00'), (4, '16:00-17:00'),
(5, '09:00-10:00'), (5, '10:00-11:00'), (5, '14:00-15:00'), (5, '15:00-16:00'),
(6, '09:00-10:00'), (6, '10:00-11:00'), (6, '11:00-12:00'), (6, '14:00-15:00'),
(7, '09:00-10:00'), (7, '10:00-11:00'), (7, '15:00-16:00'), (7, '16:00-17:00'),
(8, '10:00-11:00'), (8, '11:00-12:00'), (8, '14:00-15:00'), (8, '15:00-16:00'),
(9, '09:00-10:00'), (9, '11:00-12:00'), (9, '13:00-14:00'), (9, '14:00-15:00'),
(10, '10:00-11:00'), (10, '11:00-12:00'), (10, '14:00-15:00'), (10, '16:00-17:00'),
(11, '09:00-10:00'), (11, '12:00-13:00'), (11, '14:00-15:00'), (11, '15:00-16:00'),
(12, '10:00-11:00'), (12, '11:00-12:00'), (12, '13:00-14:00'), (12, '14:00-15:00'),
(13, '13:00-14:00'), (13, '14:00-15:00'), (13, '15:00-16:00'), (13, '16:00-17:00'),
(14, '09:00-10:00'), (14, '10:00-11:00'), (14, '14:00-15:00'), (14, '16:00-17:00'),
(15, '10:00-11:00'), (15, '11:00-12:00'), (15, '13:00-14:00'), (15, '14:00-15:00'),
(16, '09:00-10:00'), (16, '11:00-12:00'), (16, '14:00-15:00'), (16, '16:00-17:00'),
(17, '09:00-10:00'), (17, '10:00-11:00'), (17, '11:00-12:00'), (17, '12:00-13:00'),
(18, '09:00-10:00'), (18, '10:00-11:00'), (18, '11:00-12:00'), (18, '15:00-16:00'),
(19, '13:00-14:00'), (19, '14:00-15:00'), (19, '15:00-16:00'), (19, '16:00-17:00'),
(20, '10:00-11:00'), (20, '13:00-14:00'), (20, '14:00-15:00'), (20, '15:00-16:00'),
(21, '09:00-10:00'), (21, '10:00-11:00'), (21, '14:00-15:00'), (21, '15:00-16:00'),
(22, '10:00-11:00'), (22, '11:00-12:00'), (22, '14:00-15:00'), (22, '16:00-17:00'),
(23, '11:00-12:00'), (23, '13:00-14:00'), (23, '15:00-16:00'), (23, '16:00-17:00'),
(24, '12:00-13:00'), (24, '13:00-14:00'), (24, '14:00-15:00'), (24, '15:00-16:00'),
(25, '09:00-10:00'), (25, '10:00-11:00'), (25, '14:00-15:00'), (25, '15:00-16:00');

INSERT INTO patient (address, email, name, password, phone) VALUES
('101 Oak St, Cityville', 'jane.doe@example.com', 'Jane Doe', 'passJane1', '888-111-1111'),
('202 Maple Rd, Townsville', 'john.smith@example.com', 'John Smith', 'smithSecure', '888-222-2222'),
('303 Pine Ave, Villageton', 'emily.rose@example.com', 'Emily Rose', 'emilyPass99', '888-333-3333'),
('404 Birch Ln, Metropolis', 'michael.j@example.com', 'Michael Jordan', 'airmj23', '888-444-4444'),
('505 Cedar Blvd, Springfield', 'olivia.m@example.com', 'Olivia Moon', 'moonshine12', '888-555-5555'),
('606 Spruce Ct, Gotham', 'liam.k@example.com', 'Liam King', 'king321', '888-666-6666'),
('707 Aspen Dr, Riverdale', 'sophia.l@example.com', 'Sophia Lane', 'sophieLane', '888-777-7777'),
('808 Elm St, Newtown', 'noah.b@example.com', 'Noah Brooks', 'noahBest!', '888-888-8888'),
('909 Willow Way, Star City', 'ava.d@example.com', 'Ava Daniels', 'avaSecure8', '888-999-9999'),
('111 Chestnut Pl, Midvale', 'william.h@example.com', 'William Harris', 'willH2025', '888-000-0000'),
('112 Redwood St, Fairview', 'mia.g@example.com', 'Mia Green', 'miagreen1', '889-111-1111'),
('113 Cypress Rd, Edgewater', 'james.b@example.com', 'James Brown', 'jamiebrown', '889-222-2222'),
('114 Poplar Ave, Crestwood', 'amelia.c@example.com', 'Amelia Clark', 'ameliacool', '889-333-3333'),
('115 Sequoia Dr, Elmwood', 'ben.j@example.com', 'Ben Johnson', 'bennyJ', '889-444-4444'),
('116 Palm Blvd, Harborview', 'ella.m@example.com', 'Ella Monroe', 'ellam123', '889-555-5555'),
('117 Cottonwood Ct, Laketown', 'lucas.t@example.com', 'Lucas Turner', 'lucasTurn', '889-666-6666'),
('118 Sycamore Ln, Hilltop', 'grace.s@example.com', 'Grace Scott', 'graceful', '889-777-7777'),
('119 Magnolia Pl, Brookside', 'ethan.h@example.com', 'Ethan Hill', 'hill2025', '889-888-8888'),
('120 Fir St, Woodland', 'ruby.w@example.com', 'Ruby Ward', 'rubypass', '889-999-9999'),
('121 Beech Way, Lakeside', 'jack.b@example.com', 'Jack Baker', 'bakerjack', '889-000-0000'),
('122 Alder Ave, Pinehill', 'mia.h@example.com', 'Mia Hall', 'hallMia', '890-111-1111'),
('123 Hawthorn Blvd, Meadowbrook', 'owen.t@example.com', 'Owen Thomas', 'owen123', '890-222-2222'),
('124 Dogwood Dr, Summit', 'ivy.j@example.com', 'Ivy Jackson', 'ivyIvy', '890-333-3333'),
('125 Juniper Ct, Greenwood', 'leo.m@example.com', 'Leo Martin', 'leopass', '890-444-4444'),
('126 Olive Rd, Ashville', 'ella.moore@example.com', 'Ella Moore', 'ellamoore', '890-555-5555');



INSERT INTO appointment (appointment_time, status, doctor_id, patient_id) VALUES
('2025-05-01 09:00:00.000000', 0, 1, 1),
('2025-05-02 10:00:00.000000', 0, 1, 2),
('2025-05-03 11:00:00.000000', 0, 1, 3),
('2025-05-04 14:00:00.000000', 0, 1, 4),
('2025-05-05 15:00:00.000000', 0, 1, 5),
('2025-05-06 13:00:00.000000', 0, 1, 6),
('2025-05-07 09:00:00.000000', 0, 1, 7),
('2025-05-08 16:00:00.000000', 0, 1, 8),
('2025-05-09 11:00:00.000000', 0, 1, 9),
('2025-05-10 10:00:00.000000', 0, 1, 10),
('2025-05-11 12:00:00.000000', 0, 1, 11),
('2025-05-12 15:00:00.000000', 0, 1, 12),
('2025-05-13 13:00:00.000000', 0, 1, 13),
('2025-05-14 10:00:00.000000', 0, 1, 14),
('2025-05-15 11:00:00.000000', 0, 1, 15),
('2025-05-16 14:00:00.000000', 0, 1, 16),
('2025-05-17 09:00:00.000000', 0, 1, 17),
('2025-05-18 12:00:00.000000', 0, 1, 18),
('2025-05-19 13:00:00.000000', 0, 1, 19),
('2025-05-20 16:00:00.000000', 0, 1, 20),
('2025-05-21 14:00:00.000000', 0, 1, 21),
('2025-05-22 10:00:00.000000', 0, 1, 22),
('2025-05-23 11:00:00.000000', 0, 1, 23),
('2025-05-24 15:00:00.000000', 0, 1, 24),
('2025-05-25 09:00:00.000000', 0, 1, 25),
('2025-05-01 10:00:00.000000', 0, 2, 1),
('2025-05-02 11:00:00.000000', 0, 3, 2),
('2025-05-03 14:00:00.000000', 0, 4, 3),
('2025-05-04 15:00:00.000000', 0, 5, 4),
('2025-05-05 10:00:00.000000', 0, 6, 5),
('2025-05-06 11:00:00.000000', 0, 7, 6),
('2025-05-07 14:00:00.000000', 0, 8, 7),
('2025-05-08 15:00:00.000000', 0, 9, 8),
('2025-05-09 10:00:00.000000', 0, 10, 9),
('2025-05-10 14:00:00.000000', 0, 11, 10),
('2025-05-11 13:00:00.000000', 0, 12, 11),
('2025-05-12 14:00:00.000000', 0, 13, 12),
('2025-05-13 15:00:00.000000', 0, 14, 13),
('2025-05-14 10:00:00.000000', 0, 15, 14),
('2025-05-15 11:00:00.000000', 0, 16, 15),
('2025-05-16 14:00:00.000000', 0, 17, 16),
('2025-05-17 10:00:00.000000', 0, 18, 17),
('2025-05-18 13:00:00.000000', 0, 19, 18),
('2025-05-19 14:00:00.000000', 0, 20, 19),
('2025-05-20 11:00:00.000000', 0, 21, 20),
('2025-05-21 13:00:00.000000', 0, 22, 21),
('2025-05-22 14:00:00.000000', 0, 23, 22),
('2025-05-23 10:00:00.000000', 0, 24, 23),
('2025-05-24 15:00:00.000000', 0, 25, 24),
('2025-05-25 13:00:00.000000', 0, 25, 25),
('2025-04-01 10:00:00.000000', 1, 1, 2),
('2025-04-02 11:00:00.000000', 1, 2, 3),
('2025-04-03 14:00:00.000000', 1, 3, 4),
('2025-04-04 15:00:00.000000', 1, 4, 5),
('2025-04-05 10:00:00.000000', 1, 5, 6),
('2025-04-06 11:00:00.000000', 1, 6, 7),
('2025-04-07 14:00:00.000000', 1, 7, 8),
('2025-04-08 15:00:00.000000', 1, 8, 9),
('2025-04-09 10:00:00.000000', 1, 9, 10),
('2025-04-10 14:00:00.000000', 1, 10, 11),
('2025-04-11 13:00:00.000000', 1, 11, 12),
('2025-04-12 14:00:00.000000', 1, 12, 13),
('2025-04-13 15:00:00.000000', 1, 13, 14),
('2025-04-14 10:00:00.000000', 1, 14, 15),
('2025-04-15 11:00:00.000000', 1, 15, 16),
('2025-04-16 14:00:00.000000', 1, 16, 17),
('2025-04-17 10:00:00.000000', 1, 17, 18),
('2025-04-18 13:00:00.000000', 1, 18, 19),
('2025-04-19 14:00:00.000000', 1, 19, 20),
('2025-04-20 11:00:00.000000', 1, 20, 21),
('2025-04-21 13:00:00.000000', 1, 21, 22),
('2025-04-22 14:00:00.000000', 1, 22, 23),
('2025-04-23 10:00:00.000000', 1, 23, 24),
('2025-04-24 15:00:00.000000', 1, 24, 25),
('2025-04-25 13:00:00.000000', 1, 25, 25),
('2025-04-01 09:00:00.000000', 1, 1, 1),
('2025-04-02 10:00:00.000000', 1, 1, 2),
('2025-04-03 11:00:00.000000', 1, 1, 3),
('2025-04-04 14:00:00.000000', 1, 1, 4),
('2025-04-05 10:00:00.000000', 1, 1, 5),
('2025-04-10 10:00:00.000000', 1, 1, 6),
('2025-04-11 09:00:00.000000', 1, 1, 7),
('2025-04-14 13:00:00.000000', 1, 1, 8),
('2025-04-01 10:00:00.000000', 1, 2, 1),
('2025-04-01 11:00:00.000000', 1, 2, 2),
('2025-04-02 09:00:00.000000', 1, 2, 3),
('2025-04-02 10:00:00.000000', 1, 2, 4),
('2025-04-03 11:00:00.000000', 1, 2, 5),
('2025-04-03 12:00:00.000000', 1, 2, 6),
('2025-04-04 14:00:00.000000', 1, 2, 7),
('2025-04-04 15:00:00.000000', 1, 2, 8),
('2025-04-05 10:00:00.000000', 1, 2, 9),
('2025-04-05 11:00:00.000000', 1, 2, 10),
('2025-04-06 13:00:00.000000', 1, 2, 11),
('2025-04-06 14:00:00.000000', 1, 2, 12),
('2025-04-07 09:00:00.000000', 1, 2, 13),
('2025-04-07 10:00:00.000000', 1, 2, 14),
('2025-04-08 11:00:00.000000', 1, 2, 15),
('2025-04-08 12:00:00.000000', 1, 2, 16),
('2025-04-09 13:00:00.000000', 1, 2, 17),
('2025-04-09 14:00:00.000000', 1, 2, 18),
('2025-04-10 11:00:00.000000', 1, 2, 19),
('2025-04-10 12:00:00.000000', 1, 2, 20),
('2025-04-11 14:00:00.000000', 1, 2, 21),
('2025-04-11 15:00:00.000000', 1, 2, 22),
('2025-04-12 10:00:00.000000', 1, 2, 23),
('2025-04-12 11:00:00.000000', 1, 2, 24),
('2025-04-13 13:00:00.000000', 1, 2, 25),
('2025-04-13 14:00:00.000000', 1, 2, 1),
('2025-04-14 09:00:00.000000', 1, 2, 2),
('2025-04-14 10:00:00.000000', 1, 2, 3),
('2025-04-15 12:00:00.000000', 1, 2, 4),
('2025-04-15 13:00:00.000000', 1, 2, 5),
('2025-04-01 12:00:00.000000', 1, 3, 1),
('2025-04-02 11:00:00.000000', 1, 3, 2),
('2025-04-03 13:00:00.000000', 1, 3, 3),
('2025-04-04 15:00:00.000000', 1, 3, 4),
('2025-04-05 12:00:00.000000', 1, 3, 5),
('2025-04-08 13:00:00.000000', 1, 3, 6),
('2025-04-09 10:00:00.000000', 1, 3, 7),
('2025-04-10 14:00:00.000000', 1, 3, 8),
('2025-04-11 13:00:00.000000', 1, 3, 9),
('2025-04-12 09:00:00.000000', 1, 3, 10),
('2025-04-01 14:00:00.000000', 1, 4, 1),
('2025-04-02 12:00:00.000000', 1, 4, 2),
('2025-04-03 14:00:00.000000', 1, 4, 3),
('2025-04-04 16:00:00.000000', 1, 4, 4),
('2025-04-05 14:00:00.000000', 1, 4, 5),
('2025-04-09 11:00:00.000000', 1, 4, 6),
('2025-04-10 13:00:00.000000', 1, 4, 7);



INSERT INTO admins (username, password)
VALUES ('admin', 'admin@1234');



use prescriptions;

db.prescriptions.insertMany([
{
"_id": ObjectId("6807dd712725f013281e7201"),
"patientName": "John Smith",
"appointmentId": 51,
"medication": "Paracetamol",
"dosage": "500mg",
"doctorNotes": "Take 1 tablet every 6 hours.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7202"),
"patientName": "Emily Rose",
"appointmentId": 52,
"medication": "Aspirin",
"dosage": "300mg",
"doctorNotes": "Take 1 tablet after meals.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7203"),
"patientName": "Michael Jordan",
"appointmentId": 53,
"medication": "Ibuprofen",
"dosage": "400mg",
"doctorNotes": "Take 1 tablet every 8 hours.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7204"),
"patientName": "Olivia Moon",
"appointmentId": 54,
"medication": "Antihistamine",
"dosage": "10mg",
"doctorNotes": "Take 1 tablet daily before bed.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7205"),
"patientName": "Liam King",
"appointmentId": 55,
"medication": "Vitamin C",
"dosage": "1000mg",
"doctorNotes": "Take 1 tablet daily.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7206"),
"patientName": "Sophia Lane",
"appointmentId": 56,
"medication": "Antibiotics",
"dosage": "500mg",
"doctorNotes": "Take 1 tablet every 12 hours.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7207"),
"patientName": "Noah Brooks",
"appointmentId": 57,
"medication": "Paracetamol",
"dosage": "500mg",
"doctorNotes": "Take 1 tablet every 6 hours.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7208"),
"patientName": "Ava Daniels",
"appointmentId": 58,
"medication": "Ibuprofen",
"dosage": "200mg",
"doctorNotes": "Take 1 tablet every 8 hours.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7209"),
"patientName": "William Harris",
"appointmentId": 59,
"medication": "Aspirin",
"dosage": "300mg",
"doctorNotes": "Take 1 tablet after meals.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7210"),
"patientName": "Mia Green",
"appointmentId": 60,
"medication": "Vitamin D",
"dosage": "1000 IU",
"doctorNotes": "Take 1 tablet daily with food.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7211"),
"patientName": "James Brown",
"appointmentId": 61,
"medication": "Antihistamine",
"dosage": "10mg",
"doctorNotes": "Take 1 tablet every morning.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7212"),
"patientName": "Amelia Clark",
"appointmentId": 62,
"medication": "Paracetamol",
"dosage": "500mg",
"doctorNotes": "Take 1 tablet every 6 hours.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7213"),
"patientName": "Ben Johnson",
"appointmentId": 63,
"medication": "Ibuprofen",
"dosage": "400mg",
"doctorNotes": "Take 1 tablet every 8 hours.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7214"),
"patientName": "Ella Monroe",
"appointmentId": 64,
"medication": "Vitamin C",
"dosage": "1000mg",
"doctorNotes": "Take 1 tablet daily.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7215"),
"patientName": "Lucas Turner",
"appointmentId": 65,
"medication": "Aspirin",
"dosage": "300mg",
"doctorNotes": "Take 1 tablet after meals.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7216"),
"patientName": "Grace Scott",
"appointmentId": 66,
"medication": "Paracetamol",
"dosage": "500mg",
"doctorNotes": "Take 1 tablet every 6 hours.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7217"),
"patientName": "Ethan Hill",
"appointmentId": 67,
"medication": "Ibuprofen",
"dosage": "400mg",
"doctorNotes": "Take 1 tablet every 8 hours.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7218"),
"patientName": "Ruby Ward",
"appointmentId": 68,
"medication": "Vitamin D",
"dosage": "1000 IU",
"doctorNotes": "Take 1 tablet daily with food.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7219"),
"patientName": "Jack Baker",
"appointmentId": 69,
"medication": "Antibiotics",
"dosage": "500mg",
"doctorNotes": "Take 1 tablet every 12 hours.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7220"),
"patientName": "Mia Hall",
"appointmentId": 70,
"medication": "Paracetamol",
"dosage": "500mg",
"doctorNotes": "Take 1 tablet every 6 hours.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7221"),
"patientName": "Owen Thomas",
"appointmentId": 71,
"medication": "Ibuprofen",
"dosage": "200mg",
"doctorNotes": "Take 1 tablet every 8 hours.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7222"),
"patientName": "Ivy Jackson",
"appointmentId": 72,
"medication": "Antihistamine",
"dosage": "10mg",
"doctorNotes": "Take 1 tablet every morning.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7223"),
"patientName": "Leo Martin",
"appointmentId": 73,
"medication": "Vitamin C",
"dosage": "1000mg",
"doctorNotes": "Take 1 tablet daily.",
"_class": "com.project.back_end.models.Prescription"
},
{
"_id": ObjectId("6807dd712725f013281e7224"),
"patientName": "Ella Moore",
"appointmentId": 74,
"medication": "Aspirin",
"dosage": "300mg",
"doctorNotes": "Take 1 tablet after meals.",
"_class": "com.project.back_end.models.Prescription"
}
]);

ALTER TABLE doctors RENAME TO doctor;
ALTER TABLE patients RENAME TO patient;
SELECT * FROM doctor LIMIT 5;
mysql> SELECT * FROM doctor LIMIT 5;
+----+------------------------+------------------+------------+--------------+---------------+
| id | email                  | name             | password   | phone        | specialty     |
+----+------------------------+------------------+------------+--------------+---------------+
|  1 | dr.adams@example.com   | Dr. Emily Adams  | pass12345  | 555-101-2020 | Cardiologist  |
|  2 | dr.johnson@example.com | Dr. Mark Johnson | secure4567 | 555-202-3030 | Neurologist   |
|  3 | dr.lee@example.com     | Dr. Sarah Lee    | leePass987 | 555-303-4040 | Orthopedist   |
|  4 | dr.wilson@example.com  | Dr. Tom Wilson   | w!ls0nPwd  | 555-404-5050 | Pediatrician  |
|  5 | dr.brown@example.com   | Dr. Alice Brown  | brownie123 | 555-505-6060 | Dermatologist |
+----+------------------------+------------------+------------+--------------+---------------+
5 rows in set (0.00 sec)

SELECT * FROM doctor_available_time LIMIT 5;
mysql> SELECT * FROM doctor_available_time LIMIT 5;
+-----------+-------------+
| doctor_id | time_slot   |
+-----------+-------------+
|         1 | 09:00-10:00 |
|         1 | 10:00-11:00 |
|         1 | 11:00-12:00 |
|         1 | 14:00-15:00 |
|         2 | 10:00-11:00 |
+-----------+-------------+
5 rows in set (0.01 sec)

SELECT * FROM patient LIMIT 5;
mysql> SELECT * FROM patient LIMIT 5;
+----+-----------------------------+------------------------+----------------+-------------+--------------+
| id | address                     | email                  | name           | password    | phone        |
+----+-----------------------------+------------------------+----------------+-------------+--------------+
|  1 | 101 Oak St, Cityville       | jane.doe@example.com   | Jane Doe       | passJane1   | 888-111-1111 |
|  2 | 202 Maple Rd, Townsville    | john.smith@example.com | John Smith     | smithSecure | 888-222-2222 |
|  3 | 303 Pine Ave, Villageton    | emily.rose@example.com | Emily Rose     | emilyPass99 | 888-333-3333 |
|  4 | 404 Birch Ln, Metropolis    | michael.j@example.com  | Michael Jordan | airmj23     | 888-444-4444 |
|  5 | 505 Cedar Blvd, Springfield | olivia.m@example.com   | Olivia Moon    | moonshine12 | 888-555-5555 |
+----+-----------------------------+------------------------+----------------+-------------+--------------+
5 rows in set (0.00 sec)

SELECT * FROM appointment ORDER BY appointment_time LIMIT 5;
mysql> SELECT * FROM appointment ORDER BY appointment_time LIMIT 5;
+-----+----------------------------+--------+-----------+------------+
| id  | appointment_time           | status | doctor_id | patient_id |
+-----+----------------------------+--------+-----------+------------+
|  76 | 2025-04-01 09:00:00.000000 |      1 |         1 |          1 |
|  51 | 2025-04-01 10:00:00.000000 |      1 |         1 |          2 |
|  84 | 2025-04-01 10:00:00.000000 |      1 |         2 |          1 |
|  85 | 2025-04-01 11:00:00.000000 |      1 |         2 |          2 |
| 114 | 2025-04-01 12:00:00.000000 |      1 |         3 |          1 |
+-----+----------------------------+--------+-----------+------------+
5 rows in set (0.00 sec)


SELECT * FROM admin;
mysql> SELECT * FROM admin;
+----+------------+----------+
| id | password   | username |
+----+------------+----------+
|  1 | admin@1234 | admin    |
+----+------------+----------+
1 row in set (0.00 sec)

use prescriptions;
db.prescriptions.find().limit(5).pretty();
prescriptions> db.prescriptions.find().limit(5).pretty();
[
{
_id: ObjectId('6807dd712725f013281e7201'),
patientName: 'John Smith',
appointmentId: 51,
medication: 'Paracetamol',
dosage: '500mg',
doctorNotes: 'Take 1 tablet every 6 hours.',
_class: 'com.project.back_end.models.Prescription'
},
{
_id: ObjectId('6807dd712725f013281e7202'),
patientName: 'Emily Rose',
appointmentId: 52,
medication: 'Aspirin',
dosage: '300mg',
doctorNotes: 'Take 1 tablet after meals.',
_class: 'com.project.back_end.models.Prescription'
},
{
_id: ObjectId('6807dd712725f013281e7203'),
patientName: 'Michael Jordan',
appointmentId: 53,
medication: 'Ibuprofen',
dosage: '400mg',
doctorNotes: 'Take 1 tablet every 8 hours.',
_class: 'com.project.back_end.models.Prescription'
},
{
_id: ObjectId('6807dd712725f013281e7204'),
patientName: 'Olivia Moon',
appointmentId: 54,
medication: 'Antihistamine',
dosage: '10mg',
doctorNotes: 'Take 1 tablet daily before bed.',
_class: 'com.project.back_end.models.Prescription'
},
{
_id: ObjectId('6807dd712725f013281e7205'),
patientName: 'Liam King',
appointmentId: 55,
medication: 'Vitamin C',
dosage: '1000mg',
doctorNotes: 'Take 1 tablet daily.',
_class: 'com.project.back_end.models.Prescription'
}
]





DELIMITER $$

CREATE PROCEDURE GetDailyAppointmentReportByDoctor(
IN report_date DATE
)
BEGIN
SELECT
d.name AS doctor_name,
a.appointment_time,
a.status,
p.name AS patient_name,
p.phone AS patient_phone
FROM
appointment a
JOIN
doctor d ON a.doctor_id = d.id
JOIN
patient p ON a.patient_id = p.id
WHERE
DATE(a.appointment_time) = report_date
ORDER BY
d.name, a.appointment_time;
END$$

DELIMITER ;

mysql> CALL GetDailyAppointmentReportByDoctor('2025-04-15');
+------------------+----------------------------+--------+----------------+---------------+
| doctor_name      | appointment_time           | status | patient_name   | patient_phone |
+------------------+----------------------------+--------+----------------+---------------+
| Dr. Ava Hall     | 2025-04-15 11:00:00.000000 |      1 | Lucas Turner   | 889-666-6666  |
| Dr. Mark Johnson | 2025-04-15 12:00:00.000000 |      1 | Michael Jordan | 888-444-4444  |
| Dr. Mark Johnson | 2025-04-15 13:00:00.000000 |      1 | Olivia Moon    | 888-555-5555  |
+------------------+----------------------------+--------+----------------+---------------+
3 rows in set (0.00 sec)

Query OK, 0 rows affected (0.00 sec)

================
DELIMITER $$

CREATE PROCEDURE GetDoctorWithMostPatientsByMonth(
IN input_month INT,
IN input_year INT
)
BEGIN
SELECT
doctor_id,
COUNT(patient_id) AS patients_seen
FROM
appointment
WHERE
MONTH(appointment_time) = input_month
AND YEAR(appointment_time) = input_year
GROUP BY
doctor_id
ORDER BY
patients_seen DESC
LIMIT 1;
END $$

DELIMITER ;

mysql> CALL GetDoctorWithMostPatientsByMonth(4, 2025);
+-----------+---------------+
| doctor_id | patients_seen |
+-----------+---------------+
|         2 |            31 |
+-----------+---------------+
1 row in set (0.00 sec)

Query OK, 0 rows affected (0.00 sec)
======================================
DELIMITER $$

CREATE PROCEDURE GetDoctorWithMostPatientsByYear(
IN input_year INT
)
BEGIN
SELECT
doctor_id,
COUNT(patient_id) AS patients_seen
FROM
appointment
WHERE
YEAR(appointment_time) = input_year
GROUP BY
doctor_id
ORDER BY
patients_seen DESC
LIMIT 1;
END $$

DELIMITER ;

mysql> CALL GetDoctorWithMostPatientsByYear(2025);
+-----------+---------------+
| doctor_id | patients_seen |
+-----------+---------------+
|         1 |            34 |
+-----------+---------------+
1 row in set (0.00 sec)

Query OK, 0 rows affected (0.00 sec)
