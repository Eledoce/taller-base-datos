-- Crea la base de datos
CREATE DATABASE MiBaseDeDatos;

-- Utiliza la base de datos
USE MiBaseDeDatos;

-- Crea la tabla Alumnos
CREATE TABLE Alumnos (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(50),
    Edad INT
);

-- Inserta 10 registros de ejemplo
INSERT INTO Alumnos (Nombre, Edad) VALUES ('Juan', 18);
INSERT INTO Alumnos (Nombre, Edad) VALUES ('María', 20);
INSERT INTO Alumnos (Nombre, Edad) VALUES ('Luis', 19);
INSERT INTO Alumnos (Nombre, Edad) VALUES ('Ana', 21);
INSERT INTO Alumnos (Nombre, Edad) VALUES ('Carlos', 22);
INSERT INTO Alumnos (Nombre, Edad) VALUES ('Laura', 20);
INSERT INTO Alumnos (Nombre, Edad) VALUES ('Pedro', 19);
INSERT INTO Alumnos (Nombre, Edad) VALUES ('Sofía', 18);
INSERT INTO Alumnos (Nombre, Edad) VALUES ('Miguel', 21);
INSERT INTO Alumnos (Nombre, Edad) VALUES ('Isabel', 22);
