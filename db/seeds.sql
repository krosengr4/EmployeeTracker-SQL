INSERT INTO department (department_name)
VALUES
('Police Force'),
('Supervisors'),
('Office Employees'),
('Criminals');

INSERT INTO job (title, salary, department_id)
VALUES
('Comissioner', 175000, 02),
('Police Captain', 120000, 02),
('Sargent', 80000, 01),
('Detective', 52000, 01),
('Lower Detective', 31000, 03),
('Captains Assistant', 30000, 03),
('Criminals', 00000, 04);

INSERT INTO employee (first_name, last_name, job_id, arrests_made)
VALUES
('Jake', 'Peralta', 04, 6489),
('Charles', 'Boyle', 04, 4581),
('Amy', 'Santiago', 04, 7198),
('Rosa', 'Diaz', 04, 3541),
('Terry', 'Jeffords', 03, 10523),
('Gina', 'Linetti', 06, NULL),
('Michael', 'Hitchcock', 05, 4468),
('Norm', 'Scully', 05, 22845),
('Doug', 'Judy', 07, NULL),
('Debbie', 'Fogle', 07, NULL),
('Raymond', 'Holt', 02, 13675), 
('Madeline ', 'Wuntch', 01, 15897);