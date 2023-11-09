# SQL Server (Express)

## Iniciar contenedor

```sh
docker run -d --network la-red-xd -p 1433:1433 --name sqlserver -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=123456789Abc' -e 'MSSQL_PID=Express' mcr.microsoft.com/mssql/server:2019-latest
```

## Conectarse a la base de datos desde azure data studio

- Usuario: `sa`
- contraseña: `123456789Abc`
- servidor: `localhost, 1433`

### Crear base de datos

```sql
CREATE DATABASE MiBaseDeDatos;
```

## Crear tabla

```sql
CREATE TABLE Alumnos (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(50),
    Edad INT
);
```

## Insertar datos

```sql
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

```
