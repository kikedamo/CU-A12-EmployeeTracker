INSERT INTO department(id, name)
    VALUES
    (1, Music Distribution),
    (2, Recording Studios),
    (3, Artist Development),
    (4, Marketing),
    (5, Merchandising),
    (6, A&R Development),
    (7, Legal),
    (8, Manufacturing),

INSERT INTO role(id, title, salary, department_id)
    VALUES
    (1, Music Distributor, 100000, 1),
    (2, Producer, 300000, 1),
    (3, Artist Developer, 150000, 3),
    (4, Marketer, 100000, 4)
    (5, Merchandiser, 90000, 5),
    (6, A&R, 100000, 6),
    (7, Legal Advisor, 150000, 7),
    (8, Manufacturer, 90000, 8);





INSERT INTO employee(id, First_Name, Last_Name, Role_id, Manager_id)
    VALUES
    (1, Almyr, Jules, 100000, 1, NULL),
    (2, Davis Cedrick, Baseka, 300000, 2, 1),
    (3, Noah, Matthews 150000, 3,NULL),
    (4, Dominic, Forget, 100000, 4, NULL)
    (5, Robert, Fournier, 90000, 5, 4),
    (6, Jayce, Kerry, 100000, 6, NULL),
    (7, Lucas, Edwards, 150000, 7, NULL),
    (8, Melissa, Roberts, 90000, 8, 4);
