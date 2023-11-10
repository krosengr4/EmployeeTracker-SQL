-- ! seeds.sql file fills db with data of employees who already exist.

-- ! ******* BROOKLYN 99 THEME *******

INSERT INTO department (department_name)
VALUES
('Police Force'),
('Office Employees'),
('Entertainment hires');

INSERT INTO job (title, salary, department_id)
VALUES
('Police Captain', 120,000, 1),
('Sargent', 80000, 1),
('Detective', 52000, 1),
('Captains Assistant', 30000, 2),
('Comedic Relief', 18000, 3);

INSERT INTO employee (first_name, last_name, job_id)
VALUES
('Jake', 'Peralta', 03),
('Charles', 'Boyle', 03),
('Amy', 'Santiago', 03),
('Rosa', 'Diaz', 03),
('Terry', 'Jeffords', 02),
('Gina', 'Linetti', 04),
('Michael', 'Hitchcock', 05),
('Norm', 'Scully', 05),
('Raymond', 'Holt', 01);





-- DETECTIVES: Jake Peralta, Charles Boyle, Amy Santiago, Rosa Diaz
-- OTHERS: Terry Jeffords, Gina Linetti, Michael Hitchcock, Norm Scully
-- CAPTAIN: Raymond Holt
