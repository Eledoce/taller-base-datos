docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname

# SQL Server (Express)

## Iniciar contenedor

```sh
docker run  -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=123456789Abc" -e "MSSQL_PID=Express" -p 1433:1433 -d --name sql-server mcr.microsoft.com/mssql/server:2019-latest
```

## Conectarse a la base de datos desde azure data studio

- seleccionar nueva conexión
- conection type: `Microsoft SQL Server`
- input type: `parameters`
- server: `localhost, 1433`
- autentication type: `SQL Login`
- username: `sa`
- password: `123456789Abc`

Si marca un error dar clic en `Enable Trust Server Certificate`

### Crear base de datos

Seleccionar new query y ejecutar el siguiente comando

```sql
CREATE DATABASE MiBaseDeDatos;
```

## Crear tabla

seleccionar `MiBaseDeDatos`, new query, ejecutar el siguiente comando

```sql
CREATE TABLE Alumnos (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(50),
    Edad INT
);
```

## Insertar datos

_**NOTA: Antes de ejecutarlo agregar un registro con sus datos**_

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
